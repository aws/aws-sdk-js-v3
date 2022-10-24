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

import {
  ListResolverDnssecConfigsRequest,
  ListResolverDnssecConfigsRequestFilterSensitiveLog,
  ListResolverDnssecConfigsResponse,
  ListResolverDnssecConfigsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListResolverDnssecConfigsCommand,
  serializeAws_json1_1ListResolverDnssecConfigsCommand,
} from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

export interface ListResolverDnssecConfigsCommandInput extends ListResolverDnssecConfigsRequest {}
export interface ListResolverDnssecConfigsCommandOutput extends ListResolverDnssecConfigsResponse, __MetadataBearer {}

/**
 * <p>Lists the configurations for DNSSEC validation that are associated with the current Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListResolverDnssecConfigsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListResolverDnssecConfigsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new ListResolverDnssecConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListResolverDnssecConfigsCommandInput} for command's `input` shape.
 * @see {@link ListResolverDnssecConfigsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 */
export class ListResolverDnssecConfigsCommand extends $Command<
  ListResolverDnssecConfigsCommandInput,
  ListResolverDnssecConfigsCommandOutput,
  Route53ResolverClientResolvedConfig
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

  constructor(readonly input: ListResolverDnssecConfigsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResolverDnssecConfigsCommandInput, ListResolverDnssecConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListResolverDnssecConfigsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "ListResolverDnssecConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResolverDnssecConfigsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListResolverDnssecConfigsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListResolverDnssecConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListResolverDnssecConfigsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListResolverDnssecConfigsCommandOutput> {
    return deserializeAws_json1_1ListResolverDnssecConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
