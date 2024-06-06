// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GenerateTemplateRequest, GenerateTemplateResponse } from "../models/models_0";
import { de_GenerateTemplateCommand, se_GenerateTemplateCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GenerateTemplateCommand}.
 */
export interface GenerateTemplateCommandInput extends GenerateTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GenerateTemplateCommand}.
 */
export interface GenerateTemplateCommandOutput extends GenerateTemplateResponse, __MetadataBearer {}

/**
 * <p>Generates an CloudFormation template based on the current launch configuration and writes it to
 *             an Amazon S3 object in the customer’s Amazon S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GenerateTemplateCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GenerateTemplateCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // GenerateTemplateRequest
 *   appId: "STRING_VALUE",
 *   templateFormat: "JSON" || "YAML",
 * };
 * const command = new GenerateTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GenerateTemplateResponse
 * //   s3Location: { // S3Location
 * //     bucket: "STRING_VALUE",
 * //     key: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GenerateTemplateCommandInput - {@link GenerateTemplateCommandInput}
 * @returns {@link GenerateTemplateCommandOutput}
 * @see {@link GenerateTemplateCommandInput} for command's `input` shape.
 * @see {@link GenerateTemplateCommandOutput} for command's `response` shape.
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
export class GenerateTemplateCommand extends $Command
  .classBuilder<
    GenerateTemplateCommandInput,
    GenerateTemplateCommandOutput,
    SMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSServerMigrationService_V2016_10_24", "GenerateTemplate", {})
  .n("SMSClient", "GenerateTemplateCommand")
  .f(void 0, void 0)
  .ser(se_GenerateTemplateCommand)
  .de(de_GenerateTemplateCommand)
  .build() {}
