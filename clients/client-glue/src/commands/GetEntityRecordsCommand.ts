// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEntityRecordsRequest, GetEntityRecordsResponse } from "../models/models_2";
import { GetEntityRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEntityRecordsCommand}.
 */
export interface GetEntityRecordsCommandInput extends GetEntityRecordsRequest {}
/**
 * @public
 *
 * The output of {@link GetEntityRecordsCommand}.
 */
export interface GetEntityRecordsCommandOutput extends GetEntityRecordsResponse, __MetadataBearer {}

/**
 * This API is used to query preview data from a given connection type or from a native Amazon S3 based Glue Data Catalog.
 *
 * Returns records as an array of JSON blobs. Each record is formatted using Jackson JsonNode based on the field type defined by the `DescribeEntity` API.
 *
 * Spark connectors generate schemas according to the same data type mapping as in the `DescribeEntity` API. Spark connectors convert data to the appropriate data types matching the schema when returning rows.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetEntityRecordsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetEntityRecordsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetEntityRecordsRequest
 *   ConnectionName: "STRING_VALUE",
 *   CatalogId: "STRING_VALUE",
 *   EntityName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   DataStoreApiVersion: "STRING_VALUE",
 *   ConnectionOptions: { // ConnectionOptions
 *     "<keys>": "STRING_VALUE",
 *   },
 *   FilterPredicate: "STRING_VALUE",
 *   Limit: Number("long"), // required
 *   OrderBy: "STRING_VALUE",
 *   SelectedFields: [ // SelectedFields
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetEntityRecordsCommand(input);
 * const response = await client.send(command);
 * // { // GetEntityRecordsResponse
 * //   Records: [ // Records
 * //     "DOCUMENT_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEntityRecordsCommandInput - {@link GetEntityRecordsCommandInput}
 * @returns {@link GetEntityRecordsCommandOutput}
 * @see {@link GetEntityRecordsCommandInput} for command's `input` shape.
 * @see {@link GetEntityRecordsCommandOutput} for command's `response` shape.
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
 * @throws {@link FederationSourceException} (client fault)
 *
 * A federation source failed.
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *
 * An encryption operation failed.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
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
export class GetEntityRecordsCommand extends command<GetEntityRecordsCommandInput, GetEntityRecordsCommandOutput>(
  _ep0,
  _mw0,
  "GetEntityRecords",
  GetEntityRecords$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEntityRecordsRequest;
      output: GetEntityRecordsResponse;
    };
    sdk: {
      input: GetEntityRecordsCommandInput;
      output: GetEntityRecordsCommandOutput;
    };
  };
}
