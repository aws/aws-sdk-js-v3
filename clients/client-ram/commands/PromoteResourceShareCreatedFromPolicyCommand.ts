import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";
import {
  PromoteResourceShareCreatedFromPolicyRequest,
  PromoteResourceShareCreatedFromPolicyResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand,
  serializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand,
} from "../protocols/Aws_restJson1";
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

export type PromoteResourceShareCreatedFromPolicyCommandInput = PromoteResourceShareCreatedFromPolicyRequest;
export type PromoteResourceShareCreatedFromPolicyCommandOutput = PromoteResourceShareCreatedFromPolicyResponse &
  __MetadataBearer;

/**
 * <p>Resource shares that were created by attaching a policy to a resource are visible only to
 * 			the resource share owner, and the resource share cannot be modified in AWS RAM.</p>
 *
 *     	    <p>Use this API action to promote the resource share. When you promote the resource share,
 * 			it becomes:</p>
 *     	    <ul>
 *             <li>
 *     			        <p>Visible to all principals that it is shared with.</p>
 *     		      </li>
 *             <li>
 *     			        <p>Modifiable in AWS RAM.</p>
 *     		      </li>
 *          </ul>
 */
export class PromoteResourceShareCreatedFromPolicyCommand extends $Command<
  PromoteResourceShareCreatedFromPolicyCommandInput,
  PromoteResourceShareCreatedFromPolicyCommandOutput,
  RAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PromoteResourceShareCreatedFromPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PromoteResourceShareCreatedFromPolicyCommandInput, PromoteResourceShareCreatedFromPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "PromoteResourceShareCreatedFromPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PromoteResourceShareCreatedFromPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PromoteResourceShareCreatedFromPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PromoteResourceShareCreatedFromPolicyCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PromoteResourceShareCreatedFromPolicyCommandOutput> {
    return deserializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
