import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GetDataLakeSettingsRequest, GetDataLakeSettingsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetDataLakeSettingsCommand,
  serializeAws_json1_1GetDataLakeSettingsCommand,
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

export type GetDataLakeSettingsCommandInput = GetDataLakeSettingsRequest;
export type GetDataLakeSettingsCommandOutput = GetDataLakeSettingsResponse & __MetadataBearer;

/**
 * <p>Retrieves the list of the data lake administrators of a Lake Formation-managed data lake. </p>
 */
export class GetDataLakeSettingsCommand extends $Command<
  GetDataLakeSettingsCommandInput,
  GetDataLakeSettingsCommandOutput,
  LakeFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDataLakeSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataLakeSettingsCommandInput, GetDataLakeSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "GetDataLakeSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDataLakeSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDataLakeSettingsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDataLakeSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDataLakeSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataLakeSettingsCommandOutput> {
    return deserializeAws_json1_1GetDataLakeSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
