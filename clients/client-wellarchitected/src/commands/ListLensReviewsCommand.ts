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

import { ListLensReviewsInput, ListLensReviewsOutput } from "../models/models_0";
import { de_ListLensReviewsCommand, se_ListLensReviewsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLensReviewsCommand}.
 */
export interface ListLensReviewsCommandInput extends ListLensReviewsInput {}
/**
 * @public
 *
 * The output of {@link ListLensReviewsCommand}.
 */
export interface ListLensReviewsCommandOutput extends ListLensReviewsOutput, __MetadataBearer {}

/**
 * @public
 * <p>List lens reviews for a particular workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListLensReviewsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListLensReviewsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // ListLensReviewsInput
 *   WorkloadId: "STRING_VALUE", // required
 *   MilestoneNumber: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListLensReviewsCommand(input);
 * const response = await client.send(command);
 * // { // ListLensReviewsOutput
 * //   WorkloadId: "STRING_VALUE",
 * //   MilestoneNumber: Number("int"),
 * //   LensReviewSummaries: [ // LensReviewSummaries
 * //     { // LensReviewSummary
 * //       LensAlias: "STRING_VALUE",
 * //       LensArn: "STRING_VALUE",
 * //       LensVersion: "STRING_VALUE",
 * //       LensName: "STRING_VALUE",
 * //       LensStatus: "CURRENT" || "NOT_CURRENT" || "DEPRECATED" || "DELETED" || "UNSHARED",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       RiskCounts: { // RiskCounts
 * //         "<keys>": Number("int"),
 * //       },
 * //       Profiles: [ // WorkloadProfiles
 * //         { // WorkloadProfile
 * //           ProfileArn: "STRING_VALUE",
 * //           ProfileVersion: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PrioritizedRiskCounts: {
 * //         "<keys>": Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLensReviewsCommandInput - {@link ListLensReviewsCommandInput}
 * @returns {@link ListLensReviewsCommandOutput}
 * @see {@link ListLensReviewsCommandInput} for command's `input` shape.
 * @see {@link ListLensReviewsCommandOutput} for command's `response` shape.
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
export class ListLensReviewsCommand extends $Command<
  ListLensReviewsCommandInput,
  ListLensReviewsCommandOutput,
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
  constructor(readonly input: ListLensReviewsCommandInput) {
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
  ): Handler<ListLensReviewsCommandInput, ListLensReviewsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLensReviewsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "ListLensReviewsCommand";
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
  private serialize(input: ListLensReviewsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLensReviewsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLensReviewsCommandOutput> {
    return de_ListLensReviewsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
