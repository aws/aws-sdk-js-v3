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

import { KeyspacesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KeyspacesClient";
import {
  CreateKeyspaceRequest,
  CreateKeyspaceRequestFilterSensitiveLog,
  CreateKeyspaceResponse,
  CreateKeyspaceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0CreateKeyspaceCommand,
  serializeAws_json1_0CreateKeyspaceCommand,
} from "../protocols/Aws_json1_0";

export interface CreateKeyspaceCommandInput extends CreateKeyspaceRequest {}
export interface CreateKeyspaceCommandOutput extends CreateKeyspaceResponse, __MetadataBearer {}

/**
 * <p>The <code>CreateKeyspace</code> operation adds a new keyspace to your account. In an Amazon Web Services account, keyspace names
 *       must be unique within each Region.</p>
 *          <p>
 *             <code>CreateKeyspace</code> is an asynchronous operation. You can monitor the creation status of the new keyspace
 *           by using the <code>GetKeyspace</code> operation.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/working-with-keyspaces.html#keyspaces-create">Creating keyspaces</a> in the <i>Amazon Keyspaces Developer
 *              Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KeyspacesClient, CreateKeyspaceCommand } from "@aws-sdk/client-keyspaces"; // ES Modules import
 * // const { KeyspacesClient, CreateKeyspaceCommand } = require("@aws-sdk/client-keyspaces"); // CommonJS import
 * const client = new KeyspacesClient(config);
 * const command = new CreateKeyspaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateKeyspaceCommandInput} for command's `input` shape.
 * @see {@link CreateKeyspaceCommandOutput} for command's `response` shape.
 * @see {@link KeyspacesClientResolvedConfig | config} for KeyspacesClient's `config` shape.
 *
 */
export class CreateKeyspaceCommand extends $Command<
  CreateKeyspaceCommandInput,
  CreateKeyspaceCommandOutput,
  KeyspacesClientResolvedConfig
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

  constructor(readonly input: CreateKeyspaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KeyspacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateKeyspaceCommandInput, CreateKeyspaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateKeyspaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KeyspacesClient";
    const commandName = "CreateKeyspaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateKeyspaceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateKeyspaceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateKeyspaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateKeyspaceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateKeyspaceCommandOutput> {
    return deserializeAws_json1_0CreateKeyspaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
