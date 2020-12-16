import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { PutInlinePolicyToPermissionSetRequest, PutInlinePolicyToPermissionSetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutInlinePolicyToPermissionSetCommand,
  serializeAws_json1_1PutInlinePolicyToPermissionSetCommand,
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

export type PutInlinePolicyToPermissionSetCommandInput = PutInlinePolicyToPermissionSetRequest;
export type PutInlinePolicyToPermissionSetCommandOutput = PutInlinePolicyToPermissionSetResponse & __MetadataBearer;

/**
 * <p>Attaches an IAM inline policy to a permission set.</p>
 *          <note>
 *             <p>If the permission set is already referenced by one or more account assignments, you will need to call <code>
 *                   <a>ProvisionPermissionSet</a>
 *                </code> after this action to apply the corresponding IAM policy updates to all assigned accounts.</p>
 *          </note>
 */
export class PutInlinePolicyToPermissionSetCommand extends $Command<
  PutInlinePolicyToPermissionSetCommandInput,
  PutInlinePolicyToPermissionSetCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutInlinePolicyToPermissionSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutInlinePolicyToPermissionSetCommandInput, PutInlinePolicyToPermissionSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "PutInlinePolicyToPermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutInlinePolicyToPermissionSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutInlinePolicyToPermissionSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PutInlinePolicyToPermissionSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutInlinePolicyToPermissionSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutInlinePolicyToPermissionSetCommandOutput> {
    return deserializeAws_json1_1PutInlinePolicyToPermissionSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
