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

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import {
  EvaluateCodeRequest,
  EvaluateCodeRequestFilterSensitiveLog,
  EvaluateCodeResponse,
  EvaluateCodeResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1EvaluateCodeCommand,
  serializeAws_restJson1EvaluateCodeCommand,
} from "../protocols/Aws_restJson1";

export interface EvaluateCodeCommandInput extends EvaluateCodeRequest {}
export interface EvaluateCodeCommandOutput extends EvaluateCodeResponse, __MetadataBearer {}

/**
 * <p>Evaluates the given code and returns the response. The code definition requirements depend on the specified
 *          runtime. For <code>APPSYNC_JS</code> runtimes, the code defines the request and response functions. The request
 *          function takes the incoming request after a GraphQL operation is parsed and converts it into a request
 *          configuration for the selected data source operation. The response function interprets responses from the data
 *          source and maps it to the shape of the GraphQL field output type. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, EvaluateCodeCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, EvaluateCodeCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new EvaluateCodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EvaluateCodeCommandInput} for command's `input` shape.
 * @see {@link EvaluateCodeCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 */
export class EvaluateCodeCommand extends $Command<
  EvaluateCodeCommandInput,
  EvaluateCodeCommandOutput,
  AppSyncClientResolvedConfig
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

  constructor(readonly input: EvaluateCodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EvaluateCodeCommandInput, EvaluateCodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, EvaluateCodeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "EvaluateCodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EvaluateCodeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: EvaluateCodeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EvaluateCodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1EvaluateCodeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EvaluateCodeCommandOutput> {
    return deserializeAws_restJson1EvaluateCodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
