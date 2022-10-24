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

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import {
  CreateWhatIfForecastRequest,
  CreateWhatIfForecastRequestFilterSensitiveLog,
  CreateWhatIfForecastResponse,
  CreateWhatIfForecastResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateWhatIfForecastCommand,
  serializeAws_json1_1CreateWhatIfForecastCommand,
} from "../protocols/Aws_json1_1";

export interface CreateWhatIfForecastCommandInput extends CreateWhatIfForecastRequest {}
export interface CreateWhatIfForecastCommandOutput extends CreateWhatIfForecastResponse, __MetadataBearer {}

/**
 * <p>A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each
 *       what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateWhatIfForecastCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateWhatIfForecastCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new CreateWhatIfForecastCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWhatIfForecastCommandInput} for command's `input` shape.
 * @see {@link CreateWhatIfForecastCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class CreateWhatIfForecastCommand extends $Command<
  CreateWhatIfForecastCommandInput,
  CreateWhatIfForecastCommandOutput,
  ForecastClientResolvedConfig
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

  constructor(readonly input: CreateWhatIfForecastCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWhatIfForecastCommandInput, CreateWhatIfForecastCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWhatIfForecastCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "CreateWhatIfForecastCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWhatIfForecastRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateWhatIfForecastResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWhatIfForecastCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateWhatIfForecastCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWhatIfForecastCommandOutput> {
    return deserializeAws_json1_1CreateWhatIfForecastCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
