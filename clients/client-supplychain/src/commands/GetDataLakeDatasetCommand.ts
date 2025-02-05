// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDataLakeDatasetRequest, GetDataLakeDatasetResponse } from "../models/models_0";
import { de_GetDataLakeDatasetCommand, se_GetDataLakeDatasetCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataLakeDatasetCommand}.
 */
export interface GetDataLakeDatasetCommandInput extends GetDataLakeDatasetRequest {}
/**
 * @public
 *
 * The output of {@link GetDataLakeDatasetCommand}.
 */
export interface GetDataLakeDatasetCommandOutput extends GetDataLakeDatasetResponse, __MetadataBearer {}

/**
 * <p>Enables you to programmatically view an Amazon Web Services Supply Chain data lake dataset. Developers can view the data lake dataset information such as namespace, schema, and so on for a given instance ID, namespace, and dataset name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, GetDataLakeDatasetCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, GetDataLakeDatasetCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SupplyChainClient(config);
 * const input = { // GetDataLakeDatasetRequest
 *   instanceId: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new GetDataLakeDatasetCommand(input);
 * const response = await client.send(command);
 * // { // GetDataLakeDatasetResponse
 * //   dataset: { // DataLakeDataset
 * //     instanceId: "STRING_VALUE", // required
 * //     namespace: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     schema: { // DataLakeDatasetSchema
 * //       name: "STRING_VALUE", // required
 * //       fields: [ // DataLakeDatasetSchemaFieldList // required
 * //         { // DataLakeDatasetSchemaField
 * //           name: "STRING_VALUE", // required
 * //           type: "INT" || "DOUBLE" || "STRING" || "TIMESTAMP", // required
 * //           isRequired: true || false, // required
 * //         },
 * //       ],
 * //     },
 * //     description: "STRING_VALUE",
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     lastModifiedTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataLakeDatasetCommandInput - {@link GetDataLakeDatasetCommandInput}
 * @returns {@link GetDataLakeDatasetCommandOutput}
 * @see {@link GetDataLakeDatasetCommandInput} for command's `input` shape.
 * @see {@link GetDataLakeDatasetCommandOutput} for command's `response` shape.
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
 * @example Get properties of an existing AWS Supply Chain inbound order dataset
 * ```javascript
 * //
 * const input = {
 *   "name": "inbound_order",
 *   "instanceId": "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   "namespace": "asc"
 * };
 * const command = new GetDataLakeDatasetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "dataset": {
 *     "name": "inbound_order",
 *     "arn": "arn:aws:scn:us-east-1:012345678910:instance/1877dd20-dee9-4639-8e99-cb67acf21fe5/namespaces/asc/datasets/inbound_order",
 *     "createdTime": 1727116807.751,
 *     "description": "This is an AWS Supply Chain inbound order dataset",
 *     "instanceId": "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *     "lastModifiedTime": 1727116807.751,
 *     "namespace": "asc",
 *     "schema": {
 *       "name": "InboundOrder",
 *       "fields": [
 *         {
 *           "name": "id",
 *           "type": "STRING",
 *           "isRequired": true
 *         },
 *         {
 *           "name": "tpartner_id",
 *           "type": "STRING",
 *           "isRequired": true
 *         },
 *         {
 *           "name": "connection_id",
 *           "type": "STRING",
 *           "isRequired": true
 *         },
 *         {
 *           "name": "order_type",
 *           "type": "STRING",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "order_status",
 *           "type": "STRING",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "inbound_order_url",
 *           "type": "STRING",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "order_creation_date",
 *           "type": "TIMESTAMP",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "company_id",
 *           "type": "STRING",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "to_site_id",
 *           "type": "STRING",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "order_currency_uom",
 *           "type": "STRING",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "vendor_currency_uom",
 *           "type": "STRING",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "exchange_rate",
 *           "type": "DOUBLE",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "exchange_rate_date",
 *           "type": "TIMESTAMP",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "incoterm",
 *           "type": "STRING",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "incoterm2",
 *           "type": "STRING",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "incoterm_location_1",
 *           "type": "STRING",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "incoterm_location_2",
 *           "type": "STRING",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "submitted_date",
 *           "type": "TIMESTAMP",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "agreement_start_date",
 *           "type": "TIMESTAMP",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "agreement_end_date",
 *           "type": "TIMESTAMP",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "shipping_instr_code",
 *           "type": "STRING",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "payment_terms_code",
 *           "type": "STRING",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "std_terms_agreement",
 *           "type": "STRING",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "std_terms_agreement_ver",
 *           "type": "STRING",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "agreement_number",
 *           "type": "STRING",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "source",
 *           "type": "STRING",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "source_update_dttm",
 *           "type": "TIMESTAMP",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "source_event_id",
 *           "type": "STRING",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "db_creation_dttm",
 *           "type": "TIMESTAMP",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "db_updation_dttm",
 *           "type": "TIMESTAMP",
 *           "isRequired": false
 *         }
 *       ]
 *     }
 *   }
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 * @example Get proporties of an existing custom dataset
 * ```javascript
 * //
 * const input = {
 *   "name": "my_dataset",
 *   "instanceId": "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   "namespace": "default"
 * };
 * const command = new GetDataLakeDatasetCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "dataset": {
 *     "name": "my_dataset",
 *     "arn": "arn:aws:scn:us-east-1:012345678910:instance/1877dd20-dee9-4639-8e99-cb67acf21fe5/namespaces/default/datasets/my_dataset",
 *     "createdTime": 1727116807.751,
 *     "description": "This is a custom dataset",
 *     "instanceId": "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *     "lastModifiedTime": 1727116807.751,
 *     "namespace": "default",
 *     "schema": {
 *       "name": "MyDataset",
 *       "fields": [
 *         {
 *           "name": "id",
 *           "type": "INT",
 *           "isRequired": true
 *         },
 *         {
 *           "name": "description",
 *           "type": "STRING",
 *           "isRequired": true
 *         },
 *         {
 *           "name": "price",
 *           "type": "DOUBLE",
 *           "isRequired": false
 *         },
 *         {
 *           "name": "creation_time",
 *           "type": "TIMESTAMP",
 *           "isRequired": false
 *         }
 *       ]
 *     }
 *   }
 * }
 * *\/
 * // example id: example-2
 * ```
 *
 */
export class GetDataLakeDatasetCommand extends $Command
  .classBuilder<
    GetDataLakeDatasetCommandInput,
    GetDataLakeDatasetCommandOutput,
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
  .s("GalaxyPublicAPIGateway", "GetDataLakeDataset", {})
  .n("SupplyChainClient", "GetDataLakeDatasetCommand")
  .f(void 0, void 0)
  .ser(se_GetDataLakeDatasetCommand)
  .de(de_GetDataLakeDatasetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataLakeDatasetRequest;
      output: GetDataLakeDatasetResponse;
    };
    sdk: {
      input: GetDataLakeDatasetCommandInput;
      output: GetDataLakeDatasetCommandOutput;
    };
  };
}
