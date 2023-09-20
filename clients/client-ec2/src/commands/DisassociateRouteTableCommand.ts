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
import { DisassociateRouteTableRequest } from "../models/models_5";
import { de_DisassociateRouteTableCommand, se_DisassociateRouteTableCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateRouteTableCommand}.
 */
export interface DisassociateRouteTableCommandInput extends DisassociateRouteTableRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateRouteTableCommand}.
 */
export interface DisassociateRouteTableCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Disassociates a subnet or gateway from a route table.</p>
 *          <p>After you perform this action, the subnet no longer uses the routes in the route table.
 * 				Instead, it uses the routes in the VPC's main route table. For more information
 * 				about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route
 * 				tables</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateRouteTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateRouteTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisassociateRouteTableRequest
 *   AssociationId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DisassociateRouteTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateRouteTableCommandInput - {@link DisassociateRouteTableCommandInput}
 * @returns {@link DisassociateRouteTableCommandOutput}
 * @see {@link DisassociateRouteTableCommandInput} for command's `input` shape.
 * @see {@link DisassociateRouteTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To disassociate a route table
 * ```javascript
 * // This example disassociates the specified route table from its associated subnet.
 * const input = {
 *   "AssociationId": "rtbassoc-781d0d1a"
 * };
 * const command = new DisassociateRouteTableCommand(input);
 * await client.send(command);
 * // example id: ec2-disassociate-route-table-1
 * ```
 *
 */
export class DisassociateRouteTableCommand extends $Command<
  DisassociateRouteTableCommandInput,
  DisassociateRouteTableCommandOutput,
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
  constructor(readonly input: DisassociateRouteTableCommandInput) {
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
  ): Handler<DisassociateRouteTableCommandInput, DisassociateRouteTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateRouteTableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateRouteTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DisassociateRouteTable",
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
  private serialize(input: DisassociateRouteTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DisassociateRouteTableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateRouteTableCommandOutput> {
    return de_DisassociateRouteTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
