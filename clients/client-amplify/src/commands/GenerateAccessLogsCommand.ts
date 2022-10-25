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

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import {
  GenerateAccessLogsRequest,
  GenerateAccessLogsRequestFilterSensitiveLog,
  GenerateAccessLogsResult,
  GenerateAccessLogsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GenerateAccessLogsCommand,
  serializeAws_restJson1GenerateAccessLogsCommand,
} from "../protocols/Aws_restJson1";

export interface GenerateAccessLogsCommandInput extends GenerateAccessLogsRequest {}
export interface GenerateAccessLogsCommandOutput extends GenerateAccessLogsResult, __MetadataBearer {}

/**
 * <p> Returns the website access logs for a specific time range using a presigned URL.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, GenerateAccessLogsCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, GenerateAccessLogsCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new GenerateAccessLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateAccessLogsCommandInput} for command's `input` shape.
 * @see {@link GenerateAccessLogsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 */
export class GenerateAccessLogsCommand extends $Command<
  GenerateAccessLogsCommandInput,
  GenerateAccessLogsCommandOutput,
  AmplifyClientResolvedConfig
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

  constructor(readonly input: GenerateAccessLogsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GenerateAccessLogsCommandInput, GenerateAccessLogsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GenerateAccessLogsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "GenerateAccessLogsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GenerateAccessLogsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GenerateAccessLogsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GenerateAccessLogsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GenerateAccessLogsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GenerateAccessLogsCommandOutput> {
    return deserializeAws_restJson1GenerateAccessLogsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
