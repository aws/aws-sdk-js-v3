// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { DeleteLFTagRequest, DeleteLFTagResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteLFTagCommand,
  serializeAws_restJson1DeleteLFTagCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteLFTagCommandInput extends DeleteLFTagRequest {}
export interface DeleteLFTagCommandOutput extends DeleteLFTagResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified LF-tag key name. If the attribute key does not exist or the LF-tag does not exist, then the operation will not do anything. If the attribute key exists, then the operation checks if any resources are tagged with this attribute key, if yes, the API throws a 400 Exception with the message "Delete not allowed" as the LF-tag key is still attached with resources. You can consider untagging resources with this LF-tag key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DeleteLFTagCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DeleteLFTagCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new DeleteLFTagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLFTagCommandInput} for command's `input` shape.
 * @see {@link DeleteLFTagCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 */
export class DeleteLFTagCommand extends $Command<
  DeleteLFTagCommandInput,
  DeleteLFTagCommandOutput,
  LakeFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLFTagCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLFTagCommandInput, DeleteLFTagCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "DeleteLFTagCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLFTagRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteLFTagResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLFTagCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteLFTagCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLFTagCommandOutput> {
    return deserializeAws_restJson1DeleteLFTagCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
