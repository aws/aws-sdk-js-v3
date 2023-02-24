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
  EnableSharingWithAwsOrganizationRequest,
  EnableSharingWithAwsOrganizationRequestFilterSensitiveLog,
  EnableSharingWithAwsOrganizationResponse,
  EnableSharingWithAwsOrganizationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1EnableSharingWithAwsOrganizationCommand,
  serializeAws_restJson1EnableSharingWithAwsOrganizationCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

export interface EnableSharingWithAwsOrganizationCommandInput extends EnableSharingWithAwsOrganizationRequest {}
export interface EnableSharingWithAwsOrganizationCommandOutput
  extends EnableSharingWithAwsOrganizationResponse,
    __MetadataBearer {}

/**
 * <p>Enables resource sharing within your organization in Organizations. Calling this operation
 *             enables RAM to retrieve information about the organization and its structure. This
 *             lets you share resources with all of the accounts in an organization by specifying the
 *             organization's ID, or all of the accounts in an organizational unit (OU) by specifying
 *             the OU's ID. Until you enable sharing within the organization, you can specify only
 *             individual Amazon Web Services accounts, or for supported resource types, IAM users and
 *             roles.</p>
 *          <p>You must call this operation from an IAM user or role in the organization's
 *             management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, EnableSharingWithAwsOrganizationCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, EnableSharingWithAwsOrganizationCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new EnableSharingWithAwsOrganizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableSharingWithAwsOrganizationCommandInput} for command's `input` shape.
 * @see {@link EnableSharingWithAwsOrganizationCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 */
export class EnableSharingWithAwsOrganizationCommand extends $Command<
  EnableSharingWithAwsOrganizationCommandInput,
  EnableSharingWithAwsOrganizationCommandOutput,
  RAMClientResolvedConfig
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

  constructor(readonly input: EnableSharingWithAwsOrganizationCommandInput) {
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
  ): Handler<EnableSharingWithAwsOrganizationCommandInput, EnableSharingWithAwsOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableSharingWithAwsOrganizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RAMClient";
    const commandName = "EnableSharingWithAwsOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableSharingWithAwsOrganizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: EnableSharingWithAwsOrganizationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: EnableSharingWithAwsOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1EnableSharingWithAwsOrganizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableSharingWithAwsOrganizationCommandOutput> {
    return deserializeAws_restJson1EnableSharingWithAwsOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
