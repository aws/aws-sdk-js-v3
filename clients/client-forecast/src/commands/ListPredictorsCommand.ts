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
  ListPredictorsRequest,
  ListPredictorsRequestFilterSensitiveLog,
  ListPredictorsResponse,
  ListPredictorsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListPredictorsCommand,
  serializeAws_json1_1ListPredictorsCommand,
} from "../protocols/Aws_json1_1";

export interface ListPredictorsCommandInput extends ListPredictorsRequest {}
export interface ListPredictorsCommandOutput extends ListPredictorsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of predictors created using the <a>CreateAutoPredictor</a> or
 *         <a>CreatePredictor</a> operations. For each predictor, this operation returns a
 *       summary of its properties, including its Amazon Resource Name (ARN). </p>
 *          <p>You can retrieve the complete set of properties by using the ARN with the <a>DescribeAutoPredictor</a> and <a>DescribePredictor</a> operations. You
 *       can filter the list using an array of <a>Filter</a> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListPredictorsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListPredictorsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListPredictorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPredictorsCommandInput} for command's `input` shape.
 * @see {@link ListPredictorsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class ListPredictorsCommand extends $Command<
  ListPredictorsCommandInput,
  ListPredictorsCommandOutput,
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

  constructor(readonly input: ListPredictorsCommandInput) {
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
  ): Handler<ListPredictorsCommandInput, ListPredictorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPredictorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListPredictorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPredictorsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPredictorsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPredictorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPredictorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPredictorsCommandOutput> {
    return deserializeAws_json1_1ListPredictorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
