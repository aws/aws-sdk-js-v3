// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateContainerServiceRequest, CreateContainerServiceResult } from "../models/models_0";
import { de_CreateContainerServiceCommand, se_CreateContainerServiceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateContainerServiceCommand}.
 */
export interface CreateContainerServiceCommandInput extends CreateContainerServiceRequest {}
/**
 * @public
 *
 * The output of {@link CreateContainerServiceCommand}.
 */
export interface CreateContainerServiceCommandOutput extends CreateContainerServiceResult, __MetadataBearer {}

/**
 * <p>Creates an Amazon Lightsail container service.</p>
 *          <p>A Lightsail container service is a compute resource to which you can deploy containers.
 *       For more information, see <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-container-services">Container services in Amazon Lightsail</a> in the <i>Lightsail Dev
 *         Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateContainerServiceCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateContainerServiceCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // CreateContainerServiceRequest
 *   serviceName: "STRING_VALUE", // required
 *   power: "nano" || "micro" || "small" || "medium" || "large" || "xlarge", // required
 *   scale: Number("int"), // required
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   publicDomainNames: { // ContainerServicePublicDomains
 *     "<keys>": [ // ContainerServicePublicDomainsList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   deployment: { // ContainerServiceDeploymentRequest
 *     containers: { // ContainerMap
 *       "<keys>": { // Container
 *         image: "STRING_VALUE",
 *         command: [ // StringList
 *           "STRING_VALUE",
 *         ],
 *         environment: { // Environment
 *           "<keys>": "STRING_VALUE",
 *         },
 *         ports: { // PortMap
 *           "<keys>": "HTTP" || "HTTPS" || "TCP" || "UDP",
 *         },
 *       },
 *     },
 *     publicEndpoint: { // EndpointRequest
 *       containerName: "STRING_VALUE", // required
 *       containerPort: Number("int"), // required
 *       healthCheck: { // ContainerServiceHealthCheckConfig
 *         healthyThreshold: Number("int"),
 *         unhealthyThreshold: Number("int"),
 *         timeoutSeconds: Number("int"),
 *         intervalSeconds: Number("int"),
 *         path: "STRING_VALUE",
 *         successCodes: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   privateRegistryAccess: { // PrivateRegistryAccessRequest
 *     ecrImagePullerRole: { // ContainerServiceECRImagePullerRoleRequest
 *       isActive: true || false,
 *     },
 *   },
 * };
 * const command = new CreateContainerServiceCommand(input);
 * const response = await client.send(command);
 * // { // CreateContainerServiceResult
 * //   containerService: { // ContainerService
 * //     containerServiceName: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     location: { // ResourceLocation
 * //       availabilityZone: "STRING_VALUE",
 * //       regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1",
 * //     },
 * //     resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     power: "nano" || "micro" || "small" || "medium" || "large" || "xlarge",
 * //     powerId: "STRING_VALUE",
 * //     state: "PENDING" || "READY" || "RUNNING" || "UPDATING" || "DELETING" || "DISABLED" || "DEPLOYING",
 * //     stateDetail: { // ContainerServiceStateDetail
 * //       code: "CREATING_SYSTEM_RESOURCES" || "CREATING_NETWORK_INFRASTRUCTURE" || "PROVISIONING_CERTIFICATE" || "PROVISIONING_SERVICE" || "CREATING_DEPLOYMENT" || "EVALUATING_HEALTH_CHECK" || "ACTIVATING_DEPLOYMENT" || "CERTIFICATE_LIMIT_EXCEEDED" || "UNKNOWN_ERROR",
 * //       message: "STRING_VALUE",
 * //     },
 * //     scale: Number("int"),
 * //     currentDeployment: { // ContainerServiceDeployment
 * //       version: Number("int"),
 * //       state: "ACTIVATING" || "ACTIVE" || "INACTIVE" || "FAILED",
 * //       containers: { // ContainerMap
 * //         "<keys>": { // Container
 * //           image: "STRING_VALUE",
 * //           command: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //           environment: { // Environment
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           ports: { // PortMap
 * //             "<keys>": "HTTP" || "HTTPS" || "TCP" || "UDP",
 * //           },
 * //         },
 * //       },
 * //       publicEndpoint: { // ContainerServiceEndpoint
 * //         containerName: "STRING_VALUE",
 * //         containerPort: Number("int"),
 * //         healthCheck: { // ContainerServiceHealthCheckConfig
 * //           healthyThreshold: Number("int"),
 * //           unhealthyThreshold: Number("int"),
 * //           timeoutSeconds: Number("int"),
 * //           intervalSeconds: Number("int"),
 * //           path: "STRING_VALUE",
 * //           successCodes: "STRING_VALUE",
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //     nextDeployment: {
 * //       version: Number("int"),
 * //       state: "ACTIVATING" || "ACTIVE" || "INACTIVE" || "FAILED",
 * //       containers: {
 * //         "<keys>": {
 * //           image: "STRING_VALUE",
 * //           command: [
 * //             "STRING_VALUE",
 * //           ],
 * //           environment: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           ports: {
 * //             "<keys>": "HTTP" || "HTTPS" || "TCP" || "UDP",
 * //           },
 * //         },
 * //       },
 * //       publicEndpoint: {
 * //         containerName: "STRING_VALUE",
 * //         containerPort: Number("int"),
 * //         healthCheck: {
 * //           healthyThreshold: Number("int"),
 * //           unhealthyThreshold: Number("int"),
 * //           timeoutSeconds: Number("int"),
 * //           intervalSeconds: Number("int"),
 * //           path: "STRING_VALUE",
 * //           successCodes: "STRING_VALUE",
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //     isDisabled: true || false,
 * //     principalArn: "STRING_VALUE",
 * //     privateDomainName: "STRING_VALUE",
 * //     publicDomainNames: { // ContainerServicePublicDomains
 * //       "<keys>": [ // ContainerServicePublicDomainsList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     url: "STRING_VALUE",
 * //     privateRegistryAccess: { // PrivateRegistryAccess
 * //       ecrImagePullerRole: { // ContainerServiceECRImagePullerRole
 * //         isActive: true || false,
 * //         principalArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateContainerServiceCommandInput - {@link CreateContainerServiceCommandInput}
 * @returns {@link CreateContainerServiceCommandOutput}
 * @see {@link CreateContainerServiceCommandInput} for command's `input` shape.
 * @see {@link CreateContainerServiceCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 *
 * @public
 */
export class CreateContainerServiceCommand extends $Command
  .classBuilder<
    CreateContainerServiceCommandInput,
    CreateContainerServiceCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "CreateContainerService", {})
  .n("LightsailClient", "CreateContainerServiceCommand")
  .f(void 0, void 0)
  .ser(se_CreateContainerServiceCommand)
  .de(de_CreateContainerServiceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContainerServiceRequest;
      output: CreateContainerServiceResult;
    };
    sdk: {
      input: CreateContainerServiceCommandInput;
      output: CreateContainerServiceCommandOutput;
    };
  };
}
