import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateAutomaticTapeCreationPolicyInput, UpdateAutomaticTapeCreationPolicyOutput } from "../models/index";
import {
  deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand,
  serializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand,
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

export type UpdateAutomaticTapeCreationPolicyCommandInput = UpdateAutomaticTapeCreationPolicyInput;
export type UpdateAutomaticTapeCreationPolicyCommandOutput = UpdateAutomaticTapeCreationPolicyOutput & __MetadataBearer;

export class UpdateAutomaticTapeCreationPolicyCommand extends $Command<
  UpdateAutomaticTapeCreationPolicyCommandInput,
  UpdateAutomaticTapeCreationPolicyCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAutomaticTapeCreationPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAutomaticTapeCreationPolicyCommandInput, UpdateAutomaticTapeCreationPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: UpdateAutomaticTapeCreationPolicyInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateAutomaticTapeCreationPolicyOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateAutomaticTapeCreationPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateAutomaticTapeCreationPolicyCommandOutput> {
    return deserializeAws_json1_1UpdateAutomaticTapeCreationPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
