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
  DescribeStackInstanceInput,
  DescribeStackInstanceInputFilterSensitiveLog,
  DescribeStackInstanceOutput,
  DescribeStackInstanceOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeStackInstanceCommand,
  serializeAws_queryDescribeStackInstanceCommand,
} from "../protocols/Aws_query";

export interface DescribeStackInstanceCommandInput extends DescribeStackInstanceInput {}
export interface DescribeStackInstanceCommandOutput extends DescribeStackInstanceOutput, __MetadataBearer {}

/**
 * <p>Returns the stack instance that's associated with the specified stack set, Amazon Web Services account, and Region.</p>
 *          <p>For a list of stack instances that are associated with a specific stack set, use <a>ListStackInstances</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStackInstanceCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStackInstanceCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeStackInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStackInstanceCommandInput} for command's `input` shape.
 * @see {@link DescribeStackInstanceCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class DescribeStackInstanceCommand extends $Command<
  DescribeStackInstanceCommandInput,
  DescribeStackInstanceCommandOutput,
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

  constructor(readonly input: DescribeStackInstanceCommandInput) {
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
  ): Handler<DescribeStackInstanceCommandInput, DescribeStackInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStackInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeStackInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeStackInstanceInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeStackInstanceOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeStackInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeStackInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStackInstanceCommandOutput> {
    return deserializeAws_queryDescribeStackInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
