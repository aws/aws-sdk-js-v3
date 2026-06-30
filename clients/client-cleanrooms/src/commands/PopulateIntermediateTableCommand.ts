// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PopulateIntermediateTableInput, PopulateIntermediateTableOutput } from "../models/models_0";
import { PopulateIntermediateTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Executes the stored query of an intermediate table to materialize data into managed storage. With this operation, you can perform initial population and subsequent refreshes. Each call creates a new version. The returned analysis ID can be tracked using <code>GetProtectedQuery</code>. Only the intermediate table owner can call this operation.</p>
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
 *       type: "CR.1X" || "CR.4X",
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
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request denied because service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 *
 * @public
 */
export class PopulateIntermediateTableCommand extends $Command
  .classBuilder<
    PopulateIntermediateTableCommandInput,
    PopulateIntermediateTableCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "PopulateIntermediateTable", {})
  .n("CleanRoomsClient", "PopulateIntermediateTableCommand")
  .sc(PopulateIntermediateTable$)
  .build() {
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
