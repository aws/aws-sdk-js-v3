import {
  PersonalizeRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PersonalizeRuntimeClient";
import { GetRecommendationsRequest, GetRecommendationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetRecommendationsCommand,
  serializeAws_restJson1GetRecommendationsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetRecommendationsCommandInput = GetRecommendationsRequest;
export type GetRecommendationsCommandOutput = GetRecommendationsResponse & __MetadataBearer;

/**
 * <p>Returns a list of recommended items. The required input depends on the recipe type used to
 *       create the solution backing the campaign, as follows:</p>
 *          <ul>
 *             <li>
 *                <p>RELATED_ITEMS - <code>itemId</code> required, <code>userId</code> not used</p>
 *             </li>
 *             <li>
 *                <p>USER_PERSONALIZATION - <code>itemId</code> optional, <code>userId</code>
 *           required</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Campaigns that are backed by a solution created using a recipe of type
 *         PERSONALIZED_RANKING use the  API.</p>
 *          </note>
 */
export class GetRecommendationsCommand extends $Command<
  GetRecommendationsCommandInput,
  GetRecommendationsCommandOutput,
  PersonalizeRuntimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRecommendationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRecommendationsCommandInput, GetRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeRuntimeClient";
    const commandName = "GetRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRecommendationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRecommendationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRecommendationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRecommendationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRecommendationsCommandOutput> {
    return deserializeAws_restJson1GetRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
