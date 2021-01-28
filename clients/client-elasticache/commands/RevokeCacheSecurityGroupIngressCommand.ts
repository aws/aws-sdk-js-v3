import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { RevokeCacheSecurityGroupIngressMessage, RevokeCacheSecurityGroupIngressResult } from "../models/models_0";
import {
  deserializeAws_queryRevokeCacheSecurityGroupIngressCommand,
  serializeAws_queryRevokeCacheSecurityGroupIngressCommand,
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

export type RevokeCacheSecurityGroupIngressCommandInput = RevokeCacheSecurityGroupIngressMessage;
export type RevokeCacheSecurityGroupIngressCommandOutput = RevokeCacheSecurityGroupIngressResult & __MetadataBearer;

/**
 * <p>Revokes ingress from a cache security group.
 *             Use this operation to disallow access from an Amazon EC2 security group
 *             that had been previously authorized.</p>
 */
export class RevokeCacheSecurityGroupIngressCommand extends $Command<
  RevokeCacheSecurityGroupIngressCommandInput,
  RevokeCacheSecurityGroupIngressCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokeCacheSecurityGroupIngressCommandInput) {
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
  ): Handler<RevokeCacheSecurityGroupIngressCommandInput, RevokeCacheSecurityGroupIngressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "RevokeCacheSecurityGroupIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeCacheSecurityGroupIngressMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RevokeCacheSecurityGroupIngressResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RevokeCacheSecurityGroupIngressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRevokeCacheSecurityGroupIngressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RevokeCacheSecurityGroupIngressCommandOutput> {
    return deserializeAws_queryRevokeCacheSecurityGroupIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
