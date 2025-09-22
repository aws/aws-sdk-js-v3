// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetLoadBalancerRequest, GetLoadBalancerResult } from "../models/models_1";
import { GetLoadBalancer } from "../schemas/schemas_19_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLoadBalancerCommand}.
 */
export interface GetLoadBalancerCommandInput extends GetLoadBalancerRequest {}
/**
 * @public
 *
 * The output of {@link GetLoadBalancerCommand}.
 */
export interface GetLoadBalancerCommandOutput extends GetLoadBalancerResult, __MetadataBearer {}

/**
 * <p>Returns information about the specified Lightsail load balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetLoadBalancerCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetLoadBalancerCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // GetLoadBalancerRequest
 *   loadBalancerName: "STRING_VALUE", // required
 * };
 * const command = new GetLoadBalancerCommand(input);
 * const response = await client.send(command);
 * // { // GetLoadBalancerResult
 * //   loadBalancer: { // LoadBalancer
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     supportCode: "STRING_VALUE",
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
 * //     dnsName: "STRING_VALUE",
 * //     state: "active" || "provisioning" || "active_impaired" || "failed" || "unknown",
 * //     protocol: "HTTP_HTTPS" || "HTTP",
 * //     publicPorts: [ // PortList
 * //       Number("int"),
 * //     ],
 * //     healthCheckPath: "STRING_VALUE",
 * //     instancePort: Number("int"),
 * //     instanceHealthSummary: [ // InstanceHealthSummaryList
 * //       { // InstanceHealthSummary
 * //         instanceName: "STRING_VALUE",
 * //         instanceHealth: "initial" || "healthy" || "unhealthy" || "unused" || "draining" || "unavailable",
 * //         instanceHealthReason: "Lb.RegistrationInProgress" || "Lb.InitialHealthChecking" || "Lb.InternalError" || "Instance.ResponseCodeMismatch" || "Instance.Timeout" || "Instance.FailedHealthChecks" || "Instance.NotRegistered" || "Instance.NotInUse" || "Instance.DeregistrationInProgress" || "Instance.InvalidState" || "Instance.IpUnusable",
 * //       },
 * //     ],
 * //     tlsCertificateSummaries: [ // LoadBalancerTlsCertificateSummaryList
 * //       { // LoadBalancerTlsCertificateSummary
 * //         name: "STRING_VALUE",
 * //         isAttached: true || false,
 * //       },
 * //     ],
 * //     configurationOptions: { // LoadBalancerConfigurationOptions
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     ipAddressType: "dualstack" || "ipv4" || "ipv6",
 * //     httpsRedirectionEnabled: true || false,
 * //     tlsPolicyName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLoadBalancerCommandInput - {@link GetLoadBalancerCommandInput}
 * @returns {@link GetLoadBalancerCommandOutput}
 * @see {@link GetLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link GetLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link AccountSetupInProgressException} (client fault)
 *  <p>Lightsail throws this exception when an account is still in the setup in progress
 *       state.</p>
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
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
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
export class GetLoadBalancerCommand extends $Command
  .classBuilder<
    GetLoadBalancerCommandInput,
    GetLoadBalancerCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Lightsail_20161128", "GetLoadBalancer", {})
  .n("LightsailClient", "GetLoadBalancerCommand")
  .sc(GetLoadBalancer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLoadBalancerRequest;
      output: GetLoadBalancerResult;
    };
    sdk: {
      input: GetLoadBalancerCommandInput;
      output: GetLoadBalancerCommandOutput;
    };
  };
}
