import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { AssociateFileSystemInput, AssociateFileSystemOutput } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateFileSystemCommand,
  serializeAws_json1_1AssociateFileSystemCommand,
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

export type AssociateFileSystemCommandInput = AssociateFileSystemInput;
export type AssociateFileSystemCommandOutput = AssociateFileSystemOutput & __MetadataBearer;

/**
 * <p>Associate an Amazon FSx file system with the Amazon FSx file gateway. After the
 *          association process is complete, the file shares on the Amazon FSx file system are
 *          available for access through the gateway. This operation only supports the Amazon FSx file
 *          gateway type.</p>
 */
export class AssociateFileSystemCommand extends $Command<
  AssociateFileSystemCommandInput,
  AssociateFileSystemCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateFileSystemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateFileSystemCommandInput, AssociateFileSystemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "AssociateFileSystemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateFileSystemInput.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateFileSystemOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateFileSystemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateFileSystemCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateFileSystemCommandOutput> {
    return deserializeAws_json1_1AssociateFileSystemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
