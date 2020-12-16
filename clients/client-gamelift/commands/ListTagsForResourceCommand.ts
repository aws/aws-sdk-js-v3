import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ListTagsForResourceRequest, ListTagsForResourceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListTagsForResourceCommand,
  serializeAws_json1_1ListTagsForResourceCommand,
} from "../protocols/Aws_json1_1";
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

export type ListTagsForResourceCommandInput = ListTagsForResourceRequest;
export type ListTagsForResourceCommandOutput = ListTagsForResourceResponse & __MetadataBearer;

/**
 * <p>
 *             Retrieves all tags that are assigned to a GameLift resource.
 *             Resource tags are used to organize AWS resources for a range of purposes.
 *             This operation handles the permissions necessary to manage tags for the following
 *             GameLift resource types:</p>
 *         <ul>
 *             <li>
 *                 <p>Build</p>
 *             </li>
 *             <li>
 *                 <p>Script</p>
 *             </li>
 *             <li>
 *                 <p>Fleet</p>
 *             </li>
 *             <li>
 *                 <p>Alias</p>
 *             </li>
 *             <li>
 *                 <p>GameSessionQueue</p>
 *             </li>
 *             <li>
 *                 <p>MatchmakingConfiguration</p>
 *             </li>
 *             <li>
 *                 <p>MatchmakingRuleSet</p>
 *             </li>
 *          </ul>
 *         <p>To list tags for a resource, specify the unique ARN value for the resource.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in the
 *             <i>AWS General Reference</i>
 *          </p>
 *         <p>
 *             <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/">
 *             AWS Tagging Strategies</a>
 *          </p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>TagResource</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UntagResource</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListTagsForResource</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class ListTagsForResourceCommand extends $Command<
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTagsForResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "ListTagsForResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTagsForResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTagsForResourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTagsForResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTagsForResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTagsForResourceCommandOutput> {
    return deserializeAws_json1_1ListTagsForResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
