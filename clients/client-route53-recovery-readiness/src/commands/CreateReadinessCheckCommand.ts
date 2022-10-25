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
  CreateReadinessCheckRequest,
  CreateReadinessCheckRequestFilterSensitiveLog,
  CreateReadinessCheckResponse,
  CreateReadinessCheckResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateReadinessCheckCommand,
  serializeAws_restJson1CreateReadinessCheckCommand,
} from "../protocols/Aws_restJson1";
import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";

export interface CreateReadinessCheckCommandInput extends CreateReadinessCheckRequest {}
export interface CreateReadinessCheckCommandOutput extends CreateReadinessCheckResponse, __MetadataBearer {}

/**
 * <p>Creates a readiness check in an account. A readiness check monitors a resource set in your application, such as a set of Amazon Aurora instances, that Application Recovery Controller is auditing recovery readiness for. The audits run once every minute on every resource that's associated with a readiness check.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, CreateReadinessCheckCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, CreateReadinessCheckCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * const client = new Route53RecoveryReadinessClient(config);
 * const command = new CreateReadinessCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReadinessCheckCommandInput} for command's `input` shape.
 * @see {@link CreateReadinessCheckCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 */
export class CreateReadinessCheckCommand extends $Command<
  CreateReadinessCheckCommandInput,
  CreateReadinessCheckCommandOutput,
  Route53RecoveryReadinessClientResolvedConfig
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

  constructor(readonly input: CreateReadinessCheckCommandInput) {
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
  ): Handler<CreateReadinessCheckCommandInput, CreateReadinessCheckCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateReadinessCheckCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53RecoveryReadinessClient";
    const commandName = "CreateReadinessCheckCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReadinessCheckRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateReadinessCheckResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateReadinessCheckCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateReadinessCheckCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateReadinessCheckCommandOutput> {
    return deserializeAws_restJson1CreateReadinessCheckCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
