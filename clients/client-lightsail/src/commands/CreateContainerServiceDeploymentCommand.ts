// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateContainerServiceDeploymentRequest, CreateContainerServiceDeploymentResult } from "../models/models_0";
import { CreateContainerServiceDeployment } from "../schemas/schemas_11_Container";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateContainerServiceDeploymentCommand}.
 */
export interface CreateContainerServiceDeploymentCommandInput extends CreateContainerServiceDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link CreateContainerServiceDeploymentCommand}.
 */
export interface CreateContainerServiceDeploymentCommandOutput
  extends CreateContainerServiceDeploymentResult,
    __MetadataBearer {}

/**
 * <p>Creates a deployment for your Amazon Lightsail container service.</p>
 *          <p>A deployment specifies the containers that will be launched on the container service and
 *       their settings, such as the ports to open, the environment variables to apply, and the launch
 *       command to run. It also specifies the container that will serve as the public endpoint of the
 *       deployment and its settings, such as the HTTP or HTTPS port to use, and the health check
 *       configuration.</p>
 *          <p>You can deploy containers to your container service using container images from a public
 *       registry such as Amazon ECR Public, or from your local machine. For more information, see
 *         <a href="https://docs.aws.amazon.com/lightsail/latest/userguide/amazon-lightsail-creating-container-images">Creating container images for your Amazon Lightsail container services</a> in the
 *         <i>Amazon Lightsail Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateContainerServiceDeploymentCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateContainerServiceDeploymentCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // CreateContainerServiceDeploymentRequest
 *   serviceName: "STRING_VALUE", // required
 *   containers: { // ContainerMap
 *     "<keys>": { // Container
 *       image: "STRING_VALUE",
 *       command: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *       environment: { // Environment
 *         "<keys>": "STRING_VALUE",
 *       },
 *       ports: { // PortMap
 *         "<keys>": "HTTP" || "HTTPS" || "TCP" || "UDP",
 *       },
 *     },
 *   },
 *   publicEndpoint: { // EndpointRequest
 *     containerName: "STRING_VALUE", // required
 *     containerPort: Number("int"), // required
 *     healthCheck: { // ContainerServiceHealthCheckConfig
 *       healthyThreshold: Number("int"),
 *       unhealthyThreshold: Number("int"),
 *       timeoutSeconds: Number("int"),
 *       intervalSeconds: Number("int"),
 *       path: "STRING_VALUE",
 *       successCodes: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateContainerServiceDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // CreateContainerServiceDeploymentResult
 * //   containerService: { // ContainerService
 * //     containerServiceName: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     location: { // ResourceLocation
 * //       availabilityZone: "STRING_VALUE",
 * //       regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1" || "ap-southeast-3",
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
 * @param CreateContainerServiceDeploymentCommandInput - {@link CreateContainerServiceDeploymentCommandInput}
 * @returns {@link CreateContainerServiceDeploymentCommandOutput}
 * @see {@link CreateContainerServiceDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateContainerServiceDeploymentCommandOutput} for command's `response` shape.
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
 * @throws {@link RegionSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an operation is performed on resources in an opt-in
 *       Region that is currently being set up.</p>
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
export class CreateContainerServiceDeploymentCommand extends $Command
  .classBuilder<
    CreateContainerServiceDeploymentCommandInput,
    CreateContainerServiceDeploymentCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Lightsail_20161128", "CreateContainerServiceDeployment", {})
  .n("LightsailClient", "CreateContainerServiceDeploymentCommand")
  .sc(CreateContainerServiceDeployment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContainerServiceDeploymentRequest;
      output: CreateContainerServiceDeploymentResult;
    };
    sdk: {
      input: CreateContainerServiceDeploymentCommandInput;
      output: CreateContainerServiceDeploymentCommandOutput;
    };
  };
}
