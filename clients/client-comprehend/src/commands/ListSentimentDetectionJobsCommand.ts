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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListSentimentDetectionJobsRequest, ListSentimentDetectionJobsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListSentimentDetectionJobsCommand,
  serializeAws_json1_1ListSentimentDetectionJobsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link ListSentimentDetectionJobsCommand}.
 */
export interface ListSentimentDetectionJobsCommandInput extends ListSentimentDetectionJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListSentimentDetectionJobsCommand}.
 */
export interface ListSentimentDetectionJobsCommandOutput extends ListSentimentDetectionJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of sentiment detection jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListSentimentDetectionJobsCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListSentimentDetectionJobsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ListSentimentDetectionJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListSentimentDetectionJobsCommandInput - {@link ListSentimentDetectionJobsCommandInput}
 * @returns {@link ListSentimentDetectionJobsCommandOutput}
 * @see {@link ListSentimentDetectionJobsCommandInput} for command's `input` shape.
 * @see {@link ListSentimentDetectionJobsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidFilterException} (client fault)
 *  <p>The filter specified for the operation is invalid. Specify a different
 *       filter.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 *
 */
export class ListSentimentDetectionJobsCommand extends $Command<
  ListSentimentDetectionJobsCommandInput,
  ListSentimentDetectionJobsCommandOutput,
  ComprehendClientResolvedConfig
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
  constructor(readonly input: ListSentimentDetectionJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSentimentDetectionJobsCommandInput, ListSentimentDetectionJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSentimentDetectionJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "ListSentimentDetectionJobsCommand";
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
  private serialize(input: ListSentimentDetectionJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListSentimentDetectionJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSentimentDetectionJobsCommandOutput> {
    return deserializeAws_json1_1ListSentimentDetectionJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
