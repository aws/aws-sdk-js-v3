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

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { UpdateTagsForResourceMessage, UpdateTagsForResourceMessageFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryUpdateTagsForResourceCommand,
  serializeAws_queryUpdateTagsForResourceCommand,
} from "../protocols/Aws_query";

export interface UpdateTagsForResourceCommandInput extends UpdateTagsForResourceMessage {}
export interface UpdateTagsForResourceCommandOutput extends __MetadataBearer {}

/**
 * <p>Update the list of tags applied to an AWS Elastic Beanstalk resource. Two lists can be passed: <code>TagsToAdd</code>
 *       for tags to add or update, and <code>TagsToRemove</code>.</p>
 *          <p>Elastic Beanstalk supports tagging of all of its resources. For details about resource tagging, see
 *       <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/applications-tagging-resources.html">Tagging Application
 *         Resources</a>.</p>
 *          <p>If you create a custom IAM user policy to control permission to this operation, specify
 *       one of the following two virtual actions (or both) instead of the API operation name:</p>
 *          <dl>
 *             <dt>elasticbeanstalk:AddTags</dt>
 *             <dd>
 *                <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tags to add in the <code>TagsToAdd</code>
 *           parameter.</p>
 *             </dd>
 *             <dt>elasticbeanstalk:RemoveTags</dt>
 *             <dd>
 *                <p>Controls permission to call <code>UpdateTagsForResource</code> and pass a list of tag keys to remove in the <code>TagsToRemove</code>
 *           parameter.</p>
 *             </dd>
 *          </dl>
 *          <p>For details about creating a custom user policy, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html#AWSHowTo.iam.policies">Creating a Custom User Policy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, UpdateTagsForResourceCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, UpdateTagsForResourceCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new UpdateTagsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 */
export class UpdateTagsForResourceCommand extends $Command<
  UpdateTagsForResourceCommandInput,
  UpdateTagsForResourceCommandOutput,
  ElasticBeanstalkClientResolvedConfig
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

  constructor(readonly input: UpdateTagsForResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTagsForResourceCommandInput, UpdateTagsForResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateTagsForResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "UpdateTagsForResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTagsForResourceMessageFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTagsForResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateTagsForResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTagsForResourceCommandOutput> {
    return deserializeAws_queryUpdateTagsForResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
