import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { DeleteBranchRequest, DeleteBranchResult } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBranchCommand,
  serializeAws_restJson1DeleteBranchCommand,
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

export interface DeleteBranchCommandInput extends DeleteBranchRequest {}
export interface DeleteBranchCommandOutput extends DeleteBranchResult, __MetadataBearer {}

/**
 * <p> Deletes a branch for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, DeleteBranchCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, DeleteBranchCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new DeleteBranchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBranchCommandInput} for command's `input` shape.
 * @see {@link DeleteBranchCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteBranchCommand extends $Command<
  DeleteBranchCommandInput,
  DeleteBranchCommandOutput,
  AmplifyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBranchCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteBranchCommandInput, DeleteBranchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyClient";
    const commandName = "DeleteBranchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBranchRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBranchResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBranchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteBranchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBranchCommandOutput> {
    return deserializeAws_restJson1DeleteBranchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
