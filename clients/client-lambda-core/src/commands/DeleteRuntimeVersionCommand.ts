// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRuntimeVersionRequest, DeleteRuntimeVersionResponse } from "../models/models_0";
import { DeleteRuntimeVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRuntimeVersionCommand}.
 */
export interface DeleteRuntimeVersionCommandInput extends DeleteRuntimeVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRuntimeVersionCommand}.
 */
export interface DeleteRuntimeVersionCommandOutput extends DeleteRuntimeVersionResponse, __MetadataBearer {}

/**
 * Schedules a runtime version to be deleted. Runtime versions scheduled for deletion enter the PENDING_DELETION state and can be restored during the scheduled deletion window. Function invokes fail for functions using a runtime version that is deleted or pending deletion.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaCoreClient, DeleteRuntimeVersionCommand } from "@aws-sdk/client-lambda-core"; // ES Modules import
 * // const { LambdaCoreClient, DeleteRuntimeVersionCommand } = require("@aws-sdk/client-lambda-core"); // CommonJS import
 * // import type { LambdaCoreClientConfig } from "@aws-sdk/client-lambda-core";
 * const config = {}; // type is LambdaCoreClientConfig
 * const client = new LambdaCoreClient(config);
 * const input = { // DeleteRuntimeVersionRequest
 *   RuntimeName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   RecoveryWindowInDays: Number("int"),
 * };
 * const command = new DeleteRuntimeVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRuntimeVersionCommandInput - {@link DeleteRuntimeVersionCommandInput}
 * @returns {@link DeleteRuntimeVersionCommandOutput}
 * @see {@link DeleteRuntimeVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteRuntimeVersionCommandOutput} for command's `response` shape.
 * @see {@link LambdaCoreClientResolvedConfig | config} for LambdaCoreClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid. Check the error message for details about which parameter failed validation.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource. For example, attempting to modify a resource that is not in a state that permits the operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist. Verify the identifier and Region.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal service error occurred. Retry the request with exponential backoff.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was throttled due to exceeding the allowed request rate. Retry the request after a brief wait using exponential backoff.</p>
 *
 * @throws {@link LambdaCoreServiceException}
 * <p>Base exception class for all service exceptions from LambdaCore service.</p>
 *
 *
 * @example Delete a runtime version
 * ```javascript
 * // Schedules a runtime version to be deleted.
 * const input = {
 *   Name: "v1",
 *   RuntimeName: "php8"
 * };
 * const command = new DeleteRuntimeVersionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteRuntimeVersionCommand extends command<DeleteRuntimeVersionCommandInput, DeleteRuntimeVersionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRuntimeVersion",
  DeleteRuntimeVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRuntimeVersionRequest;
      output: {};
    };
    sdk: {
      input: DeleteRuntimeVersionCommandInput;
      output: DeleteRuntimeVersionCommandOutput;
    };
  };
}
