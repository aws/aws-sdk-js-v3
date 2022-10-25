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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  DeleteAuditSuppressionRequest,
  DeleteAuditSuppressionRequestFilterSensitiveLog,
  DeleteAuditSuppressionResponse,
  DeleteAuditSuppressionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAuditSuppressionCommand,
  serializeAws_restJson1DeleteAuditSuppressionCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteAuditSuppressionCommandInput extends DeleteAuditSuppressionRequest {}
export interface DeleteAuditSuppressionCommandOutput extends DeleteAuditSuppressionResponse, __MetadataBearer {}

/**
 * <p>
 *       Deletes a Device Defender audit suppression.
 *     </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAuditSuppression</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteAuditSuppressionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteAuditSuppressionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteAuditSuppressionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAuditSuppressionCommandInput} for command's `input` shape.
 * @see {@link DeleteAuditSuppressionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class DeleteAuditSuppressionCommand extends $Command<
  DeleteAuditSuppressionCommandInput,
  DeleteAuditSuppressionCommandOutput,
  IoTClientResolvedConfig
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

  constructor(readonly input: DeleteAuditSuppressionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAuditSuppressionCommandInput, DeleteAuditSuppressionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAuditSuppressionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeleteAuditSuppressionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAuditSuppressionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteAuditSuppressionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAuditSuppressionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAuditSuppressionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAuditSuppressionCommandOutput> {
    return deserializeAws_restJson1DeleteAuditSuppressionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
