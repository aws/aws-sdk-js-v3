import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import {
  ListProvisioningArtifactsForServiceActionInput,
  ListProvisioningArtifactsForServiceActionOutput,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand,
  serializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand,
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

export type ListProvisioningArtifactsForServiceActionCommandInput = ListProvisioningArtifactsForServiceActionInput;
export type ListProvisioningArtifactsForServiceActionCommandOutput = ListProvisioningArtifactsForServiceActionOutput &
  __MetadataBearer;

/**
 * <p>Lists all provisioning artifacts (also known as versions) for the specified self-service action.</p>
 */
export class ListProvisioningArtifactsForServiceActionCommand extends $Command<
  ListProvisioningArtifactsForServiceActionCommandInput,
  ListProvisioningArtifactsForServiceActionCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListProvisioningArtifactsForServiceActionCommandInput) {
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
    ListProvisioningArtifactsForServiceActionCommandInput,
    ListProvisioningArtifactsForServiceActionCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ListProvisioningArtifactsForServiceActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProvisioningArtifactsForServiceActionInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListProvisioningArtifactsForServiceActionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListProvisioningArtifactsForServiceActionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListProvisioningArtifactsForServiceActionCommandOutput> {
    return deserializeAws_json1_1ListProvisioningArtifactsForServiceActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
