// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteInvestigationGroupPolicyOutput, DeleteInvestigationGroupPolicyRequest } from "../models/models_0";
import { DeleteInvestigationGroupPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteInvestigationGroupPolicyCommand}.
 */
export interface DeleteInvestigationGroupPolicyCommandInput extends DeleteInvestigationGroupPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInvestigationGroupPolicyCommand}.
 */
export interface DeleteInvestigationGroupPolicyCommandOutput extends DeleteInvestigationGroupPolicyOutput, __MetadataBearer {}

/**
 * Removes the IAM resource policy from being associated with the investigation group that you specify.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AIOpsClient, DeleteInvestigationGroupPolicyCommand } from "@aws-sdk/client-aiops"; // ES Modules import
 * // const { AIOpsClient, DeleteInvestigationGroupPolicyCommand } = require("@aws-sdk/client-aiops"); // CommonJS import
 * // import type { AIOpsClientConfig } from "@aws-sdk/client-aiops";
 * const config = {}; // type is AIOpsClientConfig
 * const client = new AIOpsClient(config);
 * const input = { // DeleteInvestigationGroupPolicyRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteInvestigationGroupPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteInvestigationGroupPolicyCommandInput - {@link DeleteInvestigationGroupPolicyCommandInput}
 * @returns {@link DeleteInvestigationGroupPolicyCommandOutput}
 * @see {@link DeleteInvestigationGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteInvestigationGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link AIOpsClientResolvedConfig | config} for AIOpsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. You can try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits. You can try again later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * This operation or its parameters aren't formatted correctly.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This operation couldn't be completed because of a conflict in resource states.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * Access id denied for this operation, or this operation is not valid for the specified resource.
 *
 * @throws {@link AIOpsServiceException}
 *
 * Base exception class for all service exceptions from AIOps service.
 *
 * @public
 */
export class DeleteInvestigationGroupPolicyCommand extends command<DeleteInvestigationGroupPolicyCommandInput, DeleteInvestigationGroupPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteInvestigationGroupPolicy",
  DeleteInvestigationGroupPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInvestigationGroupPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteInvestigationGroupPolicyCommandInput;
      output: DeleteInvestigationGroupPolicyCommandOutput;
    };
  };
}
