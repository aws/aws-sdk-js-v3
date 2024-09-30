// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDataLakeDatasetRequest, CreateDataLakeDatasetResponse } from "../models/models_0";
import { de_CreateDataLakeDatasetCommand, se_CreateDataLakeDatasetCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDataLakeDatasetCommand}.
 */
export interface CreateDataLakeDatasetCommandInput extends CreateDataLakeDatasetRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataLakeDatasetCommand}.
 */
export interface CreateDataLakeDatasetCommandOutput extends CreateDataLakeDatasetResponse, __MetadataBearer {}

/**
 * <p>Create a data lake dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, CreateDataLakeDatasetCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, CreateDataLakeDatasetCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * const client = new SupplyChainClient(config);
 * const input = { // CreateDataLakeDatasetRequest
 *   instanceId: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   schema: { // DataLakeDatasetSchema
 *     name: "STRING_VALUE", // required
 *     fields: [ // DataLakeDatasetSchemaFieldList // required
 *       { // DataLakeDatasetSchemaField
 *         name: "STRING_VALUE", // required
 *         type: "INT" || "DOUBLE" || "STRING" || "TIMESTAMP", // required
 *         isRequired: true || false, // required
 *       },
 *     ],
 *   },
 *   description: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDataLakeDatasetCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataLakeDatasetResponse
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
 * @param CreateDataLakeDatasetCommandInput - {@link CreateDataLakeDatasetCommandInput}
 * @returns {@link CreateDataLakeDatasetCommandOutput}
 * @see {@link CreateDataLakeDatasetCommandInput} for command's `input` shape.
 * @see {@link CreateDataLakeDatasetCommandOutput} for command's `response` shape.
 * @see {@link SupplyChainClientResolvedConfig | config} for SupplyChainClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have the required privileges to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link SupplyChainServiceException}
 * <p>Base exception class for all service exceptions from SupplyChain service.</p>
 *
 * @public
 */
export class CreateDataLakeDatasetCommand extends $Command
  .classBuilder<
    CreateDataLakeDatasetCommandInput,
    CreateDataLakeDatasetCommandOutput,
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
  .s("GalaxyPublicAPIGateway", "CreateDataLakeDataset", {})
  .n("SupplyChainClient", "CreateDataLakeDatasetCommand")
  .f(void 0, void 0)
  .ser(se_CreateDataLakeDatasetCommand)
  .de(de_CreateDataLakeDatasetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataLakeDatasetRequest;
      output: CreateDataLakeDatasetResponse;
    };
    sdk: {
      input: CreateDataLakeDatasetCommandInput;
      output: CreateDataLakeDatasetCommandOutput;
    };
  };
}
