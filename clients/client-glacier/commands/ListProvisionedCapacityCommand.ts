import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { ListProvisionedCapacityInput, ListProvisionedCapacityOutput } from "../models/models_0";
import {
  deserializeAws_restJson1ListProvisionedCapacityCommand,
  serializeAws_restJson1ListProvisionedCapacityCommand,
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

export interface ListProvisionedCapacityCommandInput extends ListProvisionedCapacityInput {}
export interface ListProvisionedCapacityCommandOutput extends ListProvisionedCapacityOutput, __MetadataBearer {}

/**
 * <p>This operation lists the provisioned capacity units for the specified AWS
 *          account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListProvisionedCapacityCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListProvisionedCapacityCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new ListProvisionedCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisionedCapacityCommandInput} for command's `input` shape.
 * @see {@link ListProvisionedCapacityCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListProvisionedCapacityCommand extends $Command<
  ListProvisionedCapacityCommandInput,
  ListProvisionedCapacityCommandOutput,
  GlacierClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProvisionedCapacityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProvisionedCapacityCommandInput, ListProvisionedCapacityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "ListProvisionedCapacityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProvisionedCapacityInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListProvisionedCapacityOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProvisionedCapacityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListProvisionedCapacityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProvisionedCapacityCommandOutput> {
    return deserializeAws_restJson1ListProvisionedCapacityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
