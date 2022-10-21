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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import {
  ListProtocolsListsRequest,
  ListProtocolsListsRequestFilterSensitiveLog,
  ListProtocolsListsResponse,
  ListProtocolsListsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListProtocolsListsCommand,
  serializeAws_json1_1ListProtocolsListsCommand,
} from "../protocols/Aws_json1_1";

export interface ListProtocolsListsCommandInput extends ListProtocolsListsRequest {}
export interface ListProtocolsListsCommandOutput extends ListProtocolsListsResponse, __MetadataBearer {}

/**
 * <p>Returns an array of <code>ProtocolsListDataSummary</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, ListProtocolsListsCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, ListProtocolsListsCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new ListProtocolsListsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProtocolsListsCommandInput} for command's `input` shape.
 * @see {@link ListProtocolsListsCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 */
export class ListProtocolsListsCommand extends $Command<
  ListProtocolsListsCommandInput,
  ListProtocolsListsCommandOutput,
  FMSClientResolvedConfig
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

  constructor(readonly input: ListProtocolsListsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProtocolsListsCommandInput, ListProtocolsListsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListProtocolsListsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "ListProtocolsListsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProtocolsListsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListProtocolsListsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProtocolsListsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListProtocolsListsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProtocolsListsCommandOutput> {
    return deserializeAws_json1_1ListProtocolsListsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
