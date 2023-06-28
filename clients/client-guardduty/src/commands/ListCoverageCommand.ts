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
import { ListCoverageRequest, ListCoverageResponse } from "../models/models_0";
import { de_ListCoverageCommand, se_ListCoverageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCoverageCommand}.
 */
export interface ListCoverageCommandInput extends ListCoverageRequest {}
/**
 * @public
 *
 * The output of {@link ListCoverageCommand}.
 */
export interface ListCoverageCommandOutput extends ListCoverageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists coverage details for your GuardDuty account. If you're a GuardDuty administrator, you can
 *       retrieve all resources associated with the active member accounts in your organization.</p>
 *          <p>Make sure the accounts have EKS Runtime Monitoring enabled and GuardDuty agent running on
 *       their EKS nodes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListCoverageCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListCoverageCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // ListCoverageRequest
 *   DetectorId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   FilterCriteria: { // CoverageFilterCriteria
 *     FilterCriterion: [ // CoverageFilterCriterionList
 *       { // CoverageFilterCriterion
 *         CriterionKey: "ACCOUNT_ID" || "CLUSTER_NAME" || "RESOURCE_TYPE" || "COVERAGE_STATUS" || "ADDON_VERSION",
 *         FilterCondition: { // CoverageFilterCondition
 *           Equals: [ // Equals
 *             "STRING_VALUE",
 *           ],
 *           NotEquals: [ // NotEquals
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     ],
 *   },
 *   SortCriteria: { // CoverageSortCriteria
 *     AttributeName: "ACCOUNT_ID" || "CLUSTER_NAME" || "COVERAGE_STATUS" || "ISSUE" || "ADDON_VERSION" || "UPDATED_AT",
 *     OrderBy: "ASC" || "DESC",
 *   },
 * };
 * const command = new ListCoverageCommand(input);
 * const response = await client.send(command);
 * // { // ListCoverageResponse
 * //   Resources: [ // CoverageResources // required
 * //     { // CoverageResource
 * //       ResourceId: "STRING_VALUE",
 * //       DetectorId: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       ResourceDetails: { // CoverageResourceDetails
 * //         EksClusterDetails: { // CoverageEksClusterDetails
 * //           ClusterName: "STRING_VALUE",
 * //           CoveredNodes: Number("long"),
 * //           CompatibleNodes: Number("long"),
 * //           AddonDetails: { // AddonDetails
 * //             AddonVersion: "STRING_VALUE",
 * //             AddonStatus: "STRING_VALUE",
 * //           },
 * //         },
 * //         ResourceType: "EKS",
 * //       },
 * //       CoverageStatus: "HEALTHY" || "UNHEALTHY",
 * //       Issue: "STRING_VALUE",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCoverageCommandInput - {@link ListCoverageCommandInput}
 * @returns {@link ListCoverageCommandOutput}
 * @see {@link ListCoverageCommandInput} for command's `input` shape.
 * @see {@link ListCoverageCommandOutput} for command's `response` shape.
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
export class ListCoverageCommand extends $Command<
  ListCoverageCommandInput,
  ListCoverageCommandOutput,
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
  constructor(readonly input: ListCoverageCommandInput) {
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
  ): Handler<ListCoverageCommandInput, ListCoverageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListCoverageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "ListCoverageCommand";
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
  private serialize(input: ListCoverageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCoverageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCoverageCommandOutput> {
    return de_ListCoverageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
