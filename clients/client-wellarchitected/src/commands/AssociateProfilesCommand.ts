// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateProfilesInput } from "../models/models_0";
import { AssociateProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateProfilesCommand}.
 */
export interface AssociateProfilesCommandInput extends AssociateProfilesInput {}
/**
 * @public
 *
 * The output of {@link AssociateProfilesCommand}.
 */
export interface AssociateProfilesCommandOutput extends __MetadataBearer {}

/**
 * Associate a profile with a workload.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, AssociateProfilesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, AssociateProfilesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // AssociateProfilesInput
 *   WorkloadId: "STRING_VALUE", // required
 *   ProfileArns: [ // ProfileArns // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AssociateProfilesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateProfilesCommandInput - {@link AssociateProfilesCommandInput}
 * @returns {@link AssociateProfilesCommandOutput}
 * @see {@link AssociateProfilesCommandInput} for command's `input` shape.
 * @see {@link AssociateProfilesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The resource has already been processed, was deleted, or is too large.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class AssociateProfilesCommand extends command<AssociateProfilesCommandInput, AssociateProfilesCommandOutput>(
  _ep0,
  _mw0,
  "AssociateProfiles",
  AssociateProfiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateProfilesInput;
      output: {};
    };
    sdk: {
      input: AssociateProfilesCommandInput;
      output: AssociateProfilesCommandOutput;
    };
  };
}
