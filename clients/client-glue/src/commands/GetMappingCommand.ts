// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetMappingRequest, GetMappingResponse } from "../models/models_2";
import { de_GetMappingCommand, se_GetMappingCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMappingCommand}.
 */
export interface GetMappingCommandInput extends GetMappingRequest {}
/**
 * @public
 *
 * The output of {@link GetMappingCommand}.
 */
export interface GetMappingCommandOutput extends GetMappingResponse, __MetadataBearer {}

/**
 * <p>Creates mappings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetMappingCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetMappingCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetMappingRequest
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
 * };
 * const command = new GetMappingCommand(input);
 * const response = await client.send(command);
 * // { // GetMappingResponse
 * //   Mapping: [ // MappingList // required
 * //     { // MappingEntry
 * //       SourceTable: "STRING_VALUE",
 * //       SourcePath: "STRING_VALUE",
 * //       SourceType: "STRING_VALUE",
 * //       TargetTable: "STRING_VALUE",
 * //       TargetPath: "STRING_VALUE",
 * //       TargetType: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMappingCommandInput - {@link GetMappingCommandInput}
 * @returns {@link GetMappingCommandOutput}
 * @see {@link GetMappingCommandInput} for command's `input` shape.
 * @see {@link GetMappingCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
export class GetMappingCommand extends $Command
  .classBuilder<
    GetMappingCommandInput,
    GetMappingCommandOutput,
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
  .s("AWSGlue", "GetMapping", {})
  .n("GlueClient", "GetMappingCommand")
  .f(void 0, void 0)
  .ser(se_GetMappingCommand)
  .de(de_GetMappingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMappingRequest;
      output: GetMappingResponse;
    };
    sdk: {
      input: GetMappingCommandInput;
      output: GetMappingCommandOutput;
    };
  };
}
