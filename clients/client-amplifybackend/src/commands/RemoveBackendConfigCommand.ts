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

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import {
  RemoveBackendConfigRequest,
  RemoveBackendConfigRequestFilterSensitiveLog,
  RemoveBackendConfigResponse,
  RemoveBackendConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RemoveBackendConfigCommand,
  serializeAws_restJson1RemoveBackendConfigCommand,
} from "../protocols/Aws_restJson1";

export interface RemoveBackendConfigCommandInput extends RemoveBackendConfigRequest {}
export interface RemoveBackendConfigCommandOutput extends RemoveBackendConfigResponse, __MetadataBearer {}

/**
 * <p>Removes the AWS resources required to access the Amplify Admin UI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, RemoveBackendConfigCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, RemoveBackendConfigCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new RemoveBackendConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveBackendConfigCommandInput} for command's `input` shape.
 * @see {@link RemoveBackendConfigCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for AmplifyBackendClient's `config` shape.
 *
 */
export class RemoveBackendConfigCommand extends $Command<
  RemoveBackendConfigCommandInput,
  RemoveBackendConfigCommandOutput,
  AmplifyBackendClientResolvedConfig
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

  constructor(readonly input: RemoveBackendConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveBackendConfigCommandInput, RemoveBackendConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveBackendConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "RemoveBackendConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveBackendConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RemoveBackendConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveBackendConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveBackendConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveBackendConfigCommandOutput> {
    return deserializeAws_restJson1RemoveBackendConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
