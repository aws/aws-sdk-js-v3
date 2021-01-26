import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CreateCacheSubnetGroupMessage, CreateCacheSubnetGroupResult } from "../models/models_0";
import {
  deserializeAws_queryCreateCacheSubnetGroupCommand,
  serializeAws_queryCreateCacheSubnetGroupCommand,
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

export type CreateCacheSubnetGroupCommandInput = CreateCacheSubnetGroupMessage;
export type CreateCacheSubnetGroupCommandOutput = CreateCacheSubnetGroupResult & __MetadataBearer;

/**
 * <p>Creates a new cache subnet group.</p>
 *         <p>Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).</p>
 */
export class CreateCacheSubnetGroupCommand extends $Command<
  CreateCacheSubnetGroupCommandInput,
  CreateCacheSubnetGroupCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCacheSubnetGroupCommandInput) {
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
  ): Handler<CreateCacheSubnetGroupCommandInput, CreateCacheSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "CreateCacheSubnetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCacheSubnetGroupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCacheSubnetGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCacheSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateCacheSubnetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCacheSubnetGroupCommandOutput> {
    return deserializeAws_queryCreateCacheSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
