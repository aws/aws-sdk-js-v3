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
} from "@smithy/types";

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { ListNotificationChannelsRequest, ListNotificationChannelsResponse } from "../models/models_0";
import { de_ListNotificationChannelsCommand, se_ListNotificationChannelsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListNotificationChannelsCommand}.
 */
export interface ListNotificationChannelsCommandInput extends ListNotificationChannelsRequest {}
/**
 * @public
 *
 * The output of {@link ListNotificationChannelsCommand}.
 */
export interface ListNotificationChannelsCommandOutput extends ListNotificationChannelsResponse, __MetadataBearer {}

/**
 * @public
 * <p> Returns a list of notification channels configured for DevOps Guru. Each notification
 * 			channel is used to notify you when DevOps Guru generates an insight that contains information
 * 			about how to improve your operations. The one
 *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListNotificationChannelsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListNotificationChannelsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const input = { // ListNotificationChannelsRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListNotificationChannelsCommand(input);
 * const response = await client.send(command);
 * // { // ListNotificationChannelsResponse
 * //   Channels: [ // Channels
 * //     { // NotificationChannel
 * //       Id: "STRING_VALUE",
 * //       Config: { // NotificationChannelConfig
 * //         Sns: { // SnsChannelConfig
 * //           TopicArn: "STRING_VALUE",
 * //         },
 * //         Filters: { // NotificationFilterConfig
 * //           Severities: [ // InsightSeverities
 * //             "LOW" || "MEDIUM" || "HIGH",
 * //           ],
 * //           MessageTypes: [ // NotificationMessageTypes
 * //             "NEW_INSIGHT" || "CLOSED_INSIGHT" || "NEW_ASSOCIATION" || "SEVERITY_UPGRADED" || "NEW_RECOMMENDATION",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListNotificationChannelsCommandInput - {@link ListNotificationChannelsCommandInput}
 * @returns {@link ListNotificationChannelsCommandOutput}
 * @see {@link ListNotificationChannelsCommandInput} for command's `input` shape.
 * @see {@link ListNotificationChannelsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 */
export class ListNotificationChannelsCommand extends $Command<
  ListNotificationChannelsCommandInput,
  ListNotificationChannelsCommandOutput,
  DevOpsGuruClientResolvedConfig
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
  constructor(readonly input: ListNotificationChannelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListNotificationChannelsCommandInput, ListNotificationChannelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListNotificationChannelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "ListNotificationChannelsCommand";
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
  private serialize(input: ListNotificationChannelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListNotificationChannelsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNotificationChannelsCommandOutput> {
    return de_ListNotificationChannelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
