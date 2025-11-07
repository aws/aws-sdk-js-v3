// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetIntegrationTablePropertiesRequest, GetIntegrationTablePropertiesResponse } from "../models/models_2";
import { GetIntegrationTableProperties } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIntegrationTablePropertiesCommand}.
 */
export interface GetIntegrationTablePropertiesCommandInput extends GetIntegrationTablePropertiesRequest {}
/**
 * @public
 *
 * The output of {@link GetIntegrationTablePropertiesCommand}.
 */
export interface GetIntegrationTablePropertiesCommandOutput
  extends GetIntegrationTablePropertiesResponse,
    __MetadataBearer {}

/**
 * <p>This API is used to retrieve optional override properties for the tables that need to be replicated. These properties can include properties for filtering and partition for source and target tables.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetIntegrationTablePropertiesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetIntegrationTablePropertiesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetIntegrationTablePropertiesRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 * };
 * const command = new GetIntegrationTablePropertiesCommand(input);
 * const response = await client.send(command);
 * // { // GetIntegrationTablePropertiesResponse
 * //   ResourceArn: "STRING_VALUE",
 * //   TableName: "STRING_VALUE",
 * //   SourceTableConfig: { // SourceTableConfig
 * //     Fields: [ // SourceTableFieldsList
 * //       "STRING_VALUE",
 * //     ],
 * //     FilterPredicate: "STRING_VALUE",
 * //     PrimaryKey: [ // PrimaryKeyList
 * //       "STRING_VALUE",
 * //     ],
 * //     RecordUpdateField: "STRING_VALUE",
 * //   },
 * //   TargetTableConfig: { // TargetTableConfig
 * //     UnnestSpec: "TOPLEVEL" || "FULL" || "NOUNNEST",
 * //     PartitionSpec: [ // IntegrationPartitionSpecList
 * //       { // IntegrationPartition
 * //         FieldName: "STRING_VALUE",
 * //         FunctionSpec: "STRING_VALUE",
 * //         ConversionSpec: "STRING_VALUE",
 * //       },
 * //     ],
 * //     TargetTableName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIntegrationTablePropertiesCommandInput - {@link GetIntegrationTablePropertiesCommandInput}
 * @returns {@link GetIntegrationTablePropertiesCommandOutput}
 * @see {@link GetIntegrationTablePropertiesCommandInput} for command's `input` shape.
 * @see {@link GetIntegrationTablePropertiesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A value could not be validated.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetIntegrationTablePropertiesCommand extends $Command
  .classBuilder<
    GetIntegrationTablePropertiesCommandInput,
    GetIntegrationTablePropertiesCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetIntegrationTableProperties", {})
  .n("GlueClient", "GetIntegrationTablePropertiesCommand")
  .sc(GetIntegrationTableProperties)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIntegrationTablePropertiesRequest;
      output: GetIntegrationTablePropertiesResponse;
    };
    sdk: {
      input: GetIntegrationTablePropertiesCommandInput;
      output: GetIntegrationTablePropertiesCommandOutput;
    };
  };
}
