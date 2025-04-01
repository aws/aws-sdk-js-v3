// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getApplyMd5BodyChecksumPlugin } from "@smithy/middleware-apply-body-checksum";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAccessGrantsRequest, ListAccessGrantsResult } from "../models/models_0";
import { de_ListAccessGrantsCommand, se_ListAccessGrantsCommand } from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccessGrantsCommand}.
 */
export interface ListAccessGrantsCommandInput extends ListAccessGrantsRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessGrantsCommand}.
 */
export interface ListAccessGrantsCommandOutput extends ListAccessGrantsResult, __MetadataBearer {}

/**
 * <p>Returns the list of access grants in your S3 Access Grants instance.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:ListAccessGrants</code> permission to use this operation. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListAccessGrantsCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListAccessGrantsCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // ListAccessGrantsRequest
 *   AccountId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   GranteeType: "DIRECTORY_USER" || "DIRECTORY_GROUP" || "IAM",
 *   GranteeIdentifier: "STRING_VALUE",
 *   Permission: "READ" || "WRITE" || "READWRITE",
 *   GrantScope: "STRING_VALUE",
 *   ApplicationArn: "STRING_VALUE",
 * };
 * const command = new ListAccessGrantsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessGrantsResult
 * //   NextToken: "STRING_VALUE",
 * //   AccessGrantsList: [ // AccessGrantsList
 * //     { // ListAccessGrantEntry
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       AccessGrantId: "STRING_VALUE",
 * //       AccessGrantArn: "STRING_VALUE",
 * //       Grantee: { // Grantee
 * //         GranteeType: "DIRECTORY_USER" || "DIRECTORY_GROUP" || "IAM",
 * //         GranteeIdentifier: "STRING_VALUE",
 * //       },
 * //       Permission: "READ" || "WRITE" || "READWRITE",
 * //       AccessGrantsLocationId: "STRING_VALUE",
 * //       AccessGrantsLocationConfiguration: { // AccessGrantsLocationConfiguration
 * //         S3SubPrefix: "STRING_VALUE",
 * //       },
 * //       GrantScope: "STRING_VALUE",
 * //       ApplicationArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAccessGrantsCommandInput - {@link ListAccessGrantsCommandInput}
 * @returns {@link ListAccessGrantsCommandOutput}
 * @see {@link ListAccessGrantsCommandInput} for command's `input` shape.
 * @see {@link ListAccessGrantsCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class ListAccessGrantsCommand extends $Command
  .classBuilder<
    ListAccessGrantsCommandInput,
    ListAccessGrantsCommandOutput,
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
  .s("AWSS3ControlServiceV20180820", "ListAccessGrants", {})
  .n("S3ControlClient", "ListAccessGrantsCommand")
  .f(void 0, void 0)
  .ser(se_ListAccessGrantsCommand)
  .de(de_ListAccessGrantsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccessGrantsRequest;
      output: ListAccessGrantsResult;
    };
    sdk: {
      input: ListAccessGrantsCommandInput;
      output: ListAccessGrantsCommandOutput;
    };
  };
}
