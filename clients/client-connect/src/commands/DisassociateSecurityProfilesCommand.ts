// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateSecurityProfilesRequest } from "../models/models_1";
import { DisassociateSecurityProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateSecurityProfilesCommand}.
 */
export interface DisassociateSecurityProfilesCommandInput extends DisassociateSecurityProfilesRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateSecurityProfilesCommand}.
 */
export interface DisassociateSecurityProfilesCommandOutput extends __MetadataBearer {}

/**
 * Disassociates a security profile attached to a Q in Connect AI Agent Entity in an Amazon Connect instance.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateSecurityProfilesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateSecurityProfilesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DisassociateSecurityProfilesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   SecurityProfiles: [ // SecurityProfiles // required
 *     { // SecurityProfileItem
 *       Id: "STRING_VALUE",
 *     },
 *   ],
 *   EntityType: "USER" || "AI_AGENT", // required
 *   EntityArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateSecurityProfilesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateSecurityProfilesCommandInput - {@link DisassociateSecurityProfilesCommandInput}
 * @returns {@link DisassociateSecurityProfilesCommandOutput}
 * @see {@link DisassociateSecurityProfilesCommandInput} for command's `input` shape.
 * @see {@link DisassociateSecurityProfilesCommandOutput} for command's `response` shape.
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
export class DisassociateSecurityProfilesCommand extends command<DisassociateSecurityProfilesCommandInput, DisassociateSecurityProfilesCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateSecurityProfiles",
  DisassociateSecurityProfiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateSecurityProfilesRequest;
      output: {};
    };
    sdk: {
      input: DisassociateSecurityProfilesCommandInput;
      output: DisassociateSecurityProfilesCommandOutput;
    };
  };
}
