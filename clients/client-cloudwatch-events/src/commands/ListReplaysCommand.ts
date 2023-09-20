// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { ListReplaysRequest, ListReplaysResponse } from "../models/models_0";
import { de_ListReplaysCommand, se_ListReplaysCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListReplaysCommand}.
 */
export interface ListReplaysCommandInput extends ListReplaysRequest {}
/**
 * @public
 *
 * The output of {@link ListReplaysCommand}.
 */
export interface ListReplaysCommandOutput extends ListReplaysResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists your replays. You can either list all the replays or you can provide a prefix to
 *       match to the replay names. Filter parameters are exclusive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, ListReplaysCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, ListReplaysCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const input = { // ListReplaysRequest
 *   NamePrefix: "STRING_VALUE",
 *   State: "STARTING" || "RUNNING" || "CANCELLING" || "COMPLETED" || "CANCELLED" || "FAILED",
 *   EventSourceArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 * };
 * const command = new ListReplaysCommand(input);
 * const response = await client.send(command);
 * // { // ListReplaysResponse
 * //   Replays: [ // ReplayList
 * //     { // Replay
 * //       ReplayName: "STRING_VALUE",
 * //       EventSourceArn: "STRING_VALUE",
 * //       State: "STARTING" || "RUNNING" || "CANCELLING" || "COMPLETED" || "CANCELLED" || "FAILED",
 * //       StateReason: "STRING_VALUE",
 * //       EventStartTime: new Date("TIMESTAMP"),
 * //       EventEndTime: new Date("TIMESTAMP"),
 * //       EventLastReplayedTime: new Date("TIMESTAMP"),
 * //       ReplayStartTime: new Date("TIMESTAMP"),
 * //       ReplayEndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReplaysCommandInput - {@link ListReplaysCommandInput}
 * @returns {@link ListReplaysCommandOutput}
 * @see {@link ListReplaysCommandInput} for command's `input` shape.
 * @see {@link ListReplaysCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 */
export class ListReplaysCommand extends $Command<
  ListReplaysCommandInput,
  ListReplaysCommandOutput,
  CloudWatchEventsClientResolvedConfig
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
  constructor(readonly input: ListReplaysCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReplaysCommandInput, ListReplaysCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListReplaysCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "ListReplaysCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSEvents",
        operation: "ListReplays",
      },
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
  private serialize(input: ListReplaysCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListReplaysCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReplaysCommandOutput> {
    return de_ListReplaysCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
