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
  DeleteTransitGatewayPeeringAttachmentRequest,
  DeleteTransitGatewayPeeringAttachmentResult,
} from "../models/models_3";
import {
  de_DeleteTransitGatewayPeeringAttachmentCommand,
  se_DeleteTransitGatewayPeeringAttachmentCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayPeeringAttachmentCommand}.
 */
export interface DeleteTransitGatewayPeeringAttachmentCommandInput
  extends DeleteTransitGatewayPeeringAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayPeeringAttachmentCommand}.
 */
export interface DeleteTransitGatewayPeeringAttachmentCommandOutput
  extends DeleteTransitGatewayPeeringAttachmentResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes a transit gateway peering attachment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayPeeringAttachmentCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayPeeringAttachmentCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayPeeringAttachmentRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayPeeringAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayPeeringAttachmentResult
 * //   TransitGatewayPeeringAttachment: { // TransitGatewayPeeringAttachment
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     AccepterTransitGatewayAttachmentId: "STRING_VALUE",
 * //     RequesterTgwInfo: { // PeeringTgwInfo
 * //       TransitGatewayId: "STRING_VALUE",
 * //       CoreNetworkId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //     },
 * //     AccepterTgwInfo: {
 * //       TransitGatewayId: "STRING_VALUE",
 * //       CoreNetworkId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //     },
 * //     Options: { // TransitGatewayPeeringAttachmentOptions
 * //       DynamicRouting: "enable" || "disable",
 * //     },
 * //     Status: { // PeeringAttachmentStatus
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     State: "initiating" || "initiatingRequest" || "pendingAcceptance" || "rollingBack" || "pending" || "available" || "modifying" || "deleting" || "deleted" || "failed" || "rejected" || "rejecting" || "failing",
 * //     CreationTime: new Date("TIMESTAMP"),
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
 * @param DeleteTransitGatewayPeeringAttachmentCommandInput - {@link DeleteTransitGatewayPeeringAttachmentCommandInput}
 * @returns {@link DeleteTransitGatewayPeeringAttachmentCommandOutput}
 * @see {@link DeleteTransitGatewayPeeringAttachmentCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayPeeringAttachmentCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteTransitGatewayPeeringAttachmentCommand extends $Command<
  DeleteTransitGatewayPeeringAttachmentCommandInput,
  DeleteTransitGatewayPeeringAttachmentCommandOutput,
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
  constructor(readonly input: DeleteTransitGatewayPeeringAttachmentCommandInput) {
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
  ): Handler<DeleteTransitGatewayPeeringAttachmentCommandInput, DeleteTransitGatewayPeeringAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTransitGatewayPeeringAttachmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteTransitGatewayPeeringAttachmentCommand";
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
    input: DeleteTransitGatewayPeeringAttachmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteTransitGatewayPeeringAttachmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTransitGatewayPeeringAttachmentCommandOutput> {
    return de_DeleteTransitGatewayPeeringAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
