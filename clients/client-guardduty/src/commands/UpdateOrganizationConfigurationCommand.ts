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
import { UpdateOrganizationConfigurationRequest, UpdateOrganizationConfigurationResponse } from "../models/models_1";
import {
  de_UpdateOrganizationConfigurationCommand,
  se_UpdateOrganizationConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateOrganizationConfigurationCommand}.
 */
export interface UpdateOrganizationConfigurationCommandInput extends UpdateOrganizationConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOrganizationConfigurationCommand}.
 */
export interface UpdateOrganizationConfigurationCommandOutput
  extends UpdateOrganizationConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Configures the delegated administrator account with the provided values. You must provide
 *       a value for either <code>autoEnableOrganizationMembers</code> or <code>autoEnable</code>, but not both. </p>
 *          <p>There might be regional differences because some data sources might not be
 *       available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more
 *       information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateOrganizationConfigurationCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateOrganizationConfigurationCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // UpdateOrganizationConfigurationRequest
 *   DetectorId: "STRING_VALUE", // required
 *   AutoEnable: true || false,
 *   DataSources: { // OrganizationDataSourceConfigurations
 *     S3Logs: { // OrganizationS3LogsConfiguration
 *       AutoEnable: true || false, // required
 *     },
 *     Kubernetes: { // OrganizationKubernetesConfiguration
 *       AuditLogs: { // OrganizationKubernetesAuditLogsConfiguration
 *         AutoEnable: true || false, // required
 *       },
 *     },
 *     MalwareProtection: { // OrganizationMalwareProtectionConfiguration
 *       ScanEc2InstanceWithFindings: { // OrganizationScanEc2InstanceWithFindings
 *         EbsVolumes: { // OrganizationEbsVolumes
 *           AutoEnable: true || false,
 *         },
 *       },
 *     },
 *   },
 *   Features: [ // OrganizationFeaturesConfigurations
 *     { // OrganizationFeatureConfiguration
 *       Name: "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "EKS_RUNTIME_MONITORING" || "LAMBDA_NETWORK_LOGS",
 *       AutoEnable: "NEW" || "NONE" || "ALL",
 *       AdditionalConfiguration: [ // OrganizationAdditionalConfigurations
 *         { // OrganizationAdditionalConfiguration
 *           Name: "EKS_ADDON_MANAGEMENT",
 *           AutoEnable: "NEW" || "NONE" || "ALL",
 *         },
 *       ],
 *     },
 *   ],
 *   AutoEnableOrganizationMembers: "NEW" || "ALL" || "NONE",
 * };
 * const command = new UpdateOrganizationConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateOrganizationConfigurationCommandInput - {@link UpdateOrganizationConfigurationCommandInput}
 * @returns {@link UpdateOrganizationConfigurationCommandOutput}
 * @see {@link UpdateOrganizationConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateOrganizationConfigurationCommandOutput} for command's `response` shape.
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
export class UpdateOrganizationConfigurationCommand extends $Command<
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
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
  constructor(readonly input: UpdateOrganizationConfigurationCommandInput) {
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
  ): Handler<UpdateOrganizationConfigurationCommandInput, UpdateOrganizationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateOrganizationConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "UpdateOrganizationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GuardDutyAPIService",
        operation: "UpdateOrganizationConfiguration",
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
    input: UpdateOrganizationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateOrganizationConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateOrganizationConfigurationCommandOutput> {
    return de_UpdateOrganizationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
