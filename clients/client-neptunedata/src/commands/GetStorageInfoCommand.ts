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
 * Retrieves storage information for the Neptune database instance, including approximate total storage used and per-category size and entry counts. Storage categories include:
 *
 * - *Quad indexes* - the indexes that store graph data, for both RDF (SPARQL) and Property Graph (Gremlin/openCypher) models.
 * - *Dictionaries* - the term dictionaries, including total dictionary storage and the portion used by blob (large value) entries.
 * - *Undo logs* - the undo logs, reported as a total size and the number of entries in the undo log list.
 * - *Streams* - the change-log streams.
 * - *Schema* - the schema.
 * - *DFE statistics* - the DFE engine statistics.
 * - *System metadata* - internal system metadata.
 *
 * When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the [neptune-db:GetStorageInfo](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getstorageinfo) IAM action in that cluster.
 *
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
 *
 * Raised in case of an authentication or authorization failure.
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *
 * Raised when a request timed out in the client.
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *
 * Raised when a value in a request field did not satisfy required constraints.
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *
 * Raised when an argument in a request is not supported.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * Raised when the processing of the request failed unexpectedly.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * Raised when an argument in a request has an invalid value.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Raised when a parameter value is not valid.
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *
 * Raised when the HTTP method used by a request is not supported by the endpoint being used.
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *
 * Raised when a precondition for processing a request is not satisfied.
 *
 * @throws {@link ServerShutdownException} (server fault)
 *
 * Raised when the server shuts down while processing a request.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Raised when the number of requests being processed exceeds the limit.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * Raised when a request attempts to initiate an operation that is not supported.
 *
 * @throws {@link NeptunedataServiceException}
 *
 * Base exception class for all service exceptions from Neptunedata service.
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
