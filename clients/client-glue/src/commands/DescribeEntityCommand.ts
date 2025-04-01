// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DescribeEntityRequest, DescribeEntityResponse } from "../models/models_1";
import { de_DescribeEntityCommand, se_DescribeEntityCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEntityCommand}.
 */
export interface DescribeEntityCommandInput extends DescribeEntityRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEntityCommand}.
 */
export interface DescribeEntityCommandOutput extends DescribeEntityResponse, __MetadataBearer {}

/**
 * <p>Provides details regarding the entity used with the connection type, with a description of the data model for each field in the selected entity.</p>
 *          <p> The response includes all the fields which make up the entity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DescribeEntityCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DescribeEntityCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // DescribeEntityRequest
 *   ConnectionName: "STRING_VALUE", // required
 *   CatalogId: "STRING_VALUE",
 *   EntityName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   DataStoreApiVersion: "STRING_VALUE",
 * };
 * const command = new DescribeEntityCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEntityResponse
 * //   Fields: [ // FieldsList
 * //     { // Field
 * //       FieldName: "STRING_VALUE",
 * //       Label: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       FieldType: "INT" || "SMALLINT" || "BIGINT" || "FLOAT" || "LONG" || "DATE" || "BOOLEAN" || "MAP" || "ARRAY" || "STRING" || "TIMESTAMP" || "DECIMAL" || "BYTE" || "SHORT" || "DOUBLE" || "STRUCT",
 * //       IsPrimaryKey: true || false,
 * //       IsNullable: true || false,
 * //       IsRetrievable: true || false,
 * //       IsFilterable: true || false,
 * //       IsPartitionable: true || false,
 * //       IsCreateable: true || false,
 * //       IsUpdateable: true || false,
 * //       IsUpsertable: true || false,
 * //       IsDefaultOnCreate: true || false,
 * //       SupportedValues: [ // ListOfString
 * //         "STRING_VALUE",
 * //       ],
 * //       SupportedFilterOperators: [ // FieldFilterOperatorsList
 * //         "LESS_THAN" || "GREATER_THAN" || "BETWEEN" || "EQUAL_TO" || "NOT_EQUAL_TO" || "GREATER_THAN_OR_EQUAL_TO" || "LESS_THAN_OR_EQUAL_TO" || "CONTAINS" || "ORDER_BY",
 * //       ],
 * //       ParentField: "STRING_VALUE",
 * //       NativeDataType: "STRING_VALUE",
 * //       CustomProperties: { // CustomProperties
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEntityCommandInput - {@link DescribeEntityCommandInput}
 * @returns {@link DescribeEntityCommandOutput}
 * @see {@link DescribeEntityCommandInput} for command's `input` shape.
 * @see {@link DescribeEntityCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link FederationSourceException} (client fault)
 *  <p>A federation source failed.</p>
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
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
export class DescribeEntityCommand extends $Command
  .classBuilder<
    DescribeEntityCommandInput,
    DescribeEntityCommandOutput,
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
  .s("AWSGlue", "DescribeEntity", {})
  .n("GlueClient", "DescribeEntityCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEntityCommand)
  .de(de_DescribeEntityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEntityRequest;
      output: DescribeEntityResponse;
    };
    sdk: {
      input: DescribeEntityCommandInput;
      output: DescribeEntityCommandOutput;
    };
  };
}
