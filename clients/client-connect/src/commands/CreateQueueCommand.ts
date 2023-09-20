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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { CreateQueueRequest, CreateQueueResponse } from "../models/models_0";
import { de_CreateQueueCommand, se_CreateQueueCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateQueueCommand}.
 */
export interface CreateQueueCommandInput extends CreateQueueRequest {}
/**
 * @public
 *
 * The output of {@link CreateQueueCommand}.
 */
export interface CreateQueueCommandOutput extends CreateQueueResponse, __MetadataBearer {}

/**
 * @public
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Creates a new queue for the specified Amazon Connect instance.</p>
 *          <important>
 *             <ul>
 *                <li>
 *                   <p>If the phone number is claimed to a traffic distribution group that was created in the
 *       same Region as the Amazon Connect instance where you are calling this API, then you can use a
 *       full phone number ARN or a UUID for <code>OutboundCallerIdNumberId</code>. However, if the phone number is claimed
 *       to a traffic distribution group that is in one Region, and you are calling this API from an instance in another Amazon Web Services Region that is associated with the traffic distribution group, you must provide a full phone number ARN. If a
 *       UUID is provided in this scenario, you will receive a
 *       <code>ResourceNotFoundException</code>.</p>
 *                </li>
 *                <li>
 *                   <p>Only use the phone number ARN format that doesn't contain <code>instance</code> in the
 *       path, for example, <code>arn:aws:connect:us-east-1:1234567890:phone-number/uuid</code>. This
 *       is the same ARN format that is returned when you call the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ListPhoneNumbersV2.html">ListPhoneNumbersV2</a>
 *       API.</p>
 *                </li>
 *                <li>
 *                   <p>If you plan to use IAM policies to allow/deny access to this API for phone
 *       number resources claimed to a traffic distribution group, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security_iam_resource-level-policy-examples.html#allow-deny-queue-actions-replica-region">Allow or Deny queue API actions for phone numbers in a replica Region</a>.</p>
 *                </li>
 *             </ul>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateQueueCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateQueueCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // CreateQueueRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   OutboundCallerConfig: { // OutboundCallerConfig
 *     OutboundCallerIdName: "STRING_VALUE",
 *     OutboundCallerIdNumberId: "STRING_VALUE",
 *     OutboundFlowId: "STRING_VALUE",
 *   },
 *   HoursOfOperationId: "STRING_VALUE", // required
 *   MaxContacts: Number("int"),
 *   QuickConnectIds: [ // QuickConnectsList
 *     "STRING_VALUE",
 *   ],
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateQueueCommand(input);
 * const response = await client.send(command);
 * // { // CreateQueueResponse
 * //   QueueArn: "STRING_VALUE",
 * //   QueueId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateQueueCommandInput - {@link CreateQueueCommandInput}
 * @returns {@link CreateQueueCommandOutput}
 * @see {@link CreateQueueCommandInput} for command's `input` shape.
 * @see {@link CreateQueueCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class CreateQueueCommand extends $Command<
  CreateQueueCommandInput,
  CreateQueueCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: CreateQueueCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateQueueCommandInput, CreateQueueCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateQueueCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "CreateQueueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "CreateQueue",
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
  private serialize(input: CreateQueueCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateQueueCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateQueueCommandOutput> {
    return de_CreateQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
