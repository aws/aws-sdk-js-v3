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
import { UpdateAssumeRolePolicyRequest, UpdateAssumeRolePolicyRequestFilterSensitiveLog } from "../models/models_1";
import {
  deserializeAws_queryUpdateAssumeRolePolicyCommand,
  serializeAws_queryUpdateAssumeRolePolicyCommand,
} from "../protocols/Aws_query";

export interface UpdateAssumeRolePolicyCommandInput extends UpdateAssumeRolePolicyRequest {}
export interface UpdateAssumeRolePolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the policy that grants an IAM entity permission to assume a role. This is
 *             typically referred to as the "role trust policy". For more information about roles, see
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html">Using roles to
 *                 delegate permissions and federate identities</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateAssumeRolePolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateAssumeRolePolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateAssumeRolePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssumeRolePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateAssumeRolePolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class UpdateAssumeRolePolicyCommand extends $Command<
  UpdateAssumeRolePolicyCommandInput,
  UpdateAssumeRolePolicyCommandOutput,
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

  constructor(readonly input: UpdateAssumeRolePolicyCommandInput) {
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
  ): Handler<UpdateAssumeRolePolicyCommandInput, UpdateAssumeRolePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAssumeRolePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateAssumeRolePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAssumeRolePolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAssumeRolePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateAssumeRolePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAssumeRolePolicyCommandOutput> {
    return deserializeAws_queryUpdateAssumeRolePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
