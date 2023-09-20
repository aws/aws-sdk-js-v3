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
import { GetMemberDetectorsRequest, GetMemberDetectorsResponse } from "../models/models_0";
import { de_GetMemberDetectorsCommand, se_GetMemberDetectorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMemberDetectorsCommand}.
 */
export interface GetMemberDetectorsCommandInput extends GetMemberDetectorsRequest {}
/**
 * @public
 *
 * The output of {@link GetMemberDetectorsCommand}.
 */
export interface GetMemberDetectorsCommandOutput extends GetMemberDetectorsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes which data sources are enabled for the member account's detector.</p>
 *          <p>There might be regional differences because some data sources might not be
 *       available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 *       information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetMemberDetectorsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetMemberDetectorsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // GetMemberDetectorsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   AccountIds: [ // AccountIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetMemberDetectorsCommand(input);
 * const response = await client.send(command);
 * // { // GetMemberDetectorsResponse
 * //   MemberDataSourceConfigurations: [ // MemberDataSourceConfigurations // required
 * //     { // MemberDataSourceConfiguration
 * //       AccountId: "STRING_VALUE", // required
 * //       DataSources: { // DataSourceConfigurationsResult
 * //         CloudTrail: { // CloudTrailConfigurationResult
 * //           Status: "ENABLED" || "DISABLED", // required
 * //         },
 * //         DNSLogs: { // DNSLogsConfigurationResult
 * //           Status: "ENABLED" || "DISABLED", // required
 * //         },
 * //         FlowLogs: { // FlowLogsConfigurationResult
 * //           Status: "ENABLED" || "DISABLED", // required
 * //         },
 * //         S3Logs: { // S3LogsConfigurationResult
 * //           Status: "ENABLED" || "DISABLED", // required
 * //         },
 * //         Kubernetes: { // KubernetesConfigurationResult
 * //           AuditLogs: { // KubernetesAuditLogsConfigurationResult
 * //             Status: "ENABLED" || "DISABLED", // required
 * //           },
 * //         },
 * //         MalwareProtection: { // MalwareProtectionConfigurationResult
 * //           ScanEc2InstanceWithFindings: { // ScanEc2InstanceWithFindingsResult
 * //             EbsVolumes: { // EbsVolumesResult
 * //               Status: "ENABLED" || "DISABLED",
 * //               Reason: "STRING_VALUE",
 * //             },
 * //           },
 * //           ServiceRole: "STRING_VALUE",
 * //         },
 * //       },
 * //       Features: [ // MemberFeaturesConfigurationsResults
 * //         { // MemberFeaturesConfigurationResult
 * //           Name: "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "EKS_RUNTIME_MONITORING" || "LAMBDA_NETWORK_LOGS",
 * //           Status: "ENABLED" || "DISABLED",
 * //           UpdatedAt: new Date("TIMESTAMP"),
 * //           AdditionalConfiguration: [ // MemberAdditionalConfigurationResults
 * //             { // MemberAdditionalConfigurationResult
 * //               Name: "EKS_ADDON_MANAGEMENT",
 * //               Status: "ENABLED" || "DISABLED",
 * //               UpdatedAt: new Date("TIMESTAMP"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   UnprocessedAccounts: [ // UnprocessedAccounts // required
 * //     { // UnprocessedAccount
 * //       AccountId: "STRING_VALUE", // required
 * //       Result: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMemberDetectorsCommandInput - {@link GetMemberDetectorsCommandInput}
 * @returns {@link GetMemberDetectorsCommandOutput}
 * @see {@link GetMemberDetectorsCommandInput} for command's `input` shape.
 * @see {@link GetMemberDetectorsCommandOutput} for command's `response` shape.
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
export class GetMemberDetectorsCommand extends $Command<
  GetMemberDetectorsCommandInput,
  GetMemberDetectorsCommandOutput,
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
  constructor(readonly input: GetMemberDetectorsCommandInput) {
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
  ): Handler<GetMemberDetectorsCommandInput, GetMemberDetectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMemberDetectorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "GetMemberDetectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GuardDutyAPIService",
        operation: "GetMemberDetectors",
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
  private serialize(input: GetMemberDetectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMemberDetectorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMemberDetectorsCommandOutput> {
    return de_GetMemberDetectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
