// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  DeleteProvisioningTemplateVersionRequest,
  DeleteProvisioningTemplateVersionResponse,
} from "../models/models_1";
import {
  de_DeleteProvisioningTemplateVersionCommand,
  se_DeleteProvisioningTemplateVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProvisioningTemplateVersionCommand}.
 */
export interface DeleteProvisioningTemplateVersionCommandInput extends DeleteProvisioningTemplateVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProvisioningTemplateVersionCommand}.
 */
export interface DeleteProvisioningTemplateVersionCommandOutput
  extends DeleteProvisioningTemplateVersionResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a provisioning template version.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteProvisioningTemplateVersion</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteProvisioningTemplateVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteProvisioningTemplateVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DeleteProvisioningTemplateVersionRequest
 *   templateName: "STRING_VALUE", // required
 *   versionId: Number("int"), // required
 * };
 * const command = new DeleteProvisioningTemplateVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProvisioningTemplateVersionCommandInput - {@link DeleteProvisioningTemplateVersionCommandInput}
 * @returns {@link DeleteProvisioningTemplateVersionCommandOutput}
 * @see {@link DeleteProvisioningTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisioningTemplateVersionCommandOutput} for command's `response` shape.
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
export class DeleteProvisioningTemplateVersionCommand extends $Command
  .classBuilder<
    DeleteProvisioningTemplateVersionCommandInput,
    DeleteProvisioningTemplateVersionCommandOutput,
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
  .s("AWSIotService", "DeleteProvisioningTemplateVersion", {})
  .n("IoTClient", "DeleteProvisioningTemplateVersionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteProvisioningTemplateVersionCommand)
  .de(de_DeleteProvisioningTemplateVersionCommand)
  .build() {}
