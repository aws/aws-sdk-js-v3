// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRunRequest, DeleteRunResult } from "../models/models_0";
import { DeleteRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRunCommand}.
 */
export interface DeleteRunCommandInput extends DeleteRunRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRunCommand}.
 */
export interface DeleteRunCommandOutput extends DeleteRunResult, __MetadataBearer {}

/**
 * Deletes the run, given the run ARN. You cannot delete a run if it is still active.
 *
 * > **Important:** You cannot undo this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteRunCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteRunCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // DeleteRunRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteRunCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRunCommandInput - {@link DeleteRunCommandInput}
 * @returns {@link DeleteRunCommandOutput}
 * @see {@link DeleteRunCommandInput} for command's `input` shape.
 * @see {@link DeleteRunCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *
 * An invalid argument was specified.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit was exceeded.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The specified entity was not found.
 *
 * @throws {@link ServiceAccountException} (client fault)
 *
 * There was a problem with the service account.
 *
 * @throws {@link DeviceFarmServiceException}
 *
 * Base exception class for all service exceptions from DeviceFarm service.
 *
 * @example To delete a run
 * ```javascript
 * // The following example deletes a specific test run.
 * const input = {
 *   arn: "arn:aws:devicefarm:us-west-2:123456789101:run:EXAMPLE-GUID-123-456"
 * };
 * const command = new DeleteRunCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteRunCommand extends command<DeleteRunCommandInput, DeleteRunCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRun",
  DeleteRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRunRequest;
      output: {};
    };
    sdk: {
      input: DeleteRunCommandInput;
      output: DeleteRunCommandOutput;
    };
  };
}
