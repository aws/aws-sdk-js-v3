// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDataLakeDatasetRequest, GetDataLakeDatasetResponse } from "../models/models_0";
import { GetDataLakeDataset } from "../schemas/schemas_0";
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
 * // import type { SupplyChainClientConfig } from "@aws-sdk/client-supplychain";
 * const config = {}; // type is SupplyChainClientConfig
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
 * //           type: "INT" || "DOUBLE" || "STRING" || "TIMESTAMP" || "LONG", // required
 * //           isRequired: true || false, // required
 * //         },
 * //       ],
 * //       primaryKeys: [ // DataLakeDatasetPrimaryKeyFieldList
 * //         { // DataLakeDatasetPrimaryKeyField
 * //           name: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     description: "STRING_VALUE",
 * //     partitionSpec: { // DataLakeDatasetPartitionSpec
 * //       fields: [ // DataLakeDatasetPartitionFieldList // required
 * //         { // DataLakeDatasetPartitionField
 * //           name: "STRING_VALUE", // required
 * //           transform: { // DataLakeDatasetPartitionFieldTransform
 * //             type: "YEAR" || "MONTH" || "DAY" || "HOUR" || "IDENTITY", // required
 * //           },
 * //         },
 * //       ],
 * //     },
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
 *
 * @example Get properties of an existing AWS Supply Chain inbound order dataset
 * ```javascript
 * //
 * const input = {
 *   instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   name: "inbound_order",
 *   namespace: "asc"
 * };
 * const command = new GetDataLakeDatasetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   dataset: {
 *     arn: "arn:aws:scn:us-east-1:012345678910:instance/1877dd20-dee9-4639-8e99-cb67acf21fe5/namespaces/asc/datasets/inbound_order",
 *     createdTime: 1.727116807751E9,
 *     description: "This is an AWS Supply Chain inbound order dataset",
 *     instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *     lastModifiedTime: 1.727116807751E9,
 *     name: "inbound_order",
 *     namespace: "asc",
 *     schema: {
 *       fields: [
 *         {
 *           isRequired: true,
 *           name: "id",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: true,
 *           name: "tpartner_id",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: true,
 *           name: "connection_id",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "order_type",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "order_status",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "inbound_order_url",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "order_creation_date",
 *           type: "TIMESTAMP"
 *         },
 *         {
 *           isRequired: false,
 *           name: "company_id",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "to_site_id",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "order_currency_uom",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "vendor_currency_uom",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "exchange_rate",
 *           type: "DOUBLE"
 *         },
 *         {
 *           isRequired: false,
 *           name: "exchange_rate_date",
 *           type: "TIMESTAMP"
 *         },
 *         {
 *           isRequired: false,
 *           name: "incoterm",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "incoterm2",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "incoterm_location_1",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "incoterm_location_2",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "submitted_date",
 *           type: "TIMESTAMP"
 *         },
 *         {
 *           isRequired: false,
 *           name: "agreement_start_date",
 *           type: "TIMESTAMP"
 *         },
 *         {
 *           isRequired: false,
 *           name: "agreement_end_date",
 *           type: "TIMESTAMP"
 *         },
 *         {
 *           isRequired: false,
 *           name: "shipping_instr_code",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "payment_terms_code",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "std_terms_agreement",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "std_terms_agreement_ver",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "agreement_number",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "source",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "source_update_dttm",
 *           type: "TIMESTAMP"
 *         },
 *         {
 *           isRequired: false,
 *           name: "source_event_id",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "db_creation_dttm",
 *           type: "TIMESTAMP"
 *         },
 *         {
 *           isRequired: false,
 *           name: "db_updation_dttm",
 *           type: "TIMESTAMP"
 *         }
 *       ],
 *       name: "InboundOrder"
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @example Get proporties of an existing custom dataset
 * ```javascript
 * //
 * const input = {
 *   instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *   name: "my_dataset",
 *   namespace: "default"
 * };
 * const command = new GetDataLakeDatasetCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   dataset: {
 *     arn: "arn:aws:scn:us-east-1:012345678910:instance/1877dd20-dee9-4639-8e99-cb67acf21fe5/namespaces/default/datasets/my_dataset",
 *     createdTime: 1.727116807751E9,
 *     description: "This is a custom dataset",
 *     instanceId: "1877dd20-dee9-4639-8e99-cb67acf21fe5",
 *     lastModifiedTime: 1.727116807751E9,
 *     name: "my_dataset",
 *     namespace: "default",
 *     partitionSpec: {
 *       fields: [
 *         {
 *           name: "creation_time",
 *           transform: {
 *             type: "DAY"
 *           }
 *         },
 *         {
 *           name: "description",
 *           transform: {
 *             type: "IDENTITY"
 *           }
 *         }
 *       ]
 *     },
 *     schema: {
 *       fields: [
 *         {
 *           isRequired: true,
 *           name: "id",
 *           type: "INT"
 *         },
 *         {
 *           isRequired: true,
 *           name: "description",
 *           type: "STRING"
 *         },
 *         {
 *           isRequired: false,
 *           name: "price",
 *           type: "DOUBLE"
 *         },
 *         {
 *           isRequired: false,
 *           name: "creation_time",
 *           type: "TIMESTAMP"
 *         },
 *         {
 *           isRequired: false,
 *           name: "quantity",
 *           type: "LONG"
 *         }
 *       ],
 *       name: "MyDataset",
 *       primaryKeys: [
 *         {
 *           name: "id"
 *         }
 *       ]
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @public
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GalaxyPublicAPIGateway", "GetDataLakeDataset", {})
  .n("SupplyChainClient", "GetDataLakeDatasetCommand")
  .sc(GetDataLakeDataset)
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
