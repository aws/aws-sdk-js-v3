// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRuleRequest, DeleteRuleResponse } from "../models/models_0";
import { DeleteRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRuleCommand}.
 */
export interface DeleteRuleCommandInput extends DeleteRuleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRuleCommand}.
 */
export interface DeleteRuleCommandOutput extends DeleteRuleResponse, __MetadataBearer {}

/**
 * Deletes a Recycle Bin retention rule. For more information, see [Delete Recycle Bin retention rules](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-delete-rule) in the *Amazon Elastic Compute Cloud User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RbinClient, DeleteRuleCommand } from "@aws-sdk/client-rbin"; // ES Modules import
 * // const { RbinClient, DeleteRuleCommand } = require("@aws-sdk/client-rbin"); // CommonJS import
 * // import type { RbinClientConfig } from "@aws-sdk/client-rbin";
 * const config = {}; // type is RbinClientConfig
 * const client = new RbinClient(config);
 * const input = { // DeleteRuleRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRuleCommandInput - {@link DeleteRuleCommandInput}
 * @returns {@link DeleteRuleCommandOutput}
 * @see {@link DeleteRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteRuleCommandOutput} for command's `response` shape.
 * @see {@link RbinClientResolvedConfig | config} for RbinClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The specified retention rule lock request can't be completed.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service could not respond to the request due to an internal problem.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One or more of the parameters in the request is not valid.
 *
 * @throws {@link RbinServiceException}
 *
 * Base exception class for all service exceptions from Rbin service.
 *
 * @public
 */
export class DeleteRuleCommand extends command<DeleteRuleCommandInput, DeleteRuleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRule",
  DeleteRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRuleRequest;
      output: {};
    };
    sdk: {
      input: DeleteRuleCommandInput;
      output: DeleteRuleCommandOutput;
    };
  };
}
