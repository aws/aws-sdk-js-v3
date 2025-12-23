// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListUltraServersByReservedCapacityRequest,
  ListUltraServersByReservedCapacityResponse,
} from "../models/models_4";
import type { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListUltraServersByReservedCapacity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUltraServersByReservedCapacityCommand}.
 */
export interface ListUltraServersByReservedCapacityCommandInput extends ListUltraServersByReservedCapacityRequest {}
/**
 * @public
 *
 * The output of {@link ListUltraServersByReservedCapacityCommand}.
 */
export interface ListUltraServersByReservedCapacityCommandOutput extends ListUltraServersByReservedCapacityResponse, __MetadataBearer {}

/**
 * <p>Lists all UltraServers that are part of a specified reserved capacity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListUltraServersByReservedCapacityCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListUltraServersByReservedCapacityCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListUltraServersByReservedCapacityRequest
 *   ReservedCapacityArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListUltraServersByReservedCapacityCommand(input);
 * const response = await client.send(command);
 * // { // ListUltraServersByReservedCapacityResponse
 * //   NextToken: "STRING_VALUE",
 * //   UltraServers: [ // UltraServers // required
 * //     { // UltraServer
 * //       UltraServerId: "STRING_VALUE", // required
 * //       UltraServerType: "STRING_VALUE", // required
 * //       AvailabilityZone: "STRING_VALUE", // required
 * //       InstanceType: "ml.p4d.24xlarge" || "ml.p5.48xlarge" || "ml.p5e.48xlarge" || "ml.p5en.48xlarge" || "ml.trn1.32xlarge" || "ml.trn2.48xlarge" || "ml.p6-b200.48xlarge" || "ml.p4de.24xlarge" || "ml.p6e-gb200.36xlarge" || "ml.p5.4xlarge" || "ml.p6-b300.48xlarge", // required
 * //       TotalInstanceCount: Number("int"), // required
 * //       ConfiguredSpareInstanceCount: Number("int"),
 * //       AvailableInstanceCount: Number("int"),
 * //       InUseInstanceCount: Number("int"),
 * //       AvailableSpareInstanceCount: Number("int"),
 * //       UnhealthyInstanceCount: Number("int"),
 * //       HealthStatus: "OK" || "Impaired" || "Insufficient-Data",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListUltraServersByReservedCapacityCommandInput - {@link ListUltraServersByReservedCapacityCommandInput}
 * @returns {@link ListUltraServersByReservedCapacityCommandOutput}
 * @see {@link ListUltraServersByReservedCapacityCommandInput} for command's `input` shape.
 * @see {@link ListUltraServersByReservedCapacityCommandOutput} for command's `response` shape.
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
export class ListUltraServersByReservedCapacityCommand extends $Command
  .classBuilder<
    ListUltraServersByReservedCapacityCommandInput,
    ListUltraServersByReservedCapacityCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMaker", "ListUltraServersByReservedCapacity", {})
  .n("SageMakerClient", "ListUltraServersByReservedCapacityCommand")
  .sc(ListUltraServersByReservedCapacity$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUltraServersByReservedCapacityRequest;
      output: ListUltraServersByReservedCapacityResponse;
    };
    sdk: {
      input: ListUltraServersByReservedCapacityCommandInput;
      output: ListUltraServersByReservedCapacityCommandOutput;
    };
  };
}
