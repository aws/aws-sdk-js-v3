import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { GetExperimentRequest, GetExperimentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetExperimentCommand,
  serializeAws_restJson1GetExperimentCommand,
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

export interface GetExperimentCommandInput extends GetExperimentRequest {}
export interface GetExperimentCommandOutput extends GetExperimentResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified experiment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, GetExperimentCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, GetExperimentCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new GetExperimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExperimentCommandInput} for command's `input` shape.
 * @see {@link GetExperimentCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetExperimentCommand extends $Command<
  GetExperimentCommandInput,
  GetExperimentCommandOutput,
  FisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetExperimentCommandInput) {
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
  ): Handler<GetExperimentCommandInput, GetExperimentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FisClient";
    const commandName = "GetExperimentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetExperimentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetExperimentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetExperimentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetExperimentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExperimentCommandOutput> {
    return deserializeAws_restJson1GetExperimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
