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

import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { UpdateDetectorRequest, UpdateDetectorResponse } from "../models/models_1";
import { de_UpdateDetectorCommand, se_UpdateDetectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDetectorCommand}.
 */
export interface UpdateDetectorCommandInput extends UpdateDetectorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDetectorCommand}.
 */
export interface UpdateDetectorCommandOutput extends UpdateDetectorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the Amazon GuardDuty detector specified by the detectorId.</p>
 *          <p>There might be regional differences because some data sources might not be
 *       available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 *       information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateDetectorCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateDetectorCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // UpdateDetectorRequest
 *   DetectorId: "STRING_VALUE", // required
 *   Enable: true || false,
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
 * const command = new UpdateDetectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDetectorCommandInput - {@link UpdateDetectorCommandInput}
 * @returns {@link UpdateDetectorCommandOutput}
 * @see {@link UpdateDetectorCommandInput} for command's `input` shape.
 * @see {@link UpdateDetectorCommandOutput} for command's `response` shape.
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
export class UpdateDetectorCommand extends $Command<
  UpdateDetectorCommandInput,
  UpdateDetectorCommandOutput,
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
  constructor(readonly input: UpdateDetectorCommandInput) {
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
  ): Handler<UpdateDetectorCommandInput, UpdateDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDetectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "UpdateDetectorCommand";
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
  private serialize(input: UpdateDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDetectorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDetectorCommandOutput> {
    return de_UpdateDetectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
