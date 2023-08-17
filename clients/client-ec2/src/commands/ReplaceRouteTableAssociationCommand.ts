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
import { ReplaceRouteTableAssociationRequest, ReplaceRouteTableAssociationResult } from "../models/models_6";
import { de_ReplaceRouteTableAssociationCommand, se_ReplaceRouteTableAssociationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ReplaceRouteTableAssociationCommand}.
 */
export interface ReplaceRouteTableAssociationCommandInput extends ReplaceRouteTableAssociationRequest {}
/**
 * @public
 *
 * The output of {@link ReplaceRouteTableAssociationCommand}.
 */
export interface ReplaceRouteTableAssociationCommandOutput
  extends ReplaceRouteTableAssociationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Changes the route table associated with a given subnet, internet gateway, or virtual private gateway in a VPC. After the operation
 *         completes, the subnet or gateway uses the routes in the new route table. For more
 *         information about route tables, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html">Route
 *         tables</a> in the <i>Amazon VPC User Guide</i>.</p>
 *          <p>You can also use this operation to change which table is the main route table in the VPC. Specify the main route table's association ID and the route table ID of the new main route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceRouteTableAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceRouteTableAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ReplaceRouteTableAssociationRequest
 *   AssociationId: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   RouteTableId: "STRING_VALUE", // required
 * };
 * const command = new ReplaceRouteTableAssociationCommand(input);
 * const response = await client.send(command);
 * // { // ReplaceRouteTableAssociationResult
 * //   NewAssociationId: "STRING_VALUE",
 * //   AssociationState: { // RouteTableAssociationState
 * //     State: "associating" || "associated" || "disassociating" || "disassociated" || "failed",
 * //     StatusMessage: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ReplaceRouteTableAssociationCommandInput - {@link ReplaceRouteTableAssociationCommandInput}
 * @returns {@link ReplaceRouteTableAssociationCommandOutput}
 * @see {@link ReplaceRouteTableAssociationCommandInput} for command's `input` shape.
 * @see {@link ReplaceRouteTableAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To replace the route table associated with a subnet
 * ```javascript
 * // This example associates the specified route table with the subnet for the specified route table association.
 * const input = {
 *   "AssociationId": "rtbassoc-781d0d1a",
 *   "RouteTableId": "rtb-22574640"
 * };
 * const command = new ReplaceRouteTableAssociationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NewAssociationId": "rtbassoc-3a1f0f58"
 * }
 * *\/
 * // example id: ec2-replace-route-table-association-1
 * ```
 *
 */
export class ReplaceRouteTableAssociationCommand extends $Command<
  ReplaceRouteTableAssociationCommandInput,
  ReplaceRouteTableAssociationCommandOutput,
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
  constructor(readonly input: ReplaceRouteTableAssociationCommandInput) {
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
  ): Handler<ReplaceRouteTableAssociationCommandInput, ReplaceRouteTableAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReplaceRouteTableAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ReplaceRouteTableAssociationCommand";
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
  private serialize(input: ReplaceRouteTableAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ReplaceRouteTableAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ReplaceRouteTableAssociationCommandOutput> {
    return de_ReplaceRouteTableAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
