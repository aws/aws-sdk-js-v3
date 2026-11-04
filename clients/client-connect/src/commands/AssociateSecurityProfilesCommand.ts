// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateSecurityProfilesRequest } from "../models/models_0";
import { AssociateSecurityProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateSecurityProfilesCommand}.
 */
export interface AssociateSecurityProfilesCommandInput extends AssociateSecurityProfilesRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSecurityProfilesCommand}.
 */
export interface AssociateSecurityProfilesCommandOutput extends __MetadataBearer {}

/**
 * Associate security profiles with an Entity in an Amazon Connect instance.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateSecurityProfilesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateSecurityProfilesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // AssociateSecurityProfilesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   SecurityProfiles: [ // SecurityProfiles // required
 *     { // SecurityProfileItem
 *       Id: "STRING_VALUE",
 *     },
 *   ],
 *   EntityType: "USER" || "AI_AGENT", // required
 *   EntityArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateSecurityProfilesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateSecurityProfilesCommandInput - {@link AssociateSecurityProfilesCommandInput}
 * @returns {@link AssociateSecurityProfilesCommandOutput}
 * @see {@link AssociateSecurityProfilesCommandInput} for command's `input` shape.
 * @see {@link AssociateSecurityProfilesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link ConditionalOperationFailedException} (client fault)
 *
 * Request processing failed because dependent condition failed.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * A resource already has that name.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class AssociateSecurityProfilesCommand extends command<AssociateSecurityProfilesCommandInput, AssociateSecurityProfilesCommandOutput>(
  _ep0,
  _mw0,
  "AssociateSecurityProfiles",
  AssociateSecurityProfiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSecurityProfilesRequest;
      output: {};
    };
    sdk: {
      input: AssociateSecurityProfilesCommandInput;
      output: AssociateSecurityProfilesCommandOutput;
    };
  };
}
