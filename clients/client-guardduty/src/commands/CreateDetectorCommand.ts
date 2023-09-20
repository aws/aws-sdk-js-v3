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
import { CreateDetectorRequest, CreateDetectorResponse } from "../models/models_0";
import { de_CreateDetectorCommand, se_CreateDetectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDetectorCommand}.
 */
export interface CreateDetectorCommandInput extends CreateDetectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateDetectorCommand}.
 */
export interface CreateDetectorCommandOutput extends CreateDetectorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a single Amazon GuardDuty detector. A detector is a resource that represents the
 *       GuardDuty service. To start using GuardDuty, you must create a detector in each Region where
 *       you enable the service. You can have only one detector per account per Region. All data
 *       sources are enabled in a new detector by default.</p>
 *          <p>There might be regional differences because some data sources might not be
 *       available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 *       information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateDetectorCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateDetectorCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // CreateDetectorRequest
 *   Enable: true || false, // required
 *   ClientToken: "STRING_VALUE",
 *   FindingPublishingFrequency: "FIFTEEN_MINUTES" || "ONE_HOUR" || "SIX_HOURS",
 *   DataSources: { // DataSourceConfigurations
 *     S3Logs: { // S3LogsConfiguration
 *       Enable: true || false, // required
 *     },
 *     Kubernetes: { // KubernetesConfiguration
 *       AuditLogs: { // KubernetesAuditLogsConfiguration
 *         Enable: true || false, // required
 *       },
 *     },
 *     MalwareProtection: { // MalwareProtectionConfiguration
 *       ScanEc2InstanceWithFindings: { // ScanEc2InstanceWithFindings
 *         EbsVolumes: true || false,
 *       },
 *     },
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Features: [ // DetectorFeatureConfigurations
 *     { // DetectorFeatureConfiguration
 *       Name: "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "EKS_RUNTIME_MONITORING" || "LAMBDA_NETWORK_LOGS",
 *       Status: "ENABLED" || "DISABLED",
 *       AdditionalConfiguration: [ // DetectorAdditionalConfigurations
 *         { // DetectorAdditionalConfiguration
 *           Name: "EKS_ADDON_MANAGEMENT",
 *           Status: "ENABLED" || "DISABLED",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateDetectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateDetectorResponse
 * //   DetectorId: "STRING_VALUE",
 * //   UnprocessedDataSources: { // UnprocessedDataSourcesResult
 * //     MalwareProtection: { // MalwareProtectionConfigurationResult
 * //       ScanEc2InstanceWithFindings: { // ScanEc2InstanceWithFindingsResult
 * //         EbsVolumes: { // EbsVolumesResult
 * //           Status: "ENABLED" || "DISABLED",
 * //           Reason: "STRING_VALUE",
 * //         },
 * //       },
 * //       ServiceRole: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDetectorCommandInput - {@link CreateDetectorCommandInput}
 * @returns {@link CreateDetectorCommandOutput}
 * @see {@link CreateDetectorCommandInput} for command's `input` shape.
 * @see {@link CreateDetectorCommandOutput} for command's `response` shape.
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
export class CreateDetectorCommand extends $Command<
  CreateDetectorCommandInput,
  CreateDetectorCommandOutput,
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
  constructor(readonly input: CreateDetectorCommandInput) {
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
  ): Handler<CreateDetectorCommandInput, CreateDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDetectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "CreateDetectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GuardDutyAPIService",
        operation: "CreateDetector",
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
  private serialize(input: CreateDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDetectorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDetectorCommandOutput> {
    return de_CreateDetectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
