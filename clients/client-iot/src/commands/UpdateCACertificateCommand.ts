// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateCACertificateRequest } from "../models/models_2";
import { de_UpdateCACertificateCommand, se_UpdateCACertificateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCACertificateCommand}.
 */
export interface UpdateCACertificateCommandInput extends UpdateCACertificateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCACertificateCommand}.
 */
export interface UpdateCACertificateCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates a registered CA certificate.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateCACertificate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateCACertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateCACertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateCACertificateRequest
 *   certificateId: "STRING_VALUE", // required
 *   newStatus: "ACTIVE" || "INACTIVE",
 *   newAutoRegistrationStatus: "ENABLE" || "DISABLE",
 *   registrationConfig: { // RegistrationConfig
 *     templateBody: "STRING_VALUE",
 *     roleArn: "STRING_VALUE",
 *     templateName: "STRING_VALUE",
 *   },
 *   removeAutoRegistration: true || false,
 * };
 * const command = new UpdateCACertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCACertificateCommandInput - {@link UpdateCACertificateCommandInput}
 * @returns {@link UpdateCACertificateCommandOutput}
 * @see {@link UpdateCACertificateCommandInput} for command's `input` shape.
 * @see {@link UpdateCACertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class UpdateCACertificateCommand extends $Command
  .classBuilder<
    UpdateCACertificateCommandInput,
    UpdateCACertificateCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "UpdateCACertificate", {})
  .n("IoTClient", "UpdateCACertificateCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCACertificateCommand)
  .de(de_UpdateCACertificateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCACertificateRequest;
      output: {};
    };
    sdk: {
      input: UpdateCACertificateCommandInput;
      output: UpdateCACertificateCommandOutput;
    };
  };
}
