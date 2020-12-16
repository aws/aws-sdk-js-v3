import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { CreateProvisioningArtifactInput, CreateProvisioningArtifactOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateProvisioningArtifactCommand,
  serializeAws_json1_1CreateProvisioningArtifactCommand,
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

export type CreateProvisioningArtifactCommandInput = CreateProvisioningArtifactInput;
export type CreateProvisioningArtifactCommandOutput = CreateProvisioningArtifactOutput & __MetadataBearer;

/**
 * <p>Creates a provisioning artifact (also known as a version) for the specified product.</p>
 *          <p>You cannot create a provisioning artifact for a product that was shared with you.</p>
 */
export class CreateProvisioningArtifactCommand extends $Command<
  CreateProvisioningArtifactCommandInput,
  CreateProvisioningArtifactCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateProvisioningArtifactCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateProvisioningArtifactCommandInput, CreateProvisioningArtifactCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "CreateProvisioningArtifactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateProvisioningArtifactInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateProvisioningArtifactOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateProvisioningArtifactCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateProvisioningArtifactCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateProvisioningArtifactCommandOutput> {
    return deserializeAws_json1_1CreateProvisioningArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
