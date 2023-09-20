// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetLoadBalancerRequest, GetLoadBalancerResult } from "../models/models_1";
import { de_GetLoadBalancerCommand, se_GetLoadBalancerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Returns information about the specified Lightsail load balancer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetLoadBalancerCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetLoadBalancerCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
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
 * //       regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1",
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
 * //     ipAddressType: "dualstack" || "ipv4",
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
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 */
export class GetLoadBalancerCommand extends $Command<
  GetLoadBalancerCommandInput,
  GetLoadBalancerCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetLoadBalancerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLoadBalancerCommandInput, GetLoadBalancerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLoadBalancerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetLoadBalancerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Lightsail_20161128",
        operation: "GetLoadBalancer",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetLoadBalancerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetLoadBalancerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLoadBalancerCommandOutput> {
    return de_GetLoadBalancerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
