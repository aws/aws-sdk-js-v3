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
  ListReviewableHITsRequest,
  ListReviewableHITsRequestFilterSensitiveLog,
  ListReviewableHITsResponse,
  ListReviewableHITsResponseFilterSensitiveLog,
} from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  deserializeAws_json1_1ListReviewableHITsCommand,
  serializeAws_json1_1ListReviewableHITsCommand,
} from "../protocols/Aws_json1_1";

export interface ListReviewableHITsCommandInput extends ListReviewableHITsRequest {}
export interface ListReviewableHITsCommandOutput extends ListReviewableHITsResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>ListReviewableHITs</code> operation retrieves the HITs with Status equal to
 *             Reviewable or Status equal to Reviewing that belong to the Requester calling the operation.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListReviewableHITsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListReviewableHITsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListReviewableHITsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReviewableHITsCommandInput} for command's `input` shape.
 * @see {@link ListReviewableHITsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 */
export class ListReviewableHITsCommand extends $Command<
  ListReviewableHITsCommandInput,
  ListReviewableHITsCommandOutput,
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

  constructor(readonly input: ListReviewableHITsCommandInput) {
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
  ): Handler<ListReviewableHITsCommandInput, ListReviewableHITsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListReviewableHITsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListReviewableHITsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReviewableHITsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListReviewableHITsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReviewableHITsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListReviewableHITsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReviewableHITsCommandOutput> {
    return deserializeAws_json1_1ListReviewableHITsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
