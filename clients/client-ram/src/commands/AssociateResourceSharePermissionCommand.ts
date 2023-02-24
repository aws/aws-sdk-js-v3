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

import {
  AssociateResourceSharePermissionRequest,
  AssociateResourceSharePermissionRequestFilterSensitiveLog,
  AssociateResourceSharePermissionResponse,
  AssociateResourceSharePermissionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateResourceSharePermissionCommand,
  serializeAws_restJson1AssociateResourceSharePermissionCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

export interface AssociateResourceSharePermissionCommandInput extends AssociateResourceSharePermissionRequest {}
export interface AssociateResourceSharePermissionCommandOutput
  extends AssociateResourceSharePermissionResponse,
    __MetadataBearer {}

/**
 * <p>Adds or replaces the RAM permission for a resource type included in a resource share. You can
 *             have exactly one permission associated with each resource type in the resource share. You can add
 *             a new RAM permission only if there are currently no resources of that resource type
 *             currently in the resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, AssociateResourceSharePermissionCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, AssociateResourceSharePermissionCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new AssociateResourceSharePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateResourceSharePermissionCommandInput} for command's `input` shape.
 * @see {@link AssociateResourceSharePermissionCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 */
export class AssociateResourceSharePermissionCommand extends $Command<
  AssociateResourceSharePermissionCommandInput,
  AssociateResourceSharePermissionCommandOutput,
  RAMClientResolvedConfig
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

  constructor(readonly input: AssociateResourceSharePermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateResourceSharePermissionCommandInput, AssociateResourceSharePermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateResourceSharePermissionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "AssociateResourceSharePermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateResourceSharePermissionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateResourceSharePermissionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateResourceSharePermissionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateResourceSharePermissionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateResourceSharePermissionCommandOutput> {
    return deserializeAws_restJson1AssociateResourceSharePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
