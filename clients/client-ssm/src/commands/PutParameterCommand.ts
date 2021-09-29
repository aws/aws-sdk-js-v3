import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { PutParameterRequest, PutParameterResult } from "../models/models_1";
import {
  deserializeAws_json1_1PutParameterCommand,
  serializeAws_json1_1PutParameterCommand,
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

export interface PutParameterCommandInput extends PutParameterRequest {}
export interface PutParameterCommandOutput extends PutParameterResult, __MetadataBearer {}

/**
 * <p>Add a parameter to the system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, PutParameterCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, PutParameterCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new PutParameterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutParameterCommandInput} for command's `input` shape.
 * @see {@link PutParameterCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class PutParameterCommand extends $Command<
  PutParameterCommandInput,
  PutParameterCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutParameterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutParameterCommandInput, PutParameterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "PutParameterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutParameterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutParameterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutParameterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutParameterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutParameterCommandOutput> {
    return deserializeAws_json1_1PutParameterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
