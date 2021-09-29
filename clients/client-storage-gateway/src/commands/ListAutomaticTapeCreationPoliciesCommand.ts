import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ListAutomaticTapeCreationPoliciesInput, ListAutomaticTapeCreationPoliciesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand,
  serializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand,
} from "../protocols/Aws_json1_1";
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

export interface ListAutomaticTapeCreationPoliciesCommandInput extends ListAutomaticTapeCreationPoliciesInput {}
export interface ListAutomaticTapeCreationPoliciesCommandOutput
  extends ListAutomaticTapeCreationPoliciesOutput,
    __MetadataBearer {}

/**
 * <p>Lists the automatic tape creation policies for a gateway. If there are no automatic tape
 *          creation policies for the gateway, it returns an empty list.</p>
 *
 *          <p>This operation is only supported for tape gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListAutomaticTapeCreationPoliciesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListAutomaticTapeCreationPoliciesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListAutomaticTapeCreationPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAutomaticTapeCreationPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAutomaticTapeCreationPoliciesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListAutomaticTapeCreationPoliciesCommand extends $Command<
  ListAutomaticTapeCreationPoliciesCommandInput,
  ListAutomaticTapeCreationPoliciesCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAutomaticTapeCreationPoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAutomaticTapeCreationPoliciesCommandInput, ListAutomaticTapeCreationPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListAutomaticTapeCreationPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAutomaticTapeCreationPoliciesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListAutomaticTapeCreationPoliciesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAutomaticTapeCreationPoliciesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAutomaticTapeCreationPoliciesCommandOutput> {
    return deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
