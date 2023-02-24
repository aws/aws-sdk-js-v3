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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import {
  ListJobsRequest,
  ListJobsRequestFilterSensitiveLog,
  ListJobsResponse,
  ListJobsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListJobsCommand,
  serializeAws_restJson1ListJobsCommand,
} from "../protocols/Aws_restJson1";

export interface ListJobsCommandInput extends ListJobsRequest {}
export interface ListJobsCommandOutput extends ListJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Batch jobs.</p>
 *          <p>You must specify only one of the following items:</p>
 *          <ul>
 *             <li>
 *                <p>A job queue ID to return a list of jobs in that job queue</p>
 *             </li>
 *             <li>
 *                <p>A multi-node parallel job ID to return a list of nodes for that job</p>
 *             </li>
 *             <li>
 *                <p>An array job ID to return a list of the children for that job</p>
 *             </li>
 *          </ul>
 *          <p>You can filter the results by job status with the <code>jobStatus</code> parameter. If you don't specify a
 *    status, only <code>RUNNING</code> jobs are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, ListJobsCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, ListJobsCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJobsCommandInput} for command's `input` shape.
 * @see {@link ListJobsCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 */
export class ListJobsCommand extends $Command<ListJobsCommandInput, ListJobsCommandOutput, BatchClientResolvedConfig> {
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

  constructor(readonly input: ListJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListJobsCommandInput, ListJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListJobsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "ListJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListJobsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListJobsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListJobsCommandOutput> {
    return deserializeAws_restJson1ListJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
