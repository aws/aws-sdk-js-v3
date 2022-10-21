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
import { SignalResourceInput, SignalResourceInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_querySignalResourceCommand,
  serializeAws_querySignalResourceCommand,
} from "../protocols/Aws_query";

export interface SignalResourceCommandInput extends SignalResourceInput {}
export interface SignalResourceCommandOutput extends __MetadataBearer {}

/**
 * <p>Sends a signal to the specified resource with a success or failure status. You can use
 *          the <code>SignalResource</code> operation in conjunction with a creation policy or update
 *          policy. CloudFormation doesn't proceed with a stack creation or update until
 *          resources receive the required number of signals or the timeout period is exceeded. The
 *             <code>SignalResource</code> operation is useful in cases where you want to send signals
 *          from anywhere other than an Amazon EC2 instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, SignalResourceCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, SignalResourceCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new SignalResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SignalResourceCommandInput} for command's `input` shape.
 * @see {@link SignalResourceCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class SignalResourceCommand extends $Command<
  SignalResourceCommandInput,
  SignalResourceCommandOutput,
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

  constructor(readonly input: SignalResourceCommandInput) {
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
  ): Handler<SignalResourceCommandInput, SignalResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SignalResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "SignalResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SignalResourceInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SignalResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySignalResourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SignalResourceCommandOutput> {
    return deserializeAws_querySignalResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
