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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import {
  ListNotebookSessionsRequest,
  ListNotebookSessionsRequestFilterSensitiveLog,
  ListNotebookSessionsResponse,
  ListNotebookSessionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListNotebookSessionsCommand,
  serializeAws_json1_1ListNotebookSessionsCommand,
} from "../protocols/Aws_json1_1";

export interface ListNotebookSessionsCommandInput extends ListNotebookSessionsRequest {}
export interface ListNotebookSessionsCommandOutput extends ListNotebookSessionsResponse, __MetadataBearer {}

/**
 * <p>Lists, in descending order, the sessions that have been created in a notebook that are
 *             in an active state like <code>CREATING</code>, <code>CREATED</code>, <code>IDLE</code>
 *             or <code>BUSY</code>. Newer sessions are listed first; older sessions are listed
 *             later.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListNotebookSessionsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListNotebookSessionsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const command = new ListNotebookSessionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNotebookSessionsCommandInput} for command's `input` shape.
 * @see {@link ListNotebookSessionsCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 */
export class ListNotebookSessionsCommand extends $Command<
  ListNotebookSessionsCommandInput,
  ListNotebookSessionsCommandOutput,
  AthenaClientResolvedConfig
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

  constructor(readonly input: ListNotebookSessionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListNotebookSessionsCommandInput, ListNotebookSessionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListNotebookSessionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "ListNotebookSessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListNotebookSessionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListNotebookSessionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListNotebookSessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListNotebookSessionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNotebookSessionsCommandOutput> {
    return deserializeAws_json1_1ListNotebookSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
