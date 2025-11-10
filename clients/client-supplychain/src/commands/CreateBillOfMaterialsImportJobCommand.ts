// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateBillOfMaterialsImportJobRequest, CreateBillOfMaterialsImportJobResponse } from "../models/models_0";
import { CreateBillOfMaterialsImportJob } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBillOfMaterialsImportJobCommand}.
 */
export interface CreateBillOfMaterialsImportJobCommandInput extends CreateBillOfMaterialsImportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateBillOfMaterialsImportJobCommand}.
 */
export interface CreateBillOfMaterialsImportJobCommandOutput
  extends CreateBillOfMaterialsImportJobResponse,
    __MetadataBearer {}

/**
 * <p>CreateBillOfMaterialsImportJob creates an import job for the Product Bill Of Materials (BOM) entity. For information on the product_bom entity, see the AWS Supply Chain User Guide.</p>
 *          <p>The CSV file must be located in an Amazon S3 location accessible to AWS Supply Chain. It is recommended to use the same Amazon S3 bucket created during your AWS Supply Chain instance creation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, CreateBillOfMaterialsImportJobCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, CreateBillOfMaterialsImportJobCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * // import type { SupplyChainClientConfig } from "@aws-sdk/client-supplychain";
 * const config = {}; // type is SupplyChainClientConfig
 * const client = new SupplyChainClient(config);
 * const input = { // CreateBillOfMaterialsImportJobRequest
 *   instanceId: "STRING_VALUE", // required
 *   s3uri: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateBillOfMaterialsImportJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateBillOfMaterialsImportJobResponse
 * //   jobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateBillOfMaterialsImportJobCommandInput - {@link CreateBillOfMaterialsImportJobCommandInput}
 * @returns {@link CreateBillOfMaterialsImportJobCommandOutput}
 * @see {@link CreateBillOfMaterialsImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateBillOfMaterialsImportJobCommandOutput} for command's `response` shape.
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
 *
 * @example Invoke CreateBillOfMaterialsImportJob
 * ```javascript
 * //
 * const input = {
 *   clientToken: "550e8400-e29b-41d4-a716-446655440000",
 *   instanceId: "60f82bbd-71f7-4fcd-a941-472f574c5243",
 *   s3uri: "s3://mybucketname/pathelemene/file.csv"
 * };
 * const command = new CreateBillOfMaterialsImportJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobId: "f79b359b-1515-4436-a3bf-bae7b33e47b4"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateBillOfMaterialsImportJobCommand extends $Command
  .classBuilder<
    CreateBillOfMaterialsImportJobCommandInput,
    CreateBillOfMaterialsImportJobCommandOutput,
    SupplyChainClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupplyChainClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GalaxyPublicAPIGateway", "CreateBillOfMaterialsImportJob", {})
  .n("SupplyChainClient", "CreateBillOfMaterialsImportJobCommand")
  .sc(CreateBillOfMaterialsImportJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBillOfMaterialsImportJobRequest;
      output: CreateBillOfMaterialsImportJobResponse;
    };
    sdk: {
      input: CreateBillOfMaterialsImportJobCommandInput;
      output: CreateBillOfMaterialsImportJobCommandOutput;
    };
  };
}
