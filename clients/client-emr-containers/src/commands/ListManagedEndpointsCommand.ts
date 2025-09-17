// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListManagedEndpointsRequest,
  ListManagedEndpointsResponse,
  ListManagedEndpointsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListManagedEndpointsCommand, se_ListManagedEndpointsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListManagedEndpointsCommand}.
 */
export interface ListManagedEndpointsCommandInput extends ListManagedEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedEndpointsCommand}.
 */
export interface ListManagedEndpointsCommandOutput extends ListManagedEndpointsResponse, __MetadataBearer {}

/**
 * <p>Lists managed endpoints based on a set of parameters. A managed endpoint is a gateway
 *          that connects Amazon EMR Studio to Amazon EMR on EKS so that Amazon EMR Studio can communicate with your virtual cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, ListManagedEndpointsCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, ListManagedEndpointsCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * // import type { EMRContainersClientConfig } from "@aws-sdk/client-emr-containers";
 * const config = {}; // type is EMRContainersClientConfig
 * const client = new EMRContainersClient(config);
 * const input = { // ListManagedEndpointsRequest
 *   virtualClusterId: "STRING_VALUE", // required
 *   createdBefore: new Date("TIMESTAMP"),
 *   createdAfter: new Date("TIMESTAMP"),
 *   types: [ // EndpointTypes
 *     "STRING_VALUE",
 *   ],
 *   states: [ // EndpointStates
 *     "CREATING" || "ACTIVE" || "TERMINATING" || "TERMINATED" || "TERMINATED_WITH_ERRORS",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListManagedEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedEndpointsResponse
 * //   endpoints: [ // Endpoints
 * //     { // Endpoint
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       virtualClusterId: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       state: "CREATING" || "ACTIVE" || "TERMINATING" || "TERMINATED" || "TERMINATED_WITH_ERRORS",
 * //       releaseLabel: "STRING_VALUE",
 * //       executionRoleArn: "STRING_VALUE",
 * //       certificateArn: "STRING_VALUE",
 * //       certificateAuthority: { // Certificate
 * //         certificateArn: "STRING_VALUE",
 * //         certificateData: "STRING_VALUE",
 * //       },
 * //       configurationOverrides: { // ConfigurationOverrides
 * //         applicationConfiguration: [ // ConfigurationList
 * //           { // Configuration
 * //             classification: "STRING_VALUE", // required
 * //             properties: { // SensitivePropertiesMap
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             configurations: [
 * //               {
 * //                 classification: "STRING_VALUE", // required
 * //                 properties: {
 * //                   "<keys>": "STRING_VALUE",
 * //                 },
 * //                 configurations: "<ConfigurationList>",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         monitoringConfiguration: { // MonitoringConfiguration
 * //           managedLogs: { // ManagedLogs
 * //             allowAWSToRetainLogs: "ENABLED" || "DISABLED",
 * //             encryptionKeyArn: "STRING_VALUE",
 * //           },
 * //           persistentAppUI: "ENABLED" || "DISABLED",
 * //           cloudWatchMonitoringConfiguration: { // CloudWatchMonitoringConfiguration
 * //             logGroupName: "STRING_VALUE", // required
 * //             logStreamNamePrefix: "STRING_VALUE",
 * //           },
 * //           s3MonitoringConfiguration: { // S3MonitoringConfiguration
 * //             logUri: "STRING_VALUE", // required
 * //           },
 * //           containerLogRotationConfiguration: { // ContainerLogRotationConfiguration
 * //             rotationSize: "STRING_VALUE", // required
 * //             maxFilesToKeep: Number("int"), // required
 * //           },
 * //         },
 * //       },
 * //       serverUrl: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       securityGroup: "STRING_VALUE",
 * //       subnetIds: [ // SubnetIds
 * //         "STRING_VALUE",
 * //       ],
 * //       stateDetails: "STRING_VALUE",
 * //       failureReason: "INTERNAL_ERROR" || "USER_ERROR" || "VALIDATION_ERROR" || "CLUSTER_UNAVAILABLE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListManagedEndpointsCommandInput - {@link ListManagedEndpointsCommandInput}
 * @returns {@link ListManagedEndpointsCommandOutput}
 * @see {@link ListManagedEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListManagedEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
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
export class ListManagedEndpointsCommand extends $Command
  .classBuilder<
    ListManagedEndpointsCommandInput,
    ListManagedEndpointsCommandOutput,
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
  .s("AwsChicagoWebService", "ListManagedEndpoints", {})
  .n("EMRContainersClient", "ListManagedEndpointsCommand")
  .f(void 0, ListManagedEndpointsResponseFilterSensitiveLog)
  .ser(se_ListManagedEndpointsCommand)
  .de(de_ListManagedEndpointsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedEndpointsRequest;
      output: ListManagedEndpointsResponse;
    };
    sdk: {
      input: ListManagedEndpointsCommandInput;
      output: ListManagedEndpointsCommandOutput;
    };
  };
}
