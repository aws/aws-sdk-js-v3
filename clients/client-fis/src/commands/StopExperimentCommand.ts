import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { StopExperimentRequest, StopExperimentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StopExperimentCommand,
  serializeAws_restJson1StopExperimentCommand,
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

export interface StopExperimentCommandInput extends StopExperimentRequest {}
export interface StopExperimentCommandOutput extends StopExperimentResponse, __MetadataBearer {}

/**
 * <p>Stops the specified experiment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, StopExperimentCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, StopExperimentCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new StopExperimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopExperimentCommandInput} for command's `input` shape.
 * @see {@link StopExperimentCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StopExperimentCommand extends $Command<
  StopExperimentCommandInput,
  StopExperimentCommandOutput,
  FisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopExperimentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopExperimentCommandInput, StopExperimentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FisClient";
    const commandName = "StopExperimentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopExperimentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopExperimentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopExperimentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopExperimentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopExperimentCommandOutput> {
    return deserializeAws_restJson1StopExperimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
