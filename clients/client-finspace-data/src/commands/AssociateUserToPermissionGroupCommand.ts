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
  AssociateUserToPermissionGroupRequest,
  AssociateUserToPermissionGroupRequestFilterSensitiveLog,
  AssociateUserToPermissionGroupResponse,
  AssociateUserToPermissionGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateUserToPermissionGroupCommand,
  serializeAws_restJson1AssociateUserToPermissionGroupCommand,
} from "../protocols/Aws_restJson1";

export interface AssociateUserToPermissionGroupCommandInput extends AssociateUserToPermissionGroupRequest {}
export interface AssociateUserToPermissionGroupCommandOutput
  extends AssociateUserToPermissionGroupResponse,
    __MetadataBearer {}

/**
 * <p>Adds a user account to a permission group to grant permissions for actions a user can perform in FinSpace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, AssociateUserToPermissionGroupCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, AssociateUserToPermissionGroupCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const command = new AssociateUserToPermissionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateUserToPermissionGroupCommandInput} for command's `input` shape.
 * @see {@link AssociateUserToPermissionGroupCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 */
export class AssociateUserToPermissionGroupCommand extends $Command<
  AssociateUserToPermissionGroupCommandInput,
  AssociateUserToPermissionGroupCommandOutput,
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

  constructor(readonly input: AssociateUserToPermissionGroupCommandInput) {
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
  ): Handler<AssociateUserToPermissionGroupCommandInput, AssociateUserToPermissionGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateUserToPermissionGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "AssociateUserToPermissionGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateUserToPermissionGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateUserToPermissionGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateUserToPermissionGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateUserToPermissionGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateUserToPermissionGroupCommandOutput> {
    return deserializeAws_restJson1AssociateUserToPermissionGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
