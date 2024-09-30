// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDataLakeDatasetRequest, UpdateDataLakeDatasetResponse } from "../models/models_0";
import { de_UpdateDataLakeDatasetCommand, se_UpdateDataLakeDatasetCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataLakeDatasetCommand}.
 */
export interface UpdateDataLakeDatasetCommandInput extends UpdateDataLakeDatasetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataLakeDatasetCommand}.
 */
export interface UpdateDataLakeDatasetCommandOutput extends UpdateDataLakeDatasetResponse, __MetadataBearer {}

/**
 * <p>Update a data lake dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, UpdateDataLakeDatasetCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, UpdateDataLakeDatasetCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * const client = new SupplyChainClient(config);
 * const input = { // UpdateDataLakeDatasetRequest
 *   instanceId: "STRING_VALUE", // required
 *   namespace: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateDataLakeDatasetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDataLakeDatasetResponse
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
 * @param UpdateDataLakeDatasetCommandInput - {@link UpdateDataLakeDatasetCommandInput}
 * @returns {@link UpdateDataLakeDatasetCommandOutput}
 * @see {@link UpdateDataLakeDatasetCommandInput} for command's `input` shape.
 * @see {@link UpdateDataLakeDatasetCommandOutput} for command's `response` shape.
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
export class UpdateDataLakeDatasetCommand extends $Command
  .classBuilder<
    UpdateDataLakeDatasetCommandInput,
    UpdateDataLakeDatasetCommandOutput,
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
  .s("GalaxyPublicAPIGateway", "UpdateDataLakeDataset", {})
  .n("SupplyChainClient", "UpdateDataLakeDatasetCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDataLakeDatasetCommand)
  .de(de_UpdateDataLakeDatasetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataLakeDatasetRequest;
      output: UpdateDataLakeDatasetResponse;
    };
    sdk: {
      input: UpdateDataLakeDatasetCommandInput;
      output: UpdateDataLakeDatasetCommandOutput;
    };
  };
}
