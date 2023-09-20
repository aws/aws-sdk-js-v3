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

import { ListModelCardExportJobsRequest, ListModelCardExportJobsResponse } from "../models/models_3";
import { de_ListModelCardExportJobsCommand, se_ListModelCardExportJobsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListModelCardExportJobsCommand}.
 */
export interface ListModelCardExportJobsCommandInput extends ListModelCardExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListModelCardExportJobsCommand}.
 */
export interface ListModelCardExportJobsCommandOutput extends ListModelCardExportJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>List the export jobs for the Amazon SageMaker Model Card.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelCardExportJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListModelCardExportJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListModelCardExportJobsRequest
 *   ModelCardName: "STRING_VALUE", // required
 *   ModelCardVersion: Number("int"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   ModelCardExportJobNameContains: "STRING_VALUE",
 *   StatusEquals: "InProgress" || "Completed" || "Failed",
 *   SortBy: "Name" || "CreationTime" || "Status",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListModelCardExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListModelCardExportJobsResponse
 * //   ModelCardExportJobSummaries: [ // ModelCardExportJobSummaryList // required
 * //     { // ModelCardExportJobSummary
 * //       ModelCardExportJobName: "STRING_VALUE", // required
 * //       ModelCardExportJobArn: "STRING_VALUE", // required
 * //       Status: "InProgress" || "Completed" || "Failed", // required
 * //       ModelCardName: "STRING_VALUE", // required
 * //       ModelCardVersion: Number("int"), // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       LastModifiedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListModelCardExportJobsCommandInput - {@link ListModelCardExportJobsCommandInput}
 * @returns {@link ListModelCardExportJobsCommandOutput}
 * @see {@link ListModelCardExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListModelCardExportJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListModelCardExportJobsCommand extends $Command<
  ListModelCardExportJobsCommandInput,
  ListModelCardExportJobsCommandOutput,
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
  constructor(readonly input: ListModelCardExportJobsCommandInput) {
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
  ): Handler<ListModelCardExportJobsCommandInput, ListModelCardExportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListModelCardExportJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListModelCardExportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ListModelCardExportJobs",
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
  private serialize(input: ListModelCardExportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListModelCardExportJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListModelCardExportJobsCommandOutput> {
    return de_ListModelCardExportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
