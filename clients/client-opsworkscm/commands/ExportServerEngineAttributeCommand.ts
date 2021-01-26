import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { ExportServerEngineAttributeRequest, ExportServerEngineAttributeResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ExportServerEngineAttributeCommand,
  serializeAws_json1_1ExportServerEngineAttributeCommand,
} from "../protocols/Aws_json1_1";
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

export type ExportServerEngineAttributeCommandInput = ExportServerEngineAttributeRequest;
export type ExportServerEngineAttributeCommandOutput = ExportServerEngineAttributeResponse & __MetadataBearer;

/**
 * <p>
 *       Exports a specified server engine attribute as a base64-encoded string. For example, you can export user data that you can use in EC2 to associate nodes with a server.
 *     </p>
 *          <p>
 *       This operation is synchronous.
 *     </p>
 *          <p>
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *       A <code>ResourceNotFoundException</code> is thrown when the server does not exist.
 *       An <code>InvalidStateException</code> is thrown when the server is in any of the following states: CREATING, TERMINATED,
 *       FAILED or DELETING.
 *     </p>
 */
export class ExportServerEngineAttributeCommand extends $Command<
  ExportServerEngineAttributeCommandInput,
  ExportServerEngineAttributeCommandOutput,
  OpsWorksCMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExportServerEngineAttributeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksCMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportServerEngineAttributeCommandInput, ExportServerEngineAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksCMClient";
    const commandName = "ExportServerEngineAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportServerEngineAttributeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ExportServerEngineAttributeResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportServerEngineAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ExportServerEngineAttributeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportServerEngineAttributeCommandOutput> {
    return deserializeAws_json1_1ExportServerEngineAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
