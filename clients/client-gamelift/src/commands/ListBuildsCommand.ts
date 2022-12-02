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

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  ListBuildsInput,
  ListBuildsInputFilterSensitiveLog,
  ListBuildsOutput,
  ListBuildsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListBuildsCommand,
  serializeAws_json1_1ListBuildsCommand,
} from "../protocols/Aws_json1_1";

export interface ListBuildsCommandInput extends ListBuildsInput {}
export interface ListBuildsCommandOutput extends ListBuildsOutput, __MetadataBearer {}

/**
 * <p>Retrieves build resources for all builds associated with the Amazon Web Services account in use. You
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
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html"> Upload a Custom
 *                 Server Build</a>
 *          </p>
 *          <p>
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ListBuildsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListBuildsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new ListBuildsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBuildsCommandInput} for command's `input` shape.
 * @see {@link ListBuildsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class ListBuildsCommand extends $Command<
  ListBuildsCommandInput,
  ListBuildsCommandOutput,
  GameLiftClientResolvedConfig
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
    this.middlewareStack.use(getEndpointPlugin(configuration, ListBuildsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "ListBuildsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBuildsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListBuildsOutputFilterSensitiveLog,
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
