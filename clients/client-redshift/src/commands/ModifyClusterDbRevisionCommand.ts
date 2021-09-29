import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyClusterDbRevisionMessage, ModifyClusterDbRevisionResult } from "../models/models_1";
import {
  deserializeAws_queryModifyClusterDbRevisionCommand,
  serializeAws_queryModifyClusterDbRevisionCommand,
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

export interface ModifyClusterDbRevisionCommandInput extends ModifyClusterDbRevisionMessage {}
export interface ModifyClusterDbRevisionCommandOutput extends ModifyClusterDbRevisionResult, __MetadataBearer {}

/**
 * <p>Modifies the database revision of a cluster. The database revision is a unique
 *             revision of the database running in a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterDbRevisionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterDbRevisionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyClusterDbRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterDbRevisionCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterDbRevisionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ModifyClusterDbRevisionCommand extends $Command<
  ModifyClusterDbRevisionCommandInput,
  ModifyClusterDbRevisionCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyClusterDbRevisionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyClusterDbRevisionCommandInput, ModifyClusterDbRevisionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifyClusterDbRevisionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyClusterDbRevisionMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyClusterDbRevisionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyClusterDbRevisionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyClusterDbRevisionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyClusterDbRevisionCommandOutput> {
    return deserializeAws_queryModifyClusterDbRevisionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
