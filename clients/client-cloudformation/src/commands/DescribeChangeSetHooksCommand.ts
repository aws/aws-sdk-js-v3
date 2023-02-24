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
  DescribeChangeSetHooksInput,
  DescribeChangeSetHooksInputFilterSensitiveLog,
  DescribeChangeSetHooksOutput,
  DescribeChangeSetHooksOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeChangeSetHooksCommand,
  serializeAws_queryDescribeChangeSetHooksCommand,
} from "../protocols/Aws_query";

export interface DescribeChangeSetHooksCommandInput extends DescribeChangeSetHooksInput {}
export interface DescribeChangeSetHooksCommandOutput extends DescribeChangeSetHooksOutput, __MetadataBearer {}

/**
 * <p>Returns hook-related information for the change set and a list of changes that CloudFormation makes when you run the change set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeChangeSetHooksCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeChangeSetHooksCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new DescribeChangeSetHooksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeChangeSetHooksCommandInput} for command's `input` shape.
 * @see {@link DescribeChangeSetHooksCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class DescribeChangeSetHooksCommand extends $Command<
  DescribeChangeSetHooksCommandInput,
  DescribeChangeSetHooksCommandOutput,
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

  constructor(readonly input: DescribeChangeSetHooksCommandInput) {
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
  ): Handler<DescribeChangeSetHooksCommandInput, DescribeChangeSetHooksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeChangeSetHooksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "DescribeChangeSetHooksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeChangeSetHooksInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeChangeSetHooksOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeChangeSetHooksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeChangeSetHooksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeChangeSetHooksCommandOutput> {
    return deserializeAws_queryDescribeChangeSetHooksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
