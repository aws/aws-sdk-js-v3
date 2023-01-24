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
  UpdateHealthCheckRequest,
  UpdateHealthCheckRequestFilterSensitiveLog,
  UpdateHealthCheckResponse,
  UpdateHealthCheckResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlUpdateHealthCheckCommand,
  serializeAws_restXmlUpdateHealthCheckCommand,
} from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

export interface UpdateHealthCheckCommandInput extends UpdateHealthCheckRequest {}
export interface UpdateHealthCheckCommandOutput extends UpdateHealthCheckResponse, __MetadataBearer {}

/**
 * <p>Updates an existing health check. Note that some values can't be updated. </p>
 *          <p>For more information about updating health checks, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/health-checks-creating-deleting.html">Creating,
 * 				Updating, and Deleting Health Checks</a> in the <i>Amazon Route 53
 * 				Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, UpdateHealthCheckCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, UpdateHealthCheckCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new UpdateHealthCheckCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateHealthCheckCommandInput} for command's `input` shape.
 * @see {@link UpdateHealthCheckCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 */
export class UpdateHealthCheckCommand extends $Command<
  UpdateHealthCheckCommandInput,
  UpdateHealthCheckCommandOutput,
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

  constructor(readonly input: UpdateHealthCheckCommandInput) {
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
  ): Handler<UpdateHealthCheckCommandInput, UpdateHealthCheckCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateHealthCheckCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "UpdateHealthCheckCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateHealthCheckRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateHealthCheckResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateHealthCheckCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateHealthCheckCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateHealthCheckCommandOutput> {
    return deserializeAws_restXmlUpdateHealthCheckCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
