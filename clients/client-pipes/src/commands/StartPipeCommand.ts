// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartPipeRequest, StartPipeResponse } from "../models/models_0";
import { StartPipe$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartPipeCommand}.
 */
export interface StartPipeCommandInput extends StartPipeRequest {}
/**
 * @public
 *
 * The output of {@link StartPipeCommand}.
 */
export interface StartPipeCommandOutput extends StartPipeResponse, __MetadataBearer {}

/**
 * Start an existing pipe.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PipesClient, StartPipeCommand } from "@aws-sdk/client-pipes"; // ES Modules import
 * // const { PipesClient, StartPipeCommand } = require("@aws-sdk/client-pipes"); // CommonJS import
 * // import type { PipesClientConfig } from "@aws-sdk/client-pipes";
 * const config = {}; // type is PipesClientConfig
 * const client = new PipesClient(config);
 * const input = { // StartPipeRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new StartPipeCommand(input);
 * const response = await client.send(command);
 * // { // StartPipeResponse
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   DesiredState: "STRING_VALUE",
 * //   CurrentState: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartPipeCommandInput - {@link StartPipeCommandInput}
 * @returns {@link StartPipeCommandOutput}
 * @see {@link StartPipeCommandInput} for command's `input` shape.
 * @see {@link StartPipeCommandOutput} for command's `response` shape.
 * @see {@link PipesClientResolvedConfig | config} for PipesClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * An action you attempted resulted in an exception.
 *
 * @throws {@link InternalException} (server fault)
 *
 * This exception occurs due to unexpected causes.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * An entity that you specified does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * An action was throttled.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates that an error has occurred while performing a validate operation.
 *
 * @throws {@link PipesServiceException}
 *
 * Base exception class for all service exceptions from Pipes service.
 *
 * @public
 */
export class StartPipeCommand extends command<StartPipeCommandInput, StartPipeCommandOutput>(
  _ep0,
  _mw0,
  "StartPipe",
  StartPipe$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartPipeRequest;
      output: StartPipeResponse;
    };
    sdk: {
      input: StartPipeCommandInput;
      output: StartPipeCommandOutput;
    };
  };
}
