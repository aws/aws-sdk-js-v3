import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DeleteCacheSecurityGroupMessage } from "../models/models_0";
import {
  deserializeAws_queryDeleteCacheSecurityGroupCommand,
  serializeAws_queryDeleteCacheSecurityGroupCommand,
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

export type DeleteCacheSecurityGroupCommandInput = DeleteCacheSecurityGroupMessage;
export type DeleteCacheSecurityGroupCommandOutput = __MetadataBearer;

/**
 * <p>Deletes a cache security group.</p>
 *         <note>
 *             <p>You cannot delete a cache security group if it is associated with any clusters.</p>
 *          </note>
 */
export class DeleteCacheSecurityGroupCommand extends $Command<
  DeleteCacheSecurityGroupCommandInput,
  DeleteCacheSecurityGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCacheSecurityGroupCommandInput) {
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
  ): Handler<DeleteCacheSecurityGroupCommandInput, DeleteCacheSecurityGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DeleteCacheSecurityGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCacheSecurityGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCacheSecurityGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteCacheSecurityGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCacheSecurityGroupCommandOutput> {
    return deserializeAws_queryDeleteCacheSecurityGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
