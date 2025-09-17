// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StopSessionRequest, StopSessionResponse } from "../models/models_3";
import { de_StopSessionCommand, se_StopSessionCommand } from "../protocols/Aws_json1_1";

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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "StopSession", {})
  .n("GlueClient", "StopSessionCommand")
  .f(void 0, void 0)
  .ser(se_StopSessionCommand)
  .de(de_StopSessionCommand)
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
