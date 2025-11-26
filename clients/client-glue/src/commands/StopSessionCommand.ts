// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { StopSessionRequest, StopSessionResponse } from "../models/models_2";
import { StopSession } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopSessionCommand}.
 */
export interface StopSessionCommandInput extends StopSessionRequest {}
/**
 * @public
 *
 * The output of {@link StopSessionCommand}.
 */
export interface StopSessionCommandOutput extends StopSessionResponse, __MetadataBearer {}

/**
 * <p>Stops the session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StopSessionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StopSessionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StopSessionRequest
 *   Id: "STRING_VALUE", // required
 *   RequestOrigin: "STRING_VALUE",
 * };
 * const command = new StopSessionCommand(input);
 * const response = await client.send(command);
 * // { // StopSessionResponse
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StopSessionCommandInput - {@link StopSessionCommandInput}
 * @returns {@link StopSessionCommandOutput}
 * @see {@link StopSessionCommandInput} for command's `input` shape.
 * @see {@link StopSessionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link IllegalSessionStateException} (client fault)
 *  <p>The session is in an invalid state to perform a requested operation.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class StopSessionCommand extends $Command
  .classBuilder<
    StopSessionCommandInput,
    StopSessionCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "StopSession", {})
  .n("GlueClient", "StopSessionCommand")
  .sc(StopSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopSessionRequest;
      output: StopSessionResponse;
    };
    sdk: {
      input: StopSessionCommandInput;
      output: StopSessionCommandOutput;
    };
  };
}
