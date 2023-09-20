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

import { CreateTopicInput, CreateTopicResponse } from "../models/models_0";
import { de_CreateTopicCommand, se_CreateTopicCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTopicCommand}.
 */
export interface CreateTopicCommandInput extends CreateTopicInput {}
/**
 * @public
 *
 * The output of {@link CreateTopicCommand}.
 */
export interface CreateTopicCommandOutput extends CreateTopicResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a topic to which notifications can be published. Users can create at most
 *             100,000 standard topics (at most 1,000 FIFO topics). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html">Creating an Amazon SNS
 *                 topic</a> in the <i>Amazon SNS Developer Guide</i>. This action is
 *             idempotent, so if the requester already owns a topic with the specified name, that
 *             topic's ARN is returned without creating a new topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, CreateTopicCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CreateTopicCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const input = { // CreateTopicInput
 *   Name: "STRING_VALUE", // required
 *   Attributes: { // TopicAttributesMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   DataProtectionPolicy: "STRING_VALUE",
 * };
 * const command = new CreateTopicCommand(input);
 * const response = await client.send(command);
 * // { // CreateTopicResponse
 * //   TopicArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTopicCommandInput - {@link CreateTopicCommandInput}
 * @returns {@link CreateTopicCommandOutput}
 * @see {@link CreateTopicCommandInput} for command's `input` shape.
 * @see {@link CreateTopicCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link ConcurrentAccessException} (client fault)
 *  <p>Can't perform multiple operations on a tag simultaneously. Perform the operations
 *             sequentially.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link InvalidSecurityException} (client fault)
 *  <p>The credential signature isn't valid. You must use an HTTPS endpoint and sign your
 *             request using Signature Version 4.</p>
 *
 * @throws {@link StaleTagException} (client fault)
 *  <p>A tag has been added to a resource with the same ARN as a deleted resource. Wait a
 *             short while and then retry the operation.</p>
 *
 * @throws {@link TagLimitExceededException} (client fault)
 *  <p>Can't add more than 50 tags to a topic.</p>
 *
 * @throws {@link TagPolicyException} (client fault)
 *  <p>The request doesn't comply with the IAM tag policy. Correct your request and then
 *             retry it.</p>
 *
 * @throws {@link TopicLimitExceededException} (client fault)
 *  <p>Indicates that the customer already owns the maximum allowed number of topics.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 */
export class CreateTopicCommand extends $Command<
  CreateTopicCommandInput,
  CreateTopicCommandOutput,
  SNSClientResolvedConfig
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
  constructor(readonly input: CreateTopicCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTopicCommandInput, CreateTopicCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateTopicCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "CreateTopicCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSimpleNotificationService",
        operation: "CreateTopic",
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
  private serialize(input: CreateTopicCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateTopicCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTopicCommandOutput> {
    return de_CreateTopicCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
