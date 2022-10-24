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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { SetVisibleToAllUsersInput, SetVisibleToAllUsersInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1SetVisibleToAllUsersCommand,
  serializeAws_json1_1SetVisibleToAllUsersCommand,
} from "../protocols/Aws_json1_1";

export interface SetVisibleToAllUsersCommandInput extends SetVisibleToAllUsersInput {}
export interface SetVisibleToAllUsersCommandOutput extends __MetadataBearer {}

/**
 * <important>
 *             <p>The SetVisibleToAllUsers parameter is no longer supported. Your cluster may be
 *             visible to all users in your account. To restrict cluster access using an IAM policy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-access-iam.html">Identity and Access
 *                Management for EMR</a>. </p>
 *          </important>
 *          <p>Sets the <a>Cluster$VisibleToAllUsers</a> value for an EMR cluster. When
 *             <code>true</code>, IAM principals in the Amazon Web Services account can perform EMR
 *          cluster actions that their IAM policies allow. When <code>false</code>, only
 *          the IAM principal that created the cluster and the Amazon Web Services account root user can
 *          perform EMR actions on the cluster, regardless of IAM permissions policies attached to
 *          other IAM principals.</p>
 *          <p>This action works on running clusters. When you create a cluster, use the <a>RunJobFlowInput$VisibleToAllUsers</a> parameter.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/security_iam_emr-with-iam.html#security_set_visible_to_all_users">Understanding the EMR Cluster VisibleToAllUsers Setting</a> in the
 *                <i>Amazon EMRManagement Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, SetVisibleToAllUsersCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, SetVisibleToAllUsersCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new SetVisibleToAllUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetVisibleToAllUsersCommandInput} for command's `input` shape.
 * @see {@link SetVisibleToAllUsersCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 */
export class SetVisibleToAllUsersCommand extends $Command<
  SetVisibleToAllUsersCommandInput,
  SetVisibleToAllUsersCommandOutput,
  EMRClientResolvedConfig
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

  constructor(readonly input: SetVisibleToAllUsersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetVisibleToAllUsersCommandInput, SetVisibleToAllUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetVisibleToAllUsersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "SetVisibleToAllUsersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetVisibleToAllUsersInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetVisibleToAllUsersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SetVisibleToAllUsersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetVisibleToAllUsersCommandOutput> {
    return deserializeAws_json1_1SetVisibleToAllUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
