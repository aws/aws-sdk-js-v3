// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSimulationInput, DescribeSimulationOutput } from "../models/models_0";
import { de_DescribeSimulationCommand, se_DescribeSimulationCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SimSpaceWeaverClientResolvedConfig } from "../SimSpaceWeaverClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSimulationCommand}.
 */
export interface DescribeSimulationCommandInput extends DescribeSimulationInput {}
/**
 * @public
 *
 * The output of {@link DescribeSimulationCommand}.
 */
export interface DescribeSimulationCommandOutput extends DescribeSimulationOutput, __MetadataBearer {}

/**
 * <p>Returns the current state of the given simulation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SimSpaceWeaverClient, DescribeSimulationCommand } from "@aws-sdk/client-simspaceweaver"; // ES Modules import
 * // const { SimSpaceWeaverClient, DescribeSimulationCommand } = require("@aws-sdk/client-simspaceweaver"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SimSpaceWeaverClient(config);
 * const input = { // DescribeSimulationInput
 *   Simulation: "STRING_VALUE", // required
 * };
 * const command = new DescribeSimulationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSimulationOutput
 * //   Name: "STRING_VALUE",
 * //   ExecutionId: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   RoleArn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   Status: "STRING_VALUE",
 * //   TargetStatus: "STRING_VALUE",
 * //   SchemaS3Location: { // S3Location
 * //     BucketName: "STRING_VALUE", // required
 * //     ObjectKey: "STRING_VALUE", // required
 * //   },
 * //   SchemaError: "STRING_VALUE",
 * //   LoggingConfiguration: { // LoggingConfiguration
 * //     Destinations: [ // LogDestinations
 * //       { // LogDestination
 * //         CloudWatchLogsLogGroup: { // CloudWatchLogsLogGroup
 * //           LogGroupArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   LiveSimulationState: { // LiveSimulationState
 * //     Domains: [ // DomainList
 * //       { // Domain
 * //         Name: "STRING_VALUE",
 * //         Lifecycle: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Clocks: [ // SimulationClockList
 * //       { // SimulationClock
 * //         Status: "STRING_VALUE",
 * //         TargetStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   MaximumDuration: "STRING_VALUE",
 * //   SnapshotS3Location: {
 * //     BucketName: "STRING_VALUE", // required
 * //     ObjectKey: "STRING_VALUE", // required
 * //   },
 * //   StartError: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSimulationCommandInput - {@link DescribeSimulationCommandInput}
 * @returns {@link DescribeSimulationCommandOutput}
 * @see {@link DescribeSimulationCommandInput} for command's `input` shape.
 * @see {@link DescribeSimulationCommandOutput} for command's `response` shape.
 * @see {@link SimSpaceWeaverClientResolvedConfig | config} for SimSpaceWeaverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link SimSpaceWeaverServiceException}
 * <p>Base exception class for all service exceptions from SimSpaceWeaver service.</p>
 *
 * @public
 */
export class DescribeSimulationCommand extends $Command
  .classBuilder<
    DescribeSimulationCommandInput,
    DescribeSimulationCommandOutput,
    SimSpaceWeaverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SimSpaceWeaverClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimSpaceWeaver", "DescribeSimulation", {})
  .n("SimSpaceWeaverClient", "DescribeSimulationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSimulationCommand)
  .de(de_DescribeSimulationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSimulationInput;
      output: DescribeSimulationOutput;
    };
    sdk: {
      input: DescribeSimulationCommandInput;
      output: DescribeSimulationCommandOutput;
    };
  };
}
