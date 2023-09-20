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

import { ListAssetBundleExportJobsRequest, ListAssetBundleExportJobsResponse } from "../models/models_3";
import { de_ListAssetBundleExportJobsCommand, se_ListAssetBundleExportJobsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAssetBundleExportJobsCommand}.
 */
export interface ListAssetBundleExportJobsCommandInput extends ListAssetBundleExportJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssetBundleExportJobsCommand}.
 */
export interface ListAssetBundleExportJobsCommandOutput extends ListAssetBundleExportJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all asset bundle export jobs that have been taken place in the last 14 days. Jobs created more than 14 days ago are deleted forever and are not returned. If you are using the same job ID for multiple jobs, <code>ListAssetBundleExportJobs</code> only returns the most recent job that uses the repeated job ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListAssetBundleExportJobsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListAssetBundleExportJobsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // ListAssetBundleExportJobsRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListAssetBundleExportJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetBundleExportJobsResponse
 * //   AssetBundleExportJobSummaryList: [ // AssetBundleExportJobSummaryList
 * //     { // AssetBundleExportJobSummary
 * //       JobStatus: "QUEUED_FOR_IMMEDIATE_EXECUTION" || "IN_PROGRESS" || "SUCCESSFUL" || "FAILED",
 * //       Arn: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       AssetBundleExportJobId: "STRING_VALUE",
 * //       IncludeAllDependencies: true || false,
 * //       ExportFormat: "CLOUDFORMATION_JSON" || "QUICKSIGHT_JSON",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListAssetBundleExportJobsCommandInput - {@link ListAssetBundleExportJobsCommandInput}
 * @returns {@link ListAssetBundleExportJobsCommandOutput}
 * @see {@link ListAssetBundleExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListAssetBundleExportJobsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 */
export class ListAssetBundleExportJobsCommand extends $Command<
  ListAssetBundleExportJobsCommandInput,
  ListAssetBundleExportJobsCommandOutput,
  QuickSightClientResolvedConfig
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
  constructor(readonly input: ListAssetBundleExportJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssetBundleExportJobsCommandInput, ListAssetBundleExportJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAssetBundleExportJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "ListAssetBundleExportJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "QuickSight_20180401",
        operation: "ListAssetBundleExportJobs",
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
  private serialize(input: ListAssetBundleExportJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAssetBundleExportJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAssetBundleExportJobsCommandOutput> {
    return de_ListAssetBundleExportJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
