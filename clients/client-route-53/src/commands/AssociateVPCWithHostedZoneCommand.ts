// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AssociateVPCWithHostedZoneRequest,
  AssociateVPCWithHostedZoneRequestFilterSensitiveLog,
  AssociateVPCWithHostedZoneResponse,
  AssociateVPCWithHostedZoneResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlAssociateVPCWithHostedZoneCommand,
  serializeAws_restXmlAssociateVPCWithHostedZoneCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface AssociateVPCWithHostedZoneCommandInput extends AssociateVPCWithHostedZoneRequest {}
export interface AssociateVPCWithHostedZoneCommandOutput extends AssociateVPCWithHostedZoneResponse, __MetadataBearer {}

/**
 * <p>Associates an Amazon VPC with a private hosted zone. </p>
 *          <important>
 *             <p>To perform the association, the VPC and the private hosted zone must already
 * 				exist. You can't convert a public hosted zone into a private hosted zone.</p>
 *          </important>
 *          <note>
 *             <p>If you want to associate a VPC that was created by using one Amazon Web Services account with a private hosted zone that was created by using a
 * 				different account, the Amazon Web Services account that created the private hosted
 * 				zone must first submit a <code>CreateVPCAssociationAuthorization</code> request.
 * 				Then the account that created the VPC must submit an
 * 					<code>AssociateVPCWithHostedZone</code> request.</p>
 *          </note>
 *          <note>
 *             <p>When granting access, the hosted zone and the Amazon VPC must belong to
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
 * import { Route53Client, AssociateVPCWithHostedZoneCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, AssociateVPCWithHostedZoneCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new AssociateVPCWithHostedZoneCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateVPCWithHostedZoneCommandInput} for command's `input` shape.
 * @see {@link AssociateVPCWithHostedZoneCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class AssociateVPCWithHostedZoneCommand extends $Command<
  AssociateVPCWithHostedZoneCommandInput,
  AssociateVPCWithHostedZoneCommandOutput,
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

  constructor(readonly input: AssociateVPCWithHostedZoneCommandInput) {
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
  ): Handler<AssociateVPCWithHostedZoneCommandInput, AssociateVPCWithHostedZoneCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateVPCWithHostedZoneCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "AssociateVPCWithHostedZoneCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateVPCWithHostedZoneRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateVPCWithHostedZoneResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateVPCWithHostedZoneCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlAssociateVPCWithHostedZoneCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateVPCWithHostedZoneCommandOutput> {
    return deserializeAws_restXmlAssociateVPCWithHostedZoneCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
