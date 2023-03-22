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

import { IoTAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTAnalyticsClient";
import {
  RunPipelineActivityRequest,
  RunPipelineActivityRequestFilterSensitiveLog,
  RunPipelineActivityResponse,
  RunPipelineActivityResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RunPipelineActivityCommand,
  serializeAws_restJson1RunPipelineActivityCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link RunPipelineActivityCommand}.
 */
export interface RunPipelineActivityCommandInput extends RunPipelineActivityRequest {}
/**
 * @public
 *
 * The output of {@link RunPipelineActivityCommand}.
 */
export interface RunPipelineActivityCommandOutput extends RunPipelineActivityResponse, __MetadataBearer {}

/**
 * @public
 * <p>Simulates the results of running a pipeline activity on a message payload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, RunPipelineActivityCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, RunPipelineActivityCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new RunPipelineActivityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RunPipelineActivityCommandInput - {@link RunPipelineActivityCommandInput}
 * @returns {@link RunPipelineActivityCommandOutput}
 * @see {@link RunPipelineActivityCommandInput} for command's `input` shape.
 * @see {@link RunPipelineActivityCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for IoTAnalyticsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal failure.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 *
 */
export class RunPipelineActivityCommand extends $Command<
  RunPipelineActivityCommandInput,
  RunPipelineActivityCommandOutput,
  IoTAnalyticsClientResolvedConfig
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
  constructor(readonly input: RunPipelineActivityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTAnalyticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RunPipelineActivityCommandInput, RunPipelineActivityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RunPipelineActivityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTAnalyticsClient";
    const commandName = "RunPipelineActivityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RunPipelineActivityRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RunPipelineActivityResponseFilterSensitiveLog,
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
  private serialize(input: RunPipelineActivityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RunPipelineActivityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RunPipelineActivityCommandOutput> {
    return deserializeAws_restJson1RunPipelineActivityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
