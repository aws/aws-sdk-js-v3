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

import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import {
  ListPermissionGroupsByUserRequest,
  ListPermissionGroupsByUserRequestFilterSensitiveLog,
  ListPermissionGroupsByUserResponse,
  ListPermissionGroupsByUserResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListPermissionGroupsByUserCommand,
  serializeAws_restJson1ListPermissionGroupsByUserCommand,
} from "../protocols/Aws_restJson1";

export interface ListPermissionGroupsByUserCommandInput extends ListPermissionGroupsByUserRequest {}
export interface ListPermissionGroupsByUserCommandOutput extends ListPermissionGroupsByUserResponse, __MetadataBearer {}

/**
 * <p>Lists all the permission groups that are associated with a specific user account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, ListPermissionGroupsByUserCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, ListPermissionGroupsByUserCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const command = new ListPermissionGroupsByUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPermissionGroupsByUserCommandInput} for command's `input` shape.
 * @see {@link ListPermissionGroupsByUserCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 */
export class ListPermissionGroupsByUserCommand extends $Command<
  ListPermissionGroupsByUserCommandInput,
  ListPermissionGroupsByUserCommandOutput,
  FinspaceDataClientResolvedConfig
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

  constructor(readonly input: ListPermissionGroupsByUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPermissionGroupsByUserCommandInput, ListPermissionGroupsByUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPermissionGroupsByUserCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "ListPermissionGroupsByUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPermissionGroupsByUserRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPermissionGroupsByUserResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPermissionGroupsByUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPermissionGroupsByUserCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPermissionGroupsByUserCommandOutput> {
    return deserializeAws_restJson1ListPermissionGroupsByUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
