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
import { AttachUserPolicyRequest, AttachUserPolicyRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryAttachUserPolicyCommand,
  serializeAws_queryAttachUserPolicyCommand,
} from "../protocols/Aws_query";

export interface AttachUserPolicyCommandInput extends AttachUserPolicyRequest {}
export interface AttachUserPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Attaches the specified managed policy to the specified user.</p>
 *         <p>You use this operation to attach a <i>managed</i> policy to a user. To
 *             embed an inline policy in a user, use <a>PutUserPolicy</a>.</p>
 *         <p>As a best practice, you can validate your IAM policies.
 *      To learn more, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_policy-validator.html">Validating IAM policies</a>
 *             in the <i>IAM User Guide</i>.</p>
 *         <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AttachUserPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AttachUserPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new AttachUserPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachUserPolicyCommandInput} for command's `input` shape.
 * @see {@link AttachUserPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class AttachUserPolicyCommand extends $Command<
  AttachUserPolicyCommandInput,
  AttachUserPolicyCommandOutput,
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

  constructor(readonly input: AttachUserPolicyCommandInput) {
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
  ): Handler<AttachUserPolicyCommandInput, AttachUserPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AttachUserPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "AttachUserPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AttachUserPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AttachUserPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAttachUserPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AttachUserPolicyCommandOutput> {
    return deserializeAws_queryAttachUserPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
