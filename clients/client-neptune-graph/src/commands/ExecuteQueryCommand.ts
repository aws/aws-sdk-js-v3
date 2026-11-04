// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { ExecuteQueryInput, ExecuteQueryOutput } from "../models/models_0";
import { ExecuteQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Execute an openCypher query.
 *
 * When invoking this operation in a Neptune Analytics cluster, the IAM user or role making the request must have a policy attached that allows one of the following IAM actions in that cluster, depending on the query:
 *
 * - neptune-graph:ReadDataViaQuery
 * - neptune-graph:WriteDataViaQuery
 * - neptune-graph:DeleteDataViaQuery
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneGraphClient, ExecuteQueryCommand } from "@aws-sdk/client-neptune-graph"; // ES Modules import
 * // const { NeptuneGraphClient, ExecuteQueryCommand } = require("@aws-sdk/client-neptune-graph"); // CommonJS import
 * // import type { NeptuneGraphClientConfig } from "@aws-sdk/client-neptune-graph";
 * const config = {}; // type is NeptuneGraphClientConfig
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
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.payload.transformToByteArray();
 * // const str = await response.payload.transformToString();
 * // response.payload.destroy(); // only applicable to Node.js Readable streams.
 *
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
 *
 * Raised in case of an authentication or authorization failure.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Raised when a conflict is encountered.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * A failure occurred on the server.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The exception was interrupted by throttling.
 *
 * @throws {@link UnprocessableException} (client fault)
 *
 * Request cannot be processed due to known reasons. Eg. partition full.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A resource could not be validated.
 *
 * @throws {@link NeptuneGraphServiceException}
 *
 * Base exception class for all service exceptions from NeptuneGraph service.
 *
 * @public
 */
export class ExecuteQueryCommand extends command<ExecuteQueryCommandInput, ExecuteQueryCommandOutput>(
  _ep1,
  _mw0,
  "ExecuteQuery",
  ExecuteQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExecuteQueryInput;
      output: ExecuteQueryOutput;
    };
    sdk: {
      input: ExecuteQueryCommandInput;
      output: ExecuteQueryCommandOutput;
    };
  };
}
