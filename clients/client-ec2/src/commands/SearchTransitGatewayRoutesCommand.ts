// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  SearchTransitGatewayRoutesRequest,
  SearchTransitGatewayRoutesRequestFilterSensitiveLog,
  SearchTransitGatewayRoutesResult,
  SearchTransitGatewayRoutesResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2SearchTransitGatewayRoutesCommand,
  serializeAws_ec2SearchTransitGatewayRoutesCommand,
} from "../protocols/Aws_ec2";

export interface SearchTransitGatewayRoutesCommandInput extends SearchTransitGatewayRoutesRequest {}
export interface SearchTransitGatewayRoutesCommandOutput extends SearchTransitGatewayRoutesResult, __MetadataBearer {}

/**
 * <p>Searches for routes in the specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, SearchTransitGatewayRoutesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, SearchTransitGatewayRoutesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new SearchTransitGatewayRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchTransitGatewayRoutesCommandInput} for command's `input` shape.
 * @see {@link SearchTransitGatewayRoutesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
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
      inputFilterSensitiveLog: SearchTransitGatewayRoutesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SearchTransitGatewayRoutesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchTransitGatewayRoutesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2SearchTransitGatewayRoutesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchTransitGatewayRoutesCommandOutput> {
    return deserializeAws_ec2SearchTransitGatewayRoutesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
