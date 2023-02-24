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
  ListCustomerManagedPolicyReferencesInPermissionSetRequest,
  ListCustomerManagedPolicyReferencesInPermissionSetRequestFilterSensitiveLog,
  ListCustomerManagedPolicyReferencesInPermissionSetResponse,
  ListCustomerManagedPolicyReferencesInPermissionSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetCommand,
  serializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

export interface ListCustomerManagedPolicyReferencesInPermissionSetCommandInput
  extends ListCustomerManagedPolicyReferencesInPermissionSetRequest {}
export interface ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput
  extends ListCustomerManagedPolicyReferencesInPermissionSetResponse,
    __MetadataBearer {}

/**
 * <p>Lists all customer managed policies attached to a specified <a>PermissionSet</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListCustomerManagedPolicyReferencesInPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListCustomerManagedPolicyReferencesInPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ListCustomerManagedPolicyReferencesInPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCustomerManagedPolicyReferencesInPermissionSetCommandInput} for command's `input` shape.
 * @see {@link ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 */
export class ListCustomerManagedPolicyReferencesInPermissionSetCommand extends $Command<
  ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
  ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput,
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

  constructor(readonly input: ListCustomerManagedPolicyReferencesInPermissionSetCommandInput) {
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
    ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
    ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListCustomerManagedPolicyReferencesInPermissionSetCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "ListCustomerManagedPolicyReferencesInPermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCustomerManagedPolicyReferencesInPermissionSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListCustomerManagedPolicyReferencesInPermissionSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput> {
    return deserializeAws_json1_1ListCustomerManagedPolicyReferencesInPermissionSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
