import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import {
  UpdateFirewallPolicyChangeProtectionRequest,
  UpdateFirewallPolicyChangeProtectionResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand,
  serializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand,
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

export type UpdateFirewallPolicyChangeProtectionCommandInput = UpdateFirewallPolicyChangeProtectionRequest;
export type UpdateFirewallPolicyChangeProtectionCommandOutput = UpdateFirewallPolicyChangeProtectionResponse &
  __MetadataBearer;

/**
 * <p></p>
 */
export class UpdateFirewallPolicyChangeProtectionCommand extends $Command<
  UpdateFirewallPolicyChangeProtectionCommandInput,
  UpdateFirewallPolicyChangeProtectionCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateFirewallPolicyChangeProtectionCommandInput) {
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
  ): Handler<UpdateFirewallPolicyChangeProtectionCommandInput, UpdateFirewallPolicyChangeProtectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "UpdateFirewallPolicyChangeProtectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFirewallPolicyChangeProtectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateFirewallPolicyChangeProtectionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateFirewallPolicyChangeProtectionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateFirewallPolicyChangeProtectionCommandOutput> {
    return deserializeAws_json1_0UpdateFirewallPolicyChangeProtectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
