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

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { CreateMembersRequest, CreateMembersResponse } from "../models/models_0";
import { de_CreateMembersCommand, se_CreateMembersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateMembersCommand}.
 */
export interface CreateMembersCommandInput extends CreateMembersRequest {}
/**
 * @public
 *
 * The output of {@link CreateMembersCommand}.
 */
export interface CreateMembersCommandOutput extends CreateMembersResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             <code>CreateMembers</code> is used to send invitations to accounts. For the organization
 *          behavior graph, the Detective administrator account uses
 *             <code>CreateMembers</code> to enable organization accounts as member accounts.</p>
 *          <p>For invited accounts, <code>CreateMembers</code> sends a request to invite the specified
 *             Amazon Web Services accounts to be member accounts in the behavior graph. This operation
 *          can only be called by the administrator account for a behavior graph. </p>
 *          <p>
 *             <code>CreateMembers</code> verifies the accounts and then invites the verified accounts.
 *          The administrator can optionally specify to not send invitation emails to the member
 *          accounts. This would be used when the administrator manages their member accounts
 *          centrally.</p>
 *          <p>For organization accounts in the organization behavior graph, <code>CreateMembers</code>
 *          attempts to enable the accounts. The organization accounts do not receive
 *          invitations.</p>
 *          <p>The request provides the behavior graph ARN and the list of accounts to invite or to
 *          enable.</p>
 *          <p>The response separates the requested accounts into two lists:</p>
 *          <ul>
 *             <li>
 *                <p>The accounts that <code>CreateMembers</code> was able to process. For invited
 *                accounts, includes member accounts that are being verified, that have passed
 *                verification and are to be invited, and that have failed verification. For
 *                organization accounts in the organization behavior graph, includes accounts that can
 *                be enabled and that cannot be enabled.</p>
 *             </li>
 *             <li>
 *                <p>The accounts that <code>CreateMembers</code> was unable to process. This list
 *                includes accounts that were already invited to be member accounts in the behavior
 *                graph.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, CreateMembersCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, CreateMembersCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const input = { // CreateMembersRequest
 *   GraphArn: "STRING_VALUE", // required
 *   Message: "STRING_VALUE",
 *   DisableEmailNotification: true || false,
 *   Accounts: [ // AccountList // required
 *     { // Account
 *       AccountId: "STRING_VALUE", // required
 *       EmailAddress: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMembersCommand(input);
 * const response = await client.send(command);
 * // { // CreateMembersResponse
 * //   Members: [ // MemberDetailList
 * //     { // MemberDetail
 * //       AccountId: "STRING_VALUE",
 * //       EmailAddress: "STRING_VALUE",
 * //       GraphArn: "STRING_VALUE",
 * //       MasterId: "STRING_VALUE",
 * //       AdministratorId: "STRING_VALUE",
 * //       Status: "INVITED" || "VERIFICATION_IN_PROGRESS" || "VERIFICATION_FAILED" || "ENABLED" || "ACCEPTED_BUT_DISABLED",
 * //       DisabledReason: "VOLUME_TOO_HIGH" || "VOLUME_UNKNOWN",
 * //       InvitedTime: new Date("TIMESTAMP"),
 * //       UpdatedTime: new Date("TIMESTAMP"),
 * //       VolumeUsageInBytes: Number("long"),
 * //       VolumeUsageUpdatedTime: new Date("TIMESTAMP"),
 * //       PercentOfGraphUtilization: Number("double"),
 * //       PercentOfGraphUtilizationUpdatedTime: new Date("TIMESTAMP"),
 * //       InvitationType: "INVITATION" || "ORGANIZATION",
 * //       VolumeUsageByDatasourcePackage: { // VolumeUsageByDatasourcePackage
 * //         "<keys>": { // DatasourcePackageUsageInfo
 * //           VolumeUsageInBytes: Number("long"),
 * //           VolumeUsageUpdateTime: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //       DatasourcePackageIngestStates: { // DatasourcePackageIngestStates
 * //         "<keys>": "STARTED" || "STOPPED" || "DISABLED",
 * //       },
 * //     },
 * //   ],
 * //   UnprocessedAccounts: [ // UnprocessedAccountList
 * //     { // UnprocessedAccount
 * //       AccountId: "STRING_VALUE",
 * //       Reason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateMembersCommandInput - {@link CreateMembersCommandInput}
 * @returns {@link CreateMembersCommandOutput}
 * @see {@link CreateMembersCommandInput} for command's `input` shape.
 * @see {@link CreateMembersCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request refers to a nonexistent resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request cannot be completed for one of the following reasons.</p>
 *          <ul>
 *             <li>
 *                <p>The request would cause the number of member accounts in the behavior graph to
 *                exceed the maximum allowed. A behavior graph cannot have more than 1200 member
 *                accounts.</p>
 *             </li>
 *             <li>
 *                <p>The request would cause the data rate for the behavior graph to exceed the maximum
 *                allowed.</p>
 *             </li>
 *             <li>
 *                <p>Detective is unable to verify the data rate for the member account. This
 *                is usually because the member account is not enrolled in Amazon GuardDuty.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 */
export class CreateMembersCommand extends $Command<
  CreateMembersCommandInput,
  CreateMembersCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: CreateMembersCommandInput) {
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
  ): Handler<CreateMembersCommandInput, CreateMembersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateMembersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "CreateMembersCommand";
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
  private serialize(input: CreateMembersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateMembersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMembersCommandOutput> {
    return de_CreateMembersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
