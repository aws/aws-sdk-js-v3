import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ListBuildsInput, ListBuildsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListBuildsCommand,
  serializeAws_json1_1ListBuildsCommand,
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

export type ListBuildsCommandInput = ListBuildsInput;
export type ListBuildsCommandOutput = ListBuildsOutput & __MetadataBearer;

/**
 * <p>Retrieves build resources for all builds associated with the AWS account in use. You
 *             can limit results to builds that are in a specific status by using the
 *                 <code>Status</code> parameter. Use the pagination parameters to retrieve results in
 *             a set of sequential pages. </p>
 *         <note>
 *             <p>Build resources are not listed in any particular order.</p>
 *         </note>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">
 *             Upload a Custom Server Build</a>
 *          </p>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateBuild</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListBuilds</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeBuild</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateBuild</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteBuild</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class ListBuildsCommand extends $Command<
  ListBuildsCommandInput,
  ListBuildsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBuildsCommandInput) {
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
  ): Handler<ListBuildsCommandInput, ListBuildsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "ListBuildsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBuildsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListBuildsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBuildsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListBuildsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBuildsCommandOutput> {
    return deserializeAws_json1_1ListBuildsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
