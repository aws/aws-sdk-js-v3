// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDataflowGraphRequest, GetDataflowGraphResponse } from "../models/models_2";
import { GetDataflowGraph } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataflowGraphCommand}.
 */
export interface GetDataflowGraphCommandInput extends GetDataflowGraphRequest {}
/**
 * @public
 *
 * The output of {@link GetDataflowGraphCommand}.
 */
export interface GetDataflowGraphCommandOutput extends GetDataflowGraphResponse, __MetadataBearer {}

/**
 * <p>Transforms a Python script into a directed acyclic graph (DAG). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetDataflowGraphCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetDataflowGraphCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetDataflowGraphRequest
 *   PythonScript: "STRING_VALUE",
 * };
 * const command = new GetDataflowGraphCommand(input);
 * const response = await client.send(command);
 * // { // GetDataflowGraphResponse
 * //   DagNodes: [ // DagNodes
 * //     { // CodeGenNode
 * //       Id: "STRING_VALUE", // required
 * //       NodeType: "STRING_VALUE", // required
 * //       Args: [ // CodeGenNodeArgs // required
 * //         { // CodeGenNodeArg
 * //           Name: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //           Param: true || false,
 * //         },
 * //       ],
 * //       LineNumber: Number("int"),
 * //     },
 * //   ],
 * //   DagEdges: [ // DagEdges
 * //     { // CodeGenEdge
 * //       Source: "STRING_VALUE", // required
 * //       Target: "STRING_VALUE", // required
 * //       TargetParameter: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDataflowGraphCommandInput - {@link GetDataflowGraphCommandInput}
 * @returns {@link GetDataflowGraphCommandOutput}
 * @see {@link GetDataflowGraphCommandInput} for command's `input` shape.
 * @see {@link GetDataflowGraphCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
export class GetDataflowGraphCommand extends $Command
  .classBuilder<
    GetDataflowGraphCommandInput,
    GetDataflowGraphCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetDataflowGraph", {})
  .n("GlueClient", "GetDataflowGraphCommand")
  .sc(GetDataflowGraph)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataflowGraphRequest;
      output: GetDataflowGraphResponse;
    };
    sdk: {
      input: GetDataflowGraphCommandInput;
      output: GetDataflowGraphCommandOutput;
    };
  };
}
