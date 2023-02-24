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
  CreateBackendEnvironmentRequest,
  CreateBackendEnvironmentRequestFilterSensitiveLog,
  CreateBackendEnvironmentResult,
  CreateBackendEnvironmentResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateBackendEnvironmentCommand,
  serializeAws_restJson1CreateBackendEnvironmentCommand,
} from "../protocols/Aws_restJson1";

export interface CreateBackendEnvironmentCommandInput extends CreateBackendEnvironmentRequest {}
export interface CreateBackendEnvironmentCommandOutput extends CreateBackendEnvironmentResult, __MetadataBearer {}

/**
 * <p> Creates a new backend environment for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, CreateBackendEnvironmentCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, CreateBackendEnvironmentCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new CreateBackendEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBackendEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateBackendEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 */
export class CreateBackendEnvironmentCommand extends $Command<
  CreateBackendEnvironmentCommandInput,
  CreateBackendEnvironmentCommandOutput,
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

  constructor(readonly input: CreateBackendEnvironmentCommandInput) {
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
  ): Handler<CreateBackendEnvironmentCommandInput, CreateBackendEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateBackendEnvironmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "CreateBackendEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBackendEnvironmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateBackendEnvironmentResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBackendEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateBackendEnvironmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBackendEnvironmentCommandOutput> {
    return deserializeAws_restJson1CreateBackendEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
