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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  ListFlywheelIterationHistoryRequest,
  ListFlywheelIterationHistoryRequestFilterSensitiveLog,
  ListFlywheelIterationHistoryResponse,
  ListFlywheelIterationHistoryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListFlywheelIterationHistoryCommand,
  serializeAws_json1_1ListFlywheelIterationHistoryCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link ListFlywheelIterationHistoryCommand}.
 */
export interface ListFlywheelIterationHistoryCommandInput extends ListFlywheelIterationHistoryRequest {}
/**
 * The output of {@link ListFlywheelIterationHistoryCommand}.
 */
export interface ListFlywheelIterationHistoryCommandOutput
  extends ListFlywheelIterationHistoryResponse,
    __MetadataBearer {}

/**
 * <p>Information about the history of a flywheel iteration.
 *       For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html">
 *       Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListFlywheelIterationHistoryCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListFlywheelIterationHistoryCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ListFlywheelIterationHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFlywheelIterationHistoryCommandInput} for command's `input` shape.
 * @see {@link ListFlywheelIterationHistoryCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class ListFlywheelIterationHistoryCommand extends $Command<
  ListFlywheelIterationHistoryCommandInput,
  ListFlywheelIterationHistoryCommandOutput,
  ComprehendClientResolvedConfig
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

  constructor(readonly input: ListFlywheelIterationHistoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFlywheelIterationHistoryCommandInput, ListFlywheelIterationHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFlywheelIterationHistoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "ListFlywheelIterationHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFlywheelIterationHistoryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListFlywheelIterationHistoryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFlywheelIterationHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListFlywheelIterationHistoryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListFlywheelIterationHistoryCommandOutput> {
    return deserializeAws_json1_1ListFlywheelIterationHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
