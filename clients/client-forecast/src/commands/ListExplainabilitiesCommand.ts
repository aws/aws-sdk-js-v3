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
  ListExplainabilitiesRequest,
  ListExplainabilitiesRequestFilterSensitiveLog,
  ListExplainabilitiesResponse,
  ListExplainabilitiesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListExplainabilitiesCommand,
  serializeAws_json1_1ListExplainabilitiesCommand,
} from "../protocols/Aws_json1_1";

export interface ListExplainabilitiesCommandInput extends ListExplainabilitiesRequest {}
export interface ListExplainabilitiesCommandOutput extends ListExplainabilitiesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Explainability resources created using the <a>CreateExplainability</a> operation. This operation returns a summary for
 *             each Explainability. You can filter the list using an array of <a>Filter</a>
 *             objects.</p>
 *         <p>To retrieve the complete set of properties for a particular Explainability resource,
 *             use the ARN with the <a>DescribeExplainability</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListExplainabilitiesCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListExplainabilitiesCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListExplainabilitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListExplainabilitiesCommandInput} for command's `input` shape.
 * @see {@link ListExplainabilitiesCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 */
export class ListExplainabilitiesCommand extends $Command<
  ListExplainabilitiesCommandInput,
  ListExplainabilitiesCommandOutput,
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

  constructor(readonly input: ListExplainabilitiesCommandInput) {
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
  ): Handler<ListExplainabilitiesCommandInput, ListExplainabilitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListExplainabilitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "ListExplainabilitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListExplainabilitiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListExplainabilitiesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListExplainabilitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListExplainabilitiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListExplainabilitiesCommandOutput> {
    return deserializeAws_json1_1ListExplainabilitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
