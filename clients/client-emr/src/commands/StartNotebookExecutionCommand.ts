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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import {
  StartNotebookExecutionInput,
  StartNotebookExecutionInputFilterSensitiveLog,
  StartNotebookExecutionOutput,
  StartNotebookExecutionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartNotebookExecutionCommand,
  serializeAws_json1_1StartNotebookExecutionCommand,
} from "../protocols/Aws_json1_1";

export interface StartNotebookExecutionCommandInput extends StartNotebookExecutionInput {}
export interface StartNotebookExecutionCommandOutput extends StartNotebookExecutionOutput, __MetadataBearer {}

/**
 * <p>Starts a notebook execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, StartNotebookExecutionCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, StartNotebookExecutionCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new StartNotebookExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartNotebookExecutionCommandInput} for command's `input` shape.
 * @see {@link StartNotebookExecutionCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 */
export class StartNotebookExecutionCommand extends $Command<
  StartNotebookExecutionCommandInput,
  StartNotebookExecutionCommandOutput,
  EMRClientResolvedConfig
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

  constructor(readonly input: StartNotebookExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartNotebookExecutionCommandInput, StartNotebookExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartNotebookExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "StartNotebookExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartNotebookExecutionInputFilterSensitiveLog,
      outputFilterSensitiveLog: StartNotebookExecutionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartNotebookExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartNotebookExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartNotebookExecutionCommandOutput> {
    return deserializeAws_json1_1StartNotebookExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
