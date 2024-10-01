// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDataLakeDatasetsRequest, ListDataLakeDatasetsResponse } from "../models/models_0";
import { de_ListDataLakeDatasetsCommand, se_ListDataLakeDatasetsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataLakeDatasetsCommand}.
 */
export interface ListDataLakeDatasetsCommandInput extends ListDataLakeDatasetsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataLakeDatasetsCommand}.
 */
export interface ListDataLakeDatasetsCommandOutput extends ListDataLakeDatasetsResponse, __MetadataBearer {}

/**
 * <p>List the data lake datasets for a specific instance and name space.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, ListDataLakeDatasetsCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, ListDataLakeDatasetsCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * const client = new SupplyChainClient(config);
 * const input = { // ListDataLakeDatasetsRequest
 *   instanceId: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDataLakeDatasetsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataLakeDatasetsResponse
 * //   datasets: [ // DataLakeDatasetList // required
 * //     { // DataLakeDataset
 * //       instanceId: "STRING_VALUE", // required
 * //       namespace: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       schema: { // DataLakeDatasetSchema
 * //         name: "STRING_VALUE", // required
 * //         fields: [ // DataLakeDatasetSchemaFieldList // required
 * //           { // DataLakeDatasetSchemaField
 * //             name: "STRING_VALUE", // required
 * //             type: "INT" || "DOUBLE" || "STRING" || "TIMESTAMP", // required
 * //             isRequired: true || false, // required
 * //           },
 * //         ],
 * //       },
 * //       description: "STRING_VALUE",
 * //       createdTime: new Date("TIMESTAMP"), // required
 * //       lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataLakeDatasetsCommandInput - {@link ListDataLakeDatasetsCommandInput}
 * @returns {@link ListDataLakeDatasetsCommandOutput}
 * @see {@link ListDataLakeDatasetsCommandInput} for command's `input` shape.
 * @see {@link ListDataLakeDatasetsCommandOutput} for command's `response` shape.
 * @see {@link SupplyChainClientResolvedConfig | config} for SupplyChainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have the required privileges to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link SupplyChainServiceException}
 * <p>Base exception class for all service exceptions from SupplyChain service.</p>
 *
 * @public
 * @example List AWS Supply Chain datasets
 * ```javascript
 * //
 * const input = {
 *   "instanceId": "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   "namespace": "asc"
 * };
 * const command = new ListDataLakeDatasetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "datasets": [
 *     {
 *       "name": "inbound_order",
 *       "arn": "arn:aws:scn:us-east-1:012345678910:instance/1877dd20-dee9-4639-8e99-cb67acf21fe5/namespaces/asc/datasets/inbound_order",
 *       "createdTime": 1727116807.751,
 *       "description": "This is an AWS Supply Chain inbound order dataset",
 *       "instanceId": "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *       "lastModifiedTime": 1727116807.751,
 *       "namespace": "asc",
 *       "schema": {
 *         "name": "InboundOrder",
 *         "fields": [
 *           {
 *             "name": "id",
 *             "type": "STRING",
 *             "isRequired": true
 *           },
 *           {
 *             "name": "tpartner_id",
 *             "type": "STRING",
 *             "isRequired": true
 *           },
 *           {
 *             "name": "connection_id",
 *             "type": "STRING",
 *             "isRequired": true
 *           },
 *           {
 *             "name": "order_type",
 *             "type": "STRING",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "order_status",
 *             "type": "STRING",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "inbound_order_url",
 *             "type": "STRING",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "order_creation_date",
 *             "type": "TIMESTAMP",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "company_id",
 *             "type": "STRING",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "to_site_id",
 *             "type": "STRING",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "order_currency_uom",
 *             "type": "STRING",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "vendor_currency_uom",
 *             "type": "STRING",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "exchange_rate",
 *             "type": "DOUBLE",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "exchange_rate_date",
 *             "type": "TIMESTAMP",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "incoterm",
 *             "type": "STRING",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "incoterm2",
 *             "type": "STRING",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "incoterm_location_1",
 *             "type": "STRING",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "incoterm_location_2",
 *             "type": "STRING",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "submitted_date",
 *             "type": "TIMESTAMP",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "agreement_start_date",
 *             "type": "TIMESTAMP",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "agreement_end_date",
 *             "type": "TIMESTAMP",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "shipping_instr_code",
 *             "type": "STRING",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "payment_terms_code",
 *             "type": "STRING",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "std_terms_agreement",
 *             "type": "STRING",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "std_terms_agreement_ver",
 *             "type": "STRING",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "agreement_number",
 *             "type": "STRING",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "source",
 *             "type": "STRING",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "source_update_dttm",
 *             "type": "TIMESTAMP",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "source_event_id",
 *             "type": "STRING",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "db_creation_dttm",
 *             "type": "TIMESTAMP",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "db_updation_dttm",
 *             "type": "TIMESTAMP",
 *             "isRequired": false
 *           }
 *         ]
 *       }
 *     }
 *   ]
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 * @example List custom datasets using pagination
 * ```javascript
 * //
 * const input = {
 *   "instanceId": "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   "maxResults": 2,
 *   "namespace": "default",
 *   "nextToken": "next_token_returned_from_previous_list_request"
 * };
 * const command = new ListDataLakeDatasetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "datasets": [
 *     {
 *       "name": "my_dataset",
 *       "arn": "arn:aws:scn:us-east-1:012345678910:instance/1877dd20-dee9-4639-8e99-cb67acf21fe5/namespaces/default/datasets/my_dataset",
 *       "createdTime": 1727116807.751,
 *       "description": "This is a custom dataset",
 *       "instanceId": "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *       "lastModifiedTime": 1727116807.751,
 *       "namespace": "default",
 *       "schema": {
 *         "name": "MyDataset",
 *         "fields": [
 *           {
 *             "name": "id",
 *             "type": "INT",
 *             "isRequired": true
 *           },
 *           {
 *             "name": "description",
 *             "type": "STRING",
 *             "isRequired": true
 *           },
 *           {
 *             "name": "price",
 *             "type": "DOUBLE",
 *             "isRequired": false
 *           },
 *           {
 *             "name": "creation_time",
 *             "type": "TIMESTAMP",
 *             "isRequired": false
 *           }
 *         ]
 *       }
 *     },
 *     {
 *       "name": "my_dataset_2",
 *       "arn": "arn:aws:scn:us-east-1:012345678910:instance/1877dd20-dee9-4639-8e99-cb67acf21fe5/namespaces/default/datasets/my_dataset_2",
 *       "createdTime": 1727116907.751,
 *       "description": "This is a custom dataset 2",
 *       "instanceId": "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *       "lastModifiedTime": 1727116907.751,
 *       "namespace": "default",
 *       "schema": {
 *         "name": "MyDataset2",
 *         "fields": [
 *           {
 *             "name": "id",
 *             "type": "INT",
 *             "isRequired": true
 *           },
 *           {
 *             "name": "description",
 *             "type": "STRING",
 *             "isRequired": true
 *           }
 *         ]
 *       }
 *     }
 *   ],
 *   "nextToken": "next_token_for_next_list_request"
 * }
 * *\/
 * // example id: example-2
 * ```
 *
 */
export class ListDataLakeDatasetsCommand extends $Command
  .classBuilder<
    ListDataLakeDatasetsCommandInput,
    ListDataLakeDatasetsCommandOutput,
    SupplyChainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupplyChainClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GalaxyPublicAPIGateway", "ListDataLakeDatasets", {})
  .n("SupplyChainClient", "ListDataLakeDatasetsCommand")
  .f(void 0, void 0)
  .ser(se_ListDataLakeDatasetsCommand)
  .de(de_ListDataLakeDatasetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataLakeDatasetsRequest;
      output: ListDataLakeDatasetsResponse;
    };
    sdk: {
      input: ListDataLakeDatasetsCommandInput;
      output: ListDataLakeDatasetsCommandOutput;
    };
  };
}
