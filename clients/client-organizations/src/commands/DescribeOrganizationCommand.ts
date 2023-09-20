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

import { DescribeOrganizationResponse, DescribeOrganizationResponseFilterSensitiveLog } from "../models/models_0";
import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { de_DescribeOrganizationCommand, se_DescribeOrganizationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeOrganizationCommand}.
 */
export interface DescribeOrganizationCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeOrganizationCommand}.
 */
export interface DescribeOrganizationCommandOutput extends DescribeOrganizationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about the organization that the user's account belongs
 *             to.</p>
 *          <p>This operation can be called from any account in the organization.</p>
 *          <note>
 *             <p>Even if a policy type is shown as available in the organization, you can disable
 *                 it separately at the root level with <a>DisablePolicyType</a>. Use <a>ListRoots</a> to see the status of policy types for a specified
 *                 root.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DescribeOrganizationCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DescribeOrganizationCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const input = {};
 * const command = new DescribeOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrganizationResponse
 * //   Organization: { // Organization
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     FeatureSet: "ALL" || "CONSOLIDATED_BILLING",
 * //     MasterAccountArn: "STRING_VALUE",
 * //     MasterAccountId: "STRING_VALUE",
 * //     MasterAccountEmail: "STRING_VALUE",
 * //     AvailablePolicyTypes: [ // PolicyTypes
 * //       { // PolicyTypeSummary
 * //         Type: "SERVICE_CONTROL_POLICY" || "TAG_POLICY" || "BACKUP_POLICY" || "AISERVICES_OPT_OUT_POLICY",
 * //         Status: "ENABLED" || "PENDING_ENABLE" || "PENDING_DISABLE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeOrganizationCommandInput - {@link DescribeOrganizationCommandInput}
 * @returns {@link DescribeOrganizationCommandOutput}
 * @see {@link DescribeOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for OrganizationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that
 *             is making the request must have at least one IAM permissions policy attached that
 *             grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *
 * @throws {@link AWSOrganizationsNotInUseException} (client fault)
 *  <p>Your account isn't a member of an organization. To make this request, you must use the
 *             credentials of an account that belongs to an organization.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The target of the operation is currently being modified by a different request. Try
 *             again later.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>Organizations can't complete your request because of an internal service error. Try again
 *             later.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>You have sent too many requests in too short a period of time. The quota helps protect
 *             against denial-of-service attacks. Try again later.</p>
 *          <p>For information about quotas that affect Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_reference_limits.html">Quotas for Organizations</a> in the
 *                 <i>Organizations User Guide</i>.</p>
 *
 * @throws {@link OrganizationsServiceException}
 * <p>Base exception class for all service exceptions from Organizations service.</p>
 *
 * @example To get information about an organization
 * ```javascript
 * // The following example shows how to request information about the current user's organization:/n/n
 * const input = undefined;
 * const command = new DescribeOrganizationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Organization": {
 *     "Arn": "arn:aws:organizations::111111111111:organization/o-exampleorgid",
 *     "AvailablePolicyTypes": [
 *       {
 *         "Status": "ENABLED",
 *         "Type": "SERVICE_CONTROL_POLICY"
 *       }
 *     ],
 *     "FeatureSet": "ALL",
 *     "Id": "o-exampleorgid",
 *     "MasterAccountArn": "arn:aws:organizations::111111111111:account/o-exampleorgid/111111111111",
 *     "MasterAccountEmail": "bill@example.com"
 *   }
 * }
 * *\/
 * // example id: to-get-information-about-an-organization-1472503400505
 * ```
 *
 */
export class DescribeOrganizationCommand extends $Command<
  DescribeOrganizationCommandInput,
  DescribeOrganizationCommandOutput,
  OrganizationsClientResolvedConfig
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
  constructor(readonly input: DescribeOrganizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OrganizationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOrganizationCommandInput, DescribeOrganizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOrganizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OrganizationsClient";
    const commandName = "DescribeOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeOrganizationResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSOrganizationsV20161128",
        operation: "DescribeOrganization",
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
  private serialize(input: DescribeOrganizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeOrganizationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeOrganizationCommandOutput> {
    return de_DescribeOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
