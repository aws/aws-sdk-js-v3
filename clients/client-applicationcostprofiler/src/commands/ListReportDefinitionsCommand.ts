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

import {
  ApplicationCostProfilerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationCostProfilerClient";
import {
  ListReportDefinitionsRequest,
  ListReportDefinitionsRequestFilterSensitiveLog,
  ListReportDefinitionsResult,
  ListReportDefinitionsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListReportDefinitionsCommand,
  serializeAws_restJson1ListReportDefinitionsCommand,
} from "../protocols/Aws_restJson1";

export interface ListReportDefinitionsCommandInput extends ListReportDefinitionsRequest {}
export interface ListReportDefinitionsCommandOutput extends ListReportDefinitionsResult, __MetadataBearer {}

/**
 * <p>Retrieves a list of all reports and their configurations for your AWS account.</p>
 *          <p>The maximum number of reports is one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, ListReportDefinitionsCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, ListReportDefinitionsCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * const client = new ApplicationCostProfilerClient(config);
 * const command = new ListReportDefinitionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReportDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListReportDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationCostProfilerClientResolvedConfig | config} for ApplicationCostProfilerClient's `config` shape.
 *
 */
export class ListReportDefinitionsCommand extends $Command<
  ListReportDefinitionsCommandInput,
  ListReportDefinitionsCommandOutput,
  ApplicationCostProfilerClientResolvedConfig
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

  constructor(readonly input: ListReportDefinitionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationCostProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReportDefinitionsCommandInput, ListReportDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListReportDefinitionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationCostProfilerClient";
    const commandName = "ListReportDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReportDefinitionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListReportDefinitionsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReportDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListReportDefinitionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReportDefinitionsCommandOutput> {
    return deserializeAws_restJson1ListReportDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
