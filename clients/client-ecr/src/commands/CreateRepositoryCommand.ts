import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { CreateRepositoryRequest, CreateRepositoryResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateRepositoryCommand,
  serializeAws_json1_1CreateRepositoryCommand,
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

export interface CreateRepositoryCommandInput extends CreateRepositoryRequest {}
export interface CreateRepositoryCommandOutput extends CreateRepositoryResponse, __MetadataBearer {}

/**
 * <p>Creates a repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the
 *                 <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, CreateRepositoryCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, CreateRepositoryCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new CreateRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRepositoryCommandInput} for command's `input` shape.
 * @see {@link CreateRepositoryCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateRepositoryCommand extends $Command<
  CreateRepositoryCommandInput,
  CreateRepositoryCommandOutput,
  ECRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRepositoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRepositoryCommandInput, CreateRepositoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "CreateRepositoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRepositoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRepositoryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRepositoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateRepositoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRepositoryCommandOutput> {
    return deserializeAws_json1_1CreateRepositoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
