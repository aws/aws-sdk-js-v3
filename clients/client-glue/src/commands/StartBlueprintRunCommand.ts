// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartBlueprintRunRequest, StartBlueprintRunResponse } from "../models/models_3";
import { StartBlueprintRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartBlueprintRunCommand}.
 */
export interface StartBlueprintRunCommandInput extends StartBlueprintRunRequest {}
/**
 * @public
 *
 * The output of {@link StartBlueprintRunCommand}.
 */
export interface StartBlueprintRunCommandOutput extends StartBlueprintRunResponse, __MetadataBearer {}

/**
 * Starts a new run of the specified blueprint.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartBlueprintRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartBlueprintRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StartBlueprintRunRequest
 *   BlueprintName: "STRING_VALUE", // required
 *   Parameters: "STRING_VALUE",
 *   RoleArn: "STRING_VALUE", // required
 * };
 * const command = new StartBlueprintRunCommand(input);
 * const response = await client.send(command);
 * // { // StartBlueprintRunResponse
 * //   RunId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartBlueprintRunCommandInput - {@link StartBlueprintRunCommandInput}
 * @returns {@link StartBlueprintRunCommandOutput}
 * @see {@link StartBlueprintRunCommandInput} for command's `input` shape.
 * @see {@link StartBlueprintRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link IllegalBlueprintStateException} (client fault)
 *
 * The blueprint is in an invalid state to perform a requested operation.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class StartBlueprintRunCommand extends command<StartBlueprintRunCommandInput, StartBlueprintRunCommandOutput>(
  _ep0,
  _mw0,
  "StartBlueprintRun",
  StartBlueprintRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartBlueprintRunRequest;
      output: StartBlueprintRunResponse;
    };
    sdk: {
      input: StartBlueprintRunCommandInput;
      output: StartBlueprintRunCommandOutput;
    };
  };
}
