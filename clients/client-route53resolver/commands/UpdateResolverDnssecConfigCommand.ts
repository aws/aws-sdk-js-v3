import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { UpdateResolverDnssecConfigRequest, UpdateResolverDnssecConfigResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateResolverDnssecConfigCommand,
  serializeAws_json1_1UpdateResolverDnssecConfigCommand,
} from "../protocols/Aws_json1_1";
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

export interface UpdateResolverDnssecConfigCommandInput extends UpdateResolverDnssecConfigRequest {}
export interface UpdateResolverDnssecConfigCommandOutput extends UpdateResolverDnssecConfigResponse, __MetadataBearer {}

/**
 * <p>Updates an existing DNSSEC validation configuration. If there is no existing DNSSEC validation configuration, one is created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateResolverDnssecConfigCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateResolverDnssecConfigCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const command = new UpdateResolverDnssecConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateResolverDnssecConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateResolverDnssecConfigCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateResolverDnssecConfigCommand extends $Command<
  UpdateResolverDnssecConfigCommandInput,
  UpdateResolverDnssecConfigCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateResolverDnssecConfigCommandInput) {
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
  ): Handler<UpdateResolverDnssecConfigCommandInput, UpdateResolverDnssecConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "UpdateResolverDnssecConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateResolverDnssecConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateResolverDnssecConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateResolverDnssecConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateResolverDnssecConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateResolverDnssecConfigCommandOutput> {
    return deserializeAws_json1_1UpdateResolverDnssecConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
