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
  ListPermissionSetProvisioningStatusRequest,
  ListPermissionSetProvisioningStatusRequestFilterSensitiveLog,
  ListPermissionSetProvisioningStatusResponse,
  ListPermissionSetProvisioningStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListPermissionSetProvisioningStatusCommand,
  serializeAws_json1_1ListPermissionSetProvisioningStatusCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

export interface ListPermissionSetProvisioningStatusCommandInput extends ListPermissionSetProvisioningStatusRequest {}
export interface ListPermissionSetProvisioningStatusCommandOutput
  extends ListPermissionSetProvisioningStatusResponse,
    __MetadataBearer {}

/**
 * <p>Lists the status of the permission set provisioning requests for a specified IAM Identity Center
 *       instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListPermissionSetProvisioningStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListPermissionSetProvisioningStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new ListPermissionSetProvisioningStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPermissionSetProvisioningStatusCommandInput} for command's `input` shape.
 * @see {@link ListPermissionSetProvisioningStatusCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 */
export class ListPermissionSetProvisioningStatusCommand extends $Command<
  ListPermissionSetProvisioningStatusCommandInput,
  ListPermissionSetProvisioningStatusCommandOutput,
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

  constructor(readonly input: ListPermissionSetProvisioningStatusCommandInput) {
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
  ): Handler<ListPermissionSetProvisioningStatusCommandInput, ListPermissionSetProvisioningStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPermissionSetProvisioningStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "ListPermissionSetProvisioningStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPermissionSetProvisioningStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPermissionSetProvisioningStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListPermissionSetProvisioningStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPermissionSetProvisioningStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPermissionSetProvisioningStatusCommandOutput> {
    return deserializeAws_json1_1ListPermissionSetProvisioningStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
