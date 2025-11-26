// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { GetSessionRequest, GetSessionResponse } from "../models/models_2";
import { GetSession } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSessionCommand}.
 */
export interface GetSessionCommandInput extends GetSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetSessionCommand}.
 */
export interface GetSessionCommandOutput extends GetSessionResponse, __MetadataBearer {}

/**
 * <p>Retrieves the session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetSessionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetSessionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetSessionRequest
 *   Id: "STRING_VALUE", // required
 *   RequestOrigin: "STRING_VALUE",
 * };
 * const command = new GetSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionResponse
 * //   Session: { // Session
 * //     Id: "STRING_VALUE",
 * //     CreatedOn: new Date("TIMESTAMP"),
 * //     Status: "PROVISIONING" || "READY" || "FAILED" || "TIMEOUT" || "STOPPING" || "STOPPED",
 * //     ErrorMessage: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Role: "STRING_VALUE",
 * //     Command: { // SessionCommand
 * //       Name: "STRING_VALUE",
 * //       PythonVersion: "STRING_VALUE",
 * //     },
 * //     DefaultArguments: { // OrchestrationArgumentsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Connections: { // ConnectionsList
 * //       Connections: [ // ConnectionStringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Progress: Number("double"),
 * //     MaxCapacity: Number("double"),
 * //     SecurityConfiguration: "STRING_VALUE",
 * //     GlueVersion: "STRING_VALUE",
 * //     NumberOfWorkers: Number("int"),
 * //     WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 * //     CompletedOn: new Date("TIMESTAMP"),
 * //     ExecutionTime: Number("double"),
 * //     DPUSeconds: Number("double"),
 * //     IdleTimeout: Number("int"),
 * //     ProfileName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSessionCommandInput - {@link GetSessionCommandInput}
 * @returns {@link GetSessionCommandOutput}
 * @see {@link GetSessionCommandInput} for command's `input` shape.
 * @see {@link GetSessionCommandOutput} for command's `response` shape.
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
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetSessionCommand extends $Command
  .classBuilder<
    GetSessionCommandInput,
    GetSessionCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetSession", {})
  .n("GlueClient", "GetSessionCommand")
  .sc(GetSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSessionRequest;
      output: GetSessionResponse;
    };
    sdk: {
      input: GetSessionCommandInput;
      output: GetSessionCommandOutput;
    };
  };
}
