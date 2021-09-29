import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { DeleteRepositoryRequest, DeleteRepositoryResult } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRepositoryCommand,
  serializeAws_restJson1DeleteRepositoryCommand,
} from "../protocols/Aws_restJson1";
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
export interface DeleteRepositoryCommandOutput extends DeleteRepositoryResult, __MetadataBearer {}

/**
 * <p>
 *          Deletes a repository.
 *        </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DeleteRepositoryCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DeleteRepositoryCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DeleteRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRepositoryCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteRepositoryCommand extends $Command<
  DeleteRepositoryCommandInput,
  DeleteRepositoryCommandOutput,
  CodeartifactClientResolvedConfig
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
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "DeleteRepositoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRepositoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteRepositoryResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRepositoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteRepositoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRepositoryCommandOutput> {
    return deserializeAws_restJson1DeleteRepositoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
