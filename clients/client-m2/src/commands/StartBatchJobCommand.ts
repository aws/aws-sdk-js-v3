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

import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import {
  StartBatchJobRequest,
  StartBatchJobRequestFilterSensitiveLog,
  StartBatchJobResponse,
  StartBatchJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartBatchJobCommand,
  serializeAws_restJson1StartBatchJobCommand,
} from "../protocols/Aws_restJson1";

export interface StartBatchJobCommandInput extends StartBatchJobRequest {}
export interface StartBatchJobCommandOutput extends StartBatchJobResponse, __MetadataBearer {}

/**
 * <p>Starts a batch job and returns the unique identifier of this execution of the batch job.
 *          The associated application must be running in order to start the batch job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, StartBatchJobCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, StartBatchJobCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const command = new StartBatchJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartBatchJobCommandInput} for command's `input` shape.
 * @see {@link StartBatchJobCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 */
export class StartBatchJobCommand extends $Command<
  StartBatchJobCommandInput,
  StartBatchJobCommandOutput,
  M2ClientResolvedConfig
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

  constructor(readonly input: StartBatchJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: M2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartBatchJobCommandInput, StartBatchJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartBatchJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "M2Client";
    const commandName = "StartBatchJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartBatchJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartBatchJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartBatchJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartBatchJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartBatchJobCommandOutput> {
    return deserializeAws_restJson1StartBatchJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
