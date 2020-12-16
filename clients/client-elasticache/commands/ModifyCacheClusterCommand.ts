import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { ModifyCacheClusterMessage, ModifyCacheClusterResult } from "../models/models_0";
import {
  deserializeAws_queryModifyCacheClusterCommand,
  serializeAws_queryModifyCacheClusterCommand,
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

export type ModifyCacheClusterCommandInput = ModifyCacheClusterMessage;
export type ModifyCacheClusterCommandOutput = ModifyCacheClusterResult & __MetadataBearer;

/**
 * <p>Modifies the settings for a cluster. You
 *             can use this operation to change one or more cluster configuration parameters by
 *             specifying the parameters and the new values.</p>
 */
export class ModifyCacheClusterCommand extends $Command<
  ModifyCacheClusterCommandInput,
  ModifyCacheClusterCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyCacheClusterCommandInput) {
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
  ): Handler<ModifyCacheClusterCommandInput, ModifyCacheClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "ModifyCacheClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyCacheClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyCacheClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyCacheClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyCacheClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyCacheClusterCommandOutput> {
    return deserializeAws_queryModifyCacheClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
