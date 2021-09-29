import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { DeleteFolderMembershipRequest, DeleteFolderMembershipResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteFolderMembershipCommand,
  serializeAws_restJson1DeleteFolderMembershipCommand,
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

export interface DeleteFolderMembershipCommandInput extends DeleteFolderMembershipRequest {}
export interface DeleteFolderMembershipCommandOutput extends DeleteFolderMembershipResponse, __MetadataBearer {}

/**
 * <p>Removes an asset, such as a dashboard, analysis, or dataset, from a folder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteFolderMembershipCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteFolderMembershipCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteFolderMembershipCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFolderMembershipCommandInput} for command's `input` shape.
 * @see {@link DeleteFolderMembershipCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteFolderMembershipCommand extends $Command<
  DeleteFolderMembershipCommandInput,
  DeleteFolderMembershipCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFolderMembershipCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFolderMembershipCommandInput, DeleteFolderMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DeleteFolderMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFolderMembershipRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFolderMembershipResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFolderMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteFolderMembershipCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFolderMembershipCommandOutput> {
    return deserializeAws_restJson1DeleteFolderMembershipCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
