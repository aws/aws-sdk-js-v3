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

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { GetCostEstimationRequest, GetCostEstimationResponse } from "../models/models_0";
import { de_GetCostEstimationCommand, se_GetCostEstimationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCostEstimationCommand}.
 */
export interface GetCostEstimationCommandInput extends GetCostEstimationRequest {}
/**
 * @public
 *
 * The output of {@link GetCostEstimationCommand}.
 */
export interface GetCostEstimationCommandOutput extends GetCostEstimationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns an estimate of the monthly cost for DevOps Guru to analyze your Amazon Web Services resources.
 * 			For more information,
 * 			see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your
 * 			Amazon DevOps Guru costs</a> and
 * 			<a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, GetCostEstimationCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, GetCostEstimationCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const input = { // GetCostEstimationRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetCostEstimationCommand(input);
 * const response = await client.send(command);
 * // { // GetCostEstimationResponse
 * //   ResourceCollection: { // CostEstimationResourceCollectionFilter
 * //     CloudFormation: { // CloudFormationCostEstimationResourceCollectionFilter
 * //       StackNames: [ // CostEstimationStackNames
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Tags: [ // TagCostEstimationResourceCollectionFilters
 * //       { // TagCostEstimationResourceCollectionFilter
 * //         AppBoundaryKey: "STRING_VALUE", // required
 * //         TagValues: [ // CostEstimationTagValues // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   Status: "ONGOING" || "COMPLETED",
 * //   Costs: [ // ServiceResourceCosts
 * //     { // ServiceResourceCost
 * //       Type: "STRING_VALUE",
 * //       State: "ACTIVE" || "INACTIVE",
 * //       Count: Number("int"),
 * //       UnitCost: Number("double"),
 * //       Cost: Number("double"),
 * //     },
 * //   ],
 * //   TimeRange: { // CostEstimationTimeRange
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //   },
 * //   TotalCost: Number("double"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCostEstimationCommandInput - {@link GetCostEstimationCommandInput}
 * @returns {@link GetCostEstimationCommandOutput}
 * @see {@link GetCostEstimationCommandInput} for command's `input` shape.
 * @see {@link GetCostEstimationCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource could not be found</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 */
export class GetCostEstimationCommand extends $Command<
  GetCostEstimationCommandInput,
  GetCostEstimationCommandOutput,
  DevOpsGuruClientResolvedConfig
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
  constructor(readonly input: GetCostEstimationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCostEstimationCommandInput, GetCostEstimationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCostEstimationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "GetCostEstimationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CapstoneControlPlaneService",
        operation: "GetCostEstimation",
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
  private serialize(input: GetCostEstimationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCostEstimationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCostEstimationCommandOutput> {
    return de_GetCostEstimationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
