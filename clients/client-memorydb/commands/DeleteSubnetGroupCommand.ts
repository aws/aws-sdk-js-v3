import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { DeleteSubnetGroupRequest, DeleteSubnetGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteSubnetGroupCommand,
  serializeAws_json1_1DeleteSubnetGroupCommand,
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

export interface DeleteSubnetGroupCommandInput extends DeleteSubnetGroupRequest {}
export interface DeleteSubnetGroupCommandOutput extends DeleteSubnetGroupResponse, __MetadataBearer {}

/**
 * <p>Deletes a subnet group. You cannot delete a default subnet group or one that is associated with any clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DeleteSubnetGroupCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DeleteSubnetGroupCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const command = new DeleteSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteSubnetGroupCommand extends $Command<
  DeleteSubnetGroupCommandInput,
  DeleteSubnetGroupCommandOutput,
  MemoryDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSubnetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MemoryDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSubnetGroupCommandInput, DeleteSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "DeleteSubnetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSubnetGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteSubnetGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteSubnetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSubnetGroupCommandOutput> {
    return deserializeAws_json1_1DeleteSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
