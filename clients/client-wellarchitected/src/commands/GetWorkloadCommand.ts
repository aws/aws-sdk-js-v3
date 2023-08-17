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

import { GetWorkloadInput, GetWorkloadOutput } from "../models/models_0";
import { de_GetWorkloadCommand, se_GetWorkloadCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetWorkloadCommand}.
 */
export interface GetWorkloadCommandInput extends GetWorkloadInput {}
/**
 * @public
 *
 * The output of {@link GetWorkloadCommand}.
 */
export interface GetWorkloadCommandOutput extends GetWorkloadOutput, __MetadataBearer {}

/**
 * @public
 * <p>Get an existing workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetWorkloadCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetWorkloadCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // GetWorkloadInput
 *   WorkloadId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkloadCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkloadOutput
 * //   Workload: { // Workload
 * //     WorkloadId: "STRING_VALUE",
 * //     WorkloadArn: "STRING_VALUE",
 * //     WorkloadName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Environment: "PRODUCTION" || "PREPRODUCTION",
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     AccountIds: [ // WorkloadAccountIds
 * //       "STRING_VALUE",
 * //     ],
 * //     AwsRegions: [ // WorkloadAwsRegions
 * //       "STRING_VALUE",
 * //     ],
 * //     NonAwsRegions: [ // WorkloadNonAwsRegions
 * //       "STRING_VALUE",
 * //     ],
 * //     ArchitecturalDesign: "STRING_VALUE",
 * //     ReviewOwner: "STRING_VALUE",
 * //     ReviewRestrictionDate: new Date("TIMESTAMP"),
 * //     IsReviewOwnerUpdateAcknowledged: true || false,
 * //     IndustryType: "STRING_VALUE",
 * //     Industry: "STRING_VALUE",
 * //     Notes: "STRING_VALUE",
 * //     ImprovementStatus: "NOT_APPLICABLE" || "NOT_STARTED" || "IN_PROGRESS" || "COMPLETE" || "RISK_ACKNOWLEDGED",
 * //     RiskCounts: { // RiskCounts
 * //       "<keys>": Number("int"),
 * //     },
 * //     PillarPriorities: [ // WorkloadPillarPriorities
 * //       "STRING_VALUE",
 * //     ],
 * //     Lenses: [ // WorkloadLenses
 * //       "STRING_VALUE",
 * //     ],
 * //     Owner: "STRING_VALUE",
 * //     ShareInvitationId: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     DiscoveryConfig: { // WorkloadDiscoveryConfig
 * //       TrustedAdvisorIntegrationStatus: "ENABLED" || "DISABLED",
 * //       WorkloadResourceDefinition: [ // WorkloadResourceDefinition
 * //         "WORKLOAD_METADATA" || "APP_REGISTRY",
 * //       ],
 * //     },
 * //     Applications: [ // WorkloadApplications
 * //       "STRING_VALUE",
 * //     ],
 * //     Profiles: [ // WorkloadProfiles
 * //       { // WorkloadProfile
 * //         ProfileArn: "STRING_VALUE",
 * //         ProfileVersion: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PrioritizedRiskCounts: {
 * //       "<keys>": Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWorkloadCommandInput - {@link GetWorkloadCommandInput}
 * @returns {@link GetWorkloadCommandOutput}
 * @see {@link GetWorkloadCommandInput} for command's `input` shape.
 * @see {@link GetWorkloadCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 */
export class GetWorkloadCommand extends $Command<
  GetWorkloadCommandInput,
  GetWorkloadCommandOutput,
  WellArchitectedClientResolvedConfig
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
  constructor(readonly input: GetWorkloadCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetWorkloadCommandInput, GetWorkloadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetWorkloadCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "GetWorkloadCommand";
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
  private serialize(input: GetWorkloadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetWorkloadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetWorkloadCommandOutput> {
    return de_GetWorkloadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
