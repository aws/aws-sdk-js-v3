// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeManagedEndpointRequest,
  DescribeManagedEndpointResponse,
  DescribeManagedEndpointResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeManagedEndpointCommand, se_DescribeManagedEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeManagedEndpointCommand}.
 */
export interface DescribeManagedEndpointCommandInput extends DescribeManagedEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DescribeManagedEndpointCommand}.
 */
export interface DescribeManagedEndpointCommandOutput extends DescribeManagedEndpointResponse, __MetadataBearer {}

/**
 * <p>Displays detailed information about a managed endpoint. A managed endpoint is a gateway
 *          that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DescribeManagedEndpointCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DescribeManagedEndpointCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const input = { // DescribeManagedEndpointRequest
 *   id: "STRING_VALUE", // required
 *   virtualClusterId: "STRING_VALUE", // required
 * };
 * const command = new DescribeManagedEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DescribeManagedEndpointResponse
 * //   endpoint: { // Endpoint
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     virtualClusterId: "STRING_VALUE",
 * //     type: "STRING_VALUE",
 * //     state: "CREATING" || "ACTIVE" || "TERMINATING" || "TERMINATED" || "TERMINATED_WITH_ERRORS",
 * //     releaseLabel: "STRING_VALUE",
 * //     executionRoleArn: "STRING_VALUE",
 * //     certificateArn: "STRING_VALUE",
 * //     certificateAuthority: { // Certificate
 * //       certificateArn: "STRING_VALUE",
 * //       certificateData: "STRING_VALUE",
 * //     },
 * //     configurationOverrides: { // ConfigurationOverrides
 * //       applicationConfiguration: [ // ConfigurationList
 * //         { // Configuration
 * //           classification: "STRING_VALUE", // required
 * //           properties: { // SensitivePropertiesMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           configurations: [
 * //             {
 * //               classification: "STRING_VALUE", // required
 * //               properties: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               configurations: "<ConfigurationList>",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       monitoringConfiguration: { // MonitoringConfiguration
 * //         managedLogs: { // ManagedLogs
 * //           allowAWSToRetainLogs: "ENABLED" || "DISABLED",
 * //           encryptionKeyArn: "STRING_VALUE",
 * //         },
 * //         persistentAppUI: "ENABLED" || "DISABLED",
 * //         cloudWatchMonitoringConfiguration: { // CloudWatchMonitoringConfiguration
 * //           logGroupName: "STRING_VALUE", // required
 * //           logStreamNamePrefix: "STRING_VALUE",
 * //         },
 * //         s3MonitoringConfiguration: { // S3MonitoringConfiguration
 * //           logUri: "STRING_VALUE", // required
 * //         },
 * //         containerLogRotationConfiguration: { // ContainerLogRotationConfiguration
 * //           rotationSize: "STRING_VALUE", // required
 * //           maxFilesToKeep: Number("int"), // required
 * //         },
 * //       },
 * //     },
 * //     serverUrl: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     securityGroup: "STRING_VALUE",
 * //     subnetIds: [ // SubnetIds
 * //       "STRING_VALUE",
 * //     ],
 * //     stateDetails: "STRING_VALUE",
 * //     failureReason: "INTERNAL_ERROR" || "USER_ERROR" || "VALIDATION_ERROR" || "CLUSTER_UNAVAILABLE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeManagedEndpointCommandInput - {@link DescribeManagedEndpointCommandInput}
 * @returns {@link DescribeManagedEndpointCommandOutput}
 * @see {@link DescribeManagedEndpointCommandInput} for command's `input` shape.
 * @see {@link DescribeManagedEndpointCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 * @throws {@link EMRContainersServiceException}
 * <p>Base exception class for all service exceptions from EMRContainers service.</p>
 *
 *
 * @public
 */
export class DescribeManagedEndpointCommand extends $Command
  .classBuilder<
    DescribeManagedEndpointCommandInput,
    DescribeManagedEndpointCommandOutput,
    EMRContainersClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRContainersClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsChicagoWebService", "DescribeManagedEndpoint", {})
  .n("EMRContainersClient", "DescribeManagedEndpointCommand")
  .f(void 0, DescribeManagedEndpointResponseFilterSensitiveLog)
  .ser(se_DescribeManagedEndpointCommand)
  .de(de_DescribeManagedEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeManagedEndpointRequest;
      output: DescribeManagedEndpointResponse;
    };
    sdk: {
      input: DescribeManagedEndpointCommandInput;
      output: DescribeManagedEndpointCommandOutput;
    };
  };
}
