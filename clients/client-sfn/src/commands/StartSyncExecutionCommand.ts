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
  StartSyncExecutionInput,
  StartSyncExecutionInputFilterSensitiveLog,
  StartSyncExecutionOutput,
  StartSyncExecutionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0StartSyncExecutionCommand,
  serializeAws_json1_0StartSyncExecutionCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

export interface StartSyncExecutionCommandInput extends StartSyncExecutionInput {}
export interface StartSyncExecutionCommandOutput extends StartSyncExecutionOutput, __MetadataBearer {}

/**
 * <p>Starts a Synchronous Express state machine execution. <code>StartSyncExecution</code>
 * 			  is not available for <code>STANDARD</code> workflows.</p>
 *          <note>
 *             <p>
 *                <code>StartSyncExecution</code> will return a <code>200 OK</code> response, even if your
 *         execution fails, because the status code in the API response doesn't reflect function
 *         errors. Error codes are reserved for errors that prevent your execution from running, such
 *         as permissions errors, limit errors, or issues with your state machine code and
 *         configuration. </p>
 *          </note>
 *          <note>
 *             <p>This API action isn't logged in CloudTrail.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, StartSyncExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, StartSyncExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new StartSyncExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSyncExecutionCommandInput} for command's `input` shape.
 * @see {@link StartSyncExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 */
export class StartSyncExecutionCommand extends $Command<
  StartSyncExecutionCommandInput,
  StartSyncExecutionCommandOutput,
  SFNClientResolvedConfig
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

  constructor(readonly input: StartSyncExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartSyncExecutionCommandInput, StartSyncExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartSyncExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "StartSyncExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartSyncExecutionInputFilterSensitiveLog,
      outputFilterSensitiveLog: StartSyncExecutionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartSyncExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0StartSyncExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartSyncExecutionCommandOutput> {
    return deserializeAws_json1_0StartSyncExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
