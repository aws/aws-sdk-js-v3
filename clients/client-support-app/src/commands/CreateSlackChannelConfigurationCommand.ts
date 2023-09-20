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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CreateSlackChannelConfigurationRequest, CreateSlackChannelConfigurationResult } from "../models/models_0";
import {
  de_CreateSlackChannelConfigurationCommand,
  se_CreateSlackChannelConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupportAppClientResolvedConfig } from "../SupportAppClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSlackChannelConfigurationCommand}.
 */
export interface CreateSlackChannelConfigurationCommandInput extends CreateSlackChannelConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateSlackChannelConfigurationCommand}.
 */
export interface CreateSlackChannelConfigurationCommandOutput
  extends CreateSlackChannelConfigurationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a Slack channel configuration for your Amazon Web Services account.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You can add up to 5 Slack workspaces for your account.</p>
 *                </li>
 *                <li>
 *                   <p>You can add up to 20 Slack channels for your account.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>A Slack channel can have up to 100 Amazon Web Services accounts. This means that only 100 accounts can
 *       add the same Slack channel to the Amazon Web Services Support App. We recommend that you only add the accounts that
 *       you need to manage support cases for your organization. This can reduce the notifications
 *       about case updates that you receive in the Slack channel.</p>
 *          <note>
 *             <p>We recommend that you choose a private Slack channel so that only members in that
 *         channel have read and write access to your support cases. Anyone in your Slack channel can
 *         create, update, or resolve support cases for your account. Users require an invitation to
 *         join private channels. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAppClient, CreateSlackChannelConfigurationCommand } from "@aws-sdk/client-support-app"; // ES Modules import
 * // const { SupportAppClient, CreateSlackChannelConfigurationCommand } = require("@aws-sdk/client-support-app"); // CommonJS import
 * const client = new SupportAppClient(config);
 * const input = { // CreateSlackChannelConfigurationRequest
 *   teamId: "STRING_VALUE", // required
 *   channelId: "STRING_VALUE", // required
 *   channelName: "STRING_VALUE",
 *   notifyOnCreateOrReopenCase: true || false,
 *   notifyOnAddCorrespondenceToCase: true || false,
 *   notifyOnResolveCase: true || false,
 *   notifyOnCaseSeverity: "STRING_VALUE", // required
 *   channelRoleArn: "STRING_VALUE", // required
 * };
 * const command = new CreateSlackChannelConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateSlackChannelConfigurationCommandInput - {@link CreateSlackChannelConfigurationCommandInput}
 * @returns {@link CreateSlackChannelConfigurationCommandOutput}
 * @see {@link CreateSlackChannelConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateSlackChannelConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SupportAppClientResolvedConfig | config} for SupportAppClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has a conflict. For example, you might receive this error if you try the
 *       following:</p>
 *          <ul>
 *             <li>
 *                <p>Add, update, or delete a Slack channel configuration before you add a Slack workspace
 *           to your Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>Add a Slack channel configuration that already exists in your Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>Delete a Slack channel configuration for a live chat channel.</p>
 *             </li>
 *             <li>
 *                <p>Delete a Slack workspace from your Amazon Web Services account that has an active live chat
 *           channel.</p>
 *             </li>
 *             <li>
 *                <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API from an Amazon Web Services account
 *           that doesn't belong to an organization.</p>
 *             </li>
 *             <li>
 *                <p>Call the <code>RegisterSlackWorkspaceForOrganization</code> API from a member account,
 *           but the management account hasn't registered that workspace yet for the
 *           organization.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your Service Quotas request exceeds the quota for the service. For example, your Service Quotas request to
 *       Amazon Web Services Support App might exceed the maximum number of workspaces or channels per account, or the maximum
 *       number of accounts per Slack channel.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Your request input doesn't meet the constraints that the Amazon Web Services Support App specifies.</p>
 *
 * @throws {@link SupportAppServiceException}
 * <p>Base exception class for all service exceptions from SupportApp service.</p>
 *
 */
export class CreateSlackChannelConfigurationCommand extends $Command<
  CreateSlackChannelConfigurationCommandInput,
  CreateSlackChannelConfigurationCommandOutput,
  SupportAppClientResolvedConfig
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
  constructor(readonly input: CreateSlackChannelConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SupportAppClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSlackChannelConfigurationCommandInput, CreateSlackChannelConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSlackChannelConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportAppClient";
    const commandName = "CreateSlackChannelConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SupportApp",
        operation: "CreateSlackChannelConfiguration",
      },
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
    input: CreateSlackChannelConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateSlackChannelConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSlackChannelConfigurationCommandOutput> {
    return de_CreateSlackChannelConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
