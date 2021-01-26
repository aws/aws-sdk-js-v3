import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { UsageLimit } from "../models/models_0";
import { ModifyUsageLimitMessage } from "../models/models_1";
import {
  deserializeAws_queryModifyUsageLimitCommand,
  serializeAws_queryModifyUsageLimitCommand,
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

export type ModifyUsageLimitCommandInput = ModifyUsageLimitMessage;
export type ModifyUsageLimitCommandOutput = UsageLimit & __MetadataBearer;

/**
 * <p>Modifies a usage limit in a cluster.
 *             You can't modify the feature type or period of a usage limit.</p>
 */
export class ModifyUsageLimitCommand extends $Command<
  ModifyUsageLimitCommandInput,
  ModifyUsageLimitCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyUsageLimitCommandInput) {
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
  ): Handler<ModifyUsageLimitCommandInput, ModifyUsageLimitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifyUsageLimitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyUsageLimitMessage.filterSensitiveLog,
      outputFilterSensitiveLog: UsageLimit.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyUsageLimitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyUsageLimitCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyUsageLimitCommandOutput> {
    return deserializeAws_queryModifyUsageLimitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
