import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { UpdateAcceleratorAttributesRequest, UpdateAcceleratorAttributesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateAcceleratorAttributesCommand,
  serializeAws_json1_1UpdateAcceleratorAttributesCommand,
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

export type UpdateAcceleratorAttributesCommandInput = UpdateAcceleratorAttributesRequest;
export type UpdateAcceleratorAttributesCommandOutput = UpdateAcceleratorAttributesResponse & __MetadataBearer;

/**
 * <p>Update the attributes for an accelerator. </p>
 */
export class UpdateAcceleratorAttributesCommand extends $Command<
  UpdateAcceleratorAttributesCommandInput,
  UpdateAcceleratorAttributesCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAcceleratorAttributesCommandInput) {
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
  ): Handler<UpdateAcceleratorAttributesCommandInput, UpdateAcceleratorAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "UpdateAcceleratorAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAcceleratorAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAcceleratorAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAcceleratorAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateAcceleratorAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAcceleratorAttributesCommandOutput> {
    return deserializeAws_json1_1UpdateAcceleratorAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
