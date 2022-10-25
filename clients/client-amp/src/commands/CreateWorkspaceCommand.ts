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

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import {
  CreateWorkspaceRequest,
  CreateWorkspaceRequestFilterSensitiveLog,
  CreateWorkspaceResponse,
  CreateWorkspaceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateWorkspaceCommand,
  serializeAws_restJson1CreateWorkspaceCommand,
} from "../protocols/Aws_restJson1";

export interface CreateWorkspaceCommandInput extends CreateWorkspaceRequest {}
export interface CreateWorkspaceCommandOutput extends CreateWorkspaceResponse, __MetadataBearer {}

/**
 * Creates a new AMP workspace.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, CreateWorkspaceCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, CreateWorkspaceCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const command = new CreateWorkspaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateWorkspaceCommandInput} for command's `input` shape.
 * @see {@link CreateWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 */
export class CreateWorkspaceCommand extends $Command<
  CreateWorkspaceCommandInput,
  CreateWorkspaceCommandOutput,
  AmpClientResolvedConfig
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

  constructor(readonly input: CreateWorkspaceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmpClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWorkspaceCommandInput, CreateWorkspaceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWorkspaceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmpClient";
    const commandName = "CreateWorkspaceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWorkspaceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateWorkspaceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWorkspaceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateWorkspaceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorkspaceCommandOutput> {
    return deserializeAws_restJson1CreateWorkspaceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
