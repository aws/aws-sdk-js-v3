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
  DescribeStateMachineInput,
  DescribeStateMachineInputFilterSensitiveLog,
  DescribeStateMachineOutput,
  DescribeStateMachineOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0DescribeStateMachineCommand,
  serializeAws_json1_0DescribeStateMachineCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

export interface DescribeStateMachineCommandInput extends DescribeStateMachineInput {}
export interface DescribeStateMachineCommandOutput extends DescribeStateMachineOutput, __MetadataBearer {}

/**
 * <p>Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and configuration. If the state machine ARN is a qualified state machine ARN, the response returned includes the <code>Map</code> state's label.</p>
 *
 *          <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p>
 *
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeStateMachineCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeStateMachineCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new DescribeStateMachineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeStateMachineCommandInput} for command's `input` shape.
 * @see {@link DescribeStateMachineCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 */
export class DescribeStateMachineCommand extends $Command<
  DescribeStateMachineCommandInput,
  DescribeStateMachineCommandOutput,
  SFNClientResolvedConfig
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

  constructor(readonly input: DescribeStateMachineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStateMachineCommandInput, DescribeStateMachineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStateMachineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "DescribeStateMachineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeStateMachineInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeStateMachineOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeStateMachineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeStateMachineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStateMachineCommandOutput> {
    return deserializeAws_json1_0DescribeStateMachineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
