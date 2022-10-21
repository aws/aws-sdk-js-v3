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

import {
  AddTagsToResourceRequest,
  AddTagsToResourceRequestFilterSensitiveLog,
  AddTagsToResourceResult,
  AddTagsToResourceResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AddTagsToResourceCommand,
  serializeAws_json1_1AddTagsToResourceCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface AddTagsToResourceCommandInput extends AddTagsToResourceRequest {}
export interface AddTagsToResourceCommandOutput extends AddTagsToResourceResult, __MetadataBearer {}

/**
 * <p>Adds or overwrites one or more tags for the specified resource. <i>Tags</i>
 *    are metadata that you can assign to your automations, documents, managed nodes, maintenance
 *    windows, Parameter Store parameters, and patch baselines. Tags enable you to categorize your
 *    resources in different ways, for example, by purpose, owner, or environment. Each tag consists of
 *    a key and an optional value, both of which you define. For example, you could define a set of
 *    tags for your account's managed nodes that helps you track each node's owner and stack level. For
 *    example:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Key=Owner,Value=DbAdmin</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=Owner,Value=SysAdmin</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=Owner,Value=Dev</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=Stack,Value=Production</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=Stack,Value=Pre-Production</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Key=Stack,Value=Test</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Most resources can have a maximum of 50 tags. Automations can have a maximum of 5
 *    tags.</p>
 *          <p>We recommend that you devise a set of tag keys that meets your needs for each resource type.
 *    Using a consistent set of tag keys makes it easier for you to manage your resources. You can
 *    search and filter the resources based on the tags you add. Tags don't have any semantic meaning
 *    to and are interpreted strictly as a string of characters.</p>
 *          <p>For more information about using tags with Amazon Elastic Compute Cloud (Amazon EC2) instances, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html">Tagging your Amazon EC2
 *     resources</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, AddTagsToResourceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, AddTagsToResourceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new AddTagsToResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsToResourceCommandInput} for command's `input` shape.
 * @see {@link AddTagsToResourceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class AddTagsToResourceCommand extends $Command<
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: AddTagsToResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddTagsToResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "AddTagsToResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddTagsToResourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AddTagsToResourceResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddTagsToResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddTagsToResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddTagsToResourceCommandOutput> {
    return deserializeAws_json1_1AddTagsToResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
