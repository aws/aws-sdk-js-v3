// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { UpdateProvisioningTemplateRequest, UpdateProvisioningTemplateResponse } from "../models/models_2";
import { UpdateProvisioningTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProvisioningTemplateCommand}.
 */
export interface UpdateProvisioningTemplateCommandInput extends UpdateProvisioningTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProvisioningTemplateCommand}.
 */
export interface UpdateProvisioningTemplateCommandOutput extends UpdateProvisioningTemplateResponse, __MetadataBearer {}

/**
 * <p>Updates a provisioning template.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateProvisioningTemplate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateProvisioningTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateProvisioningTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateProvisioningTemplateRequest
 *   templateName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   enabled: true || false,
 *   defaultVersionId: Number("int"),
 *   provisioningRoleArn: "STRING_VALUE",
 *   preProvisioningHook: { // ProvisioningHook
 *     payloadVersion: "STRING_VALUE",
 *     targetArn: "STRING_VALUE", // required
 *   },
 *   removePreProvisioningHook: true || false,
 * };
 * const command = new UpdateProvisioningTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateProvisioningTemplateCommandInput - {@link UpdateProvisioningTemplateCommandInput}
 * @returns {@link UpdateProvisioningTemplateCommandOutput}
 * @see {@link UpdateProvisioningTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateProvisioningTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictingResourceUpdateException} (client fault)
 *  <p>A conflicting resource update exception. This exception is thrown when two pending
 *          updates cause a conflict.</p>
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class UpdateProvisioningTemplateCommand extends $Command
  .classBuilder<
    UpdateProvisioningTemplateCommandInput,
    UpdateProvisioningTemplateCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "UpdateProvisioningTemplate", {})
  .n("IoTClient", "UpdateProvisioningTemplateCommand")
  .sc(UpdateProvisioningTemplate$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProvisioningTemplateRequest;
      output: {};
    };
    sdk: {
      input: UpdateProvisioningTemplateCommandInput;
      output: UpdateProvisioningTemplateCommandOutput;
    };
  };
}
