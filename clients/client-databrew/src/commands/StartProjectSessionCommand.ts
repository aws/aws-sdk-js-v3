// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartProjectSessionRequest, StartProjectSessionResponse } from "../models/models_0";
import { StartProjectSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartProjectSessionCommand}.
 */
export interface StartProjectSessionCommandInput extends StartProjectSessionRequest {}
/**
 * @public
 *
 * The output of {@link StartProjectSessionCommand}.
 */
export interface StartProjectSessionCommandOutput extends StartProjectSessionResponse, __MetadataBearer {}

/**
 * Creates an interactive session, enabling you to manipulate data in a DataBrew project.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, StartProjectSessionCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, StartProjectSessionCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * // import type { DataBrewClientConfig } from "@aws-sdk/client-databrew";
 * const config = {}; // type is DataBrewClientConfig
 * const client = new DataBrewClient(config);
 * const input = { // StartProjectSessionRequest
 *   Name: "STRING_VALUE", // required
 *   AssumeControl: true || false,
 * };
 * const command = new StartProjectSessionCommand(input);
 * const response = await client.send(command);
 * // { // StartProjectSessionResponse
 * //   Name: "STRING_VALUE", // required
 * //   ClientSessionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartProjectSessionCommandInput - {@link StartProjectSessionCommandInput}
 * @returns {@link StartProjectSessionCommandOutput}
 * @see {@link StartProjectSessionCommandInput} for command's `input` shape.
 * @see {@link StartProjectSessionCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * A service quota is exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input parameters for this request failed validation.
 *
 * @throws {@link DataBrewServiceException}
 *
 * Base exception class for all service exceptions from DataBrew service.
 *
 * @public
 */
export class StartProjectSessionCommand extends command<StartProjectSessionCommandInput, StartProjectSessionCommandOutput>(
  _ep0,
  _mw0,
  "StartProjectSession",
  StartProjectSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartProjectSessionRequest;
      output: StartProjectSessionResponse;
    };
    sdk: {
      input: StartProjectSessionCommandInput;
      output: StartProjectSessionCommandOutput;
    };
  };
}
