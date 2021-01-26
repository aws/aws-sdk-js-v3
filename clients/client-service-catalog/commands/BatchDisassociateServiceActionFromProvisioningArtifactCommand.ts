import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import {
  BatchDisassociateServiceActionFromProvisioningArtifactInput,
  BatchDisassociateServiceActionFromProvisioningArtifactOutput,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand,
  serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand,
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

export type BatchDisassociateServiceActionFromProvisioningArtifactCommandInput = BatchDisassociateServiceActionFromProvisioningArtifactInput;
export type BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput = BatchDisassociateServiceActionFromProvisioningArtifactOutput &
  __MetadataBearer;

/**
 * <p>Disassociates a batch of self-service actions from the specified provisioning artifact.</p>
 */
export class BatchDisassociateServiceActionFromProvisioningArtifactCommand extends $Command<
  BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
  BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput) {
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
    BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
    BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "BatchDisassociateServiceActionFromProvisioningArtifactCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDisassociateServiceActionFromProvisioningArtifactInput.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDisassociateServiceActionFromProvisioningArtifactOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchDisassociateServiceActionFromProvisioningArtifactCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDisassociateServiceActionFromProvisioningArtifactCommandOutput> {
    return deserializeAws_json1_1BatchDisassociateServiceActionFromProvisioningArtifactCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
