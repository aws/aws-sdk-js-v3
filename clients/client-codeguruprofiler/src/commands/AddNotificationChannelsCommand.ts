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

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import {
  AddNotificationChannelsRequest,
  AddNotificationChannelsRequestFilterSensitiveLog,
  AddNotificationChannelsResponse,
  AddNotificationChannelsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AddNotificationChannelsCommand,
  serializeAws_restJson1AddNotificationChannelsCommand,
} from "../protocols/Aws_restJson1";

export interface AddNotificationChannelsCommandInput extends AddNotificationChannelsRequest {}
export interface AddNotificationChannelsCommandOutput extends AddNotificationChannelsResponse, __MetadataBearer {}

/**
 * <p>Add up to 2 anomaly notifications channels for a profiling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, AddNotificationChannelsCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, AddNotificationChannelsCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new AddNotificationChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddNotificationChannelsCommandInput} for command's `input` shape.
 * @see {@link AddNotificationChannelsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 */
export class AddNotificationChannelsCommand extends $Command<
  AddNotificationChannelsCommandInput,
  AddNotificationChannelsCommandOutput,
  CodeGuruProfilerClientResolvedConfig
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

  constructor(readonly input: AddNotificationChannelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddNotificationChannelsCommandInput, AddNotificationChannelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddNotificationChannelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "AddNotificationChannelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddNotificationChannelsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AddNotificationChannelsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddNotificationChannelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AddNotificationChannelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddNotificationChannelsCommandOutput> {
    return deserializeAws_restJson1AddNotificationChannelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
