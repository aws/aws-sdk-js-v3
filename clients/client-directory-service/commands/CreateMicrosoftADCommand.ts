import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { CreateMicrosoftADRequest, CreateMicrosoftADResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateMicrosoftADCommand,
  serializeAws_json1_1CreateMicrosoftADCommand,
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

export interface CreateMicrosoftADCommandInput extends CreateMicrosoftADRequest {}
export interface CreateMicrosoftADCommandOutput extends CreateMicrosoftADResult, __MetadataBearer {}

/**
 * <p>Creates a Microsoft AD directory in the Amazon Web Services Cloud. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a> in the <i>Directory Service Admin Guide</i>.</p>
 *          <p>Before you call <i>CreateMicrosoftAD</i>, ensure that all of the required
 *       permissions have been explicitly granted through a policy. For details about what permissions
 *       are required to run the <i>CreateMicrosoftAD</i> operation, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/UsingWithDS_IAM_ResourcePermissions.html">Directory Service API Permissions: Actions, Resources, and Conditions Reference</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateMicrosoftADCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateMicrosoftADCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new CreateMicrosoftADCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMicrosoftADCommandInput} for command's `input` shape.
 * @see {@link CreateMicrosoftADCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateMicrosoftADCommand extends $Command<
  CreateMicrosoftADCommandInput,
  CreateMicrosoftADCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMicrosoftADCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateMicrosoftADCommandInput, CreateMicrosoftADCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "CreateMicrosoftADCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMicrosoftADRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMicrosoftADResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMicrosoftADCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateMicrosoftADCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMicrosoftADCommandOutput> {
    return deserializeAws_json1_1CreateMicrosoftADCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
