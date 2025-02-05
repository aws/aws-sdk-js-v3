// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GenerateChangeSetRequest, GenerateChangeSetResponse } from "../models/models_0";
import { de_GenerateChangeSetCommand, se_GenerateChangeSetCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GenerateChangeSetCommand}.
 */
export interface GenerateChangeSetCommandInput extends GenerateChangeSetRequest {}
/**
 * @public
 *
 * The output of {@link GenerateChangeSetCommand}.
 */
export interface GenerateChangeSetCommandOutput extends GenerateChangeSetResponse, __MetadataBearer {}

/**
 * <p>Generates a target change set for a currently launched stack and writes it to an Amazon S3
 *             object in the customer’s Amazon S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GenerateChangeSetCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GenerateChangeSetCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SMSClient(config);
 * const input = { // GenerateChangeSetRequest
 *   appId: "STRING_VALUE",
 *   changesetFormat: "JSON" || "YAML",
 * };
 * const command = new GenerateChangeSetCommand(input);
 * const response = await client.send(command);
 * // { // GenerateChangeSetResponse
 * //   s3Location: { // S3Location
 * //     bucket: "STRING_VALUE",
 * //     key: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GenerateChangeSetCommandInput - {@link GenerateChangeSetCommandInput}
 * @returns {@link GenerateChangeSetCommandOutput}
 * @see {@link GenerateChangeSetCommandInput} for command's `input` shape.
 * @see {@link GenerateChangeSetCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link InternalError} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A specified parameter is not valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 * @public
 */
export class GenerateChangeSetCommand extends $Command
  .classBuilder<
    GenerateChangeSetCommandInput,
    GenerateChangeSetCommandOutput,
    SMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSServerMigrationService_V2016_10_24", "GenerateChangeSet", {})
  .n("SMSClient", "GenerateChangeSetCommand")
  .f(void 0, void 0)
  .ser(se_GenerateChangeSetCommand)
  .de(de_GenerateChangeSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateChangeSetRequest;
      output: GenerateChangeSetResponse;
    };
    sdk: {
      input: GenerateChangeSetCommandInput;
      output: GenerateChangeSetCommandOutput;
    };
  };
}
