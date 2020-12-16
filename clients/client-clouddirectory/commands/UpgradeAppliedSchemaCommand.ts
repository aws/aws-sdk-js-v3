import { CloudDirectoryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudDirectoryClient";
import { UpgradeAppliedSchemaRequest, UpgradeAppliedSchemaResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpgradeAppliedSchemaCommand,
  serializeAws_restJson1UpgradeAppliedSchemaCommand,
} from "../protocols/Aws_restJson1";
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

export type UpgradeAppliedSchemaCommandInput = UpgradeAppliedSchemaRequest;
export type UpgradeAppliedSchemaCommandOutput = UpgradeAppliedSchemaResponse & __MetadataBearer;

/**
 * <p>Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.</p>
 */
export class UpgradeAppliedSchemaCommand extends $Command<
  UpgradeAppliedSchemaCommandInput,
  UpgradeAppliedSchemaCommandOutput,
  CloudDirectoryClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpgradeAppliedSchemaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudDirectoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpgradeAppliedSchemaCommandInput, UpgradeAppliedSchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudDirectoryClient";
    const commandName = "UpgradeAppliedSchemaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpgradeAppliedSchemaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpgradeAppliedSchemaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpgradeAppliedSchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpgradeAppliedSchemaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpgradeAppliedSchemaCommandOutput> {
    return deserializeAws_restJson1UpgradeAppliedSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
