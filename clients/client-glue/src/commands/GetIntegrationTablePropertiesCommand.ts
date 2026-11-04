// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetIntegrationTablePropertiesRequest, GetIntegrationTablePropertiesResponse } from "../models/models_2";
import { GetIntegrationTableProperties$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetIntegrationTablePropertiesCommandOutput extends GetIntegrationTablePropertiesResponse, __MetadataBearer {}

/**
 * This API is used to retrieve optional override properties for the tables that need to be replicated. These properties can include properties for filtering and partition for source and target tables.
 *
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
 * //     IntegrationArn: "STRING_VALUE",
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
 *
 * Access to a resource was denied.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A value could not be validated.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class GetIntegrationTablePropertiesCommand extends command<GetIntegrationTablePropertiesCommandInput, GetIntegrationTablePropertiesCommandOutput>(
  _ep0,
  _mw0,
  "GetIntegrationTableProperties",
  GetIntegrationTableProperties$
) {
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
