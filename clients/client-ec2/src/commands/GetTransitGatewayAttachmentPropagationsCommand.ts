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
  GetTransitGatewayAttachmentPropagationsRequest,
  GetTransitGatewayAttachmentPropagationsResult,
} from "../models/models_5";
import {
  de_GetTransitGatewayAttachmentPropagationsCommand,
  se_GetTransitGatewayAttachmentPropagationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayAttachmentPropagationsCommand}.
 */
export interface GetTransitGatewayAttachmentPropagationsCommandInput
  extends GetTransitGatewayAttachmentPropagationsRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayAttachmentPropagationsCommand}.
 */
export interface GetTransitGatewayAttachmentPropagationsCommandOutput
  extends GetTransitGatewayAttachmentPropagationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the route tables to which the specified resource attachment propagates routes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayAttachmentPropagationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayAttachmentPropagationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetTransitGatewayAttachmentPropagationsRequest
 *   TransitGatewayAttachmentId: "STRING_VALUE", // required
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetTransitGatewayAttachmentPropagationsCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayAttachmentPropagationsResult
 * //   TransitGatewayAttachmentPropagations: [ // TransitGatewayAttachmentPropagationList
 * //     { // TransitGatewayAttachmentPropagation
 * //       TransitGatewayRouteTableId: "STRING_VALUE",
 * //       State: "enabling" || "enabled" || "disabling" || "disabled",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTransitGatewayAttachmentPropagationsCommandInput - {@link GetTransitGatewayAttachmentPropagationsCommandInput}
 * @returns {@link GetTransitGatewayAttachmentPropagationsCommandOutput}
 * @see {@link GetTransitGatewayAttachmentPropagationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayAttachmentPropagationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class GetTransitGatewayAttachmentPropagationsCommand extends $Command<
  GetTransitGatewayAttachmentPropagationsCommandInput,
  GetTransitGatewayAttachmentPropagationsCommandOutput,
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
  constructor(readonly input: GetTransitGatewayAttachmentPropagationsCommandInput) {
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
    GetTransitGatewayAttachmentPropagationsCommandInput,
    GetTransitGatewayAttachmentPropagationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetTransitGatewayAttachmentPropagationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetTransitGatewayAttachmentPropagationsCommand";
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
    input: GetTransitGatewayAttachmentPropagationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetTransitGatewayAttachmentPropagationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTransitGatewayAttachmentPropagationsCommandOutput> {
    return de_GetTransitGatewayAttachmentPropagationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
