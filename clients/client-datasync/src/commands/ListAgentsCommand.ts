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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import {
  ListAgentsRequest,
  ListAgentsRequestFilterSensitiveLog,
  ListAgentsResponse,
  ListAgentsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListAgentsCommand,
  serializeAws_json1_1ListAgentsCommand,
} from "../protocols/Aws_json1_1";

export interface ListAgentsCommandInput extends ListAgentsRequest {}
export interface ListAgentsCommandOutput extends ListAgentsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of agents owned by an Amazon Web Services account in the Amazon Web Services Region specified in the
 *       request. The returned list is ordered by agent Amazon Resource Name (ARN).</p>
 *          <p>By default, this operation returns a maximum of 100 agents. This operation supports
 *       pagination that enables you to optionally reduce the number of agents returned in a
 *       response.</p>
 *          <p>If you have more agents than are returned in a response (that is, the response returns
 *       only a truncated list of your agents), the response contains a marker that you can specify in
 *       your next request to fetch the next page of agents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, ListAgentsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, ListAgentsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new ListAgentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAgentsCommandInput} for command's `input` shape.
 * @see {@link ListAgentsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 */
export class ListAgentsCommand extends $Command<
  ListAgentsCommandInput,
  ListAgentsCommandOutput,
  DataSyncClientResolvedConfig
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

  constructor(readonly input: ListAgentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAgentsCommandInput, ListAgentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListAgentsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "ListAgentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAgentsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAgentsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAgentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAgentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAgentsCommandOutput> {
    return deserializeAws_json1_1ListAgentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
