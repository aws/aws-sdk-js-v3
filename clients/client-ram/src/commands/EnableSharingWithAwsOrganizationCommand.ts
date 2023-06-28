// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { EnableSharingWithAwsOrganizationRequest, EnableSharingWithAwsOrganizationResponse } from "../models/models_0";
import {
  de_EnableSharingWithAwsOrganizationCommand,
  se_EnableSharingWithAwsOrganizationCommand,
} from "../protocols/Aws_restJson1";
import { RAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RAMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EnableSharingWithAwsOrganizationCommand}.
 */
export interface EnableSharingWithAwsOrganizationCommandInput extends EnableSharingWithAwsOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link EnableSharingWithAwsOrganizationCommand}.
 */
export interface EnableSharingWithAwsOrganizationCommandOutput
  extends EnableSharingWithAwsOrganizationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Enables resource sharing within your organization in Organizations. This operation creates
 *             a service-linked role called <code>AWSServiceRoleForResourceAccessManager</code> that has the IAM managed policy
 *             named AWSResourceAccessManagerServiceRolePolicy attached. This role permits RAM to retrieve information about
 *             the organization and its structure. This lets you share resources with all of the
 *             accounts in the calling account's organization by specifying the organization ID, or all
 *             of the accounts in an organizational unit (OU) by specifying the OU ID. Until you enable
 *             sharing within the organization, you can specify only individual Amazon Web Services accounts, or for
 *             supported resource types, IAM roles and users.</p>
 *          <p>You must call this operation from an IAM role or user in the organization's
 *             management account.</p>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, EnableSharingWithAwsOrganizationCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, EnableSharingWithAwsOrganizationCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const input = {};
 * const command = new EnableSharingWithAwsOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // EnableSharingWithAwsOrganizationResponse
 * //   returnValue: true || false,
 * // };
 *
 * ```
 *
 * @param EnableSharingWithAwsOrganizationCommandInput - {@link EnableSharingWithAwsOrganizationCommandInput}
 * @returns {@link EnableSharingWithAwsOrganizationCommandOutput}
 * @see {@link EnableSharingWithAwsOrganizationCommandInput} for command's `input` shape.
 * @see {@link EnableSharingWithAwsOrganizationCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for RAMClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The operation failed because the requested operation isn't permitted.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The operation failed because the service could not respond to the request due to an
 *             internal problem. Try again later.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The operation failed because the service isn't available. Try again later.</p>
 *
 * @throws {@link RAMServiceException}
 * <p>Base exception class for all service exceptions from RAM service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: EnableSharingWithAwsOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_EnableSharingWithAwsOrganizationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableSharingWithAwsOrganizationCommandOutput> {
    return de_EnableSharingWithAwsOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
