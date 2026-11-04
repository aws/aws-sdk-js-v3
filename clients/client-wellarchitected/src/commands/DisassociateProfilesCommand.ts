// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateProfilesInput } from "../models/models_0";
import { DisassociateProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateProfilesCommand}.
 */
export interface DisassociateProfilesCommandInput extends DisassociateProfilesInput {}
/**
 * @public
 *
 * The output of {@link DisassociateProfilesCommand}.
 */
export interface DisassociateProfilesCommandOutput extends __MetadataBearer {}

/**
 * Disassociate a profile from a workload.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DisassociateProfilesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DisassociateProfilesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // DisassociateProfilesInput
 *   WorkloadId: "STRING_VALUE", // required
 *   ProfileArns: [ // ProfileArns // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateProfilesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateProfilesCommandInput - {@link DisassociateProfilesCommandInput}
 * @returns {@link DisassociateProfilesCommandOutput}
 * @see {@link DisassociateProfilesCommandInput} for command's `input` shape.
 * @see {@link DisassociateProfilesCommandOutput} for command's `response` shape.
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
export class DisassociateProfilesCommand extends command<DisassociateProfilesCommandInput, DisassociateProfilesCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateProfiles",
  DisassociateProfiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateProfilesInput;
      output: {};
    };
    sdk: {
      input: DisassociateProfilesCommandInput;
      output: DisassociateProfilesCommandOutput;
    };
  };
}
