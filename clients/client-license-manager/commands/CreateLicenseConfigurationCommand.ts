import {
  LicenseManagerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../LicenseManagerClient";
import {
  CreateLicenseConfigurationRequest,
  CreateLicenseConfigurationResponse
} from "../models/index";
import {
  deserializeAws_json1_1CreateLicenseConfigurationCommand,
  serializeAws_json1_1CreateLicenseConfigurationCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type CreateLicenseConfigurationCommandInput = CreateLicenseConfigurationRequest;
export type CreateLicenseConfigurationCommandOutput = CreateLicenseConfigurationResponse &
  __MetadataBearer;

export class CreateLicenseConfigurationCommand extends $Command<
  CreateLicenseConfigurationCommandInput,
  CreateLicenseConfigurationCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateLicenseConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreateLicenseConfigurationCommandInput,
    CreateLicenseConfigurationCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateLicenseConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLicenseConfigurationCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateLicenseConfigurationCommandOutput> {
    return deserializeAws_json1_1CreateLicenseConfigurationCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
