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
  DescribeStackEventsInput,
  DescribeStackEventsInputFilterSensitiveLog,
  DescribeStackEventsOutput,
  DescribeStackEventsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeStackEventsCommand,
  serializeAws_queryDescribeStackEventsCommand,
} from "../protocols/Aws_query";

export interface DescribeStackEventsCommandInput extends DescribeStackEventsInput {}
export interface DescribeStackEventsCommandOutput extends DescribeStackEventsOutput, __MetadataBearer {}

/**
 * <p>Returns all stack related events for a specified stack in reverse chronological order.
 *          For more information about a stack's event history, go to <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/concept-stack.html">Stacks</a> in the
 *          CloudFormation User Guide.</p>
 *          <note>
 *             <p>You can list events for stacks that have failed to create or have been deleted by
 *             specifying the unique stack identifier (stack ID).</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackEventsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackEventsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackEventsCommandInput} for command's `input` shape.
 * @see {@link DescribeStackEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class DescribeStackEventsCommand extends $Command<
  DescribeStackEventsCommandInput,
  DescribeStackEventsCommandOutput,
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

  constructor(readonly input: DescribeStackEventsCommandInput) {
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
  ): Handler<DescribeStackEventsCommandInput, DescribeStackEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStackEventsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeStackEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeStackEventsInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeStackEventsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeStackEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeStackEventsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStackEventsCommandOutput> {
    return deserializeAws_queryDescribeStackEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
