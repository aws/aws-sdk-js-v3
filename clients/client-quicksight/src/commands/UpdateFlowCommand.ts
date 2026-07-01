// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFlowRequest, UpdateFlowResponse } from "../models/models_5";
import { UpdateFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFlowCommand}.
 */
export interface UpdateFlowCommandInput extends UpdateFlowRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFlowCommand}.
 */
export interface UpdateFlowCommandOutput extends UpdateFlowResponse, __MetadataBearer {}

/**
 * <p>Updates an existing flow. Supply only the fields you want to change. Updates both DRAFT and PUBLISHED versions. When <code>FlowDefinition</code> is provided, all existing steps are replaced with the new definition.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateFlowCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateFlowCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateFlowRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   FlowId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   FlowDefinition: "DOCUMENT_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdateFlowCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFlowResponse
 * //   Arn: "STRING_VALUE", // required
 * //   FlowId: "STRING_VALUE", // required
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateFlowCommandInput - {@link UpdateFlowCommandInput}
 * @returns {@link UpdateFlowCommandOutput}
 * @see {@link UpdateFlowCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
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
export class UpdateFlowCommand extends command<UpdateFlowCommandInput, UpdateFlowCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFlow",
  UpdateFlow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFlowRequest;
      output: UpdateFlowResponse;
    };
    sdk: {
      input: UpdateFlowCommandInput;
      output: UpdateFlowCommandOutput;
    };
  };
}
