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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  AssociateTransitGatewayPolicyTableRequest,
  AssociateTransitGatewayPolicyTableResult,
} from "../models/models_0";
import {
  de_AssociateTransitGatewayPolicyTableCommand,
  se_AssociateTransitGatewayPolicyTableCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateTransitGatewayPolicyTableCommand}.
 */
export interface AssociateTransitGatewayPolicyTableCommandInput extends AssociateTransitGatewayPolicyTableRequest {}
/**
 * @public
 *
 * The output of {@link AssociateTransitGatewayPolicyTableCommand}.
 */
export interface AssociateTransitGatewayPolicyTableCommandOutput
  extends AssociateTransitGatewayPolicyTableResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Associates the specified transit gateway attachment with a transit gateway policy table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateTransitGatewayPolicyTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateTransitGatewayPolicyTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AssociateTransitGatewayPolicyTableRequest
 *   TransitGatewayPolicyTableId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new AssociateTransitGatewayPolicyTableCommand(input);
 * const response = await client.send(command);
 * // { // AssociateTransitGatewayPolicyTableResult
 * //   Association: { // TransitGatewayPolicyTableAssociation
 * //     TransitGatewayPolicyTableId: "STRING_VALUE",
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     ResourceId: "STRING_VALUE",
 * //     ResourceType: "vpc" || "vpn" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering",
 * //     State: "associating" || "associated" || "disassociating" || "disassociated",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateTransitGatewayPolicyTableCommandInput - {@link AssociateTransitGatewayPolicyTableCommandInput}
 * @returns {@link AssociateTransitGatewayPolicyTableCommandOutput}
 * @see {@link AssociateTransitGatewayPolicyTableCommandInput} for command's `input` shape.
 * @see {@link AssociateTransitGatewayPolicyTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class AssociateTransitGatewayPolicyTableCommand extends $Command<
  AssociateTransitGatewayPolicyTableCommandInput,
  AssociateTransitGatewayPolicyTableCommandOutput,
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
  constructor(readonly input: AssociateTransitGatewayPolicyTableCommandInput) {
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
  ): Handler<AssociateTransitGatewayPolicyTableCommandInput, AssociateTransitGatewayPolicyTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateTransitGatewayPolicyTableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateTransitGatewayPolicyTableCommand";
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
    input: AssociateTransitGatewayPolicyTableCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AssociateTransitGatewayPolicyTableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateTransitGatewayPolicyTableCommandOutput> {
    return de_AssociateTransitGatewayPolicyTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
