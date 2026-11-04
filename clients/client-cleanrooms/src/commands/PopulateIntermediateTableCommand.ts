// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PopulateIntermediateTableInput, PopulateIntermediateTableOutput } from "../models/models_1";
import { PopulateIntermediateTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PopulateIntermediateTableCommand}.
 */
export interface PopulateIntermediateTableCommandInput extends PopulateIntermediateTableInput {}
/**
 * @public
 *
 * The output of {@link PopulateIntermediateTableCommand}.
 */
export interface PopulateIntermediateTableCommandOutput extends PopulateIntermediateTableOutput, __MetadataBearer {}

/**
 * Runs the stored query of an intermediate table and makes the results available for querying. Each call creates a new version. Use `GetProtectedQuery` with the returned analysis ID to track progress. Only the intermediate table owner can call this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, PopulateIntermediateTableCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, PopulateIntermediateTableCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // PopulateIntermediateTableInput
 *   intermediateTableIdentifier: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 *   parameters: { // ParameterMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   computeConfiguration: { // IntermediateTableComputeConfiguration Union: only one key present
 *     queryComputeConfiguration: { // WorkerComputeConfiguration
 *       type: "CR.1X" || "CR.4X" || "CR.8X",
 *       number: Number("int"),
 *       properties: { // WorkerComputeConfigurationProperties Union: only one key present
 *         spark: { // SparkProperties
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 *   analysisPayerAccountId: "STRING_VALUE",
 * };
 * const command = new PopulateIntermediateTableCommand(input);
 * const response = await client.send(command);
 * // { // PopulateIntermediateTableOutput
 * //   analysisId: "STRING_VALUE", // required
 * //   analysisType: "QUERY", // required
 * //   versionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PopulateIntermediateTableCommandInput - {@link PopulateIntermediateTableCommandInput}
 * @returns {@link PopulateIntermediateTableCommandOutput}
 * @see {@link PopulateIntermediateTableCommandInput} for command's `input` shape.
 * @see {@link PopulateIntermediateTableCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request denied because service quota has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CleanRoomsServiceException}
 *
 * Base exception class for all service exceptions from CleanRooms service.
 *
 * @public
 */
export class PopulateIntermediateTableCommand extends command<PopulateIntermediateTableCommandInput, PopulateIntermediateTableCommandOutput>(
  _ep0,
  _mw0,
  "PopulateIntermediateTable",
  PopulateIntermediateTable$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PopulateIntermediateTableInput;
      output: PopulateIntermediateTableOutput;
    };
    sdk: {
      input: PopulateIntermediateTableCommandInput;
      output: PopulateIntermediateTableCommandOutput;
    };
  };
}
