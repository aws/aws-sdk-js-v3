import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListReceivedLicensesRequest, ListReceivedLicensesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListReceivedLicensesCommand,
  serializeAws_json1_1ListReceivedLicensesCommand,
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

export type ListReceivedLicensesCommandInput = ListReceivedLicensesRequest;
export type ListReceivedLicensesCommandOutput = ListReceivedLicensesResponse & __MetadataBearer;

/**
 * <p>Lists received licenses.</p>
 */
export class ListReceivedLicensesCommand extends $Command<
  ListReceivedLicensesCommandInput,
  ListReceivedLicensesCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListReceivedLicensesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReceivedLicensesCommandInput, ListReceivedLicensesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "ListReceivedLicensesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListReceivedLicensesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListReceivedLicensesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListReceivedLicensesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListReceivedLicensesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReceivedLicensesCommandOutput> {
    return deserializeAws_json1_1ListReceivedLicensesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
