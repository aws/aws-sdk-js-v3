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
  CreateMonitoringScheduleRequest,
  CreateMonitoringScheduleRequestFilterSensitiveLog,
  CreateMonitoringScheduleResponse,
  CreateMonitoringScheduleResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1CreateMonitoringScheduleCommand,
  serializeAws_json1_1CreateMonitoringScheduleCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface CreateMonitoringScheduleCommandInput extends CreateMonitoringScheduleRequest {}
export interface CreateMonitoringScheduleCommandOutput extends CreateMonitoringScheduleResponse, __MetadataBearer {}

/**
 * <p>Creates a schedule that regularly starts Amazon SageMaker Processing Jobs to monitor the data
 *          captured for an Amazon SageMaker Endoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateMonitoringScheduleCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateMonitoringScheduleCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateMonitoringScheduleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMonitoringScheduleCommandInput} for command's `input` shape.
 * @see {@link CreateMonitoringScheduleCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class CreateMonitoringScheduleCommand extends $Command<
  CreateMonitoringScheduleCommandInput,
  CreateMonitoringScheduleCommandOutput,
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

  constructor(readonly input: CreateMonitoringScheduleCommandInput) {
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
  ): Handler<CreateMonitoringScheduleCommandInput, CreateMonitoringScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMonitoringScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateMonitoringScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMonitoringScheduleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMonitoringScheduleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMonitoringScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateMonitoringScheduleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMonitoringScheduleCommandOutput> {
    return deserializeAws_json1_1CreateMonitoringScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
