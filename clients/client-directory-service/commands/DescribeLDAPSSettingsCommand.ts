import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeLDAPSSettingsRequest, DescribeLDAPSSettingsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeLDAPSSettingsCommand,
  serializeAws_json1_1DescribeLDAPSSettingsCommand,
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

export type DescribeLDAPSSettingsCommandInput = DescribeLDAPSSettingsRequest;
export type DescribeLDAPSSettingsCommandOutput = DescribeLDAPSSettingsResult & __MetadataBearer;

/**
 * <p>Describes the status of LDAP security for the specified directory.</p>
 */
export class DescribeLDAPSSettingsCommand extends $Command<
  DescribeLDAPSSettingsCommandInput,
  DescribeLDAPSSettingsCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLDAPSSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLDAPSSettingsCommandInput, DescribeLDAPSSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "DescribeLDAPSSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLDAPSSettingsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLDAPSSettingsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLDAPSSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeLDAPSSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLDAPSSettingsCommandOutput> {
    return deserializeAws_json1_1DescribeLDAPSSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
