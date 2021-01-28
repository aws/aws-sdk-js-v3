import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateDetectorVersionMetadataRequest, UpdateDetectorVersionMetadataResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDetectorVersionMetadataCommand,
  serializeAws_json1_1UpdateDetectorVersionMetadataCommand,
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

export type UpdateDetectorVersionMetadataCommandInput = UpdateDetectorVersionMetadataRequest;
export type UpdateDetectorVersionMetadataCommandOutput = UpdateDetectorVersionMetadataResult & __MetadataBearer;

/**
 * <p>Updates the detector version's description. You can update the metadata for any detector version (<code>DRAFT, ACTIVE,</code> or
 *                 <code>INACTIVE</code>). </p>
 */
export class UpdateDetectorVersionMetadataCommand extends $Command<
  UpdateDetectorVersionMetadataCommandInput,
  UpdateDetectorVersionMetadataCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDetectorVersionMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDetectorVersionMetadataCommandInput, UpdateDetectorVersionMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "UpdateDetectorVersionMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDetectorVersionMetadataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDetectorVersionMetadataResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDetectorVersionMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDetectorVersionMetadataCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDetectorVersionMetadataCommandOutput> {
    return deserializeAws_json1_1UpdateDetectorVersionMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
