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
  ListQualificationRequestsRequest,
  ListQualificationRequestsRequestFilterSensitiveLog,
  ListQualificationRequestsResponse,
  ListQualificationRequestsResponseFilterSensitiveLog,
} from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  deserializeAws_json1_1ListQualificationRequestsCommand,
  serializeAws_json1_1ListQualificationRequestsCommand,
} from "../protocols/Aws_json1_1";

export interface ListQualificationRequestsCommandInput extends ListQualificationRequestsRequest {}
export interface ListQualificationRequestsCommandOutput extends ListQualificationRequestsResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>ListQualificationRequests</code>
 *             operation retrieves requests for Qualifications of a particular
 *             Qualification type. The owner of the Qualification type calls this
 *             operation to poll for pending requests, and accepts them using the
 *             AcceptQualification operation.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListQualificationRequestsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListQualificationRequestsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListQualificationRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQualificationRequestsCommandInput} for command's `input` shape.
 * @see {@link ListQualificationRequestsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 */
export class ListQualificationRequestsCommand extends $Command<
  ListQualificationRequestsCommandInput,
  ListQualificationRequestsCommandOutput,
  MTurkClientResolvedConfig
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

  constructor(readonly input: ListQualificationRequestsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListQualificationRequestsCommandInput, ListQualificationRequestsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListQualificationRequestsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListQualificationRequestsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListQualificationRequestsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListQualificationRequestsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListQualificationRequestsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListQualificationRequestsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListQualificationRequestsCommandOutput> {
    return deserializeAws_json1_1ListQualificationRequestsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
