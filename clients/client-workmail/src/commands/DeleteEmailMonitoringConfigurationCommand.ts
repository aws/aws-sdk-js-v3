// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteEmailMonitoringConfigurationRequest,
  DeleteEmailMonitoringConfigurationResponse,
} from "../models/models_0";
import { DeleteEmailMonitoringConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEmailMonitoringConfigurationCommand}.
 */
export interface DeleteEmailMonitoringConfigurationCommandInput extends DeleteEmailMonitoringConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEmailMonitoringConfigurationCommand}.
 */
export interface DeleteEmailMonitoringConfigurationCommandOutput extends DeleteEmailMonitoringConfigurationResponse, __MetadataBearer {}

/**
 * Deletes the email monitoring configuration for a specified organization.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteEmailMonitoringConfigurationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteEmailMonitoringConfigurationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DeleteEmailMonitoringConfigurationRequest
 *   OrganizationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteEmailMonitoringConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEmailMonitoringConfigurationCommandInput - {@link DeleteEmailMonitoringConfigurationCommandInput}
 * @returns {@link DeleteEmailMonitoringConfigurationCommandOutput}
 * @see {@link DeleteEmailMonitoringConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteEmailMonitoringConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the input parameters don't match the service's restrictions.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * An operation received a valid organization identifier that either doesn't belong or exist in the system.
 *
 * @throws {@link OrganizationStateException} (client fault)
 *
 * The organization must have a valid state to perform certain operations on the organization or its members.
 *
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class DeleteEmailMonitoringConfigurationCommand extends command<DeleteEmailMonitoringConfigurationCommandInput, DeleteEmailMonitoringConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEmailMonitoringConfiguration",
  DeleteEmailMonitoringConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEmailMonitoringConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteEmailMonitoringConfigurationCommandInput;
      output: DeleteEmailMonitoringConfigurationCommandOutput;
    };
  };
}
