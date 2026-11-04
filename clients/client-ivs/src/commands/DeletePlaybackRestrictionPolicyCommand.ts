// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePlaybackRestrictionPolicyRequest } from "../models/models_0";
import { DeletePlaybackRestrictionPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePlaybackRestrictionPolicyCommand}.
 */
export interface DeletePlaybackRestrictionPolicyCommandInput extends DeletePlaybackRestrictionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeletePlaybackRestrictionPolicyCommand}.
 */
export interface DeletePlaybackRestrictionPolicyCommandOutput extends __MetadataBearer {}

/**
 * Deletes the specified playback restriction policy.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, DeletePlaybackRestrictionPolicyCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, DeletePlaybackRestrictionPolicyCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // DeletePlaybackRestrictionPolicyRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeletePlaybackRestrictionPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePlaybackRestrictionPolicyCommandInput - {@link DeletePlaybackRestrictionPolicyCommandInput}
 * @returns {@link DeletePlaybackRestrictionPolicyCommandOutput}
 * @see {@link DeletePlaybackRestrictionPolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePlaybackRestrictionPolicyCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link PendingVerification} (client fault)
 *
 * Your account is pending verification.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IvsServiceException}
 *
 * Base exception class for all service exceptions from Ivs service.
 *
 * @public
 */
export class DeletePlaybackRestrictionPolicyCommand extends command<DeletePlaybackRestrictionPolicyCommandInput, DeletePlaybackRestrictionPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeletePlaybackRestrictionPolicy",
  DeletePlaybackRestrictionPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePlaybackRestrictionPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeletePlaybackRestrictionPolicyCommandInput;
      output: DeletePlaybackRestrictionPolicyCommandOutput;
    };
  };
}
