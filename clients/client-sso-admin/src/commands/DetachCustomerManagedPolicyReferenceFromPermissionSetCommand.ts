// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  DetachCustomerManagedPolicyReferenceFromPermissionSetRequest,
  DetachCustomerManagedPolicyReferenceFromPermissionSetRequestFilterSensitiveLog,
  DetachCustomerManagedPolicyReferenceFromPermissionSetResponse,
  DetachCustomerManagedPolicyReferenceFromPermissionSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetCommand,
  serializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

export interface DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput
  extends DetachCustomerManagedPolicyReferenceFromPermissionSetRequest {}
export interface DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput
  extends DetachCustomerManagedPolicyReferenceFromPermissionSetResponse,
    __MetadataBearer {}

/**
 * <p>Detaches the specified customer managed policy from the specified <a>PermissionSet</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DetachCustomerManagedPolicyReferenceFromPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DetachCustomerManagedPolicyReferenceFromPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DetachCustomerManagedPolicyReferenceFromPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput} for command's `input` shape.
 * @see {@link DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 */
export class DetachCustomerManagedPolicyReferenceFromPermissionSetCommand extends $Command<
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput,
  SSOAdminClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput) {
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
  ): Handler<
    DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
    DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DetachCustomerManagedPolicyReferenceFromPermissionSetCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "DetachCustomerManagedPolicyReferenceFromPermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetachCustomerManagedPolicyReferenceFromPermissionSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DetachCustomerManagedPolicyReferenceFromPermissionSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput> {
    return deserializeAws_json1_1DetachCustomerManagedPolicyReferenceFromPermissionSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
