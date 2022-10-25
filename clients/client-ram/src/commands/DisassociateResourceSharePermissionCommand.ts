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
  DisassociateResourceSharePermissionRequest,
  DisassociateResourceSharePermissionRequestFilterSensitiveLog,
  DisassociateResourceSharePermissionResponse,
  DisassociateResourceSharePermissionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateResourceSharePermissionCommand,
  serializeAws_restJson1DisassociateResourceSharePermissionCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

export interface DisassociateResourceSharePermissionCommandInput extends DisassociateResourceSharePermissionRequest {}
export interface DisassociateResourceSharePermissionCommandOutput
  extends DisassociateResourceSharePermissionResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates an RAM permission from a resource share. Permission changes take effect
 *             immediately. You can remove a RAM permission from a resource share only if there are currently
 *             no resources of the relevant resource type currently attached to the resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, DisassociateResourceSharePermissionCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, DisassociateResourceSharePermissionCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new DisassociateResourceSharePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateResourceSharePermissionCommandInput} for command's `input` shape.
 * @see {@link DisassociateResourceSharePermissionCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 */
export class DisassociateResourceSharePermissionCommand extends $Command<
  DisassociateResourceSharePermissionCommandInput,
  DisassociateResourceSharePermissionCommandOutput,
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

  constructor(readonly input: DisassociateResourceSharePermissionCommandInput) {
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
  ): Handler<DisassociateResourceSharePermissionCommandInput, DisassociateResourceSharePermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateResourceSharePermissionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "DisassociateResourceSharePermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateResourceSharePermissionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateResourceSharePermissionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateResourceSharePermissionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateResourceSharePermissionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateResourceSharePermissionCommandOutput> {
    return deserializeAws_restJson1DisassociateResourceSharePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
