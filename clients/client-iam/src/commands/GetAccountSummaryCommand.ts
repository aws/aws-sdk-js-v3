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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetAccountSummaryResponse } from "../models/models_0";
import { de_GetAccountSummaryCommand, se_GetAccountSummaryCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAccountSummaryCommand}.
 */
export interface GetAccountSummaryCommandInput {}
/**
 * @public
 *
 * The output of {@link GetAccountSummaryCommand}.
 */
export interface GetAccountSummaryCommandOutput extends GetAccountSummaryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about IAM entity usage and IAM quotas in the Amazon Web Services
 *             account.</p>
 *          <p> For information about IAM quotas, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetAccountSummaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetAccountSummaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new GetAccountSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountSummaryResponse
 * //   SummaryMap: { // summaryMapType
 * //     "<keys>": Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountSummaryCommandInput - {@link GetAccountSummaryCommandInput}
 * @returns {@link GetAccountSummaryCommandOutput}
 * @see {@link GetAccountSummaryCommandInput} for command's `input` shape.
 * @see {@link GetAccountSummaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To get information about IAM entity quotas and usage in the current account
 * ```javascript
 * // The following command returns information about the IAM entity quotas and usage in the current AWS account.
 * const input = undefined;
 * const command = new GetAccountSummaryCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SummaryMap": {
 *     "AccessKeysPerUserQuota": 2,
 *     "AccountAccessKeysPresent": 1,
 *     "AccountMFAEnabled": 0,
 *     "AccountSigningCertificatesPresent": 0,
 *     "AttachedPoliciesPerGroupQuota": 10,
 *     "AttachedPoliciesPerRoleQuota": 10,
 *     "AttachedPoliciesPerUserQuota": 10,
 *     "GlobalEndpointTokenVersion": 2,
 *     "GroupPolicySizeQuota": 5120,
 *     "Groups": 15,
 *     "GroupsPerUserQuota": 10,
 *     "GroupsQuota": 100,
 *     "MFADevices": 6,
 *     "MFADevicesInUse": 3,
 *     "Policies": 8,
 *     "PoliciesQuota": 1000,
 *     "PolicySizeQuota": 5120,
 *     "PolicyVersionsInUse": 22,
 *     "PolicyVersionsInUseQuota": 10000,
 *     "ServerCertificates": 1,
 *     "ServerCertificatesQuota": 20,
 *     "SigningCertificatesPerUserQuota": 2,
 *     "UserPolicySizeQuota": 2048,
 *     "Users": 27,
 *     "UsersQuota": 5000,
 *     "VersionsPerPolicyQuota": 5
 *   }
 * }
 * *\/
 * // example id: 9d8447af-f344-45de-8219-2cebc3cce7f2
 * ```
 *
 */
export class GetAccountSummaryCommand extends $Command<
  GetAccountSummaryCommandInput,
  GetAccountSummaryCommandOutput,
  IAMClientResolvedConfig
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
  constructor(readonly input: GetAccountSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccountSummaryCommandInput, GetAccountSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAccountSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetAccountSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIdentityManagementV20100508",
        operation: "GetAccountSummary",
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
  private serialize(input: GetAccountSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAccountSummaryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccountSummaryCommandOutput> {
    return de_GetAccountSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
