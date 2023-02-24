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

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import {
  EnableOrganizationAdminAccountRequest,
  EnableOrganizationAdminAccountRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1EnableOrganizationAdminAccountCommand,
  serializeAws_restJson1EnableOrganizationAdminAccountCommand,
} from "../protocols/Aws_restJson1";

export interface EnableOrganizationAdminAccountCommandInput extends EnableOrganizationAdminAccountRequest {}
export interface EnableOrganizationAdminAccountCommandOutput extends __MetadataBearer {}

/**
 * <p>Designates the Detective administrator account for the organization in the
 *          current Region.</p>
 *          <p>If the account does not have Detective enabled, then enables Detective
 *          for that account and creates a new behavior graph.</p>
 *          <p>Can only be called by the organization management account.</p>
 *          <p>If the organization has a delegated administrator account in Organizations, then the
 *             Detective administrator account must be either the delegated administrator
 *          account or the organization management account.</p>
 *          <p>If the organization does not have a delegated administrator account in Organizations, then you can choose any account in the organization. If you choose an account other
 *          than the organization management account, Detective calls Organizations to
 *          make that account the delegated administrator account for Detective. The
 *          organization management account cannot be the delegated administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, EnableOrganizationAdminAccountCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, EnableOrganizationAdminAccountCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new EnableOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link EnableOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 */
export class EnableOrganizationAdminAccountCommand extends $Command<
  EnableOrganizationAdminAccountCommandInput,
  EnableOrganizationAdminAccountCommandOutput,
  DetectiveClientResolvedConfig
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

  constructor(readonly input: EnableOrganizationAdminAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableOrganizationAdminAccountCommandInput, EnableOrganizationAdminAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableOrganizationAdminAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "EnableOrganizationAdminAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableOrganizationAdminAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: EnableOrganizationAdminAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1EnableOrganizationAdminAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableOrganizationAdminAccountCommandOutput> {
    return deserializeAws_restJson1EnableOrganizationAdminAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
