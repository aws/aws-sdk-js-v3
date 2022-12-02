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
  DescribeExecutionInput,
  DescribeExecutionInputFilterSensitiveLog,
  DescribeExecutionOutput,
  DescribeExecutionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0DescribeExecutionCommand,
  serializeAws_json1_0DescribeExecutionCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

export interface DescribeExecutionCommandInput extends DescribeExecutionInput {}
export interface DescribeExecutionCommandOutput extends DescribeExecutionOutput, __MetadataBearer {}

/**
 * <p>Provides all information about a state machine execution, such as the state machine associated with the execution, the execution input and output, and relevant execution metadata. Use this API action to return the Map Run ARN if the execution was dispatched by a Map Run.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 *          <p>This API action is not supported by <code>EXPRESS</code> state machine executions unless they were dispatched by a Map Run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const command = new DescribeExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 */
export class DescribeExecutionCommand extends $Command<
  DescribeExecutionCommandInput,
  DescribeExecutionCommandOutput,
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

  constructor(readonly input: DescribeExecutionCommandInput) {
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
  ): Handler<DescribeExecutionCommandInput, DescribeExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "DescribeExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeExecutionInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeExecutionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeExecutionCommandOutput> {
    return deserializeAws_json1_0DescribeExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
