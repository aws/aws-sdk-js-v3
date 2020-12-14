import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteLoginProfileRequest } from "../models/models_0";
import {
  deserializeAws_queryDeleteLoginProfileCommand,
  serializeAws_queryDeleteLoginProfileCommand,
} from "../protocols/Aws_query";
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

export type DeleteLoginProfileCommandInput = DeleteLoginProfileRequest;
export type DeleteLoginProfileCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the password for the specified IAM user, which terminates the user's ability
 *          to access AWS services through the AWS Management Console.</p>
 *          <important>
 *             <p> Deleting a user's password does not prevent a user from accessing AWS through the
 *             command line interface or the API. To prevent all user access, you must also either make
 *             any access keys inactive or delete them. For more information about making keys inactive
 *             or deleting them, see <a>UpdateAccessKey</a> and <a>DeleteAccessKey</a>. </p>
 *          </important>
 */
export class DeleteLoginProfileCommand extends $Command<
  DeleteLoginProfileCommandInput,
  DeleteLoginProfileCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLoginProfileCommandInput) {
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
  ): Handler<DeleteLoginProfileCommandInput, DeleteLoginProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeleteLoginProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLoginProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLoginProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteLoginProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLoginProfileCommandOutput> {
    return deserializeAws_queryDeleteLoginProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
