// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetOpsMetadataRequest, GetOpsMetadataResult } from "../models/models_1";
import { de_GetOpsMetadataCommand, se_GetOpsMetadataCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOpsMetadataCommand}.
 */
export interface GetOpsMetadataCommandInput extends GetOpsMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetOpsMetadataCommand}.
 */
export interface GetOpsMetadataCommandOutput extends GetOpsMetadataResult, __MetadataBearer {}

/**
 * <p>View operational metadata related to an application in Application Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SSMClient(config);
 * const input = { // GetOpsMetadataRequest
 *   OpsMetadataArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetOpsMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetOpsMetadataResult
 * //   ResourceId: "STRING_VALUE",
 * //   Metadata: { // MetadataMap
 * //     "<keys>": { // MetadataValue
 * //       Value: "STRING_VALUE",
 * //     },
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOpsMetadataCommandInput - {@link GetOpsMetadataCommandInput}
 * @returns {@link GetOpsMetadataCommandOutput}
 * @see {@link GetOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link GetOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsMetadataInvalidArgumentException} (client fault)
 *  <p>One of the arguments passed is invalid. </p>
 *
 * @throws {@link OpsMetadataNotFoundException} (client fault)
 *  <p>The OpsMetadata object doesn't exist. </p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 * @public
 */
export class GetOpsMetadataCommand extends $Command
  .classBuilder<
    GetOpsMetadataCommandInput,
    GetOpsMetadataCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "GetOpsMetadata", {})
  .n("SSMClient", "GetOpsMetadataCommand")
  .f(void 0, void 0)
  .ser(se_GetOpsMetadataCommand)
  .de(de_GetOpsMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOpsMetadataRequest;
      output: GetOpsMetadataResult;
    };
    sdk: {
      input: GetOpsMetadataCommandInput;
      output: GetOpsMetadataCommandOutput;
    };
  };
}
