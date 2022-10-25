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
  ListUsersByPermissionGroupRequest,
  ListUsersByPermissionGroupRequestFilterSensitiveLog,
  ListUsersByPermissionGroupResponse,
  ListUsersByPermissionGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListUsersByPermissionGroupCommand,
  serializeAws_restJson1ListUsersByPermissionGroupCommand,
} from "../protocols/Aws_restJson1";

export interface ListUsersByPermissionGroupCommandInput extends ListUsersByPermissionGroupRequest {}
export interface ListUsersByPermissionGroupCommandOutput extends ListUsersByPermissionGroupResponse, __MetadataBearer {}

/**
 * <p>Lists details of all the users in a specific permission group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, ListUsersByPermissionGroupCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, ListUsersByPermissionGroupCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const command = new ListUsersByPermissionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUsersByPermissionGroupCommandInput} for command's `input` shape.
 * @see {@link ListUsersByPermissionGroupCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 */
export class ListUsersByPermissionGroupCommand extends $Command<
  ListUsersByPermissionGroupCommandInput,
  ListUsersByPermissionGroupCommandOutput,
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

  constructor(readonly input: ListUsersByPermissionGroupCommandInput) {
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
  ): Handler<ListUsersByPermissionGroupCommandInput, ListUsersByPermissionGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListUsersByPermissionGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "ListUsersByPermissionGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListUsersByPermissionGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListUsersByPermissionGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListUsersByPermissionGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListUsersByPermissionGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListUsersByPermissionGroupCommandOutput> {
    return deserializeAws_restJson1ListUsersByPermissionGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
