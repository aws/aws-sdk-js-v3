import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateWorkforceRequest, UpdateWorkforceResponse } from "../models/models_2";
import {
  deserializeAws_json1_1UpdateWorkforceCommand,
  serializeAws_json1_1UpdateWorkforceCommand,
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

export type UpdateWorkforceCommandInput = UpdateWorkforceRequest;
export type UpdateWorkforceCommandOutput = UpdateWorkforceResponse & __MetadataBearer;

/**
 * <p>Use this operation to update your workforce. You can use this operation to
 *         require that workers use specific IP addresses to work on tasks
 *         and to update your OpenID Connect (OIDC) Identity Provider (IdP) workforce configuration.</p>
 *
 *         <p> Use <code>SourceIpConfig</code> to restrict worker access to tasks to a specific range of IP addresses.
 *         You specify allowed IP addresses by creating a list of up to ten <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>.
 *         By default, a workforce isn't restricted to specific IP addresses. If you specify a
 *             range of IP addresses, workers who attempt to access tasks using any IP address outside
 *             the specified range are denied and get a <code>Not Found</code> error message on
 *             the worker portal.</p>
 *         <p>Use <code>OidcConfig</code> to update the configuration of a workforce created using
 *             your own OIDC IdP. </p>
 *         <important>
 *             <p>You can only update your OIDC IdP configuration when there are no work teams
 *                 associated with your workforce. You can delete work teams using the  operation.</p>
 *         </important>
 *         <p>After restricting access to a range of IP addresses or updating your OIDC IdP configuration with this operation, you
 *         can view details about your update workforce using the
 *             operation.</p>
 *         <important>
 *             <p>This operation only applies to private workforces.</p>
 *         </important>
 */
export class UpdateWorkforceCommand extends $Command<
  UpdateWorkforceCommandInput,
  UpdateWorkforceCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateWorkforceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateWorkforceCommandInput, UpdateWorkforceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateWorkforceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateWorkforceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateWorkforceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateWorkforceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateWorkforceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWorkforceCommandOutput> {
    return deserializeAws_json1_1UpdateWorkforceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
