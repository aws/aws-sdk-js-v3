// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRLSPolicyRequest, DeleteRLSPolicyResponse } from "../models/models_0";
import { DeleteRLSPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRLSPolicyCommand}.
 */
export interface DeleteRLSPolicyCommandInput extends DeleteRLSPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRLSPolicyCommand}.
 */
export interface DeleteRLSPolicyCommandOutput extends DeleteRLSPolicyResponse, __MetadataBearer {}

/**
 * Deletes a row-level security policy. Any active attachments of the policy are automatically removed as part of the deletion, so you do not need to detach the policy first.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DeleteRLSPolicyCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DeleteRLSPolicyCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // DeleteRLSPolicyRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteRLSPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRLSPolicyCommandInput - {@link DeleteRLSPolicyCommandInput}
 * @returns {@link DeleteRLSPolicyCommandOutput}
 * @see {@link DeleteRLSPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRLSPolicyCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Two processes are trying to modify a resource simultaneously.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link LakeFormationServiceException}
 *
 * Base exception class for all service exceptions from LakeFormation service.
 *
 * @public
 */
export class DeleteRLSPolicyCommand extends command<DeleteRLSPolicyCommandInput, DeleteRLSPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRLSPolicy",
  DeleteRLSPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRLSPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteRLSPolicyCommandInput;
      output: DeleteRLSPolicyCommandOutput;
    };
  };
}
