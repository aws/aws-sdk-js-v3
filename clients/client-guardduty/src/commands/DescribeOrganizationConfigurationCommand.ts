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

import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import {
  DescribeOrganizationConfigurationRequest,
  DescribeOrganizationConfigurationResponse,
} from "../models/models_0";
import {
  de_DescribeOrganizationConfigurationCommand,
  se_DescribeOrganizationConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeOrganizationConfigurationCommand}.
 */
export interface DescribeOrganizationConfigurationCommandInput extends DescribeOrganizationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeOrganizationConfigurationCommand}.
 */
export interface DescribeOrganizationConfigurationCommandOutput
  extends DescribeOrganizationConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the account selected as the delegated administrator for
 *       GuardDuty.</p>
 *          <p>There might be regional differences because some data sources might not be
 *       available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 *       information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DescribeOrganizationConfigurationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DescribeOrganizationConfigurationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // DescribeOrganizationConfigurationRequest
 *   DetectorId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeOrganizationConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeOrganizationConfigurationResponse
 * //   AutoEnable: true || false,
 * //   MemberAccountLimitReached: true || false, // required
 * //   DataSources: { // OrganizationDataSourceConfigurationsResult
 * //     S3Logs: { // OrganizationS3LogsConfigurationResult
 * //       AutoEnable: true || false, // required
 * //     },
 * //     Kubernetes: { // OrganizationKubernetesConfigurationResult
 * //       AuditLogs: { // OrganizationKubernetesAuditLogsConfigurationResult
 * //         AutoEnable: true || false, // required
 * //       },
 * //     },
 * //     MalwareProtection: { // OrganizationMalwareProtectionConfigurationResult
 * //       ScanEc2InstanceWithFindings: { // OrganizationScanEc2InstanceWithFindingsResult
 * //         EbsVolumes: { // OrganizationEbsVolumesResult
 * //           AutoEnable: true || false,
 * //         },
 * //       },
 * //     },
 * //   },
 * //   Features: [ // OrganizationFeaturesConfigurationsResults
 * //     { // OrganizationFeatureConfigurationResult
 * //       Name: "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "EKS_RUNTIME_MONITORING" || "LAMBDA_NETWORK_LOGS",
 * //       AutoEnable: "NEW" || "NONE" || "ALL",
 * //       AdditionalConfiguration: [ // OrganizationAdditionalConfigurationResults
 * //         { // OrganizationAdditionalConfigurationResult
 * //           Name: "EKS_ADDON_MANAGEMENT",
 * //           AutoEnable: "NEW" || "NONE" || "ALL",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   AutoEnableOrganizationMembers: "NEW" || "ALL" || "NONE",
 * // };
 *
 * ```
 *
 * @param DescribeOrganizationConfigurationCommandInput - {@link DescribeOrganizationConfigurationCommandInput}
 * @returns {@link DescribeOrganizationConfigurationCommandOutput}
 * @see {@link DescribeOrganizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeOrganizationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 */
export class DescribeOrganizationConfigurationCommand extends $Command<
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
  GuardDutyClientResolvedConfig
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
  constructor(readonly input: DescribeOrganizationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeOrganizationConfigurationCommandInput, DescribeOrganizationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOrganizationConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "DescribeOrganizationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GuardDutyAPIService",
        operation: "DescribeOrganizationConfiguration",
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
    input: DescribeOrganizationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeOrganizationConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOrganizationConfigurationCommandOutput> {
    return de_DescribeOrganizationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
