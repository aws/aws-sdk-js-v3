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

import { DeleteTopicInput } from "../models/models_0";
import { de_DeleteTopicCommand, se_DeleteTopicCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteTopicCommand}.
 */
export interface DeleteTopicCommandInput extends DeleteTopicInput {}
/**
 * @public
 *
 * The output of {@link DeleteTopicCommand}.
 */
export interface DeleteTopicCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes a topic and all its subscriptions. Deleting a topic might prevent some
 *             messages previously sent to the topic from being delivered to subscribers. This action
 *             is idempotent, so deleting a topic that does not exist does not result in an
 *             error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, DeleteTopicCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, DeleteTopicCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const input = { // DeleteTopicInput
 *   TopicArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteTopicCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTopicCommandInput - {@link DeleteTopicCommandInput}
 * @returns {@link DeleteTopicCommandOutput}
 * @see {@link DeleteTopicCommandInput} for command's `input` shape.
 * @see {@link DeleteTopicCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>Indicates that the requested resource does not exist.</p>
 *
 * @throws {@link StaleTagException} (client fault)
 *  <p>A tag has been added to a resource with the same ARN as a deleted resource. Wait a
 *             short while and then retry the operation.</p>
 *
 * @throws {@link TagPolicyException} (client fault)
 *  <p>The request doesn't comply with the IAM tag policy. Correct your request and then
 *             retry it.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 */
export class DeleteTopicCommand extends $Command<
  DeleteTopicCommandInput,
  DeleteTopicCommandOutput,
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
  constructor(readonly input: DeleteTopicCommandInput) {
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
  ): Handler<DeleteTopicCommandInput, DeleteTopicCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteTopicCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "DeleteTopicCommand";
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
  private serialize(input: DeleteTopicCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteTopicCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTopicCommandOutput> {
    return de_DeleteTopicCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
