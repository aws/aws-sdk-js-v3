import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import { CreateResourceShareRequest, CreateResourceShareResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateResourceShareCommand,
  serializeAws_restJson1CreateResourceShareCommand,
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

export interface CreateResourceShareCommandInput extends CreateResourceShareRequest {}
export interface CreateResourceShareCommandOutput extends CreateResourceShareResponse, __MetadataBearer {}

/**
 * <p>Creates a resource share. You must provide a list of the Amazon Resource Names (ARNs) for the
 *             resources you want to share. You must also specify who you want to share the resources
 *             with, and the permissions that you grant them.</p>
 *         <note>
 *             <p>Sharing a resource makes it available for use by principals outside of the
 *                 Amazon Web Services account that created the resource. Sharing doesn't change any permissions or
 *                 quotas that apply to the resource in the account that created it.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, CreateResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, CreateResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new CreateResourceShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourceShareCommandInput} for command's `input` shape.
 * @see {@link CreateResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateResourceShareCommand extends $Command<
  CreateResourceShareCommandInput,
  CreateResourceShareCommandOutput,
  RAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateResourceShareCommandInput) {
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
  ): Handler<CreateResourceShareCommandInput, CreateResourceShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "CreateResourceShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateResourceShareRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateResourceShareResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateResourceShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateResourceShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateResourceShareCommandOutput> {
    return deserializeAws_restJson1CreateResourceShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
