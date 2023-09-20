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
  DeleteTransitGatewayPrefixListReferenceRequest,
  DeleteTransitGatewayPrefixListReferenceResult,
} from "../models/models_3";
import {
  de_DeleteTransitGatewayPrefixListReferenceCommand,
  se_DeleteTransitGatewayPrefixListReferenceCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteTransitGatewayPrefixListReferenceCommand}.
 */
export interface DeleteTransitGatewayPrefixListReferenceCommandInput
  extends DeleteTransitGatewayPrefixListReferenceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTransitGatewayPrefixListReferenceCommand}.
 */
export interface DeleteTransitGatewayPrefixListReferenceCommandOutput
  extends DeleteTransitGatewayPrefixListReferenceResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes a reference (route) to a prefix list in a specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayPrefixListReferenceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayPrefixListReferenceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DeleteTransitGatewayPrefixListReferenceRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   PrefixListId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteTransitGatewayPrefixListReferenceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTransitGatewayPrefixListReferenceResult
 * //   TransitGatewayPrefixListReference: { // TransitGatewayPrefixListReference
 * //     TransitGatewayRouteTableId: "STRING_VALUE",
 * //     PrefixListId: "STRING_VALUE",
 * //     PrefixListOwnerId: "STRING_VALUE",
 * //     State: "pending" || "available" || "modifying" || "deleting",
 * //     Blackhole: true || false,
 * //     TransitGatewayAttachment: { // TransitGatewayPrefixListAttachment
 * //       TransitGatewayAttachmentId: "STRING_VALUE",
 * //       ResourceType: "vpc" || "vpn" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering",
 * //       ResourceId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteTransitGatewayPrefixListReferenceCommandInput - {@link DeleteTransitGatewayPrefixListReferenceCommandInput}
 * @returns {@link DeleteTransitGatewayPrefixListReferenceCommandOutput}
 * @see {@link DeleteTransitGatewayPrefixListReferenceCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayPrefixListReferenceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DeleteTransitGatewayPrefixListReferenceCommand extends $Command<
  DeleteTransitGatewayPrefixListReferenceCommandInput,
  DeleteTransitGatewayPrefixListReferenceCommandOutput,
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
  constructor(readonly input: DeleteTransitGatewayPrefixListReferenceCommandInput) {
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
    DeleteTransitGatewayPrefixListReferenceCommandInput,
    DeleteTransitGatewayPrefixListReferenceCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DeleteTransitGatewayPrefixListReferenceCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteTransitGatewayPrefixListReferenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DeleteTransitGatewayPrefixListReference",
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
    input: DeleteTransitGatewayPrefixListReferenceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteTransitGatewayPrefixListReferenceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTransitGatewayPrefixListReferenceCommandOutput> {
    return de_DeleteTransitGatewayPrefixListReferenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
