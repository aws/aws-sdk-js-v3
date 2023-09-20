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
import { SearchTransitGatewayRoutesRequest, SearchTransitGatewayRoutesResult } from "../models/models_7";
import { de_SearchTransitGatewayRoutesCommand, se_SearchTransitGatewayRoutesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchTransitGatewayRoutesCommand}.
 */
export interface SearchTransitGatewayRoutesCommandInput extends SearchTransitGatewayRoutesRequest {}
/**
 * @public
 *
 * The output of {@link SearchTransitGatewayRoutesCommand}.
 */
export interface SearchTransitGatewayRoutesCommandOutput extends SearchTransitGatewayRoutesResult, __MetadataBearer {}

/**
 * @public
 * <p>Searches for routes in the specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, SearchTransitGatewayRoutesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, SearchTransitGatewayRoutesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // SearchTransitGatewayRoutesRequest
 *   TransitGatewayRouteTableId: "STRING_VALUE", // required
 *   Filters: [ // FilterList // required
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   DryRun: true || false,
 * };
 * const command = new SearchTransitGatewayRoutesCommand(input);
 * const response = await client.send(command);
 * // { // SearchTransitGatewayRoutesResult
 * //   Routes: [ // TransitGatewayRouteList
 * //     { // TransitGatewayRoute
 * //       DestinationCidrBlock: "STRING_VALUE",
 * //       PrefixListId: "STRING_VALUE",
 * //       TransitGatewayRouteTableAnnouncementId: "STRING_VALUE",
 * //       TransitGatewayAttachments: [ // TransitGatewayRouteAttachmentList
 * //         { // TransitGatewayRouteAttachment
 * //           ResourceId: "STRING_VALUE",
 * //           TransitGatewayAttachmentId: "STRING_VALUE",
 * //           ResourceType: "vpc" || "vpn" || "direct-connect-gateway" || "connect" || "peering" || "tgw-peering",
 * //         },
 * //       ],
 * //       Type: "static" || "propagated",
 * //       State: "pending" || "active" || "blackhole" || "deleting" || "deleted",
 * //     },
 * //   ],
 * //   AdditionalRoutesAvailable: true || false,
 * // };
 *
 * ```
 *
 * @param SearchTransitGatewayRoutesCommandInput - {@link SearchTransitGatewayRoutesCommandInput}
 * @returns {@link SearchTransitGatewayRoutesCommandOutput}
 * @see {@link SearchTransitGatewayRoutesCommandInput} for command's `input` shape.
 * @see {@link SearchTransitGatewayRoutesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class SearchTransitGatewayRoutesCommand extends $Command<
  SearchTransitGatewayRoutesCommandInput,
  SearchTransitGatewayRoutesCommandOutput,
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
  constructor(readonly input: SearchTransitGatewayRoutesCommandInput) {
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
  ): Handler<SearchTransitGatewayRoutesCommandInput, SearchTransitGatewayRoutesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchTransitGatewayRoutesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "SearchTransitGatewayRoutesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "SearchTransitGatewayRoutes",
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
  private serialize(input: SearchTransitGatewayRoutesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchTransitGatewayRoutesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchTransitGatewayRoutesCommandOutput> {
    return de_SearchTransitGatewayRoutesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
