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
  GetReportDefinitionRequest,
  GetReportDefinitionRequestFilterSensitiveLog,
  GetReportDefinitionResult,
  GetReportDefinitionResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetReportDefinitionCommand,
  serializeAws_restJson1GetReportDefinitionCommand,
} from "../protocols/Aws_restJson1";

export interface GetReportDefinitionCommandInput extends GetReportDefinitionRequest {}
export interface GetReportDefinitionCommandOutput extends GetReportDefinitionResult, __MetadataBearer {}

/**
 * <p>Retrieves the definition of a report already configured in AWS Application Cost Profiler.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, GetReportDefinitionCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, GetReportDefinitionCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * const client = new ApplicationCostProfilerClient(config);
 * const command = new GetReportDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReportDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetReportDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ApplicationCostProfilerClientResolvedConfig | config} for ApplicationCostProfilerClient's `config` shape.
 *
 */
export class GetReportDefinitionCommand extends $Command<
  GetReportDefinitionCommandInput,
  GetReportDefinitionCommandOutput,
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

  constructor(readonly input: GetReportDefinitionCommandInput) {
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
  ): Handler<GetReportDefinitionCommandInput, GetReportDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReportDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationCostProfilerClient";
    const commandName = "GetReportDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetReportDefinitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetReportDefinitionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetReportDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetReportDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetReportDefinitionCommandOutput> {
    return deserializeAws_restJson1GetReportDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
