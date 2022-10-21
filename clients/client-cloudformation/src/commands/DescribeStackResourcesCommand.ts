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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import {
  DescribeStackResourcesInput,
  DescribeStackResourcesInputFilterSensitiveLog,
  DescribeStackResourcesOutput,
  DescribeStackResourcesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeStackResourcesCommand,
  serializeAws_queryDescribeStackResourcesCommand,
} from "../protocols/Aws_query";

export interface DescribeStackResourcesCommandInput extends DescribeStackResourcesInput {}
export interface DescribeStackResourcesCommandOutput extends DescribeStackResourcesOutput, __MetadataBearer {}

/**
 * <p>Returns Amazon Web Services resource descriptions for running and deleted stacks. If
 *             <code>StackName</code> is specified, all the associated resources that are part of the
 *          stack are returned. If <code>PhysicalResourceId</code> is specified, the associated
 *          resources of the stack that the resource belongs to are returned.</p>
 *          <note>
 *             <p>Only the first 100 resources will be returned. If your stack has more resources than
 *             this, you should use <code>ListStackResources</code> instead.</p>
 *          </note>
 *          <p>For deleted stacks, <code>DescribeStackResources</code> returns resource information for
 *          up to 90 days after the stack has been deleted.</p>
 *          <p>You must specify either <code>StackName</code> or <code>PhysicalResourceId</code>, but
 *          not both. In addition, you can specify <code>LogicalResourceId</code> to filter the
 *          returned result. For more information about resources, the <code>LogicalResourceId</code>
 *          and <code>PhysicalResourceId</code>, go to the <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/">CloudFormation User
 *          Guide</a>.</p>
 *          <note>
 *             <p>A <code>ValidationError</code> is returned if you specify both <code>StackName</code>
 *             and <code>PhysicalResourceId</code> in the same request.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackResourcesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackResourcesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackResourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeStackResourcesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class DescribeStackResourcesCommand extends $Command<
  DescribeStackResourcesCommandInput,
  DescribeStackResourcesCommandOutput,
  CloudFormationClientResolvedConfig
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

  constructor(readonly input: DescribeStackResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStackResourcesCommandInput, DescribeStackResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStackResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeStackResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeStackResourcesInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeStackResourcesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeStackResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeStackResourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStackResourcesCommandOutput> {
    return deserializeAws_queryDescribeStackResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
