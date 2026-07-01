// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFlowRequest, DeleteFlowResponse } from "../models/models_3";
import { DeleteFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteFlowCommand}.
 */
export interface DeleteFlowCommandInput extends DeleteFlowRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFlowCommand}.
 */
export interface DeleteFlowCommandOutput extends DeleteFlowResponse, __MetadataBearer {}

/**
 * <p>Permanently deletes a flow from the specified Amazon Web Services account. This operation cannot be undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteFlowCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteFlowCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DeleteFlowRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   FlowId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFlowCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFlowResponse
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteFlowCommandInput - {@link DeleteFlowCommandInput}
 * @returns {@link DeleteFlowCommandOutput}
 * @see {@link DeleteFlowCommandInput} for command's `input` shape.
 * @see {@link DeleteFlowCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class DeleteFlowCommand extends command<DeleteFlowCommandInput, DeleteFlowCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFlow",
  DeleteFlow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFlowRequest;
      output: DeleteFlowResponse;
    };
    sdk: {
      input: DeleteFlowCommandInput;
      output: DeleteFlowCommandOutput;
    };
  };
}
