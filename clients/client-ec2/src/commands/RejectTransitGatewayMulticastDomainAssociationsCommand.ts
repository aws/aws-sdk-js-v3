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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  RejectTransitGatewayMulticastDomainAssociationsRequest,
  RejectTransitGatewayMulticastDomainAssociationsResult,
} from "../models/models_6";
import {
  de_RejectTransitGatewayMulticastDomainAssociationsCommand,
  se_RejectTransitGatewayMulticastDomainAssociationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RejectTransitGatewayMulticastDomainAssociationsCommand}.
 */
export interface RejectTransitGatewayMulticastDomainAssociationsCommandInput
  extends RejectTransitGatewayMulticastDomainAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link RejectTransitGatewayMulticastDomainAssociationsCommand}.
 */
export interface RejectTransitGatewayMulticastDomainAssociationsCommandOutput
  extends RejectTransitGatewayMulticastDomainAssociationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Rejects a request to associate cross-account subnets with a transit gateway multicast domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RejectTransitGatewayMulticastDomainAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RejectTransitGatewayMulticastDomainAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // RejectTransitGatewayMulticastDomainAssociationsRequest
 *   TransitGatewayMulticastDomainId: "STRING_VALUE",
 *   TransitGatewayAttachmentId: "STRING_VALUE",
 *   SubnetIds: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new RejectTransitGatewayMulticastDomainAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // RejectTransitGatewayMulticastDomainAssociationsResult
 * //   Associations: { // TransitGatewayMulticastDomainAssociations
 * //     TransitGatewayMulticastDomainId: "STRING_VALUE",
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     ResourceType: "vpc" || "vpn" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering",
 * //     ResourceOwnerId: "STRING_VALUE",
 * //     Subnets: [ // SubnetAssociationList
 * //       { // SubnetAssociation
 * //         SubnetId: "STRING_VALUE",
 * //         State: "pendingAcceptance" || "associating" || "associated" || "disassociating" || "disassociated" || "rejected" || "failed",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param RejectTransitGatewayMulticastDomainAssociationsCommandInput - {@link RejectTransitGatewayMulticastDomainAssociationsCommandInput}
 * @returns {@link RejectTransitGatewayMulticastDomainAssociationsCommandOutput}
 * @see {@link RejectTransitGatewayMulticastDomainAssociationsCommandInput} for command's `input` shape.
 * @see {@link RejectTransitGatewayMulticastDomainAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class RejectTransitGatewayMulticastDomainAssociationsCommand extends $Command<
  RejectTransitGatewayMulticastDomainAssociationsCommandInput,
  RejectTransitGatewayMulticastDomainAssociationsCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: RejectTransitGatewayMulticastDomainAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RejectTransitGatewayMulticastDomainAssociationsCommandInput,
    RejectTransitGatewayMulticastDomainAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        RejectTransitGatewayMulticastDomainAssociationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RejectTransitGatewayMulticastDomainAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "RejectTransitGatewayMulticastDomainAssociations",
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
  private serialize(
    input: RejectTransitGatewayMulticastDomainAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_RejectTransitGatewayMulticastDomainAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectTransitGatewayMulticastDomainAssociationsCommandOutput> {
    return de_RejectTransitGatewayMulticastDomainAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
