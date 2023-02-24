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
  ListMonitoringSchedulesRequest,
  ListMonitoringSchedulesRequestFilterSensitiveLog,
  ListMonitoringSchedulesResponse,
  ListMonitoringSchedulesResponseFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_json1_1ListMonitoringSchedulesCommand,
  serializeAws_json1_1ListMonitoringSchedulesCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface ListMonitoringSchedulesCommandInput extends ListMonitoringSchedulesRequest {}
export interface ListMonitoringSchedulesCommandOutput extends ListMonitoringSchedulesResponse, __MetadataBearer {}

/**
 * <p>Returns list of all monitoring schedules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListMonitoringSchedulesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListMonitoringSchedulesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListMonitoringSchedulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMonitoringSchedulesCommandInput} for command's `input` shape.
 * @see {@link ListMonitoringSchedulesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class ListMonitoringSchedulesCommand extends $Command<
  ListMonitoringSchedulesCommandInput,
  ListMonitoringSchedulesCommandOutput,
  SageMakerClientResolvedConfig
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

  constructor(readonly input: ListMonitoringSchedulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMonitoringSchedulesCommandInput, ListMonitoringSchedulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMonitoringSchedulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListMonitoringSchedulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMonitoringSchedulesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListMonitoringSchedulesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMonitoringSchedulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListMonitoringSchedulesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMonitoringSchedulesCommandOutput> {
    return deserializeAws_json1_1ListMonitoringSchedulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
