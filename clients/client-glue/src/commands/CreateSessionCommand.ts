// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateSessionRequest, CreateSessionResponse } from "../models/models_1";
import { de_CreateSessionCommand, se_CreateSessionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSessionCommand}.
 */
export interface CreateSessionCommandInput extends CreateSessionRequest {}
/**
 * @public
 *
 * The output of {@link CreateSessionCommand}.
 */
export interface CreateSessionCommandOutput extends CreateSessionResponse, __MetadataBearer {}

/**
 * <p>Creates a new session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateSessionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateSessionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateSessionRequest
 *   Id: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Role: "STRING_VALUE", // required
 *   Command: { // SessionCommand
 *     Name: "STRING_VALUE",
 *     PythonVersion: "STRING_VALUE",
 *   },
 *   Timeout: Number("int"),
 *   IdleTimeout: Number("int"),
 *   DefaultArguments: { // OrchestrationArgumentsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Connections: { // ConnectionsList
 *     Connections: [ // ConnectionStringList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   MaxCapacity: Number("double"),
 *   NumberOfWorkers: Number("int"),
 *   WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 *   SecurityConfiguration: "STRING_VALUE",
 *   GlueVersion: "STRING_VALUE",
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RequestOrigin: "STRING_VALUE",
 * };
 * const command = new CreateSessionCommand(input);
 * const response = await client.send(command);
 * // { // CreateSessionResponse
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
 * @param CreateSessionCommandInput - {@link CreateSessionCommandInput}
 * @returns {@link CreateSessionCommandOutput}
 * @see {@link CreateSessionCommandInput} for command's `input` shape.
 * @see {@link CreateSessionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The same unique identifier was associated with two different records.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A value could not be validated.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class CreateSessionCommand extends $Command
  .classBuilder<
    CreateSessionCommandInput,
    CreateSessionCommandOutput,
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
  .s("AWSGlue", "CreateSession", {})
  .n("GlueClient", "CreateSessionCommand")
  .f(void 0, void 0)
  .ser(se_CreateSessionCommand)
  .de(de_CreateSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSessionRequest;
      output: CreateSessionResponse;
    };
    sdk: {
      input: CreateSessionCommandInput;
      output: CreateSessionCommandOutput;
    };
  };
}
