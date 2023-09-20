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
import { DeleteTransitGatewayConnectPeerRequest, DeleteTransitGatewayConnectPeerResult } from "../models/models_3";
import {
  de_DeleteTransitGatewayConnectPeerCommand,
  se_DeleteTransitGatewayConnectPeerCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayConnectPeerCommand}.
 */
export interface DeleteTransitGatewayConnectPeerCommandInput extends DeleteTransitGatewayConnectPeerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayConnectPeerCommand}.
 */
export interface DeleteTransitGatewayConnectPeerCommandOutput
  extends DeleteTransitGatewayConnectPeerResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified Connect peer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayConnectPeerCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayConnectPeerCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayConnectPeerRequest
 *   TransitGatewayConnectPeerId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayConnectPeerCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayConnectPeerResult
 * //   TransitGatewayConnectPeer: { // TransitGatewayConnectPeer
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     TransitGatewayConnectPeerId: "STRING_VALUE",
 * //     State: "pending" || "available" || "deleting" || "deleted",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     ConnectPeerConfiguration: { // TransitGatewayConnectPeerConfiguration
 * //       TransitGatewayAddress: "STRING_VALUE",
 * //       PeerAddress: "STRING_VALUE",
 * //       InsideCidrBlocks: [ // InsideCidrBlocksStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       Protocol: "gre",
 * //       BgpConfigurations: [ // TransitGatewayAttachmentBgpConfigurationList
 * //         { // TransitGatewayAttachmentBgpConfiguration
 * //           TransitGatewayAsn: Number("long"),
 * //           PeerAsn: Number("long"),
 * //           TransitGatewayAddress: "STRING_VALUE",
 * //           PeerAddress: "STRING_VALUE",
 * //           BgpStatus: "up" || "down",
 * //         },
 * //       ],
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
 * @param DeleteTransitGatewayConnectPeerCommandInput - {@link DeleteTransitGatewayConnectPeerCommandInput}
 * @returns {@link DeleteTransitGatewayConnectPeerCommandOutput}
 * @see {@link DeleteTransitGatewayConnectPeerCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayConnectPeerCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteTransitGatewayConnectPeerCommand extends $Command<
  DeleteTransitGatewayConnectPeerCommandInput,
  DeleteTransitGatewayConnectPeerCommandOutput,
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
  constructor(readonly input: DeleteTransitGatewayConnectPeerCommandInput) {
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
  ): Handler<DeleteTransitGatewayConnectPeerCommandInput, DeleteTransitGatewayConnectPeerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTransitGatewayConnectPeerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteTransitGatewayConnectPeerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DeleteTransitGatewayConnectPeer",
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
    input: DeleteTransitGatewayConnectPeerCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteTransitGatewayConnectPeerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTransitGatewayConnectPeerCommandOutput> {
    return de_DeleteTransitGatewayConnectPeerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
