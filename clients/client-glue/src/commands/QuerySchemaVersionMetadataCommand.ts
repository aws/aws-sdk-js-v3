// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { QuerySchemaVersionMetadataInput, QuerySchemaVersionMetadataResponse } from "../models/models_3";
import { QuerySchemaVersionMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Queries for the schema version metadata information.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, QuerySchemaVersionMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, QuerySchemaVersionMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
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
 *
 * Access to a resource was denied.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class QuerySchemaVersionMetadataCommand extends command<QuerySchemaVersionMetadataCommandInput, QuerySchemaVersionMetadataCommandOutput>(
  _ep0,
  _mw0,
  "QuerySchemaVersionMetadata",
  QuerySchemaVersionMetadata$
) {
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
