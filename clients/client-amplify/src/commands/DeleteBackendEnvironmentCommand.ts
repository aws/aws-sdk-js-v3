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
  DeleteBackendEnvironmentRequest,
  DeleteBackendEnvironmentRequestFilterSensitiveLog,
  DeleteBackendEnvironmentResult,
  DeleteBackendEnvironmentResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBackendEnvironmentCommand,
  serializeAws_restJson1DeleteBackendEnvironmentCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteBackendEnvironmentCommandInput extends DeleteBackendEnvironmentRequest {}
export interface DeleteBackendEnvironmentCommandOutput extends DeleteBackendEnvironmentResult, __MetadataBearer {}

/**
 * <p> Deletes a backend environment for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, DeleteBackendEnvironmentCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, DeleteBackendEnvironmentCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new DeleteBackendEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBackendEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteBackendEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 */
export class DeleteBackendEnvironmentCommand extends $Command<
  DeleteBackendEnvironmentCommandInput,
  DeleteBackendEnvironmentCommandOutput,
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

  constructor(readonly input: DeleteBackendEnvironmentCommandInput) {
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
  ): Handler<DeleteBackendEnvironmentCommandInput, DeleteBackendEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteBackendEnvironmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "DeleteBackendEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBackendEnvironmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteBackendEnvironmentResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBackendEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteBackendEnvironmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBackendEnvironmentCommandOutput> {
    return deserializeAws_restJson1DeleteBackendEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
