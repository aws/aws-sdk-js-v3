import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";
import { CreateCrossAccountAuthorizationRequest, CreateCrossAccountAuthorizationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateCrossAccountAuthorizationCommand,
  serializeAws_restJson1CreateCrossAccountAuthorizationCommand,
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

export interface CreateCrossAccountAuthorizationCommandInput extends CreateCrossAccountAuthorizationRequest {}
export interface CreateCrossAccountAuthorizationCommandOutput
  extends CreateCrossAccountAuthorizationResponse,
    __MetadataBearer {}

/**
 * Create a new cross account readiness authorization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, CreateCrossAccountAuthorizationCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, CreateCrossAccountAuthorizationCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const command = new CreateCrossAccountAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCrossAccountAuthorizationCommandInput} for command's `input` shape.
 * @see {@link CreateCrossAccountAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateCrossAccountAuthorizationCommand extends $Command<
  CreateCrossAccountAuthorizationCommandInput,
  CreateCrossAccountAuthorizationCommandOutput,
  Route53RecoveryReadinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCrossAccountAuthorizationCommandInput) {
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
  ): Handler<CreateCrossAccountAuthorizationCommandInput, CreateCrossAccountAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryReadinessClient";
    const commandName = "CreateCrossAccountAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCrossAccountAuthorizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCrossAccountAuthorizationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateCrossAccountAuthorizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateCrossAccountAuthorizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCrossAccountAuthorizationCommandOutput> {
    return deserializeAws_restJson1CreateCrossAccountAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
