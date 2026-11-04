// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateProvisioningTemplateRequest, UpdateProvisioningTemplateResponse } from "../models/models_2";
import { UpdateProvisioningTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates a provisioning template.
 *
 * Requires permission to access the [UpdateProvisioningTemplate](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 *
 * A conflicting resource update exception. This exception is thrown when two pending updates cause a conflict.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class UpdateProvisioningTemplateCommand extends command<UpdateProvisioningTemplateCommandInput, UpdateProvisioningTemplateCommandOutput>(
  _ep0,
  _mw0,
  "UpdateProvisioningTemplate",
  UpdateProvisioningTemplate$
) {
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
