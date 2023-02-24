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
  ListManagedPoliciesInPermissionSetRequest,
  ListManagedPoliciesInPermissionSetRequestFilterSensitiveLog,
  ListManagedPoliciesInPermissionSetResponse,
  ListManagedPoliciesInPermissionSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListManagedPoliciesInPermissionSetCommand,
  serializeAws_json1_1ListManagedPoliciesInPermissionSetCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

export interface ListManagedPoliciesInPermissionSetCommandInput extends ListManagedPoliciesInPermissionSetRequest {}
export interface ListManagedPoliciesInPermissionSetCommandOutput
  extends ListManagedPoliciesInPermissionSetResponse,
    __MetadataBearer {}

/**
 * <p>Lists the AWS managed policy that is attached to a specified permission set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListManagedPoliciesInPermissionSetCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListManagedPoliciesInPermissionSetCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ListManagedPoliciesInPermissionSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListManagedPoliciesInPermissionSetCommandInput} for command's `input` shape.
 * @see {@link ListManagedPoliciesInPermissionSetCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 */
export class ListManagedPoliciesInPermissionSetCommand extends $Command<
  ListManagedPoliciesInPermissionSetCommandInput,
  ListManagedPoliciesInPermissionSetCommandOutput,
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

  constructor(readonly input: ListManagedPoliciesInPermissionSetCommandInput) {
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
  ): Handler<ListManagedPoliciesInPermissionSetCommandInput, ListManagedPoliciesInPermissionSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListManagedPoliciesInPermissionSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "ListManagedPoliciesInPermissionSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListManagedPoliciesInPermissionSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListManagedPoliciesInPermissionSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListManagedPoliciesInPermissionSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListManagedPoliciesInPermissionSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListManagedPoliciesInPermissionSetCommandOutput> {
    return deserializeAws_json1_1ListManagedPoliciesInPermissionSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
