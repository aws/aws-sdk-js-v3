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

import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import {
  StartModelRequest,
  StartModelRequestFilterSensitiveLog,
  StartModelResponse,
  StartModelResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartModelCommand,
  serializeAws_restJson1StartModelCommand,
} from "../protocols/Aws_restJson1";

export interface StartModelCommandInput extends StartModelRequest {}
export interface StartModelCommandOutput extends StartModelResponse, __MetadataBearer {}

/**
 * <p>Starts the running of the version of an Amazon Lookout for Vision model. Starting a model takes a while
 *          to complete. To check the current state of the model, use <a>DescribeModel</a>.</p>
 *          <p>A model is ready to use when its status is <code>HOSTED</code>.</p>
 *          <p>Once the model is running, you can detect custom labels in new images by calling
 *          <a>DetectAnomalies</a>.</p>
 *          <note>
 *             <p>You are charged for the amount of time that the model is running. To stop a running
 *          model, call <a>StopModel</a>.</p>
 *          </note>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:StartModel</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, StartModelCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, StartModelCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new StartModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartModelCommandInput} for command's `input` shape.
 * @see {@link StartModelCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 */
export class StartModelCommand extends $Command<
  StartModelCommandInput,
  StartModelCommandOutput,
  LookoutVisionClientResolvedConfig
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

  constructor(readonly input: StartModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutVisionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartModelCommandInput, StartModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartModelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
    const commandName = "StartModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartModelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartModelResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartModelCommandOutput> {
    return deserializeAws_restJson1StartModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
