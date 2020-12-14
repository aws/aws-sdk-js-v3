import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheParameterGroupNameMessage, ResetCacheParameterGroupMessage } from "../models/models_0";
import {
  deserializeAws_queryResetCacheParameterGroupCommand,
  serializeAws_queryResetCacheParameterGroupCommand,
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

export type ResetCacheParameterGroupCommandInput = ResetCacheParameterGroupMessage;
export type ResetCacheParameterGroupCommandOutput = CacheParameterGroupNameMessage & __MetadataBearer;

/**
 * <p>Modifies the parameters of a cache
 *             parameter group to the engine or system default value. You can reset specific parameters
 *             by submitting a list of parameter names. To reset the entire cache parameter group,
 *             specify the <code>ResetAllParameters</code> and <code>CacheParameterGroupName</code> parameters.</p>
 */
export class ResetCacheParameterGroupCommand extends $Command<
  ResetCacheParameterGroupCommandInput,
  ResetCacheParameterGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResetCacheParameterGroupCommandInput) {
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
  ): Handler<ResetCacheParameterGroupCommandInput, ResetCacheParameterGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "ResetCacheParameterGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetCacheParameterGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CacheParameterGroupNameMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResetCacheParameterGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryResetCacheParameterGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetCacheParameterGroupCommandOutput> {
    return deserializeAws_queryResetCacheParameterGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
