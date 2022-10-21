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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DetachGroupPolicyRequest, DetachGroupPolicyRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryDetachGroupPolicyCommand,
  serializeAws_queryDetachGroupPolicyCommand,
} from "../protocols/Aws_query";

export interface DetachGroupPolicyCommandInput extends DetachGroupPolicyRequest {}
export interface DetachGroupPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified managed policy from the specified IAM group.</p>
 *         <p>A group can also have inline policies embedded with it. To delete an inline policy,
 *             use <a>DeleteGroupPolicy</a>. For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DetachGroupPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DetachGroupPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DetachGroupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachGroupPolicyCommandInput} for command's `input` shape.
 * @see {@link DetachGroupPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class DetachGroupPolicyCommand extends $Command<
  DetachGroupPolicyCommandInput,
  DetachGroupPolicyCommandOutput,
  IAMClientResolvedConfig
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

  constructor(readonly input: DetachGroupPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetachGroupPolicyCommandInput, DetachGroupPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetachGroupPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DetachGroupPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetachGroupPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetachGroupPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDetachGroupPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachGroupPolicyCommandOutput> {
    return deserializeAws_queryDetachGroupPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
