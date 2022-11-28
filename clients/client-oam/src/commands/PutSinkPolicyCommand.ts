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
  PutSinkPolicyInput,
  PutSinkPolicyInputFilterSensitiveLog,
  PutSinkPolicyOutput,
  PutSinkPolicyOutputFilterSensitiveLog,
} from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import {
  deserializeAws_restJson1PutSinkPolicyCommand,
  serializeAws_restJson1PutSinkPolicyCommand,
} from "../protocols/Aws_restJson1";

export interface PutSinkPolicyCommandInput extends PutSinkPolicyInput {}
export interface PutSinkPolicyCommandOutput extends PutSinkPolicyOutput, __MetadataBearer {}

/**
 * <p>Creates or updates the resource policy that grants permissions to source
 *             accounts to link to the monitoring account sink. When you create a sink policy, you can grant
 *             permissions to all accounts in an organization or to individual accounts.</p>
 *         <p>You can also use a sink policy to limit the types of data that is shared. The three types that
 *             you can allow or deny are:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <b>Metrics</b> - Specify with
 *                 <code>AWS::CloudWatch::Metric</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Log groups</b> - Specify with <code>AWS::Logs::LogGroup</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Traces</b> - Specify with <code>AWS::XRay::Trace</code>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>See the examples in this section to see how to specify permitted source accounts and data types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, PutSinkPolicyCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, PutSinkPolicyCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * const client = new OAMClient(config);
 * const command = new PutSinkPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSinkPolicyCommandInput} for command's `input` shape.
 * @see {@link PutSinkPolicyCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 */
export class PutSinkPolicyCommand extends $Command<
  PutSinkPolicyCommandInput,
  PutSinkPolicyCommandOutput,
  OAMClientResolvedConfig
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

  constructor(readonly input: PutSinkPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutSinkPolicyCommandInput, PutSinkPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutSinkPolicyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OAMClient";
    const commandName = "PutSinkPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutSinkPolicyInputFilterSensitiveLog,
      outputFilterSensitiveLog: PutSinkPolicyOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutSinkPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutSinkPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutSinkPolicyCommandOutput> {
    return deserializeAws_restJson1PutSinkPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
