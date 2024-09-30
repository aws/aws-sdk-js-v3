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
