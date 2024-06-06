// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ExecuteQueryInput, ExecuteQueryOutput, ExecuteQueryOutputFilterSensitiveLog } from "../models/models_0";
import { NeptuneGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneGraphClient";
import { de_ExecuteQueryCommand, se_ExecuteQueryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExecuteQueryCommand}.
 */
export interface ExecuteQueryCommandInput extends ExecuteQueryInput {}
/**
 * @public
 *
 * The output of {@link ExecuteQueryCommand}.
 */
export interface ExecuteQueryCommandOutput extends Omit<ExecuteQueryOutput, "payload">, __MetadataBearer {
  payload: StreamingBlobPayloadOutputTypes;
}

/**
 * <p>Execute an openCypher query.</p>
 *          <p>
 *       When invoking this operation in a Neptune Analytics cluster, the IAM user or role making the request must have a policy attached
 *       that allows one of the following IAM actions in that cluster, depending on the query:
 *     </p>
 *          <ul>
 *             <li>
 *                <p>neptune-graph:ReadDataViaQuery</p>
 *             </li>
 *             <li>
 *                <p>neptune-graph:WriteDataViaQuery</p>
 *             </li>
 *             <li>
 *                <p>neptune-graph:DeleteDataViaQuery</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, ExecuteQueryCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, ExecuteQueryCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * const client = new NeptuneGraphClient(config);
 * const input = { // ExecuteQueryInput
 *   graphIdentifier: "STRING_VALUE", // required
 *   queryString: "STRING_VALUE", // required
 *   language: "OPEN_CYPHER", // required
 *   parameters: { // DocumentValuedMap
 *     "<keys>": "DOCUMENT_VALUE",
 *   },
 *   planCache: "ENABLED" || "DISABLED" || "AUTO",
 *   explainMode: "STATIC" || "DETAILS",
 *   queryTimeoutMilliseconds: Number("int"),
 * };
 * const command = new ExecuteQueryCommand(input);
 * const response = await client.send(command);
 * // { // ExecuteQueryOutput
 * //   payload: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes // required
 * // };
 *
 * ```
 *
 * @param ExecuteQueryCommandInput - {@link ExecuteQueryCommandInput}
 * @returns {@link ExecuteQueryCommandOutput}
 * @see {@link ExecuteQueryCommandInput} for command's `input` shape.
 * @see {@link ExecuteQueryCommandOutput} for command's `response` shape.
 * @see {@link NeptuneGraphClientResolvedConfig | config} for NeptuneGraphClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Raised in case of an authentication or authorization failure.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Raised when a conflict is encountered.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>A failure occurred on the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The exception was interrupted by throttling.</p>
 *
 * @throws {@link UnprocessableException} (client fault)
 *  <p>Request cannot be processed due to known reasons. Eg. partition full.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A resource could not be validated.</p>
 *
 * @throws {@link NeptuneGraphServiceException}
 * <p>Base exception class for all service exceptions from NeptuneGraph service.</p>
 *
 * @public
 */
export class ExecuteQueryCommand extends $Command
  .classBuilder<
    ExecuteQueryCommandInput,
    ExecuteQueryCommandOutput,
    NeptuneGraphClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    ApiType: { type: "staticContextParams", value: `DataPlane` },
  })
  .m(function (this: any, Command: any, cs: any, config: NeptuneGraphClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonNeptuneGraph", "ExecuteQuery", {})
  .n("NeptuneGraphClient", "ExecuteQueryCommand")
  .f(void 0, ExecuteQueryOutputFilterSensitiveLog)
  .ser(se_ExecuteQueryCommand)
  .de(de_ExecuteQueryCommand)
  .build() {}
