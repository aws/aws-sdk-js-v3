// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeReservedCapacityRequest, DescribeReservedCapacityResponse } from "../models/models_3";
import { de_DescribeReservedCapacityCommand, se_DescribeReservedCapacityCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReservedCapacityCommand}.
 */
export interface DescribeReservedCapacityCommandInput extends DescribeReservedCapacityRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReservedCapacityCommand}.
 */
export interface DescribeReservedCapacityCommandOutput extends DescribeReservedCapacityResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about a reserved capacity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeReservedCapacityCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeReservedCapacityCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeReservedCapacityRequest
 *   ReservedCapacityArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeReservedCapacityCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReservedCapacityResponse
 * //   ReservedCapacityArn: "STRING_VALUE", // required
 * //   ReservedCapacityType: "UltraServer" || "Instance",
 * //   Status: "Pending" || "Active" || "Scheduled" || "Expired" || "Failed",
 * //   AvailabilityZone: "STRING_VALUE",
 * //   DurationHours: Number("long"),
 * //   DurationMinutes: Number("long"),
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EndTime: new Date("TIMESTAMP"),
 * //   InstanceType: "ml.p4d.24xlarge" || "ml.p5.48xlarge" || "ml.p5e.48xlarge" || "ml.p5en.48xlarge" || "ml.trn1.32xlarge" || "ml.trn2.48xlarge" || "ml.p6-b200.48xlarge" || "ml.p4de.24xlarge" || "ml.p6e-gb200.36xlarge" || "ml.p5.4xlarge", // required
 * //   TotalInstanceCount: Number("int"), // required
 * //   AvailableInstanceCount: Number("int"),
 * //   InUseInstanceCount: Number("int"),
 * //   UltraServerSummary: { // UltraServerSummary
 * //     UltraServerType: "STRING_VALUE", // required
 * //     InstanceType: "ml.p4d.24xlarge" || "ml.p5.48xlarge" || "ml.p5e.48xlarge" || "ml.p5en.48xlarge" || "ml.trn1.32xlarge" || "ml.trn2.48xlarge" || "ml.p6-b200.48xlarge" || "ml.p4de.24xlarge" || "ml.p6e-gb200.36xlarge" || "ml.p5.4xlarge", // required
 * //     UltraServerCount: Number("int"),
 * //     AvailableSpareInstanceCount: Number("int"),
 * //     UnhealthyInstanceCount: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeReservedCapacityCommandInput - {@link DescribeReservedCapacityCommandInput}
 * @returns {@link DescribeReservedCapacityCommandOutput}
 * @see {@link DescribeReservedCapacityCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedCapacityCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DescribeReservedCapacityCommand extends $Command
  .classBuilder<
    DescribeReservedCapacityCommandInput,
    DescribeReservedCapacityCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "DescribeReservedCapacity", {})
  .n("SageMakerClient", "DescribeReservedCapacityCommand")
  .f(void 0, void 0)
  .ser(se_DescribeReservedCapacityCommand)
  .de(de_DescribeReservedCapacityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReservedCapacityRequest;
      output: DescribeReservedCapacityResponse;
    };
    sdk: {
      input: DescribeReservedCapacityCommandInput;
      output: DescribeReservedCapacityCommandOutput;
    };
  };
}
