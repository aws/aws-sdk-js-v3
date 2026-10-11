// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSystemLogsForSessionRequest, GetSystemLogsForSessionResponse } from "../models/models_2";
import { GetSystemLogsForSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSystemLogsForSessionCommand}.
 */
export interface GetSystemLogsForSessionCommandInput extends GetSystemLogsForSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetSystemLogsForSessionCommand}.
 */
export interface GetSystemLogsForSessionCommandOutput extends GetSystemLogsForSessionResponse, __MetadataBearer {}

/**
 * <p>Retrieves the system logs for an interactive session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSystemLogsForSessionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSystemLogsForSessionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetSystemLogsForSessionRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetSystemLogsForSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetSystemLogsForSessionResponse
 * //   SystemLogsUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSystemLogsForSessionCommandInput - {@link GetSystemLogsForSessionCommandInput}
 * @returns {@link GetSystemLogsForSessionCommandOutput}
 * @see {@link GetSystemLogsForSessionCommandInput} for command's `input` shape.
 * @see {@link GetSystemLogsForSessionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetSystemLogsForSessionCommand extends command<GetSystemLogsForSessionCommandInput, GetSystemLogsForSessionCommandOutput>(
  _ep0,
  _mw0,
  "GetSystemLogsForSession",
  GetSystemLogsForSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSystemLogsForSessionRequest;
      output: GetSystemLogsForSessionResponse;
    };
    sdk: {
      input: GetSystemLogsForSessionCommandInput;
      output: GetSystemLogsForSessionCommandOutput;
    };
  };
}
