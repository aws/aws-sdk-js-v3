import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";
import { GetResourceSetRequest, GetResourceSetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetResourceSetCommand,
  serializeAws_restJson1GetResourceSetCommand,
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

export interface GetResourceSetCommandInput extends GetResourceSetRequest {}
export interface GetResourceSetCommandOutput extends GetResourceSetResponse, __MetadataBearer {}

/**
 * Returns information about a Resource Set.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, GetResourceSetCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, GetResourceSetCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const command = new GetResourceSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourceSetCommandInput} for command's `input` shape.
 * @see {@link GetResourceSetCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetResourceSetCommand extends $Command<
  GetResourceSetCommandInput,
  GetResourceSetCommandOutput,
  Route53RecoveryReadinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetResourceSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53RecoveryReadinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourceSetCommandInput, GetResourceSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryReadinessClient";
    const commandName = "GetResourceSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResourceSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetResourceSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResourceSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetResourceSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourceSetCommandOutput> {
    return deserializeAws_restJson1GetResourceSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
