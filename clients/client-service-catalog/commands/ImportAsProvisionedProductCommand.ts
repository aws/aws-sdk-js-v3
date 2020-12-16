import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ImportAsProvisionedProductInput, ImportAsProvisionedProductOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ImportAsProvisionedProductCommand,
  serializeAws_json1_1ImportAsProvisionedProductCommand,
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

export type ImportAsProvisionedProductCommandInput = ImportAsProvisionedProductInput;
export type ImportAsProvisionedProductCommandOutput = ImportAsProvisionedProductOutput & __MetadataBearer;

/**
 * <p>Requests the import of a resource as a Service Catalog provisioned product that is
 *          associated to a Service Catalog product and provisioning artifact. Once imported all
 *          supported Service Catalog governance actions are supported on the provisioned
 *          product.</p>
 *          <p>Resource import only supports CloudFormation stack ARNs. CloudFormation StackSets and
 *          non-root nested stacks are not supported.</p>
 *          <p>The CloudFormation stack must have one of the following statuses to be imported:
 *          CREATE_COMPLETE, UPDATE_COMPLETE, UPDATE_ROLLBACK_COMPLETE, IMPORT_COMPLETE,
 *          IMPORT_ROLLBACK_COMPLETE.</p>
 *          <p>Import of the resource requires that the CloudFormation stack template matches the
 *          associated Service Catalog product provisioning artifact. </p>
 */
export class ImportAsProvisionedProductCommand extends $Command<
  ImportAsProvisionedProductCommandInput,
  ImportAsProvisionedProductCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportAsProvisionedProductCommandInput) {
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
  ): Handler<ImportAsProvisionedProductCommandInput, ImportAsProvisionedProductCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "ImportAsProvisionedProductCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportAsProvisionedProductInput.filterSensitiveLog,
      outputFilterSensitiveLog: ImportAsProvisionedProductOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportAsProvisionedProductCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportAsProvisionedProductCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ImportAsProvisionedProductCommandOutput> {
    return deserializeAws_json1_1ImportAsProvisionedProductCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
