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

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { ProcessesType, ProcessesTypeFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryDescribeScalingProcessTypesCommand,
  serializeAws_queryDescribeScalingProcessTypesCommand,
} from "../protocols/Aws_query";

export interface DescribeScalingProcessTypesCommandInput {}
export interface DescribeScalingProcessTypesCommandOutput extends ProcessesType, __MetadataBearer {}

/**
 * <p>Describes the scaling process types for use with the <a>ResumeProcesses</a>
 *             and <a>SuspendProcesses</a> APIs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeScalingProcessTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeScalingProcessTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeScalingProcessTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScalingProcessTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingProcessTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class DescribeScalingProcessTypesCommand extends $Command<
  DescribeScalingProcessTypesCommandInput,
  DescribeScalingProcessTypesCommandOutput,
  AutoScalingClientResolvedConfig
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

  constructor(readonly input: DescribeScalingProcessTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeScalingProcessTypesCommandInput, DescribeScalingProcessTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeScalingProcessTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeScalingProcessTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: ProcessesTypeFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeScalingProcessTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeScalingProcessTypesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeScalingProcessTypesCommandOutput> {
    return deserializeAws_queryDescribeScalingProcessTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
