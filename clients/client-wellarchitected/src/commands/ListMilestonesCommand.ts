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

import { ListMilestonesInput, ListMilestonesOutput } from "../models/models_0";
import { de_ListMilestonesCommand, se_ListMilestonesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMilestonesCommand}.
 */
export interface ListMilestonesCommandInput extends ListMilestonesInput {}
/**
 * @public
 *
 * The output of {@link ListMilestonesCommand}.
 */
export interface ListMilestonesCommandOutput extends ListMilestonesOutput, __MetadataBearer {}

/**
 * @public
 * <p>List all milestones for an existing workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListMilestonesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListMilestonesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // ListMilestonesInput
 *   WorkloadId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMilestonesCommand(input);
 * const response = await client.send(command);
 * // { // ListMilestonesOutput
 * //   WorkloadId: "STRING_VALUE",
 * //   MilestoneSummaries: [ // MilestoneSummaries
 * //     { // MilestoneSummary
 * //       MilestoneNumber: Number("int"),
 * //       MilestoneName: "STRING_VALUE",
 * //       RecordedAt: new Date("TIMESTAMP"),
 * //       WorkloadSummary: { // WorkloadSummary
 * //         WorkloadId: "STRING_VALUE",
 * //         WorkloadArn: "STRING_VALUE",
 * //         WorkloadName: "STRING_VALUE",
 * //         Owner: "STRING_VALUE",
 * //         UpdatedAt: new Date("TIMESTAMP"),
 * //         Lenses: [ // WorkloadLenses
 * //           "STRING_VALUE",
 * //         ],
 * //         RiskCounts: { // RiskCounts
 * //           "<keys>": Number("int"),
 * //         },
 * //         ImprovementStatus: "NOT_APPLICABLE" || "NOT_STARTED" || "IN_PROGRESS" || "COMPLETE" || "RISK_ACKNOWLEDGED",
 * //         Profiles: [ // WorkloadProfiles
 * //           { // WorkloadProfile
 * //             ProfileArn: "STRING_VALUE",
 * //             ProfileVersion: "STRING_VALUE",
 * //           },
 * //         ],
 * //         PrioritizedRiskCounts: {
 * //           "<keys>": Number("int"),
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMilestonesCommandInput - {@link ListMilestonesCommandInput}
 * @returns {@link ListMilestonesCommandOutput}
 * @see {@link ListMilestonesCommandInput} for command's `input` shape.
 * @see {@link ListMilestonesCommandOutput} for command's `response` shape.
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
export class ListMilestonesCommand extends $Command<
  ListMilestonesCommandInput,
  ListMilestonesCommandOutput,
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
  constructor(readonly input: ListMilestonesCommandInput) {
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
  ): Handler<ListMilestonesCommandInput, ListMilestonesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMilestonesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "ListMilestonesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WellArchitectedApiServiceLambda",
        operation: "ListMilestones",
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
  private serialize(input: ListMilestonesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMilestonesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMilestonesCommandOutput> {
    return de_ListMilestonesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
