import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { ModifyListenerInput, ModifyListenerOutput } from "../models/models_0";
import {
  deserializeAws_queryModifyListenerCommand,
  serializeAws_queryModifyListenerCommand,
} from "../protocols/Aws_query";
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

export type ModifyListenerCommandInput = ModifyListenerInput;
export type ModifyListenerCommandOutput = ModifyListenerOutput & __MetadataBearer;

/**
 * <p>Replaces the specified properties of the specified listener. Any properties that you do not
 *       specify remain unchanged.</p>
 *          <p>Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy
 *       and default certificate properties. If you change the protocol from HTTP to HTTPS, or from
 *       TCP to TLS, you must add the security policy and default certificate properties.</p>
 *          <p>To add an item to a list, remove an item from a list, or update an item in a list,
 *       you must provide the entire list. For example, to add an action, specify a list with the
 *       current actions plus the new action.</p>
 */
export class ModifyListenerCommand extends $Command<
  ModifyListenerCommandInput,
  ModifyListenerCommandOutput,
  ElasticLoadBalancingV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyListenerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticLoadBalancingV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyListenerCommandInput, ModifyListenerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticLoadBalancingV2Client";
    const commandName = "ModifyListenerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyListenerInput.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyListenerOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyListenerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyListenerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyListenerCommandOutput> {
    return deserializeAws_queryModifyListenerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
