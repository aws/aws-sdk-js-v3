// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateScriptRequest, CreateScriptResponse } from "../models/models_1";
import { de_CreateScriptCommand, se_CreateScriptCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateScriptCommand}.
 */
export interface CreateScriptCommandInput extends CreateScriptRequest {}
/**
 * @public
 *
 * The output of {@link CreateScriptCommand}.
 */
export interface CreateScriptCommandOutput extends CreateScriptResponse, __MetadataBearer {}

/**
 * <p>Transforms a directed acyclic graph (DAG) into code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateScriptCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateScriptCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // CreateScriptRequest
 *   DagNodes: [ // DagNodes
 *     { // CodeGenNode
 *       Id: "STRING_VALUE", // required
 *       NodeType: "STRING_VALUE", // required
 *       Args: [ // CodeGenNodeArgs // required
 *         { // CodeGenNodeArg
 *           Name: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *           Param: true || false,
 *         },
 *       ],
 *       LineNumber: Number("int"),
 *     },
 *   ],
 *   DagEdges: [ // DagEdges
 *     { // CodeGenEdge
 *       Source: "STRING_VALUE", // required
 *       Target: "STRING_VALUE", // required
 *       TargetParameter: "STRING_VALUE",
 *     },
 *   ],
 *   Language: "PYTHON" || "SCALA",
 * };
 * const command = new CreateScriptCommand(input);
 * const response = await client.send(command);
 * // { // CreateScriptResponse
 * //   PythonScript: "STRING_VALUE",
 * //   ScalaCode: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateScriptCommandInput - {@link CreateScriptCommandInput}
 * @returns {@link CreateScriptCommandOutput}
 * @see {@link CreateScriptCommandInput} for command's `input` shape.
 * @see {@link CreateScriptCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateScriptCommand extends $Command
  .classBuilder<
    CreateScriptCommandInput,
    CreateScriptCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "CreateScript", {})
  .n("GlueClient", "CreateScriptCommand")
  .f(void 0, void 0)
  .ser(se_CreateScriptCommand)
  .de(de_CreateScriptCommand)
  .build() {}
