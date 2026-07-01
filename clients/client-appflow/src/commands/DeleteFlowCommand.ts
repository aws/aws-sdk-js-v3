// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFlowRequest, DeleteFlowResponse } from "../models/models_0";
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
 * <p> Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can
 *       delete flows one at a time. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, DeleteFlowCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, DeleteFlowCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * // import type { AppflowClientConfig } from "@aws-sdk/client-appflow";
 * const config = {}; // type is AppflowClientConfig
 * const client = new AppflowClient(config);
 * const input = { // DeleteFlowRequest
 *   flowName: "STRING_VALUE", // required
 *   forceDelete: true || false,
 * };
 * const command = new DeleteFlowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFlowCommandInput - {@link DeleteFlowCommandInput}
 * @returns {@link DeleteFlowCommandOutput}
 * @see {@link DeleteFlowCommandInput} for command's `input` shape.
 * @see {@link DeleteFlowCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict when processing the request (for example, a flow with the given name
 *       already exists within the account. Check for conflicting resource names and try again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> An internal service error occurred during the processing of your request. Try again
 *       later. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request (such as the source or destination connector
 *       profile) is not found. </p>
 *
 * @throws {@link AppflowServiceException}
 * <p>Base exception class for all service exceptions from Appflow service.</p>
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
      output: {};
    };
    sdk: {
      input: DeleteFlowCommandInput;
      output: DeleteFlowCommandOutput;
    };
  };
}
