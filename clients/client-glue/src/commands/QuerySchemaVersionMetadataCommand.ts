// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { QuerySchemaVersionMetadataInput, QuerySchemaVersionMetadataResponse } from "../models/models_3";
import { de_QuerySchemaVersionMetadataCommand, se_QuerySchemaVersionMetadataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link QuerySchemaVersionMetadataCommand}.
 */
export interface QuerySchemaVersionMetadataCommandInput extends QuerySchemaVersionMetadataInput {}
/**
 * @public
 *
 * The output of {@link QuerySchemaVersionMetadataCommand}.
 */
export interface QuerySchemaVersionMetadataCommandOutput extends QuerySchemaVersionMetadataResponse, __MetadataBearer {}

/**
 * <p>Queries for the schema version metadata information. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, QuerySchemaVersionMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, QuerySchemaVersionMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // QuerySchemaVersionMetadataInput
 *   SchemaId: { // SchemaId
 *     SchemaArn: "STRING_VALUE",
 *     SchemaName: "STRING_VALUE",
 *     RegistryName: "STRING_VALUE",
 *   },
 *   SchemaVersionNumber: { // SchemaVersionNumber
 *     LatestVersion: true || false,
 *     VersionNumber: Number("long"),
 *   },
 *   SchemaVersionId: "STRING_VALUE",
 *   MetadataList: [ // MetadataList
 *     { // MetadataKeyValuePair
 *       MetadataKey: "STRING_VALUE",
 *       MetadataValue: "STRING_VALUE",
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new QuerySchemaVersionMetadataCommand(input);
 * const response = await client.send(command);
 * // { // QuerySchemaVersionMetadataResponse
 * //   MetadataInfoMap: { // MetadataInfoMap
 * //     "<keys>": { // MetadataInfo
 * //       MetadataValue: "STRING_VALUE",
 * //       CreatedTime: "STRING_VALUE",
 * //       OtherMetadataValueList: [ // OtherMetadataValueList
 * //         { // OtherMetadataValueListItem
 * //           MetadataValue: "STRING_VALUE",
 * //           CreatedTime: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   SchemaVersionId: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param QuerySchemaVersionMetadataCommandInput - {@link QuerySchemaVersionMetadataCommandInput}
 * @returns {@link QuerySchemaVersionMetadataCommandOutput}
 * @see {@link QuerySchemaVersionMetadataCommandInput} for command's `input` shape.
 * @see {@link QuerySchemaVersionMetadataCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class QuerySchemaVersionMetadataCommand extends $Command
  .classBuilder<
    QuerySchemaVersionMetadataCommandInput,
    QuerySchemaVersionMetadataCommandOutput,
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
  .s("AWSGlue", "QuerySchemaVersionMetadata", {})
  .n("GlueClient", "QuerySchemaVersionMetadataCommand")
  .f(void 0, void 0)
  .ser(se_QuerySchemaVersionMetadataCommand)
  .de(de_QuerySchemaVersionMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: QuerySchemaVersionMetadataInput;
      output: QuerySchemaVersionMetadataResponse;
    };
    sdk: {
      input: QuerySchemaVersionMetadataCommandInput;
      output: QuerySchemaVersionMetadataCommandOutput;
    };
  };
}
