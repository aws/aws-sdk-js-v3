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
  ListReviewPolicyResultsForHITRequest,
  ListReviewPolicyResultsForHITRequestFilterSensitiveLog,
  ListReviewPolicyResultsForHITResponse,
  ListReviewPolicyResultsForHITResponseFilterSensitiveLog,
} from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  deserializeAws_json1_1ListReviewPolicyResultsForHITCommand,
  serializeAws_json1_1ListReviewPolicyResultsForHITCommand,
} from "../protocols/Aws_json1_1";

export interface ListReviewPolicyResultsForHITCommandInput extends ListReviewPolicyResultsForHITRequest {}
export interface ListReviewPolicyResultsForHITCommandOutput
  extends ListReviewPolicyResultsForHITResponse,
    __MetadataBearer {}

/**
 * <p>
 *             The <code>ListReviewPolicyResultsForHIT</code> operation retrieves the computed results
 *             and the actions taken in the course of executing your Review Policies for a given HIT.
 *             For information about how to specify Review Policies when you call CreateHIT,
 *             see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both
 *             Assignment-level and HIT-level review results.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListReviewPolicyResultsForHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListReviewPolicyResultsForHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new ListReviewPolicyResultsForHITCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReviewPolicyResultsForHITCommandInput} for command's `input` shape.
 * @see {@link ListReviewPolicyResultsForHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 */
export class ListReviewPolicyResultsForHITCommand extends $Command<
  ListReviewPolicyResultsForHITCommandInput,
  ListReviewPolicyResultsForHITCommandOutput,
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

  constructor(readonly input: ListReviewPolicyResultsForHITCommandInput) {
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
  ): Handler<ListReviewPolicyResultsForHITCommandInput, ListReviewPolicyResultsForHITCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListReviewPolicyResultsForHITCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "ListReviewPolicyResultsForHITCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReviewPolicyResultsForHITRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListReviewPolicyResultsForHITResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReviewPolicyResultsForHITCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListReviewPolicyResultsForHITCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListReviewPolicyResultsForHITCommandOutput> {
    return deserializeAws_json1_1ListReviewPolicyResultsForHITCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
