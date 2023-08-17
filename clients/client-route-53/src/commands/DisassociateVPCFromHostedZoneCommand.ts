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

import { DisassociateVPCFromHostedZoneRequest, DisassociateVPCFromHostedZoneResponse } from "../models/models_0";
import {
  de_DisassociateVPCFromHostedZoneCommand,
  se_DisassociateVPCFromHostedZoneCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateVPCFromHostedZoneCommand}.
 */
export interface DisassociateVPCFromHostedZoneCommandInput extends DisassociateVPCFromHostedZoneRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateVPCFromHostedZoneCommand}.
 */
export interface DisassociateVPCFromHostedZoneCommandOutput
  extends DisassociateVPCFromHostedZoneResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Disassociates an Amazon Virtual Private Cloud (Amazon VPC) from an Amazon Route 53
 * 			private hosted zone. Note the following:</p>
 *          <ul>
 *             <li>
 *                <p>You can't disassociate the last Amazon VPC from a private hosted zone.</p>
 *             </li>
 *             <li>
 *                <p>You can't convert a private hosted zone into a public hosted zone.</p>
 *             </li>
 *             <li>
 *                <p>You can submit a <code>DisassociateVPCFromHostedZone</code> request using
 * 					either the account that created the hosted zone or the account that created the
 * 					Amazon VPC.</p>
 *             </li>
 *             <li>
 *                <p>Some services, such as Cloud Map and Amazon Elastic File System
 * 					(Amazon EFS) automatically create hosted zones and associate VPCs with the
 * 					hosted zones. A service can create a hosted zone using your account or using its
 * 					own account. You can disassociate a VPC from a hosted zone only if the service
 * 					created the hosted zone using your account.</p>
 *                <p>When you run <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_ListHostedZonesByVPC.html">DisassociateVPCFromHostedZone</a>, if the hosted zone has a value for
 * 						<code>OwningAccount</code>, you can use
 * 						<code>DisassociateVPCFromHostedZone</code>. If the hosted zone has a value
 * 					for <code>OwningService</code>, you can't use
 * 						<code>DisassociateVPCFromHostedZone</code>.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>When revoking access, the hosted zone and the Amazon VPC must belong to
 * 				the same partition. A partition is a group of Amazon Web Services Regions. Each
 * 					Amazon Web Services account is scoped to one partition.</p>
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
 * import { Route53Client, DisassociateVPCFromHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DisassociateVPCFromHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // DisassociateVPCFromHostedZoneRequest
 *   HostedZoneId: "STRING_VALUE", // required
 *   VPC: { // VPC
 *     VPCRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "eu-central-2" || "ap-east-1" || "me-south-1" || "us-gov-west-1" || "us-gov-east-1" || "us-iso-east-1" || "us-iso-west-1" || "us-isob-east-1" || "me-central-1" || "ap-southeast-1" || "ap-southeast-2" || "ap-southeast-3" || "ap-south-1" || "ap-south-2" || "ap-northeast-1" || "ap-northeast-2" || "ap-northeast-3" || "eu-north-1" || "sa-east-1" || "ca-central-1" || "cn-north-1" || "af-south-1" || "eu-south-1" || "eu-south-2" || "ap-southeast-4" || "il-central-1",
 *     VPCId: "STRING_VALUE",
 *   },
 *   Comment: "STRING_VALUE",
 * };
 * const command = new DisassociateVPCFromHostedZoneCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateVPCFromHostedZoneResponse
 * //   ChangeInfo: { // ChangeInfo
 * //     Id: "STRING_VALUE", // required
 * //     Status: "PENDING" || "INSYNC", // required
 * //     SubmittedAt: new Date("TIMESTAMP"), // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DisassociateVPCFromHostedZoneCommandInput - {@link DisassociateVPCFromHostedZoneCommandInput}
 * @returns {@link DisassociateVPCFromHostedZoneCommandOutput}
 * @see {@link DisassociateVPCFromHostedZoneCommandInput} for command's `input` shape.
 * @see {@link DisassociateVPCFromHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidVPCId} (client fault)
 *  <p>The VPC ID that you specified either isn't a valid ID or the current account is not
 * 			authorized to access this VPC.</p>
 *
 * @throws {@link LastVPCAssociation} (client fault)
 *  <p>The VPC that you're trying to disassociate from the private hosted zone is the last
 * 			VPC that is associated with the hosted zone. Amazon Route 53 doesn't support
 * 			disassociating the last VPC from a hosted zone.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link VPCAssociationNotFound} (client fault)
 *  <p>The specified VPC and hosted zone are not currently associated.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class DisassociateVPCFromHostedZoneCommand extends $Command<
  DisassociateVPCFromHostedZoneCommandInput,
  DisassociateVPCFromHostedZoneCommandOutput,
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
  constructor(readonly input: DisassociateVPCFromHostedZoneCommandInput) {
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
  ): Handler<DisassociateVPCFromHostedZoneCommandInput, DisassociateVPCFromHostedZoneCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateVPCFromHostedZoneCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "DisassociateVPCFromHostedZoneCommand";
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
  private serialize(input: DisassociateVPCFromHostedZoneCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateVPCFromHostedZoneCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateVPCFromHostedZoneCommandOutput> {
    return de_DisassociateVPCFromHostedZoneCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
