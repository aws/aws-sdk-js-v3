// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteProvisioningTemplateRequest, DeleteProvisioningTemplateResponse } from "../models/models_1";
import { de_DeleteProvisioningTemplateCommand, se_DeleteProvisioningTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProvisioningTemplateCommand}.
 */
export interface DeleteProvisioningTemplateCommandInput extends DeleteProvisioningTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProvisioningTemplateCommand}.
 */
export interface DeleteProvisioningTemplateCommandOutput extends DeleteProvisioningTemplateResponse, __MetadataBearer {}

/**
 * <p>Deletes a provisioning template.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteProvisioningTemplate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteProvisioningTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteProvisioningTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DeleteProvisioningTemplateRequest
 *   templateName: "STRING_VALUE", // required
 * };
 * const command = new DeleteProvisioningTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProvisioningTemplateCommandInput - {@link DeleteProvisioningTemplateCommandInput}
 * @returns {@link DeleteProvisioningTemplateCommandOutput}
 * @see {@link DeleteProvisioningTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisioningTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictingResourceUpdateException} (client fault)
 *  <p>A conflicting resource update exception. This exception is thrown when two pending
 *          updates cause a conflict.</p>
 *
 * @throws {@link DeleteConflictException} (client fault)
 *  <p>You can't delete the resource because it is attached to one or more
 *          resources.</p>
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
export class DeleteProvisioningTemplateCommand extends $Command
  .classBuilder<
    DeleteProvisioningTemplateCommandInput,
    DeleteProvisioningTemplateCommandOutput,
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
  .s("AWSIotService", "DeleteProvisioningTemplate", {})
  .n("IoTClient", "DeleteProvisioningTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteProvisioningTemplateCommand)
  .de(de_DeleteProvisioningTemplateCommand)
  .build() {}
