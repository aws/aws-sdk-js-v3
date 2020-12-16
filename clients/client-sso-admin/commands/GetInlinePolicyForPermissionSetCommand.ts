import { SSOAdminClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOAdminClient";
import { GetInlinePolicyForPermissionSetRequest, GetInlinePolicyForPermissionSetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetInlinePolicyForPermissionSetCommand,
  serializeAws_json1_1GetInlinePolicyForPermissionSetCommand,
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

export type GetInlinePolicyForPermissionSetCommandInput = GetInlinePolicyForPermissionSetRequest;
export type GetInlinePolicyForPermissionSetCommandOutput = GetInlinePolicyForPermissionSetResponse & __MetadataBearer;

/**
 * <p>Obtains the inline policy assigned to the permission set.</p>
 */
export class GetInlinePolicyForPermissionSetCommand extends $Command<
  GetInlinePolicyForPermissionSetCommandInput,
  GetInlinePolicyForPermissionSetCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInlinePolicyForPermissionSetCommandInput) {
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
  ): Handler<GetInlinePolicyForPermissionSetCommandInput, GetInlinePolicyForPermissionSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "GetInlinePolicyForPermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInlinePolicyForPermissionSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetInlinePolicyForPermissionSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetInlinePolicyForPermissionSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetInlinePolicyForPermissionSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetInlinePolicyForPermissionSetCommandOutput> {
    return deserializeAws_json1_1GetInlinePolicyForPermissionSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
