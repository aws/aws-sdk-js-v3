// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetPlanRequest, GetPlanResponse } from "../models/models_1";
import { de_GetPlanCommand, se_GetPlanCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPlanCommand}.
 */
export interface GetPlanCommandInput extends GetPlanRequest {}
/**
 * @public
 *
 * The output of {@link GetPlanCommand}.
 */
export interface GetPlanCommandOutput extends GetPlanResponse, __MetadataBearer {}

/**
 * <p>Gets code to perform a specified mapping.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetPlanCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetPlanCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetPlanRequest
 *   Mapping: [ // MappingList // required
 *     { // MappingEntry
 *       SourceTable: "STRING_VALUE",
 *       SourcePath: "STRING_VALUE",
 *       SourceType: "STRING_VALUE",
 *       TargetTable: "STRING_VALUE",
 *       TargetPath: "STRING_VALUE",
 *       TargetType: "STRING_VALUE",
 *     },
 *   ],
 *   Source: { // CatalogEntry
 *     DatabaseName: "STRING_VALUE", // required
 *     TableName: "STRING_VALUE", // required
 *   },
 *   Sinks: [ // CatalogEntries
 *     {
 *       DatabaseName: "STRING_VALUE", // required
 *       TableName: "STRING_VALUE", // required
 *     },
 *   ],
 *   Location: { // Location
 *     Jdbc: [ // CodeGenNodeArgs
 *       { // CodeGenNodeArg
 *         Name: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *         Param: true || false,
 *       },
 *     ],
 *     S3: [
 *       {
 *         Name: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *         Param: true || false,
 *       },
 *     ],
 *     DynamoDB: [
 *       {
 *         Name: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *         Param: true || false,
 *       },
 *     ],
 *   },
 *   Language: "PYTHON" || "SCALA",
 *   AdditionalPlanOptionsMap: { // AdditionalPlanOptionsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GetPlanCommand(input);
 * const response = await client.send(command);
 * // { // GetPlanResponse
 * //   PythonScript: "STRING_VALUE",
 * //   ScalaCode: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPlanCommandInput - {@link GetPlanCommandInput}
 * @returns {@link GetPlanCommandOutput}
 * @see {@link GetPlanCommandInput} for command's `input` shape.
 * @see {@link GetPlanCommandOutput} for command's `response` shape.
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
export class GetPlanCommand extends $Command
  .classBuilder<
    GetPlanCommandInput,
    GetPlanCommandOutput,
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
  .s("AWSGlue", "GetPlan", {})
  .n("GlueClient", "GetPlanCommand")
  .f(void 0, void 0)
  .ser(se_GetPlanCommand)
  .de(de_GetPlanCommand)
  .build() {}
