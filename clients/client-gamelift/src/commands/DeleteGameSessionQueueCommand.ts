// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteGameSessionQueueInput, DeleteGameSessionQueueOutput } from "../models/models_0";
import { DeleteGameSessionQueue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteGameSessionQueueCommand}.
 */
export interface DeleteGameSessionQueueCommandInput extends DeleteGameSessionQueueInput {}
/**
 * @public
 *
 * The output of {@link DeleteGameSessionQueueCommand}.
 */
export interface DeleteGameSessionQueueCommandOutput extends DeleteGameSessionQueueOutput, __MetadataBearer {}

/**
 * <p>
 *             <b>This API works with the following fleet types:</b> EC2, Anywhere, Container</p>
 *          <p>Deletes a game session queue. Once a queue is successfully deleted, unfulfilled <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_StartGameSessionPlacement.html">StartGameSessionPlacement</a> requests that reference the queue will fail. To
 *             delete a queue, specify the queue name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteGameSessionQueueCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteGameSessionQueueCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DeleteGameSessionQueueInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteGameSessionQueueCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteGameSessionQueueCommandInput - {@link DeleteGameSessionQueueCommandInput}
 * @returns {@link DeleteGameSessionQueueCommandOutput}
 * @see {@link DeleteGameSessionQueueCommandInput} for command's `input` shape.
 * @see {@link DeleteGameSessionQueueCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link TaggingFailedException} (client fault)
 *  <p>The requested tagging operation did not succeed. This may be due to invalid tag format
 *             or the maximum tag limit may have been exceeded. Resolve the issue before
 *             retrying.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 *
 * @public
 */
export class DeleteGameSessionQueueCommand extends command<DeleteGameSessionQueueCommandInput, DeleteGameSessionQueueCommandOutput>(
  _ep0,
  _mw0,
  "DeleteGameSessionQueue",
  DeleteGameSessionQueue$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGameSessionQueueInput;
      output: {};
    };
    sdk: {
      input: DeleteGameSessionQueueCommandInput;
      output: DeleteGameSessionQueueCommandOutput;
    };
  };
}
