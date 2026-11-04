// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLocationInput, DeleteLocationOutput } from "../models/models_0";
import { DeleteLocation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLocationCommand}.
 */
export interface DeleteLocationCommandInput extends DeleteLocationInput {}
/**
 * @public
 *
 * The output of {@link DeleteLocationCommand}.
 */
export interface DeleteLocationCommandOutput extends DeleteLocationOutput, __MetadataBearer {}

/**
 * **This API works with the following fleet types:** Anywhere
 *
 * Deletes a custom location.
 *
 * Before deleting a custom location, review any fleets currently using the custom location and deregister the location if it is in use. For more information, see [DeregisterCompute](https://docs.aws.amazon.com/gamelift/latest/apireference/API_DeregisterCompute.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteLocationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteLocationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * // import type { GameLiftClientConfig } from "@aws-sdk/client-gamelift";
 * const config = {}; // type is GameLiftClientConfig
 * const client = new GameLiftClient(config);
 * const input = { // DeleteLocationInput
 *   LocationName: "STRING_VALUE", // required
 * };
 * const command = new DeleteLocationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLocationCommandInput - {@link DeleteLocationCommandInput}
 * @returns {@link DeleteLocationCommandOutput}
 * @see {@link DeleteLocationCommandInput} for command's `input` shape.
 * @see {@link DeleteLocationCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The service encountered an unrecoverable internal failure while processing the request. Clients can retry such requests immediately or after a waiting period.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The requested resource was not found. The resource was either not created yet or deleted.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The client failed authentication. Clients should not retry such requests.
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *
 * The requested operation is not supported in the Region specified.
 *
 * @throws {@link GameLiftServiceException}
 *
 * Base exception class for all service exceptions from GameLift service.
 *
 * @public
 */
export class DeleteLocationCommand extends command<DeleteLocationCommandInput, DeleteLocationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLocation",
  DeleteLocation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLocationInput;
      output: {};
    };
    sdk: {
      input: DeleteLocationCommandInput;
      output: DeleteLocationCommandOutput;
    };
  };
}
