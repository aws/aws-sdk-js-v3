// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCallerAccessGrantsRequest, ListCallerAccessGrantsResult } from "../models/models_1";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { ListCallerAccessGrants } from "../schemas/schemas_19_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCallerAccessGrantsCommand}.
 */
export interface ListCallerAccessGrantsCommandInput extends ListCallerAccessGrantsRequest {}
/**
 * @public
 *
 * The output of {@link ListCallerAccessGrantsCommand}.
 */
export interface ListCallerAccessGrantsCommandOutput extends ListCallerAccessGrantsResult, __MetadataBearer {}

/**
 * <p>Use this API to list the access grants that grant the caller access to Amazon S3 data through
 *          S3 Access Grants. The caller (grantee) can be an Identity and Access Management (IAM) identity or Amazon Web Services Identity Center
 *          corporate directory identity. You must pass the Amazon Web Services account of the S3 data owner
 *          (grantor) in the request. You can, optionally, narrow the results by
 *             <code>GrantScope</code>, using a fragment of the data's S3 path, and S3 Access Grants will return
 *          only the grants with a path that contains the path fragment. You can also pass the
 *             <code>AllowedByApplication</code> filter in the request, which returns only the grants
 *          authorized for applications, whether the application is the caller's Identity Center
 *          application or any other application (<code>ALL</code>). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-grants-list-grants.html">List
 *             the caller's access grants</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:ListCallerAccessGrants</code> permission to use this
 *                   operation. </p>
 *             </dd>
 *          </dl>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListCallerAccessGrantsCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListCallerAccessGrantsCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // ListCallerAccessGrantsRequest
 *   AccountId: "STRING_VALUE",
 *   GrantScope: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   AllowedByApplication: true || false,
 * };
 * const command = new ListCallerAccessGrantsCommand(input);
 * const response = await client.send(command);
 * // { // ListCallerAccessGrantsResult
 * //   NextToken: "STRING_VALUE",
 * //   CallerAccessGrantsList: [ // CallerAccessGrantsList
 * //     { // ListCallerAccessGrantsEntry
 * //       Permission: "READ" || "WRITE" || "READWRITE",
 * //       GrantScope: "STRING_VALUE",
 * //       ApplicationArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCallerAccessGrantsCommandInput - {@link ListCallerAccessGrantsCommandInput}
 * @returns {@link ListCallerAccessGrantsCommandOutput}
 * @see {@link ListCallerAccessGrantsCommandInput} for command's `input` shape.
 * @see {@link ListCallerAccessGrantsCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class ListCallerAccessGrantsCommand extends $Command
  .classBuilder<
    ListCallerAccessGrantsCommandInput,
    ListCallerAccessGrantsCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
      getApplyMd5BodyChecksumPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "ListCallerAccessGrants", {})
  .n("S3ControlClient", "ListCallerAccessGrantsCommand")
  .sc(ListCallerAccessGrants)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCallerAccessGrantsRequest;
      output: ListCallerAccessGrantsResult;
    };
    sdk: {
      input: ListCallerAccessGrantsCommandInput;
      output: ListCallerAccessGrantsCommandOutput;
    };
  };
}
