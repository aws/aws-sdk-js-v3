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
  ListInventoryEntriesRequest,
  ListInventoryEntriesRequestFilterSensitiveLog,
  ListInventoryEntriesResult,
  ListInventoryEntriesResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1ListInventoryEntriesCommand,
  serializeAws_json1_1ListInventoryEntriesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface ListInventoryEntriesCommandInput extends ListInventoryEntriesRequest {}
export interface ListInventoryEntriesCommandOutput extends ListInventoryEntriesResult, __MetadataBearer {}

/**
 * <p>A list of inventory items returned by the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListInventoryEntriesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListInventoryEntriesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListInventoryEntriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInventoryEntriesCommandInput} for command's `input` shape.
 * @see {@link ListInventoryEntriesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class ListInventoryEntriesCommand extends $Command<
  ListInventoryEntriesCommandInput,
  ListInventoryEntriesCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: ListInventoryEntriesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInventoryEntriesCommandInput, ListInventoryEntriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInventoryEntriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListInventoryEntriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInventoryEntriesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListInventoryEntriesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInventoryEntriesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListInventoryEntriesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInventoryEntriesCommandOutput> {
    return deserializeAws_json1_1ListInventoryEntriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
