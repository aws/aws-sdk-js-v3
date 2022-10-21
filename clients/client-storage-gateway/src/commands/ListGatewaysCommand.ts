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
  ListGatewaysInput,
  ListGatewaysInputFilterSensitiveLog,
  ListGatewaysOutput,
  ListGatewaysOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListGatewaysCommand,
  serializeAws_json1_1ListGatewaysCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface ListGatewaysCommandInput extends ListGatewaysInput {}
export interface ListGatewaysCommandOutput extends ListGatewaysOutput, __MetadataBearer {}

/**
 * <p>Lists gateways owned by an Amazon Web Services account in an Amazon Web Services Region
 *          specified in the request. The returned list is ordered by gateway Amazon Resource Name
 *          (ARN).</p>
 *
 *          <p>By default, the operation returns a maximum of 100 gateways. This operation supports
 *          pagination that allows you to optionally reduce the number of gateways returned in a
 *          response.</p>
 *
 *          <p>If you have more gateways than are returned in a response (that is, the response returns
 *          only a truncated list of your gateways), the response contains a marker that you can
 *          specify in your next request to fetch the next page of gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListGatewaysCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListGatewaysCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGatewaysCommandInput} for command's `input` shape.
 * @see {@link ListGatewaysCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class ListGatewaysCommand extends $Command<
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
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

  constructor(readonly input: ListGatewaysCommandInput) {
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
  ): Handler<ListGatewaysCommandInput, ListGatewaysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListGatewaysCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListGatewaysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListGatewaysInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListGatewaysOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListGatewaysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListGatewaysCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListGatewaysCommandOutput> {
    return deserializeAws_json1_1ListGatewaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
