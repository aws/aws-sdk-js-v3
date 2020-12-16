import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyDBProxyTargetGroupRequest, ModifyDBProxyTargetGroupResponse } from "../models/models_1";
import {
  deserializeAws_queryModifyDBProxyTargetGroupCommand,
  serializeAws_queryModifyDBProxyTargetGroupCommand,
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

export type ModifyDBProxyTargetGroupCommandInput = ModifyDBProxyTargetGroupRequest;
export type ModifyDBProxyTargetGroupCommandOutput = ModifyDBProxyTargetGroupResponse & __MetadataBearer;

/**
 * <p>Modifies the properties of a <code>DBProxyTargetGroup</code>.</p>
 */
export class ModifyDBProxyTargetGroupCommand extends $Command<
  ModifyDBProxyTargetGroupCommandInput,
  ModifyDBProxyTargetGroupCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyDBProxyTargetGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBProxyTargetGroupCommandInput, ModifyDBProxyTargetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBProxyTargetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyDBProxyTargetGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyDBProxyTargetGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyDBProxyTargetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyDBProxyTargetGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBProxyTargetGroupCommandOutput> {
    return deserializeAws_queryModifyDBProxyTargetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
