import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { DeregisterJobDefinitionRequest, DeregisterJobDefinitionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeregisterJobDefinitionCommand,
  serializeAws_restJson1DeregisterJobDefinitionCommand,
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

export interface DeregisterJobDefinitionCommandInput extends DeregisterJobDefinitionRequest {}
export interface DeregisterJobDefinitionCommandOutput extends DeregisterJobDefinitionResponse, __MetadataBearer {}

/**
 * <p>Deregisters an AWS Batch job definition. Job definitions are permanently deleted after 180 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DeregisterJobDefinitionCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DeregisterJobDefinitionCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new DeregisterJobDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeregisterJobDefinitionCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeregisterJobDefinitionCommand extends $Command<
  DeregisterJobDefinitionCommandInput,
  DeregisterJobDefinitionCommandOutput,
  BatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterJobDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterJobDefinitionCommandInput, DeregisterJobDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "DeregisterJobDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterJobDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterJobDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterJobDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeregisterJobDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterJobDefinitionCommandOutput> {
    return deserializeAws_restJson1DeregisterJobDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
