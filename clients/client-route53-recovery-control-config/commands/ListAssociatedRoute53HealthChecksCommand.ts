import {
  Route53RecoveryControlConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryControlConfigClient";
import {
  ListAssociatedRoute53HealthChecksRequest,
  ListAssociatedRoute53HealthChecksResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListAssociatedRoute53HealthChecksCommand,
  serializeAws_restJson1ListAssociatedRoute53HealthChecksCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ListAssociatedRoute53HealthChecksCommandInput extends ListAssociatedRoute53HealthChecksRequest {}
export interface ListAssociatedRoute53HealthChecksCommandOutput
  extends ListAssociatedRoute53HealthChecksResponse,
    __MetadataBearer {}

/**
 * <p>Returns an array of all Amazon Route 53 health checks associated with a specific routing control.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, ListAssociatedRoute53HealthChecksCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, ListAssociatedRoute53HealthChecksCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * const client = new Route53RecoveryControlConfigClient(config);
 * const command = new ListAssociatedRoute53HealthChecksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociatedRoute53HealthChecksCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedRoute53HealthChecksCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAssociatedRoute53HealthChecksCommand extends $Command<
  ListAssociatedRoute53HealthChecksCommandInput,
  ListAssociatedRoute53HealthChecksCommandOutput,
  Route53RecoveryControlConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAssociatedRoute53HealthChecksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53RecoveryControlConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssociatedRoute53HealthChecksCommandInput, ListAssociatedRoute53HealthChecksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryControlConfigClient";
    const commandName = "ListAssociatedRoute53HealthChecksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssociatedRoute53HealthChecksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssociatedRoute53HealthChecksResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAssociatedRoute53HealthChecksCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAssociatedRoute53HealthChecksCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAssociatedRoute53HealthChecksCommandOutput> {
    return deserializeAws_restJson1ListAssociatedRoute53HealthChecksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
