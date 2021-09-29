import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { ModifyCacheSubnetGroupMessage, ModifyCacheSubnetGroupResult } from "../models/models_0";
import {
  deserializeAws_queryModifyCacheSubnetGroupCommand,
  serializeAws_queryModifyCacheSubnetGroupCommand,
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

export interface ModifyCacheSubnetGroupCommandInput extends ModifyCacheSubnetGroupMessage {}
export interface ModifyCacheSubnetGroupCommandOutput extends ModifyCacheSubnetGroupResult, __MetadataBearer {}

/**
 * <p>Modifies an existing cache subnet group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ModifyCacheSubnetGroupCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ModifyCacheSubnetGroupCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new ModifyCacheSubnetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyCacheSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyCacheSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ModifyCacheSubnetGroupCommand extends $Command<
  ModifyCacheSubnetGroupCommandInput,
  ModifyCacheSubnetGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyCacheSubnetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyCacheSubnetGroupCommandInput, ModifyCacheSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "ModifyCacheSubnetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyCacheSubnetGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyCacheSubnetGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyCacheSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyCacheSubnetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyCacheSubnetGroupCommandOutput> {
    return deserializeAws_queryModifyCacheSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
