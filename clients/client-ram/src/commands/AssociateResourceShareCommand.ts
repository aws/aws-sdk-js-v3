import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { AssociateResourceShareRequest, AssociateResourceShareResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AssociateResourceShareCommand,
  serializeAws_restJson1AssociateResourceShareCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface AssociateResourceShareCommandInput extends AssociateResourceShareRequest {}
export interface AssociateResourceShareCommandOutput extends AssociateResourceShareResponse, __MetadataBearer {}

/**
 * <p>Associates the specified resource share with the specified principals and resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, AssociateResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, AssociateResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new AssociateResourceShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateResourceShareCommandInput} for command's `input` shape.
 * @see {@link AssociateResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AssociateResourceShareCommand extends $Command<
  AssociateResourceShareCommandInput,
  AssociateResourceShareCommandOutput,
  RAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateResourceShareCommandInput) {
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
  ): Handler<AssociateResourceShareCommandInput, AssociateResourceShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "AssociateResourceShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateResourceShareRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateResourceShareResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateResourceShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateResourceShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateResourceShareCommandOutput> {
    return deserializeAws_restJson1AssociateResourceShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
