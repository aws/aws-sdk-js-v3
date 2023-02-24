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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  CreateUserHierarchyGroupRequest,
  CreateUserHierarchyGroupRequestFilterSensitiveLog,
  CreateUserHierarchyGroupResponse,
  CreateUserHierarchyGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateUserHierarchyGroupCommand,
  serializeAws_restJson1CreateUserHierarchyGroupCommand,
} from "../protocols/Aws_restJson1";

export interface CreateUserHierarchyGroupCommandInput extends CreateUserHierarchyGroupRequest {}
export interface CreateUserHierarchyGroupCommandOutput extends CreateUserHierarchyGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a new user hierarchy group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateUserHierarchyGroupCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateUserHierarchyGroupCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateUserHierarchyGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserHierarchyGroupCommandInput} for command's `input` shape.
 * @see {@link CreateUserHierarchyGroupCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class CreateUserHierarchyGroupCommand extends $Command<
  CreateUserHierarchyGroupCommandInput,
  CreateUserHierarchyGroupCommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: CreateUserHierarchyGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateUserHierarchyGroupCommandInput, CreateUserHierarchyGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateUserHierarchyGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "CreateUserHierarchyGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateUserHierarchyGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateUserHierarchyGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateUserHierarchyGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateUserHierarchyGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateUserHierarchyGroupCommandOutput> {
    return deserializeAws_restJson1CreateUserHierarchyGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
