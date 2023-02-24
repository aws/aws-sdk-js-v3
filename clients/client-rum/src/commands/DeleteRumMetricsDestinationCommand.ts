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
  DeleteRumMetricsDestinationRequest,
  DeleteRumMetricsDestinationRequestFilterSensitiveLog,
  DeleteRumMetricsDestinationResponse,
  DeleteRumMetricsDestinationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRumMetricsDestinationCommand,
  serializeAws_restJson1DeleteRumMetricsDestinationCommand,
} from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

export interface DeleteRumMetricsDestinationCommandInput extends DeleteRumMetricsDestinationRequest {}
export interface DeleteRumMetricsDestinationCommandOutput
  extends DeleteRumMetricsDestinationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a destination for CloudWatch RUM extended metrics, so that the specified app monitor stops
 *          sending extended metrics to that destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, DeleteRumMetricsDestinationCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, DeleteRumMetricsDestinationCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const command = new DeleteRumMetricsDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRumMetricsDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteRumMetricsDestinationCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 */
export class DeleteRumMetricsDestinationCommand extends $Command<
  DeleteRumMetricsDestinationCommandInput,
  DeleteRumMetricsDestinationCommandOutput,
  RUMClientResolvedConfig
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

  constructor(readonly input: DeleteRumMetricsDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RUMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRumMetricsDestinationCommandInput, DeleteRumMetricsDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteRumMetricsDestinationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RUMClient";
    const commandName = "DeleteRumMetricsDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRumMetricsDestinationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteRumMetricsDestinationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRumMetricsDestinationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteRumMetricsDestinationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteRumMetricsDestinationCommandOutput> {
    return deserializeAws_restJson1DeleteRumMetricsDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
