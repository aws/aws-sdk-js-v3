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
  CreateTransitGatewayPrefixListReferenceRequest,
  CreateTransitGatewayPrefixListReferenceResult,
} from "../models/models_2";
import {
  de_CreateTransitGatewayPrefixListReferenceCommand,
  se_CreateTransitGatewayPrefixListReferenceCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTransitGatewayPrefixListReferenceCommand}.
 */
export interface CreateTransitGatewayPrefixListReferenceCommandInput
  extends CreateTransitGatewayPrefixListReferenceRequest {}
/**
 * @public
 *
 * The output of {@link CreateTransitGatewayPrefixListReferenceCommand}.
 */
export interface CreateTransitGatewayPrefixListReferenceCommandOutput
  extends CreateTransitGatewayPrefixListReferenceResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a reference (route) to a prefix list in a specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayPrefixListReferenceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayPrefixListReferenceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateTransitGatewayPrefixListReferenceRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   PrefixListId: "STRING_VALUE", // required
 *   TransitGatewayAttachmentId: "STRING_VALUE",
 *   Blackhole: true || false,
 *   DryRun: true || false,
 * };
 * const command = new CreateTransitGatewayPrefixListReferenceCommand(input);
 * const response = await client.send(command);
 * // { // CreateTransitGatewayPrefixListReferenceResult
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
 * @param CreateTransitGatewayPrefixListReferenceCommandInput - {@link CreateTransitGatewayPrefixListReferenceCommandInput}
 * @returns {@link CreateTransitGatewayPrefixListReferenceCommandOutput}
 * @see {@link CreateTransitGatewayPrefixListReferenceCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayPrefixListReferenceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class CreateTransitGatewayPrefixListReferenceCommand extends $Command<
  CreateTransitGatewayPrefixListReferenceCommandInput,
  CreateTransitGatewayPrefixListReferenceCommandOutput,
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
  constructor(readonly input: CreateTransitGatewayPrefixListReferenceCommandInput) {
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
    CreateTransitGatewayPrefixListReferenceCommandInput,
    CreateTransitGatewayPrefixListReferenceCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        CreateTransitGatewayPrefixListReferenceCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateTransitGatewayPrefixListReferenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "CreateTransitGatewayPrefixListReference",
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
    input: CreateTransitGatewayPrefixListReferenceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateTransitGatewayPrefixListReferenceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTransitGatewayPrefixListReferenceCommandOutput> {
    return de_CreateTransitGatewayPrefixListReferenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
