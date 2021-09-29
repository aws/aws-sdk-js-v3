import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { ModifyGlobalClusterMessage, ModifyGlobalClusterResult } from "../models/models_0";
import {
  deserializeAws_queryModifyGlobalClusterCommand,
  serializeAws_queryModifyGlobalClusterCommand,
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

export interface ModifyGlobalClusterCommandInput extends ModifyGlobalClusterMessage {}
export interface ModifyGlobalClusterCommandOutput extends ModifyGlobalClusterResult, __MetadataBearer {}

/**
 * <p>Modify a setting for an Amazon DocumentDB global cluster. You can change one or more configuration parameters (for example: deletion protection), or the global cluster identifier by specifying these parameters and the new values in the request.</p>
 *         <note>
 *             <p>This action only applies to Amazon DocumentDB clusters.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, ModifyGlobalClusterCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, ModifyGlobalClusterCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new ModifyGlobalClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyGlobalClusterCommandInput} for command's `input` shape.
 * @see {@link ModifyGlobalClusterCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ModifyGlobalClusterCommand extends $Command<
  ModifyGlobalClusterCommandInput,
  ModifyGlobalClusterCommandOutput,
  DocDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyGlobalClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyGlobalClusterCommandInput, ModifyGlobalClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "ModifyGlobalClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyGlobalClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyGlobalClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyGlobalClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyGlobalClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyGlobalClusterCommandOutput> {
    return deserializeAws_queryModifyGlobalClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
