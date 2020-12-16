import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateManagedInstanceRoleRequest, UpdateManagedInstanceRoleResult } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateManagedInstanceRoleCommand,
  serializeAws_json1_1UpdateManagedInstanceRoleCommand,
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

export type UpdateManagedInstanceRoleCommandInput = UpdateManagedInstanceRoleRequest;
export type UpdateManagedInstanceRoleCommandOutput = UpdateManagedInstanceRoleResult & __MetadataBearer;

/**
 * <p>Changes the Amazon Identity and Access Management (IAM) role that is assigned to the
 *    on-premises instance or virtual machines (VM). IAM roles are first assigned to these hybrid
 *    instances during the activation process. For more information, see <a>CreateActivation</a>.</p>
 */
export class UpdateManagedInstanceRoleCommand extends $Command<
  UpdateManagedInstanceRoleCommandInput,
  UpdateManagedInstanceRoleCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateManagedInstanceRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateManagedInstanceRoleCommandInput, UpdateManagedInstanceRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateManagedInstanceRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateManagedInstanceRoleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateManagedInstanceRoleResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateManagedInstanceRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateManagedInstanceRoleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateManagedInstanceRoleCommandOutput> {
    return deserializeAws_json1_1UpdateManagedInstanceRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
