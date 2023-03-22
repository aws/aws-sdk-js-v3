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
import { ListAgentsRequest, ListAgentsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListAgentsCommand,
  serializeAws_json1_1ListAgentsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListAgentsCommand}.
 */
export interface ListAgentsCommandInput extends ListAgentsRequest {}
/**
 * @public
 *
 * The output of {@link ListAgentsCommand}.
 */
export interface ListAgentsCommandOutput extends ListAgentsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of DataSync agents that belong to an Amazon Web Services account in the Amazon Web Services Region specified in the request.</p>
 *          <p>With pagination, you can reduce the number of agents returned in a response. If you get
 *       a truncated list of agents in a response, the response contains a marker that you can specify
 *       in your next request to fetch the next page of agents.</p>
 *          <p>
 *             <code>ListAgents</code> is eventually consistent. This means the result of running the
 *       operation might not reflect that you just created or deleted an agent. For example, if you
 *       create an agent with <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_CreateAgent.html">CreateAgent</a> and then
 *       immediately run <code>ListAgents</code>, that agent might not show up in the list right away.
 *       In situations like this, you can always confirm whether an agent has been created (or deleted)
 *       by using <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_DescribeAgent.html">DescribeAgent</a>.</p>
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
 * @param ListAgentsCommandInput - {@link ListAgentsCommandInput}
 * @returns {@link ListAgentsCommandOutput}
 * @see {@link ListAgentsCommandInput} for command's `input` shape.
 * @see {@link ListAgentsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListAgentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAgentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAgentsCommandOutput> {
    return deserializeAws_json1_1ListAgentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
