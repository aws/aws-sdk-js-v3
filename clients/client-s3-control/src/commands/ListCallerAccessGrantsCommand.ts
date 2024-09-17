// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCallerAccessGrantsRequest, ListCallerAccessGrantsResult } from "../models/models_0";
import { de_ListCallerAccessGrantsCommand, se_ListCallerAccessGrantsCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

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
 * <p>Returns a list of the access grants that were given to the caller using S3 Access Grants and that allow the caller to access the S3 data of the Amazon Web Services account specified in the request.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:ListCallerAccessGrants</code> permission to use this operation. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListCallerAccessGrantsCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListCallerAccessGrantsCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
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
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
      getApplyMd5BodyChecksumPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "ListCallerAccessGrants", {})
  .n("S3ControlClient", "ListCallerAccessGrantsCommand")
  .f(void 0, void 0)
  .ser(se_ListCallerAccessGrantsCommand)
  .de(de_ListCallerAccessGrantsCommand)
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
