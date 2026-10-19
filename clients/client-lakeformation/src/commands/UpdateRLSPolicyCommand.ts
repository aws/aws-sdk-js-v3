// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRLSPolicyRequest, UpdateRLSPolicyResponse } from "../models/models_0";
import { UpdateRLSPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRLSPolicyCommand}.
 */
export interface UpdateRLSPolicyCommandInput extends UpdateRLSPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRLSPolicyCommand}.
 */
export interface UpdateRLSPolicyCommandOutput extends UpdateRLSPolicyResponse, __MetadataBearer {}

/**
 * <p>Updates the filter expression of an existing row-level security policy. The change applies to all attachments of the policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, UpdateRLSPolicyCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, UpdateRLSPolicyCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // UpdateRLSPolicyRequest
 *   Name: "STRING_VALUE", // required
 *   FilterExpression: "STRING_VALUE",
 * };
 * const command = new UpdateRLSPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRLSPolicyCommandInput - {@link UpdateRLSPolicyCommandInput}
 * @returns {@link UpdateRLSPolicyCommandOutput}
 * @see {@link UpdateRLSPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateRLSPolicyCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class UpdateRLSPolicyCommand extends command<UpdateRLSPolicyCommandInput, UpdateRLSPolicyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRLSPolicy",
  UpdateRLSPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRLSPolicyRequest;
      output: {};
    };
    sdk: {
      input: UpdateRLSPolicyCommandInput;
      output: UpdateRLSPolicyCommandOutput;
    };
  };
}
