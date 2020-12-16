import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { ModifyDBClusterMessage, ModifyDBClusterResult } from "../models/models_0";
import {
  deserializeAws_queryModifyDBClusterCommand,
  serializeAws_queryModifyDBClusterCommand,
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

export type ModifyDBClusterCommandInput = ModifyDBClusterMessage;
export type ModifyDBClusterCommandOutput = ModifyDBClusterResult & __MetadataBearer;

/**
 * <p>Modify a setting for a DB cluster. You can change one or more database configuration
 *       parameters by specifying these parameters and the new values in the request.</p>
 */
export class ModifyDBClusterCommand extends $Command<
  ModifyDBClusterCommandInput,
  ModifyDBClusterCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyDBClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBClusterCommandInput, ModifyDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "ModifyDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyDBClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyDBClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyDBClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBClusterCommandOutput> {
    return deserializeAws_queryModifyDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
