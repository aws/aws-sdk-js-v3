// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIntegrationTablePropertiesRequest, ListIntegrationTablePropertiesResponse } from "../models/models_2";
import { ListIntegrationTableProperties$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIntegrationTablePropertiesCommand}.
 */
export interface ListIntegrationTablePropertiesCommandInput extends ListIntegrationTablePropertiesRequest {}
/**
 * @public
 *
 * The output of {@link ListIntegrationTablePropertiesCommand}.
 */
export interface ListIntegrationTablePropertiesCommandOutput extends ListIntegrationTablePropertiesResponse, __MetadataBearer {}

/**
 * <p>Lists the integration table properties in your account. This operation supports filtering and pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListIntegrationTablePropertiesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListIntegrationTablePropertiesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListIntegrationTablePropertiesRequest
 *   Marker: "STRING_VALUE",
 *   Filters: [ // IntegrationTablePropertiesFilterList
 *     { // IntegrationTablePropertiesFilter
 *       Name: "STRING_VALUE",
 *       Values: [ // IntegrationTablePropertiesFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 * };
 * const command = new ListIntegrationTablePropertiesCommand(input);
 * const response = await client.send(command);
 * // { // ListIntegrationTablePropertiesResponse
 * //   IntegrationTablePropertiesList: [ // IntegrationTablePropertiesList
 * //     { // IntegrationTableProperties
 * //       ResourceArn: "STRING_VALUE", // required
 * //       TableName: "STRING_VALUE", // required
 * //       SourceTableConfig: { // SourceTableConfig
 * //         Fields: [ // SourceTableFieldsList
 * //           "STRING_VALUE",
 * //         ],
 * //         FilterPredicate: "STRING_VALUE",
 * //         PrimaryKey: [ // PrimaryKeyList
 * //           "STRING_VALUE",
 * //         ],
 * //         RecordUpdateField: "STRING_VALUE",
 * //       },
 * //       TargetTableConfig: { // TargetTableConfig
 * //         UnnestSpec: "TOPLEVEL" || "FULL" || "NOUNNEST",
 * //         PartitionSpec: [ // IntegrationPartitionSpecList
 * //           { // IntegrationPartition
 * //             FieldName: "STRING_VALUE",
 * //             FunctionSpec: "STRING_VALUE",
 * //             ConversionSpec: "STRING_VALUE",
 * //           },
 * //         ],
 * //         TargetTableName: "STRING_VALUE",
 * //         IntegrationArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIntegrationTablePropertiesCommandInput - {@link ListIntegrationTablePropertiesCommandInput}
 * @returns {@link ListIntegrationTablePropertiesCommandOutput}
 * @see {@link ListIntegrationTablePropertiesCommandInput} for command's `input` shape.
 * @see {@link ListIntegrationTablePropertiesCommandOutput} for command's `response` shape.
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
export class ListIntegrationTablePropertiesCommand extends command<ListIntegrationTablePropertiesCommandInput, ListIntegrationTablePropertiesCommandOutput>(
  _ep0,
  _mw0,
  "ListIntegrationTableProperties",
  ListIntegrationTableProperties$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIntegrationTablePropertiesRequest;
      output: ListIntegrationTablePropertiesResponse;
    };
    sdk: {
      input: ListIntegrationTablePropertiesCommandInput;
      output: ListIntegrationTablePropertiesCommandOutput;
    };
  };
}
