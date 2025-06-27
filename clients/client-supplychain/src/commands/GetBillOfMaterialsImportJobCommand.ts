// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetBillOfMaterialsImportJobRequest, GetBillOfMaterialsImportJobResponse } from "../models/models_0";
import {
  de_GetBillOfMaterialsImportJobCommand,
  se_GetBillOfMaterialsImportJobCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupplyChainClientResolvedConfig } from "../SupplyChainClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBillOfMaterialsImportJobCommand}.
 */
export interface GetBillOfMaterialsImportJobCommandInput extends GetBillOfMaterialsImportJobRequest {}
/**
 * @public
 *
 * The output of {@link GetBillOfMaterialsImportJobCommand}.
 */
export interface GetBillOfMaterialsImportJobCommandOutput
  extends GetBillOfMaterialsImportJobResponse,
    __MetadataBearer {}

/**
 * <p>Get status and details of a BillOfMaterialsImportJob.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupplyChainClient, GetBillOfMaterialsImportJobCommand } from "@aws-sdk/client-supplychain"; // ES Modules import
 * // const { SupplyChainClient, GetBillOfMaterialsImportJobCommand } = require("@aws-sdk/client-supplychain"); // CommonJS import
 * const client = new SupplyChainClient(config);
 * const input = { // GetBillOfMaterialsImportJobRequest
 *   instanceId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetBillOfMaterialsImportJobCommand(input);
 * const response = await client.send(command);
 * // { // GetBillOfMaterialsImportJobResponse
 * //   job: { // BillOfMaterialsImportJob
 * //     instanceId: "STRING_VALUE", // required
 * //     jobId: "STRING_VALUE", // required
 * //     status: "NEW" || "FAILED" || "IN_PROGRESS" || "QUEUED" || "SUCCESS", // required
 * //     s3uri: "STRING_VALUE", // required
 * //     message: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBillOfMaterialsImportJobCommandInput - {@link GetBillOfMaterialsImportJobCommandInput}
 * @returns {@link GetBillOfMaterialsImportJobCommandOutput}
 * @see {@link GetBillOfMaterialsImportJobCommandInput} for command's `input` shape.
 * @see {@link GetBillOfMaterialsImportJobCommandOutput} for command's `response` shape.
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
 * @example Invoke GetBillOfMaterialsImportJob for a successful job
 * ```javascript
 * //
 * const input = {
 *   instanceId: "60f82bbd-71f7-4fcd-a941-472f574c5243",
 *   jobId: "f79b359b-1515-4436-a3bf-bae7b33e47b4"
 * };
 * const command = new GetBillOfMaterialsImportJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   job: {
 *     instanceId: "60f82bbd-71f7-4fcd-a941-472f574c5243",
 *     jobId: "f79b359b-1515-4436-a3bf-bae7b33e47b4",
 *     message: "Import job completed successfully.",
 *     s3uri: "s3://mybucketname/pathelemene/file.csv",
 *     status: "SUCCESS"
 *   }
 * }
 * *\/
 * ```
 *
 * @example Invoke GetBillOfMaterialsImportJob for an in-progress job
 * ```javascript
 * //
 * const input = {
 *   instanceId: "60f82bbd-71f7-4fcd-a941-472f574c5243",
 *   jobId: "f79b359b-1515-4436-a3bf-bae7b33e47b4"
 * };
 * const command = new GetBillOfMaterialsImportJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   job: {
 *     instanceId: "60f82bbd-71f7-4fcd-a941-472f574c5243",
 *     jobId: "f79b359b-1515-4436-a3bf-bae7b33e47b4",
 *     s3uri: "s3://mybucketname/pathelemene/file.csv",
 *     status: "IN_PROGRESS"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBillOfMaterialsImportJobCommand extends $Command
  .classBuilder<
    GetBillOfMaterialsImportJobCommandInput,
    GetBillOfMaterialsImportJobCommandOutput,
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
  .s("GalaxyPublicAPIGateway", "GetBillOfMaterialsImportJob", {})
  .n("SupplyChainClient", "GetBillOfMaterialsImportJobCommand")
  .f(void 0, void 0)
  .ser(se_GetBillOfMaterialsImportJobCommand)
  .de(de_GetBillOfMaterialsImportJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBillOfMaterialsImportJobRequest;
      output: GetBillOfMaterialsImportJobResponse;
    };
    sdk: {
      input: GetBillOfMaterialsImportJobCommandInput;
      output: GetBillOfMaterialsImportJobCommandOutput;
    };
  };
}
