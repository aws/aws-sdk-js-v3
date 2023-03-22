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
  ListExplainabilityExportsRequest,
  ListExplainabilityExportsRequestFilterSensitiveLog,
  ListExplainabilityExportsResponse,
  ListExplainabilityExportsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListExplainabilityExportsCommand,
  serializeAws_json1_1ListExplainabilityExportsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListExplainabilityExportsCommand}.
 */
export interface ListExplainabilityExportsCommandInput extends ListExplainabilityExportsRequest {}
/**
 * @public
 *
 * The output of {@link ListExplainabilityExportsCommand}.
 */
export interface ListExplainabilityExportsCommandOutput extends ListExplainabilityExportsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of Explainability exports created using the <a>CreateExplainabilityExport</a> operation. This operation returns a summary
 *             for each Explainability export. You can filter the list using an array of <a>Filter</a> objects.</p>
 *          <p>To retrieve the complete set of properties for a particular Explainability export, use
 *             the ARN with the <a>DescribeExplainability</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListExplainabilityExportsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListExplainabilityExportsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListExplainabilityExportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListExplainabilityExportsCommandInput - {@link ListExplainabilityExportsCommandInput}
 * @returns {@link ListExplainabilityExportsCommandOutput}
 * @see {@link ListExplainabilityExportsCommandInput} for command's `input` shape.
 * @see {@link ListExplainabilityExportsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid. Tokens expire after 24 hours.</p>
 *
 *
 */
export class ListExplainabilityExportsCommand extends $Command<
  ListExplainabilityExportsCommandInput,
  ListExplainabilityExportsCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ListExplainabilityExportsCommandInput) {
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
  ): Handler<ListExplainabilityExportsCommandInput, ListExplainabilityExportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListExplainabilityExportsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListExplainabilityExportsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListExplainabilityExportsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListExplainabilityExportsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListExplainabilityExportsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListExplainabilityExportsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListExplainabilityExportsCommandOutput> {
    return deserializeAws_json1_1ListExplainabilityExportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
