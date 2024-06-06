// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteDomainConfigurationRequest, DeleteDomainConfigurationResponse } from "../models/models_1";
import { de_DeleteDomainConfigurationCommand, se_DeleteDomainConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDomainConfigurationCommand}.
 */
export interface DeleteDomainConfigurationCommandInput extends DeleteDomainConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDomainConfigurationCommand}.
 */
export interface DeleteDomainConfigurationCommandOutput extends DeleteDomainConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified domain configuration.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDomainConfiguration</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteDomainConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteDomainConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DeleteDomainConfigurationRequest
 *   domainConfigurationName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDomainConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDomainConfigurationCommandInput - {@link DeleteDomainConfigurationCommandInput}
 * @returns {@link DeleteDomainConfigurationCommandOutput}
 * @see {@link DeleteDomainConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainConfigurationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteDomainConfigurationCommand extends $Command
  .classBuilder<
    DeleteDomainConfigurationCommandInput,
    DeleteDomainConfigurationCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "DeleteDomainConfiguration", {})
  .n("IoTClient", "DeleteDomainConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDomainConfigurationCommand)
  .de(de_DeleteDomainConfigurationCommand)
  .build() {}
