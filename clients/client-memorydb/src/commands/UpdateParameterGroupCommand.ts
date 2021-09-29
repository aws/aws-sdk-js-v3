import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { UpdateParameterGroupRequest, UpdateParameterGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateParameterGroupCommand,
  serializeAws_json1_1UpdateParameterGroupCommand,
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

export interface UpdateParameterGroupCommandInput extends UpdateParameterGroupRequest {}
export interface UpdateParameterGroupCommandOutput extends UpdateParameterGroupResponse, __MetadataBearer {}

/**
 * <p>Updates the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, UpdateParameterGroupCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, UpdateParameterGroupCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const command = new UpdateParameterGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateParameterGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateParameterGroupCommand extends $Command<
  UpdateParameterGroupCommandInput,
  UpdateParameterGroupCommandOutput,
  MemoryDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateParameterGroupCommandInput) {
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
  ): Handler<UpdateParameterGroupCommandInput, UpdateParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "UpdateParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateParameterGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateParameterGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateParameterGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateParameterGroupCommandOutput> {
    return deserializeAws_json1_1UpdateParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
