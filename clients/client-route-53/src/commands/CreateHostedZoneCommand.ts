// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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

import { CreateHostedZoneRequest, CreateHostedZoneResponse } from "../models/models_0";
import { de_CreateHostedZoneCommand, se_CreateHostedZoneCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateHostedZoneCommand}.
 */
export interface CreateHostedZoneCommandInput extends CreateHostedZoneRequest {}
/**
 * @public
 *
 * The output of {@link CreateHostedZoneCommand}.
 */
export interface CreateHostedZoneCommandOutput extends CreateHostedZoneResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new public or private hosted zone. You create records in a public hosted
 * 			zone to define how you want to route traffic on the internet for a domain, such as
 * 			example.com, and its subdomains (apex.example.com, acme.example.com). You create records
 * 			in a private hosted zone to define how you want to route traffic for a domain and its
 * 			subdomains within one or more Amazon Virtual Private Clouds (Amazon VPCs). </p>
 *          <important>
 *             <p>You can't convert a public hosted zone to a private hosted zone or vice versa.
 * 				Instead, you must create a new hosted zone with the same name and create new
 * 				resource record sets.</p>
 *          </important>
 *          <p>For more information about charges for hosted zones, see <a href="http://aws.amazon.com/route53/pricing/">Amazon Route 53 Pricing</a>.</p>
 *          <p>Note the following:</p>
 *          <ul>
 *             <li>
 *                <p>You can't create a hosted zone for a top-level domain (TLD) such as
 * 					.com.</p>
 *             </li>
 *             <li>
 *                <p>For public hosted zones, Route 53 automatically creates a default SOA record
 * 					and four NS records for the zone. For more information about SOA and NS records,
 * 					see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/SOA-NSrecords.html">NS and SOA Records
 * 						that Route 53 Creates for a Hosted Zone</a> in the
 * 						<i>Amazon Route 53 Developer Guide</i>.</p>
 *                <p>If you want to use the same name servers for multiple public hosted zones, you
 * 					can optionally associate a reusable delegation set with the hosted zone. See the
 * 						<code>DelegationSetId</code> element.</p>
 *             </li>
 *             <li>
 *                <p>If your domain is registered with a registrar other than Route 53,
 * 					you must update the name servers with your registrar to make Route 53 the DNS
 * 					service for the domain. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/MigratingDNS.html">Migrating DNS Service
 * 						for an Existing Domain to Amazon Route 53</a> in the
 * 						<i>Amazon Route 53 Developer Guide</i>. </p>
 *             </li>
 *          </ul>
 *          <p>When you submit a <code>CreateHostedZone</code> request, the initial status of the
 * 			hosted zone is <code>PENDING</code>. For public hosted zones, this means that the NS and
 * 			SOA records are not yet available on all Route 53 DNS servers. When the NS and
 * 			SOA records are available, the status of the zone changes to <code>INSYNC</code>.</p>
 *          <p>The <code>CreateHostedZone</code> request requires the caller to have an
 * 				<code>ec2:DescribeVpcs</code> permission.</p>
 *          <note>
 *             <p>When creating private hosted zones, the Amazon VPC must belong to the same
 * 				partition where the hosted zone is created. A partition is a group of Amazon Web Services Regions. Each Amazon Web Services account is scoped to one
 * 				partition.</p>
 *             <p>The following are the supported partitions:</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <code>aws</code> - Amazon Web Services Regions</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>aws-cn</code> - China Regions</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <code>aws-us-gov</code> - Amazon Web Services GovCloud (US) Region</p>
 *                </li>
 *             </ul>
 *             <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Access Management</a>
 * 				in the <i>Amazon Web Services General Reference</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // CreateHostedZoneRequest
 *   Name: "STRING_VALUE", // required
 *   VPC: { // VPC
 *     VPCRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-east-1" || "me-south-1" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "me-central-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-south-1" || "ap-south-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "ca-central-1" || "cn-north-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1",
 *     VPCId: "STRING_VALUE",
 *   },
 *   CallerReference: "STRING_VALUE", // required
 *   HostedZoneConfig: { // HostedZoneConfig
 *     Comment: "STRING_VALUE",
 *     PrivateZone: true || false,
 *   },
 *   DelegationSetId: "STRING_VALUE",
 * };
 * const command = new CreateHostedZoneCommand(input);
 * const response = await client.send(command);
 * // { // CreateHostedZoneResponse
 * //   HostedZone: { // HostedZone
 * //     Id: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     CallerReference: "STRING_VALUE", // required
 * //     Config: { // HostedZoneConfig
 * //       Comment: "STRING_VALUE",
 * //       PrivateZone: true || false,
 * //     },
 * //     ResourceRecordSetCount: Number("long"),
 * //     LinkedService: { // LinkedService
 * //       ServicePrincipal: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   },
 * //   ChangeInfo: { // ChangeInfo
 * //     Id: "STRING_VALUE", // required
 * //     Status: "PENDING" || "INSYNC", // required
 * //     SubmittedAt: new Date("TIMESTAMP"), // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * //   DelegationSet: { // DelegationSet
 * //     Id: "STRING_VALUE",
 * //     CallerReference: "STRING_VALUE",
 * //     NameServers: [ // DelegationSetNameServers // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   VPC: { // VPC
 * //     VPCRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-east-1" || "me-south-1" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "me-central-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-south-1" || "ap-south-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "ca-central-1" || "cn-north-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1",
 * //     VPCId: "STRING_VALUE",
 * //   },
 * //   Location: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateHostedZoneCommandInput - {@link CreateHostedZoneCommandInput}
 * @returns {@link CreateHostedZoneCommandOutput}
 * @see {@link CreateHostedZoneCommandInput} for command's `input` shape.
 * @see {@link CreateHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link ConflictingDomainExists} (client fault)
 *  <p>The cause of this error depends on the operation that you're performing:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Create a public hosted zone:</b> Two hosted zones
 * 					that have the same name or that have a parent/child relationship (example.com
 * 					and test.example.com) can't have any common name servers. You tried to create a
 * 					hosted zone that has the same name as an existing hosted zone or that's the
 * 					parent or child of an existing hosted zone, and you specified a delegation set
 * 					that shares one or more name servers with the existing hosted zone. For more
 * 					information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_CreateReusableDelegationSet.html">CreateReusableDelegationSet</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Create a private hosted zone:</b> A hosted zone
 * 					with the specified name already exists and is already associated with the Amazon
 * 					VPC that you specified.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Associate VPCs with a private hosted zone:</b>
 * 					The VPC that you specified is already associated with another hosted zone that
 * 					has the same name.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link DelegationSetNotAvailable} (client fault)
 *  <p>You can create a hosted zone that has the same name as an existing hosted zone
 * 			(example.com is common), but there is a limit to the number of hosted zones that have
 * 			the same name. If you get this error, Amazon Route 53 has reached that limit. If you own
 * 			the domain name and Route 53 generates this error, contact Customer Support.</p>
 *
 * @throws {@link DelegationSetNotReusable} (client fault)
 *  <p>A reusable delegation set with the specified ID does not exist.</p>
 *
 * @throws {@link HostedZoneAlreadyExists} (client fault)
 *  <p>The hosted zone you're trying to create already exists. Amazon Route 53 returns this
 * 			error when a hosted zone has already been created with the specified
 * 				<code>CallerReference</code>.</p>
 *
 * @throws {@link InvalidDomainName} (client fault)
 *  <p>The specified domain name is not valid.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidVPCId} (client fault)
 *  <p>The VPC ID that you specified either isn't a valid ID or the current account is not
 * 			authorized to access this VPC.</p>
 *
 * @throws {@link NoSuchDelegationSet} (client fault)
 *  <p>A reusable delegation set with the specified ID does not exist.</p>
 *
 * @throws {@link TooManyHostedZones} (client fault)
 *  <p>This operation can't be completed either because the current account has reached the
 * 			limit on the number of hosted zones or because you've reached the limit on the number of
 * 			hosted zones that can be associated with a reusable delegation set.</p>
 *          <p>For information about default limits, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a> in the
 * 				<i>Amazon Route 53 Developer Guide</i>.</p>
 *          <p>To get the current limit on hosted zones that can be created by an account, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetAccountLimit.html">GetAccountLimit</a>.</p>
 *          <p>To get the current limit on hosted zones that can be associated with a reusable
 * 			delegation set, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSetLimit.html">GetReusableDelegationSetLimit</a>.</p>
 *          <p>To request a higher limit, <a href="http://aws.amazon.com/route53-request">create a
 * 				case</a> with the Amazon Web Services Support Center.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class CreateHostedZoneCommand extends $Command<
  CreateHostedZoneCommandInput,
  CreateHostedZoneCommandOutput,
  Route53ClientResolvedConfig
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
  constructor(readonly input: CreateHostedZoneCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHostedZoneCommandInput, CreateHostedZoneCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateHostedZoneCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "CreateHostedZoneCommand";
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
  private serialize(input: CreateHostedZoneCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateHostedZoneCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHostedZoneCommandOutput> {
    return de_CreateHostedZoneCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
