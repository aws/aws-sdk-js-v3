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
  ListTapePoolsInput,
  ListTapePoolsInputFilterSensitiveLog,
  ListTapePoolsOutput,
  ListTapePoolsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListTapePoolsCommand,
  serializeAws_json1_1ListTapePoolsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface ListTapePoolsCommandInput extends ListTapePoolsInput {}
export interface ListTapePoolsCommandOutput extends ListTapePoolsOutput, __MetadataBearer {}

/**
 * <p>Lists custom tape pools. You specify custom tape pools to list by specifying one or more
 *          custom tape pool Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN,
 *          the operation lists all custom tape pools.</p>
 *
 *          <p>This operation supports pagination. You can optionally specify the <code>Limit</code>
 *          parameter in the body to limit the number of tape pools in the response. If the number of
 *          tape pools returned in the response is truncated, the response includes a
 *             <code>Marker</code> element that you can use in your subsequent request to retrieve the
 *          next set of tape pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListTapePoolsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListTapePoolsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListTapePoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTapePoolsCommandInput} for command's `input` shape.
 * @see {@link ListTapePoolsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class ListTapePoolsCommand extends $Command<
  ListTapePoolsCommandInput,
  ListTapePoolsCommandOutput,
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

  constructor(readonly input: ListTapePoolsCommandInput) {
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
  ): Handler<ListTapePoolsCommandInput, ListTapePoolsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListTapePoolsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListTapePoolsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTapePoolsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListTapePoolsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTapePoolsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTapePoolsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTapePoolsCommandOutput> {
    return deserializeAws_json1_1ListTapePoolsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
