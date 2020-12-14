import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import {
  AssociateServiceActionWithProvisioningArtifactInput,
  AssociateServiceActionWithProvisioningArtifactOutput,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand,
  serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand,
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

export type AssociateServiceActionWithProvisioningArtifactCommandInput = AssociateServiceActionWithProvisioningArtifactInput;
export type AssociateServiceActionWithProvisioningArtifactCommandOutput = AssociateServiceActionWithProvisioningArtifactOutput &
  __MetadataBearer;

/**
 * <p>Associates a self-service action with a provisioning artifact.</p>
 */
export class AssociateServiceActionWithProvisioningArtifactCommand extends $Command<
  AssociateServiceActionWithProvisioningArtifactCommandInput,
  AssociateServiceActionWithProvisioningArtifactCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateServiceActionWithProvisioningArtifactCommandInput) {
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
  ): Handler<
    AssociateServiceActionWithProvisioningArtifactCommandInput,
    AssociateServiceActionWithProvisioningArtifactCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "AssociateServiceActionWithProvisioningArtifactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateServiceActionWithProvisioningArtifactInput.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateServiceActionWithProvisioningArtifactOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateServiceActionWithProvisioningArtifactCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateServiceActionWithProvisioningArtifactCommandOutput> {
    return deserializeAws_json1_1AssociateServiceActionWithProvisioningArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
