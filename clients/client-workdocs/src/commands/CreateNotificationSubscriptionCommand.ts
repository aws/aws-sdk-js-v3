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

import { CreateNotificationSubscriptionRequest, CreateNotificationSubscriptionResponse } from "../models/models_0";
import {
  de_CreateNotificationSubscriptionCommand,
  se_CreateNotificationSubscriptionCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateNotificationSubscriptionCommand}.
 */
export interface CreateNotificationSubscriptionCommandInput extends CreateNotificationSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link CreateNotificationSubscriptionCommand}.
 */
export interface CreateNotificationSubscriptionCommandOutput
  extends CreateNotificationSubscriptionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Configure Amazon WorkDocs to use Amazon SNS notifications. The endpoint receives a
 *             confirmation message, and must confirm the subscription.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/manage-notifications.html">Setting up notifications for an IAM user or role</a> in the <i>Amazon WorkDocs Developer
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateNotificationSubscriptionCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateNotificationSubscriptionCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const input = { // CreateNotificationSubscriptionRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   Endpoint: "STRING_VALUE", // required
 *   Protocol: "HTTPS" || "SQS", // required
 *   SubscriptionType: "ALL", // required
 * };
 * const command = new CreateNotificationSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // CreateNotificationSubscriptionResponse
 * //   Subscription: { // Subscription
 * //     SubscriptionId: "STRING_VALUE",
 * //     EndPoint: "STRING_VALUE",
 * //     Protocol: "HTTPS" || "SQS",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateNotificationSubscriptionCommandInput - {@link CreateNotificationSubscriptionCommandInput}
 * @returns {@link CreateNotificationSubscriptionCommandOutput}
 * @see {@link CreateNotificationSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateNotificationSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The pagination marker or limit fields are not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>One or more of the dependencies is unavailable.</p>
 *
 * @throws {@link TooManySubscriptionsException} (client fault)
 *  <p>You've reached the limit on the number of subscriptions for the WorkDocs
 *             instance.</p>
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *  <p>The caller does not have access to perform the action on the resource.</p>
 *
 * @throws {@link WorkDocsServiceException}
 * <p>Base exception class for all service exceptions from WorkDocs service.</p>
 *
 */
export class CreateNotificationSubscriptionCommand extends $Command<
  CreateNotificationSubscriptionCommandInput,
  CreateNotificationSubscriptionCommandOutput,
  WorkDocsClientResolvedConfig
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
  constructor(readonly input: CreateNotificationSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNotificationSubscriptionCommandInput, CreateNotificationSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNotificationSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "CreateNotificationSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGorillaBoyService",
        operation: "CreateNotificationSubscription",
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
  private serialize(
    input: CreateNotificationSubscriptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateNotificationSubscriptionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateNotificationSubscriptionCommandOutput> {
    return de_CreateNotificationSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
