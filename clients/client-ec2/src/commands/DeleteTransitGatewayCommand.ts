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
import { DeleteTransitGatewayRequest, DeleteTransitGatewayResult } from "../models/models_3";
import { de_DeleteTransitGatewayCommand, se_DeleteTransitGatewayCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayCommand}.
 */
export interface DeleteTransitGatewayCommandInput extends DeleteTransitGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayCommand}.
 */
export interface DeleteTransitGatewayCommandOutput extends DeleteTransitGatewayResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified transit gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayRequest
 *   TransitGatewayId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayResult
 * //   TransitGateway: { // TransitGateway
 * //     TransitGatewayId: "STRING_VALUE",
 * //     TransitGatewayArn: "STRING_VALUE",
 * //     State: "pending" || "available" || "modifying" || "deleting" || "deleted",
 * //     OwnerId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Options: { // TransitGatewayOptions
 * //       AmazonSideAsn: Number("long"),
 * //       TransitGatewayCidrBlocks: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       AutoAcceptSharedAttachments: "enable" || "disable",
 * //       DefaultRouteTableAssociation: "enable" || "disable",
 * //       AssociationDefaultRouteTableId: "STRING_VALUE",
 * //       DefaultRouteTablePropagation: "enable" || "disable",
 * //       PropagationDefaultRouteTableId: "STRING_VALUE",
 * //       VpnEcmpSupport: "enable" || "disable",
 * //       DnsSupport: "enable" || "disable",
 * //       MulticastSupport: "enable" || "disable",
 * //     },
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteTransitGatewayCommandInput - {@link DeleteTransitGatewayCommandInput}
 * @returns {@link DeleteTransitGatewayCommandOutput}
 * @see {@link DeleteTransitGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteTransitGatewayCommand extends $Command<
  DeleteTransitGatewayCommandInput,
  DeleteTransitGatewayCommandOutput,
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
  constructor(readonly input: DeleteTransitGatewayCommandInput) {
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
  ): Handler<DeleteTransitGatewayCommandInput, DeleteTransitGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTransitGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteTransitGatewayCommand";
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
  private serialize(input: DeleteTransitGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteTransitGatewayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTransitGatewayCommandOutput> {
    return de_DeleteTransitGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
