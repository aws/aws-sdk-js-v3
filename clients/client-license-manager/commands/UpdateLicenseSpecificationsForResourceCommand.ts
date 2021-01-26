import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import {
  UpdateLicenseSpecificationsForResourceRequest,
  UpdateLicenseSpecificationsForResourceResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand,
  serializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand,
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

export type UpdateLicenseSpecificationsForResourceCommandInput = UpdateLicenseSpecificationsForResourceRequest;
export type UpdateLicenseSpecificationsForResourceCommandOutput = UpdateLicenseSpecificationsForResourceResponse &
  __MetadataBearer;

/**
 * <p>Adds or removes the specified license configurations for the specified AWS resource.</p>
 *          <p>You can update the license specifications of AMIs, instances, and hosts.
 *          You cannot update the license specifications for launch templates and AWS CloudFormation templates,
 *          as they send license configurations to the operation that creates the resource.</p>
 */
export class UpdateLicenseSpecificationsForResourceCommand extends $Command<
  UpdateLicenseSpecificationsForResourceCommandInput,
  UpdateLicenseSpecificationsForResourceCommandOutput,
  LicenseManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateLicenseSpecificationsForResourceCommandInput) {
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
  ): Handler<UpdateLicenseSpecificationsForResourceCommandInput, UpdateLicenseSpecificationsForResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "UpdateLicenseSpecificationsForResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateLicenseSpecificationsForResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateLicenseSpecificationsForResourceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateLicenseSpecificationsForResourceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateLicenseSpecificationsForResourceCommandOutput> {
    return deserializeAws_json1_1UpdateLicenseSpecificationsForResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
