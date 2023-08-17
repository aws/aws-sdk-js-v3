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
} from "@smithy/types";

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetLoadBalancerTlsCertificatesRequest, GetLoadBalancerTlsCertificatesResult } from "../models/models_1";
import {
  de_GetLoadBalancerTlsCertificatesCommand,
  se_GetLoadBalancerTlsCertificatesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLoadBalancerTlsCertificatesCommand}.
 */
export interface GetLoadBalancerTlsCertificatesCommandInput extends GetLoadBalancerTlsCertificatesRequest {}
/**
 * @public
 *
 * The output of {@link GetLoadBalancerTlsCertificatesCommand}.
 */
export interface GetLoadBalancerTlsCertificatesCommandOutput
  extends GetLoadBalancerTlsCertificatesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the TLS certificates that are associated with the specified
 *       Lightsail load balancer.</p>
 *          <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
 *          <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer. One
 *       is active and the other is inactive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetLoadBalancerTlsCertificatesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetLoadBalancerTlsCertificatesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetLoadBalancerTlsCertificatesRequest
 *   loadBalancerName: "STRING_VALUE", // required
 * };
 * const command = new GetLoadBalancerTlsCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // GetLoadBalancerTlsCertificatesResult
 * //   tlsCertificates: [ // LoadBalancerTlsCertificateList
 * //     { // LoadBalancerTlsCertificate
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       supportCode: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       location: { // ResourceLocation
 * //         availabilityZone: "STRING_VALUE",
 * //         regionName: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "ca-central-1" || "ap-south-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-northeast-1" || "ap-northeast-2" || "eu-north-1",
 * //       },
 * //       resourceType: "ContainerService" || "Instance" || "StaticIp" || "KeyPair" || "InstanceSnapshot" || "Domain" || "PeeredVpc" || "LoadBalancer" || "LoadBalancerTlsCertificate" || "Disk" || "DiskSnapshot" || "RelationalDatabase" || "RelationalDatabaseSnapshot" || "ExportSnapshotRecord" || "CloudFormationStackRecord" || "Alarm" || "ContactMethod" || "Distribution" || "Certificate" || "Bucket",
 * //       tags: [ // TagList
 * //         { // Tag
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       loadBalancerName: "STRING_VALUE",
 * //       isAttached: true || false,
 * //       status: "PENDING_VALIDATION" || "ISSUED" || "INACTIVE" || "EXPIRED" || "VALIDATION_TIMED_OUT" || "REVOKED" || "FAILED" || "UNKNOWN",
 * //       domainName: "STRING_VALUE",
 * //       domainValidationRecords: [ // LoadBalancerTlsCertificateDomainValidationRecordList
 * //         { // LoadBalancerTlsCertificateDomainValidationRecord
 * //           name: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //           validationStatus: "PENDING_VALIDATION" || "FAILED" || "SUCCESS",
 * //           domainName: "STRING_VALUE",
 * //           dnsRecordCreationState: { // LoadBalancerTlsCertificateDnsRecordCreationState
 * //             code: "SUCCEEDED" || "STARTED" || "FAILED",
 * //             message: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       failureReason: "NO_AVAILABLE_CONTACTS" || "ADDITIONAL_VERIFICATION_REQUIRED" || "DOMAIN_NOT_ALLOWED" || "INVALID_PUBLIC_DOMAIN" || "OTHER",
 * //       issuedAt: new Date("TIMESTAMP"),
 * //       issuer: "STRING_VALUE",
 * //       keyAlgorithm: "STRING_VALUE",
 * //       notAfter: new Date("TIMESTAMP"),
 * //       notBefore: new Date("TIMESTAMP"),
 * //       renewalSummary: { // LoadBalancerTlsCertificateRenewalSummary
 * //         renewalStatus: "PENDING_AUTO_RENEWAL" || "PENDING_VALIDATION" || "SUCCESS" || "FAILED",
 * //         domainValidationOptions: [ // LoadBalancerTlsCertificateDomainValidationOptionList
 * //           { // LoadBalancerTlsCertificateDomainValidationOption
 * //             domainName: "STRING_VALUE",
 * //             validationStatus: "PENDING_VALIDATION" || "FAILED" || "SUCCESS",
 * //           },
 * //         ],
 * //       },
 * //       revocationReason: "UNSPECIFIED" || "KEY_COMPROMISE" || "CA_COMPROMISE" || "AFFILIATION_CHANGED" || "SUPERCEDED" || "CESSATION_OF_OPERATION" || "CERTIFICATE_HOLD" || "REMOVE_FROM_CRL" || "PRIVILEGE_WITHDRAWN" || "A_A_COMPROMISE",
 * //       revokedAt: new Date("TIMESTAMP"),
 * //       serial: "STRING_VALUE",
 * //       signatureAlgorithm: "STRING_VALUE",
 * //       subject: "STRING_VALUE",
 * //       subjectAlternativeNames: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLoadBalancerTlsCertificatesCommandInput - {@link GetLoadBalancerTlsCertificatesCommandInput}
 * @returns {@link GetLoadBalancerTlsCertificatesCommandOutput}
 * @see {@link GetLoadBalancerTlsCertificatesCommandInput} for command's `input` shape.
 * @see {@link GetLoadBalancerTlsCertificatesCommandOutput} for command's `response` shape.
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
export class GetLoadBalancerTlsCertificatesCommand extends $Command<
  GetLoadBalancerTlsCertificatesCommandInput,
  GetLoadBalancerTlsCertificatesCommandOutput,
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
  constructor(readonly input: GetLoadBalancerTlsCertificatesCommandInput) {
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
  ): Handler<GetLoadBalancerTlsCertificatesCommandInput, GetLoadBalancerTlsCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetLoadBalancerTlsCertificatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetLoadBalancerTlsCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(
    input: GetLoadBalancerTlsCertificatesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetLoadBalancerTlsCertificatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetLoadBalancerTlsCertificatesCommandOutput> {
    return de_GetLoadBalancerTlsCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
