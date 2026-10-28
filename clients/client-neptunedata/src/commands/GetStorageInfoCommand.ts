// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetStorageOutput } from "../models/models_0";
import { GetStorageInfo$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetStorageInfoCommand}.
 */
export interface GetStorageInfoCommandInput {}
/**
 * @public
 *
 * The output of {@link GetStorageInfoCommand}.
 */
export interface GetStorageInfoCommandOutput extends GetStorageOutput, __MetadataBearer {}

/**
 * <p>Retrieves storage information for the Neptune database instance, including approximate total storage used and per-category size and entry counts. Storage categories include:</p> <ul> <li> <p> <i>Quad indexes</i> - the indexes that store graph data, for both RDF (SPARQL) and Property Graph (Gremlin/openCypher) models.</p> </li> <li> <p> <i>Dictionaries</i> - the term dictionaries, including total dictionary storage and the portion used by blob (large value) entries.</p> </li> <li> <p> <i>Undo logs</i> - the undo logs, reported as a total size and the number of entries in the undo log list.</p> </li> <li> <p> <i>Streams</i> - the change-log streams.</p> </li> <li> <p> <i>Schema</i> - the schema.</p> </li> <li> <p> <i>DFE statistics</i> - the DFE engine statistics.</p> </li> <li> <p> <i>System metadata</i> - internal system metadata.</p> </li> </ul> <p>When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getstorageinfo">neptune-db:GetStorageInfo</a> IAM action in that cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, GetStorageInfoCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, GetStorageInfoCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = {};
 * const command = new GetStorageInfoCommand(input);
 * const response = await client.send(command);
 * // { // GetStorageOutput
 * //   totalStorageBytesUsed: Number("long"),
 * //   quads: { // QuadsIndexesInfo
 * //     RDF: { // QuadsInfo
 * //       SPOG: { // StorageMetrics
 * //         sizeInBytes: Number("long"), // required
 * //         count: Number("long"), // required
 * //       },
 * //       POGS: {
 * //         sizeInBytes: Number("long"), // required
 * //         count: Number("long"), // required
 * //       },
 * //       GPSO: {
 * //         sizeInBytes: Number("long"), // required
 * //         count: Number("long"), // required
 * //       },
 * //       OSGP: {
 * //         sizeInBytes: Number("long"), // required
 * //         count: Number("long"), // required
 * //       },
 * //       PZSOG: {
 * //         sizeInBytes: Number("long"), // required
 * //         count: Number("long"), // required
 * //       },
 * //     },
 * //     PG: {
 * //       SPOG: "<StorageMetrics>",
 * //       POGS: "<StorageMetrics>",
 * //       GPSO: "<StorageMetrics>",
 * //       OSGP: "<StorageMetrics>",
 * //       PZSOG: "<StorageMetrics>",
 * //     },
 * //   },
 * //   dictionaries: { // DictionariesInfo
 * //     total: "<StorageMetrics>",
 * //     blobs: "<StorageMetrics>",
 * //   },
 * //   undoLogs: { // UndoLogsMetrics
 * //     sizeInBytes: Number("long"), // required
 * //     listSize: Number("long"), // required
 * //   },
 * //   streams: "<StorageMetrics>",
 * //   dfeStatistics: "<StorageMetrics>",
 * //   schema: "<StorageMetrics>",
 * //   internals: "<StorageMetrics>",
 * // };
 *
 * ```
 *
 * @param GetStorageInfoCommandInput - {@link GetStorageInfoCommandInput}
 * @returns {@link GetStorageInfoCommandOutput}
 * @see {@link GetStorageInfoCommandInput} for command's `input` shape.
 * @see {@link GetStorageInfoCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Raised in case of an authentication or authorization failure.</p>
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *  <p>Raised when a request timed out in the client.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Raised when a value in a request field did not satisfy required constraints.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Raised when an argument in a request is not supported.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>Raised when the processing of the request failed unexpectedly.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Raised when an argument in a request has an invalid value.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Raised when a parameter value is not valid.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Raised when the HTTP method used by a request is not supported by the endpoint being used.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link ServerShutdownException} (server fault)
 *  <p>Raised when the server shuts down while processing a request.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Raised when the number of requests being processed exceeds the limit.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>Raised when a request attempts to initiate an operation that is not supported.</p>
 *
 * @throws {@link NeptunedataServiceException}
 * <p>Base exception class for all service exceptions from Neptunedata service.</p>
 *
 *
 * @public
 */
export class GetStorageInfoCommand extends command<GetStorageInfoCommandInput, GetStorageInfoCommandOutput>(
  _ep0,
  _mw0,
  "GetStorageInfo",
  GetStorageInfo$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetStorageOutput;
    };
    sdk: {
      input: GetStorageInfoCommandInput;
      output: GetStorageInfoCommandOutput;
    };
  };
}
