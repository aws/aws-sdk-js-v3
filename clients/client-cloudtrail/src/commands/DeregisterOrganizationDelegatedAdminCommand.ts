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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import {
  DeregisterOrganizationDelegatedAdminRequest,
  DeregisterOrganizationDelegatedAdminRequestFilterSensitiveLog,
  DeregisterOrganizationDelegatedAdminResponse,
  DeregisterOrganizationDelegatedAdminResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterOrganizationDelegatedAdminCommand,
  serializeAws_json1_1DeregisterOrganizationDelegatedAdminCommand,
} from "../protocols/Aws_json1_1";

export interface DeregisterOrganizationDelegatedAdminCommandInput extends DeregisterOrganizationDelegatedAdminRequest {}
export interface DeregisterOrganizationDelegatedAdminCommandOutput
  extends DeregisterOrganizationDelegatedAdminResponse,
    __MetadataBearer {}

/**
 * <p>Removes CloudTrail delegated administrator permissions from a member account in an organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, DeregisterOrganizationDelegatedAdminCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, DeregisterOrganizationDelegatedAdminCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new DeregisterOrganizationDelegatedAdminCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterOrganizationDelegatedAdminCommandInput} for command's `input` shape.
 * @see {@link DeregisterOrganizationDelegatedAdminCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 */
export class DeregisterOrganizationDelegatedAdminCommand extends $Command<
  DeregisterOrganizationDelegatedAdminCommandInput,
  DeregisterOrganizationDelegatedAdminCommandOutput,
  CloudTrailClientResolvedConfig
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

  constructor(readonly input: DeregisterOrganizationDelegatedAdminCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterOrganizationDelegatedAdminCommandInput, DeregisterOrganizationDelegatedAdminCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeregisterOrganizationDelegatedAdminCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "DeregisterOrganizationDelegatedAdminCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterOrganizationDelegatedAdminRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeregisterOrganizationDelegatedAdminResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeregisterOrganizationDelegatedAdminCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterOrganizationDelegatedAdminCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterOrganizationDelegatedAdminCommandOutput> {
    return deserializeAws_json1_1DeregisterOrganizationDelegatedAdminCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
