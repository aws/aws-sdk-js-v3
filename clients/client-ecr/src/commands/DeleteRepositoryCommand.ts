import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DeleteRepositoryRequest, DeleteRepositoryResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteRepositoryCommand,
  serializeAws_json1_1DeleteRepositoryCommand,
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

export interface DeleteRepositoryCommandInput extends DeleteRepositoryRequest {}
export interface DeleteRepositoryCommandOutput extends DeleteRepositoryResponse, __MetadataBearer {}

/**
 * <p>Deletes a repository. If the repository contains images, you must either delete all
 *             images in the repository or use the <code>force</code> option to delete the
 *             repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DeleteRepositoryCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DeleteRepositoryCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new DeleteRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRepositoryCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteRepositoryCommand extends $Command<
  DeleteRepositoryCommandInput,
  DeleteRepositoryCommandOutput,
  ECRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRepositoryCommandInput) {
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
  ): Handler<DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "DeleteRepositoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRepositoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteRepositoryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRepositoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteRepositoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRepositoryCommandOutput> {
    return deserializeAws_json1_1DeleteRepositoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
