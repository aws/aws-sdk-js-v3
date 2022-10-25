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

import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import {
  UpdateFlowRequest,
  UpdateFlowRequestFilterSensitiveLog,
  UpdateFlowResponse,
  UpdateFlowResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateFlowCommand,
  serializeAws_restJson1UpdateFlowCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateFlowCommandInput extends UpdateFlowRequest {}
export interface UpdateFlowCommandOutput extends UpdateFlowResponse, __MetadataBearer {}

/**
 * <p> Updates an existing flow. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, UpdateFlowCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, UpdateFlowCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new UpdateFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFlowCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for AppflowClient's `config` shape.
 *
 */
export class UpdateFlowCommand extends $Command<
  UpdateFlowCommandInput,
  UpdateFlowCommandOutput,
  AppflowClientResolvedConfig
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

  constructor(readonly input: UpdateFlowCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFlowCommandInput, UpdateFlowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateFlowCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "UpdateFlowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFlowRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateFlowResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFlowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFlowCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFlowCommandOutput> {
    return deserializeAws_restJson1UpdateFlowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
