import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import {
  UpdateCustomRoutingAcceleratorAttributesRequest,
  UpdateCustomRoutingAcceleratorAttributesResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand,
  serializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand,
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

export type UpdateCustomRoutingAcceleratorAttributesCommandInput = UpdateCustomRoutingAcceleratorAttributesRequest;
export type UpdateCustomRoutingAcceleratorAttributesCommandOutput = UpdateCustomRoutingAcceleratorAttributesResponse &
  __MetadataBearer;

/**
 * <p>Update the attributes for a custom routing accelerator. </p>
 */
export class UpdateCustomRoutingAcceleratorAttributesCommand extends $Command<
  UpdateCustomRoutingAcceleratorAttributesCommandInput,
  UpdateCustomRoutingAcceleratorAttributesCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateCustomRoutingAcceleratorAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateCustomRoutingAcceleratorAttributesCommandInput,
    UpdateCustomRoutingAcceleratorAttributesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "UpdateCustomRoutingAcceleratorAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCustomRoutingAcceleratorAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateCustomRoutingAcceleratorAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateCustomRoutingAcceleratorAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCustomRoutingAcceleratorAttributesCommandOutput> {
    return deserializeAws_json1_1UpdateCustomRoutingAcceleratorAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
