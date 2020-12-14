import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { SetVisibleToAllUsersInput } from "../models/models_0";
import {
  deserializeAws_json1_1SetVisibleToAllUsersCommand,
  serializeAws_json1_1SetVisibleToAllUsersCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type SetVisibleToAllUsersCommandInput = SetVisibleToAllUsersInput;
export type SetVisibleToAllUsersCommandOutput = __MetadataBearer;

/**
 * <p>Sets the <a>Cluster$VisibleToAllUsers</a> value, which determines whether the
 *          cluster is visible to all IAM users of the AWS account associated with the cluster. Only
 *          the IAM user who created the cluster or the AWS account root user can call this action. The
 *          default value, <code>true</code>, indicates that all IAM users in the AWS account can
 *          perform cluster actions if they have the proper IAM policy permissions. If set to
 *             <code>false</code>, only the IAM user that created the cluster can perform actions. This
 *          action works on running clusters. You can override the default <code>true</code> setting
 *          when you create a cluster by using the <code>VisibleToAllUsers</code> parameter with
 *             <code>RunJobFlow</code>.</p>
 */
export class SetVisibleToAllUsersCommand extends $Command<
  SetVisibleToAllUsersCommandInput,
  SetVisibleToAllUsersCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "SetVisibleToAllUsersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetVisibleToAllUsersInput.filterSensitiveLog,
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
