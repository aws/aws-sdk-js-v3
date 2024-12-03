// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  GetEntityRecordsRequest,
  GetEntityRecordsResponse,
  GetEntityRecordsResponseFilterSensitiveLog,
} from "../models/models_2";
import { de_GetEntityRecordsCommand, se_GetEntityRecordsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This API is used to query preview data from a given connection type or from a native Amazon S3 based Glue Data Catalog.</p>
 *          <p>Returns records as an array of JSON blobs. Each record is formatted using Jackson JsonNode based on the field type defined by the <code>DescribeEntity</code> API.</p>
 *          <p>Spark connectors generate schemas according to the same data type mapping as in the <code>DescribeEntity</code> API. Spark connectors convert data to the appropriate data types matching the schema when returning rows.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetEntityRecordsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetEntityRecordsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
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
 * @public
 */
export class GetEntityRecordsCommand extends $Command
  .classBuilder<
    GetEntityRecordsCommandInput,
    GetEntityRecordsCommandOutput,
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
  .s("AWSGlue", "GetEntityRecords", {})
  .n("GlueClient", "GetEntityRecordsCommand")
  .f(void 0, GetEntityRecordsResponseFilterSensitiveLog)
  .ser(se_GetEntityRecordsCommand)
  .de(de_GetEntityRecordsCommand)
  .build() {
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
