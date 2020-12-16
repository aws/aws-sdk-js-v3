import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { UpdateSubnetChangeProtectionRequest, UpdateSubnetChangeProtectionResponse } from "../models/models_0";
import {
  deserializeAws_json1_0UpdateSubnetChangeProtectionCommand,
  serializeAws_json1_0UpdateSubnetChangeProtectionCommand,
} from "../protocols/Aws_json1_0";
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

export type UpdateSubnetChangeProtectionCommandInput = UpdateSubnetChangeProtectionRequest;
export type UpdateSubnetChangeProtectionCommandOutput = UpdateSubnetChangeProtectionResponse & __MetadataBearer;

/**
 * <p></p>
 */
export class UpdateSubnetChangeProtectionCommand extends $Command<
  UpdateSubnetChangeProtectionCommandInput,
  UpdateSubnetChangeProtectionCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateSubnetChangeProtectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkFirewallClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSubnetChangeProtectionCommandInput, UpdateSubnetChangeProtectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "UpdateSubnetChangeProtectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateSubnetChangeProtectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateSubnetChangeProtectionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateSubnetChangeProtectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateSubnetChangeProtectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateSubnetChangeProtectionCommandOutput> {
    return deserializeAws_json1_0UpdateSubnetChangeProtectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
