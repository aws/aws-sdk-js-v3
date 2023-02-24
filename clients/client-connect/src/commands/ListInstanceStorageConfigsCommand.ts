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
  ListInstanceStorageConfigsRequest,
  ListInstanceStorageConfigsRequestFilterSensitiveLog,
  ListInstanceStorageConfigsResponse,
  ListInstanceStorageConfigsResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListInstanceStorageConfigsCommand,
  serializeAws_restJson1ListInstanceStorageConfigsCommand,
} from "../protocols/Aws_restJson1";

export interface ListInstanceStorageConfigsCommandInput extends ListInstanceStorageConfigsRequest {}
export interface ListInstanceStorageConfigsCommandOutput extends ListInstanceStorageConfigsResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Returns a paginated list of storage configs for the identified instance and resource
 *    type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListInstanceStorageConfigsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListInstanceStorageConfigsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListInstanceStorageConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstanceStorageConfigsCommandInput} for command's `input` shape.
 * @see {@link ListInstanceStorageConfigsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class ListInstanceStorageConfigsCommand extends $Command<
  ListInstanceStorageConfigsCommandInput,
  ListInstanceStorageConfigsCommandOutput,
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

  constructor(readonly input: ListInstanceStorageConfigsCommandInput) {
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
  ): Handler<ListInstanceStorageConfigsCommandInput, ListInstanceStorageConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInstanceStorageConfigsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListInstanceStorageConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInstanceStorageConfigsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListInstanceStorageConfigsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInstanceStorageConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListInstanceStorageConfigsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListInstanceStorageConfigsCommandOutput> {
    return deserializeAws_restJson1ListInstanceStorageConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
