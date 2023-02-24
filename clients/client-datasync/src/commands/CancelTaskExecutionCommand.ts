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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import {
  CancelTaskExecutionRequest,
  CancelTaskExecutionRequestFilterSensitiveLog,
  CancelTaskExecutionResponse,
  CancelTaskExecutionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CancelTaskExecutionCommand,
  serializeAws_json1_1CancelTaskExecutionCommand,
} from "../protocols/Aws_json1_1";

export interface CancelTaskExecutionCommandInput extends CancelTaskExecutionRequest {}
export interface CancelTaskExecutionCommandOutput extends CancelTaskExecutionResponse, __MetadataBearer {}

/**
 * <p>Stops an DataSync task execution that's in progress. The transfer of some
 *       files are abruptly interrupted. File contents that're transferred to the destination might be
 *       incomplete or inconsistent with the source files.</p>
 *          <p>However, if you start a new task execution using the same task and allow it to finish,
 *       file content on the destination will be complete and consistent. This applies to other
 *       unexpected failures that interrupt a task execution. In all of these cases, DataSync successfully completes the transfer when you start the next task
 *       execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CancelTaskExecutionCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CancelTaskExecutionCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new CancelTaskExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelTaskExecutionCommandInput} for command's `input` shape.
 * @see {@link CancelTaskExecutionCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 */
export class CancelTaskExecutionCommand extends $Command<
  CancelTaskExecutionCommandInput,
  CancelTaskExecutionCommandOutput,
  DataSyncClientResolvedConfig
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

  constructor(readonly input: CancelTaskExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelTaskExecutionCommandInput, CancelTaskExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelTaskExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "CancelTaskExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelTaskExecutionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelTaskExecutionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelTaskExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelTaskExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelTaskExecutionCommandOutput> {
    return deserializeAws_json1_1CancelTaskExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
