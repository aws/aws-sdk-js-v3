import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListServiceSpecificCredentialsRequest, ListServiceSpecificCredentialsResponse } from "../models/models_0";
import {
  deserializeAws_queryListServiceSpecificCredentialsCommand,
  serializeAws_queryListServiceSpecificCredentialsCommand,
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

export interface ListServiceSpecificCredentialsCommandInput extends ListServiceSpecificCredentialsRequest {}
export interface ListServiceSpecificCredentialsCommandOutput
  extends ListServiceSpecificCredentialsResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about the service-specific credentials associated with the
 *             specified IAM user. If none exists, the operation returns an empty list. The
 *             service-specific credentials returned by this operation are used only for authenticating
 *             the IAM user to a specific service. For more information about using service-specific
 *             credentials to authenticate to an AWS service, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-gc.html">Set up service-specific credentials</a>
 *             in the AWS CodeCommit User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListServiceSpecificCredentialsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListServiceSpecificCredentialsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListServiceSpecificCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServiceSpecificCredentialsCommandInput} for command's `input` shape.
 * @see {@link ListServiceSpecificCredentialsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListServiceSpecificCredentialsCommand extends $Command<
  ListServiceSpecificCredentialsCommandInput,
  ListServiceSpecificCredentialsCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListServiceSpecificCredentialsCommandInput) {
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
  ): Handler<ListServiceSpecificCredentialsCommandInput, ListServiceSpecificCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListServiceSpecificCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListServiceSpecificCredentialsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListServiceSpecificCredentialsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListServiceSpecificCredentialsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryListServiceSpecificCredentialsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListServiceSpecificCredentialsCommandOutput> {
    return deserializeAws_queryListServiceSpecificCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
