// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteAvailabilityConfigurationRequest,
  DeleteAvailabilityConfigurationResponse,
} from "../models/models_0";
import { DeleteAvailabilityConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAvailabilityConfigurationCommand}.
 */
export interface DeleteAvailabilityConfigurationCommandInput extends DeleteAvailabilityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAvailabilityConfigurationCommand}.
 */
export interface DeleteAvailabilityConfigurationCommandOutput extends DeleteAvailabilityConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes the <code>AvailabilityConfiguration</code> for the given WorkMail organization and domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteAvailabilityConfigurationCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteAvailabilityConfigurationCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // DeleteAvailabilityConfigurationRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DeleteAvailabilityConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAvailabilityConfigurationCommandInput - {@link DeleteAvailabilityConfigurationCommandInput}
 * @returns {@link DeleteAvailabilityConfigurationCommandOutput}
 * @see {@link DeleteAvailabilityConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAvailabilityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class DeleteAvailabilityConfigurationCommand extends command<DeleteAvailabilityConfigurationCommandInput, DeleteAvailabilityConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAvailabilityConfiguration",
  DeleteAvailabilityConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAvailabilityConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteAvailabilityConfigurationCommandInput;
      output: DeleteAvailabilityConfigurationCommandOutput;
    };
  };
}
