// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListSessionsRequest, ListSessionsResponse } from "../models/models_2";
import { de_ListSessionsCommand, se_ListSessionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSessionsCommand}.
 */
export interface ListSessionsCommandInput extends ListSessionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSessionsCommand}.
 */
export interface ListSessionsCommandOutput extends ListSessionsResponse, __MetadataBearer {}

/**
 * <p>Retrieve a list of sessions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListSessionsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListSessionsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListSessionsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   RequestOrigin: "STRING_VALUE",
 * };
 * const command = new ListSessionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSessionsResponse
 * //   Ids: [ // SessionIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   Sessions: [ // SessionList
 * //     { // Session
 * //       Id: "STRING_VALUE",
 * //       CreatedOn: new Date("TIMESTAMP"),
 * //       Status: "PROVISIONING" || "READY" || "FAILED" || "TIMEOUT" || "STOPPING" || "STOPPED",
 * //       ErrorMessage: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Role: "STRING_VALUE",
 * //       Command: { // SessionCommand
 * //         Name: "STRING_VALUE",
 * //         PythonVersion: "STRING_VALUE",
 * //       },
 * //       DefaultArguments: { // OrchestrationArgumentsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Connections: { // ConnectionsList
 * //         Connections: [ // ConnectionStringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Progress: Number("double"),
 * //       MaxCapacity: Number("double"),
 * //       SecurityConfiguration: "STRING_VALUE",
 * //       GlueVersion: "STRING_VALUE",
 * //       NumberOfWorkers: Number("int"),
 * //       WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 * //       CompletedOn: new Date("TIMESTAMP"),
 * //       ExecutionTime: Number("double"),
 * //       DPUSeconds: Number("double"),
 * //       IdleTimeout: Number("int"),
 * //       ProfileName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSessionsCommandInput - {@link ListSessionsCommandInput}
 * @returns {@link ListSessionsCommandOutput}
 * @see {@link ListSessionsCommandInput} for command's `input` shape.
 * @see {@link ListSessionsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
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
export class ListSessionsCommand extends $Command
  .classBuilder<
    ListSessionsCommandInput,
    ListSessionsCommandOutput,
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
  .s("AWSGlue", "ListSessions", {})
  .n("GlueClient", "ListSessionsCommand")
  .f(void 0, void 0)
  .ser(se_ListSessionsCommand)
  .de(de_ListSessionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSessionsRequest;
      output: ListSessionsResponse;
    };
    sdk: {
      input: ListSessionsCommandInput;
      output: ListSessionsCommandOutput;
    };
  };
}
