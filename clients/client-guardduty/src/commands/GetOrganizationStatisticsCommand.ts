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
import { GetOrganizationStatisticsResponse } from "../models/models_0";
import { de_GetOrganizationStatisticsCommand, se_GetOrganizationStatisticsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetOrganizationStatisticsCommand}.
 */
export interface GetOrganizationStatisticsCommandInput {}
/**
 * @public
 *
 * The output of {@link GetOrganizationStatisticsCommand}.
 */
export interface GetOrganizationStatisticsCommandOutput extends GetOrganizationStatisticsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves how many active member accounts
 *       in your Amazon Web Services organization have
 *       each feature enabled within GuardDuty. Only a delegated GuardDuty administrator of an organization can run this API.</p>
 *          <p>When you create a new Amazon Web Services organization, it might take up to 24
 *       hours to generate the statistics for the entire organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetOrganizationStatisticsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetOrganizationStatisticsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = {};
 * const command = new GetOrganizationStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetOrganizationStatisticsResponse
 * //   OrganizationDetails: { // OrganizationDetails
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     OrganizationStatistics: { // OrganizationStatistics
 * //       TotalAccountsCount: Number("int"),
 * //       MemberAccountsCount: Number("int"),
 * //       ActiveAccountsCount: Number("int"),
 * //       EnabledAccountsCount: Number("int"),
 * //       CountByFeature: [ // OrganizationFeatureStatisticsResults
 * //         { // OrganizationFeatureStatistics
 * //           Name: "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "EKS_RUNTIME_MONITORING" || "LAMBDA_NETWORK_LOGS" || "RUNTIME_MONITORING",
 * //           EnabledAccountsCount: Number("int"),
 * //           AdditionalConfiguration: [ // OrganizationFeatureStatisticsAdditionalConfigurations
 * //             { // OrganizationFeatureStatisticsAdditionalConfiguration
 * //               Name: "EKS_ADDON_MANAGEMENT" || "ECS_FARGATE_AGENT_MANAGEMENT",
 * //               EnabledAccountsCount: Number("int"),
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOrganizationStatisticsCommandInput - {@link GetOrganizationStatisticsCommandInput}
 * @returns {@link GetOrganizationStatisticsCommandOutput}
 * @see {@link GetOrganizationStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationStatisticsCommandOutput} for command's `response` shape.
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
export class GetOrganizationStatisticsCommand extends $Command<
  GetOrganizationStatisticsCommandInput,
  GetOrganizationStatisticsCommandOutput,
  GuardDutyClientResolvedConfig
> {
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
  constructor(readonly input: GetOrganizationStatisticsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOrganizationStatisticsCommandInput, GetOrganizationStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetOrganizationStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "GetOrganizationStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GuardDutyAPIService",
        operation: "GetOrganizationStatistics",
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
  private serialize(input: GetOrganizationStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetOrganizationStatisticsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetOrganizationStatisticsCommandOutput> {
    return de_GetOrganizationStatisticsCommand(output, context);
  }
}
