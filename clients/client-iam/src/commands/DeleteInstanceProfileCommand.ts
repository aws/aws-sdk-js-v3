import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteInstanceProfileRequest } from "../models/models_0";
import {
  deserializeAws_queryDeleteInstanceProfileCommand,
  serializeAws_queryDeleteInstanceProfileCommand,
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

export interface DeleteInstanceProfileCommandInput extends DeleteInstanceProfileRequest {}
export interface DeleteInstanceProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified instance profile. The instance profile must not have an
 *             associated role.</p>
 *         <important>
 *             <p>Make sure that you do not have any Amazon EC2 instances running with the instance
 *                 profile you are about to delete. Deleting a role or instance profile that is
 *                 associated with a running instance will break any applications running on the
 *                 instance.</p>
 *         </important>
 *         <p>For more information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance
 *             profiles</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteInstanceProfileCommand extends $Command<
  DeleteInstanceProfileCommandInput,
  DeleteInstanceProfileCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteInstanceProfileCommandInput) {
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
  ): Handler<DeleteInstanceProfileCommandInput, DeleteInstanceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeleteInstanceProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteInstanceProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteInstanceProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteInstanceProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteInstanceProfileCommandOutput> {
    return deserializeAws_queryDeleteInstanceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
