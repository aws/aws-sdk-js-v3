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
  ListHealthChecksRequest,
  ListHealthChecksRequestFilterSensitiveLog,
  ListHealthChecksResponse,
  ListHealthChecksResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlListHealthChecksCommand,
  serializeAws_restXmlListHealthChecksCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface ListHealthChecksCommandInput extends ListHealthChecksRequest {}
export interface ListHealthChecksCommandOutput extends ListHealthChecksResponse, __MetadataBearer {}

/**
 * <p>Retrieve a list of the health checks that are associated with the current Amazon Web Services account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListHealthChecksCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListHealthChecksCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new ListHealthChecksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHealthChecksCommandInput} for command's `input` shape.
 * @see {@link ListHealthChecksCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class ListHealthChecksCommand extends $Command<
  ListHealthChecksCommandInput,
  ListHealthChecksCommandOutput,
  Route53ClientResolvedConfig
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

  constructor(readonly input: ListHealthChecksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListHealthChecksCommandInput, ListHealthChecksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListHealthChecksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListHealthChecksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListHealthChecksRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListHealthChecksResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListHealthChecksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListHealthChecksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHealthChecksCommandOutput> {
    return deserializeAws_restXmlListHealthChecksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
