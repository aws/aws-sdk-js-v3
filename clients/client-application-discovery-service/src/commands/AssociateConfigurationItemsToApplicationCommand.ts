// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AssociateConfigurationItemsToApplicationRequest,
  AssociateConfigurationItemsToApplicationResponse,
} from "../models/models_0";
import { AssociateConfigurationItemsToApplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateConfigurationItemsToApplicationCommand}.
 */
export interface AssociateConfigurationItemsToApplicationCommandInput extends AssociateConfigurationItemsToApplicationRequest {}
/**
 * @public
 *
 * The output of {@link AssociateConfigurationItemsToApplicationCommand}.
 */
export interface AssociateConfigurationItemsToApplicationCommandOutput extends AssociateConfigurationItemsToApplicationResponse, __MetadataBearer {}

/**
 * Associates one or more configuration items with an application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, AssociateConfigurationItemsToApplicationCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, AssociateConfigurationItemsToApplicationCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * // import type { ApplicationDiscoveryServiceClientConfig } from "@aws-sdk/client-application-discovery-service";
 * const config = {}; // type is ApplicationDiscoveryServiceClientConfig
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // AssociateConfigurationItemsToApplicationRequest
 *   applicationConfigurationId: "STRING_VALUE", // required
 *   configurationIds: [ // ConfigurationIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AssociateConfigurationItemsToApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateConfigurationItemsToApplicationCommandInput - {@link AssociateConfigurationItemsToApplicationCommandInput}
 * @returns {@link AssociateConfigurationItemsToApplicationCommandOutput}
 * @see {@link AssociateConfigurationItemsToApplicationCommandInput} for command's `input` shape.
 * @see {@link AssociateConfigurationItemsToApplicationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *
 * The user does not have permission to perform the action. Check the IAM policy associated with this user.
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *
 * The home Region is not set. Set the home Region to continue.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid. Verify the parameters and try again.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 *
 * Base exception class for all service exceptions from ApplicationDiscoveryService service.
 *
 * @public
 */
export class AssociateConfigurationItemsToApplicationCommand extends command<AssociateConfigurationItemsToApplicationCommandInput, AssociateConfigurationItemsToApplicationCommandOutput>(
  _ep0,
  _mw0,
  "AssociateConfigurationItemsToApplication",
  AssociateConfigurationItemsToApplication$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateConfigurationItemsToApplicationRequest;
      output: {};
    };
    sdk: {
      input: AssociateConfigurationItemsToApplicationCommandInput;
      output: AssociateConfigurationItemsToApplicationCommandOutput;
    };
  };
}
