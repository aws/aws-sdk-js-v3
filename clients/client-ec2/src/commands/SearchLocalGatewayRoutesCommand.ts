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
import { SearchLocalGatewayRoutesRequest, SearchLocalGatewayRoutesResult } from "../models/models_7";
import { de_SearchLocalGatewayRoutesCommand, se_SearchLocalGatewayRoutesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchLocalGatewayRoutesCommand}.
 */
export interface SearchLocalGatewayRoutesCommandInput extends SearchLocalGatewayRoutesRequest {}
/**
 * @public
 *
 * The output of {@link SearchLocalGatewayRoutesCommand}.
 */
export interface SearchLocalGatewayRoutesCommandOutput extends SearchLocalGatewayRoutesResult, __MetadataBearer {}

/**
 * @public
 * <p>Searches for routes in the specified local gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, SearchLocalGatewayRoutesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, SearchLocalGatewayRoutesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // SearchLocalGatewayRoutesRequest
 *   LocalGatewayRouteTableId: "STRING_VALUE", // required
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
 * const command = new SearchLocalGatewayRoutesCommand(input);
 * const response = await client.send(command);
 * // { // SearchLocalGatewayRoutesResult
 * //   Routes: [ // LocalGatewayRouteList
 * //     { // LocalGatewayRoute
 * //       DestinationCidrBlock: "STRING_VALUE",
 * //       LocalGatewayVirtualInterfaceGroupId: "STRING_VALUE",
 * //       Type: "static" || "propagated",
 * //       State: "pending" || "active" || "blackhole" || "deleting" || "deleted",
 * //       LocalGatewayRouteTableId: "STRING_VALUE",
 * //       LocalGatewayRouteTableArn: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       SubnetId: "STRING_VALUE",
 * //       CoipPoolId: "STRING_VALUE",
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       DestinationPrefixListId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchLocalGatewayRoutesCommandInput - {@link SearchLocalGatewayRoutesCommandInput}
 * @returns {@link SearchLocalGatewayRoutesCommandOutput}
 * @see {@link SearchLocalGatewayRoutesCommandInput} for command's `input` shape.
 * @see {@link SearchLocalGatewayRoutesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class SearchLocalGatewayRoutesCommand extends $Command<
  SearchLocalGatewayRoutesCommandInput,
  SearchLocalGatewayRoutesCommandOutput,
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
  constructor(readonly input: SearchLocalGatewayRoutesCommandInput) {
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
  ): Handler<SearchLocalGatewayRoutesCommandInput, SearchLocalGatewayRoutesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchLocalGatewayRoutesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "SearchLocalGatewayRoutesCommand";
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
  private serialize(input: SearchLocalGatewayRoutesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchLocalGatewayRoutesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchLocalGatewayRoutesCommandOutput> {
    return de_SearchLocalGatewayRoutesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
