import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { UpdateProvisionedProductInput, UpdateProvisionedProductOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateProvisionedProductCommand,
  serializeAws_json1_1UpdateProvisionedProductCommand,
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

export type UpdateProvisionedProductCommandInput = UpdateProvisionedProductInput;
export type UpdateProvisionedProductCommandOutput = UpdateProvisionedProductOutput & __MetadataBearer;

/**
 * <p>Requests updates to the configuration of the specified provisioned product.</p>
 *          <p>If there are tags associated with the object, they cannot be updated or added.
 *          Depending on the specific updates requested, this operation can update with no
 *          interruption, with some interruption, or replace the provisioned product entirely.</p>
 *          <p>You can check the status of this request using <a>DescribeRecord</a>.</p>
 */
export class UpdateProvisionedProductCommand extends $Command<
  UpdateProvisionedProductCommandInput,
  UpdateProvisionedProductCommandOutput,
  ServiceCatalogClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateProvisionedProductCommandInput) {
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
  ): Handler<UpdateProvisionedProductCommandInput, UpdateProvisionedProductCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "UpdateProvisionedProductCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateProvisionedProductInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateProvisionedProductOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateProvisionedProductCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateProvisionedProductCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateProvisionedProductCommandOutput> {
    return deserializeAws_json1_1UpdateProvisionedProductCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
