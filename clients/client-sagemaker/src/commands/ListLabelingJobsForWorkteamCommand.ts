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

import { ListLabelingJobsForWorkteamRequest, ListLabelingJobsForWorkteamResponse } from "../models/models_3";
import { de_ListLabelingJobsForWorkteamCommand, se_ListLabelingJobsForWorkteamCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLabelingJobsForWorkteamCommand}.
 */
export interface ListLabelingJobsForWorkteamCommandInput extends ListLabelingJobsForWorkteamRequest {}
/**
 * @public
 *
 * The output of {@link ListLabelingJobsForWorkteamCommand}.
 */
export interface ListLabelingJobsForWorkteamCommandOutput
  extends ListLabelingJobsForWorkteamResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of labeling jobs assigned to a specified work team.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListLabelingJobsForWorkteamCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListLabelingJobsForWorkteamCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListLabelingJobsForWorkteamRequest
 *   WorkteamArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   JobReferenceCodeContains: "STRING_VALUE",
 *   SortBy: "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListLabelingJobsForWorkteamCommand(input);
 * const response = await client.send(command);
 * // { // ListLabelingJobsForWorkteamResponse
 * //   LabelingJobSummaryList: [ // LabelingJobForWorkteamSummaryList // required
 * //     { // LabelingJobForWorkteamSummary
 * //       LabelingJobName: "STRING_VALUE",
 * //       JobReferenceCode: "STRING_VALUE", // required
 * //       WorkRequesterAccountId: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LabelCounters: { // LabelCountersForWorkteam
 * //         HumanLabeled: Number("int"),
 * //         PendingHuman: Number("int"),
 * //         Total: Number("int"),
 * //       },
 * //       NumberOfHumanWorkersPerDataObject: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLabelingJobsForWorkteamCommandInput - {@link ListLabelingJobsForWorkteamCommandInput}
 * @returns {@link ListLabelingJobsForWorkteamCommandOutput}
 * @see {@link ListLabelingJobsForWorkteamCommandInput} for command's `input` shape.
 * @see {@link ListLabelingJobsForWorkteamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListLabelingJobsForWorkteamCommand extends $Command<
  ListLabelingJobsForWorkteamCommandInput,
  ListLabelingJobsForWorkteamCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: ListLabelingJobsForWorkteamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLabelingJobsForWorkteamCommandInput, ListLabelingJobsForWorkteamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLabelingJobsForWorkteamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListLabelingJobsForWorkteamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ListLabelingJobsForWorkteam",
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
  private serialize(input: ListLabelingJobsForWorkteamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLabelingJobsForWorkteamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListLabelingJobsForWorkteamCommandOutput> {
    return de_ListLabelingJobsForWorkteamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
