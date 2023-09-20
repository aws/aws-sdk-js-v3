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
import { UpdateMemberDetectorsRequest, UpdateMemberDetectorsResponse } from "../models/models_1";
import { de_UpdateMemberDetectorsCommand, se_UpdateMemberDetectorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateMemberDetectorsCommand}.
 */
export interface UpdateMemberDetectorsCommandInput extends UpdateMemberDetectorsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMemberDetectorsCommand}.
 */
export interface UpdateMemberDetectorsCommandOutput extends UpdateMemberDetectorsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Contains information on member accounts to be updated.</p>
 *          <p>There might be regional differences because some data sources might not be
 *       available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 *       information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateMemberDetectorsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateMemberDetectorsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // UpdateMemberDetectorsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   AccountIds: [ // AccountIds // required
 *     "STRING_VALUE",
 *   ],
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
 *   Features: [ // MemberFeaturesConfigurations
 *     { // MemberFeaturesConfiguration
 *       Name: "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "EKS_RUNTIME_MONITORING" || "LAMBDA_NETWORK_LOGS",
 *       Status: "ENABLED" || "DISABLED",
 *       AdditionalConfiguration: [ // MemberAdditionalConfigurations
 *         { // MemberAdditionalConfiguration
 *           Name: "EKS_ADDON_MANAGEMENT",
 *           Status: "ENABLED" || "DISABLED",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateMemberDetectorsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMemberDetectorsResponse
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
 * @param UpdateMemberDetectorsCommandInput - {@link UpdateMemberDetectorsCommandInput}
 * @returns {@link UpdateMemberDetectorsCommandOutput}
 * @see {@link UpdateMemberDetectorsCommandInput} for command's `input` shape.
 * @see {@link UpdateMemberDetectorsCommandOutput} for command's `response` shape.
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
export class UpdateMemberDetectorsCommand extends $Command<
  UpdateMemberDetectorsCommandInput,
  UpdateMemberDetectorsCommandOutput,
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
  constructor(readonly input: UpdateMemberDetectorsCommandInput) {
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
  ): Handler<UpdateMemberDetectorsCommandInput, UpdateMemberDetectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateMemberDetectorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "UpdateMemberDetectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GuardDutyAPIService",
        operation: "UpdateMemberDetectors",
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
  private serialize(input: UpdateMemberDetectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateMemberDetectorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMemberDetectorsCommandOutput> {
    return de_UpdateMemberDetectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
