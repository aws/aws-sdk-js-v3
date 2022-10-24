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
  ListAutomaticTapeCreationPoliciesInput,
  ListAutomaticTapeCreationPoliciesInputFilterSensitiveLog,
  ListAutomaticTapeCreationPoliciesOutput,
  ListAutomaticTapeCreationPoliciesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand,
  serializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

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
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class ListAutomaticTapeCreationPoliciesCommand extends $Command<
  ListAutomaticTapeCreationPoliciesCommandInput,
  ListAutomaticTapeCreationPoliciesCommandOutput,
  StorageGatewayClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAutomaticTapeCreationPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListAutomaticTapeCreationPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAutomaticTapeCreationPoliciesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListAutomaticTapeCreationPoliciesOutputFilterSensitiveLog,
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
