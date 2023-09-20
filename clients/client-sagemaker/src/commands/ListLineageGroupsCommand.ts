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

import { ListLineageGroupsRequest, ListLineageGroupsResponse } from "../models/models_3";
import { de_ListLineageGroupsCommand, se_ListLineageGroupsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLineageGroupsCommand}.
 */
export interface ListLineageGroupsCommandInput extends ListLineageGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListLineageGroupsCommand}.
 */
export interface ListLineageGroupsCommandOutput extends ListLineageGroupsResponse, __MetadataBearer {}

/**
 * @public
 * <p>A list of lineage groups shared with your Amazon Web Services account.
 *          For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/xaccount-lineage-tracking.html">
 *             Cross-Account Lineage Tracking </a> in the <i>Amazon SageMaker Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListLineageGroupsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListLineageGroupsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListLineageGroupsRequest
 *   CreatedAfter: new Date("TIMESTAMP"),
 *   CreatedBefore: new Date("TIMESTAMP"),
 *   SortBy: "Name" || "CreationTime",
 *   SortOrder: "Ascending" || "Descending",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListLineageGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListLineageGroupsResponse
 * //   LineageGroupSummaries: [ // LineageGroupSummaries
 * //     { // LineageGroupSummary
 * //       LineageGroupArn: "STRING_VALUE",
 * //       LineageGroupName: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLineageGroupsCommandInput - {@link ListLineageGroupsCommandInput}
 * @returns {@link ListLineageGroupsCommandOutput}
 * @see {@link ListLineageGroupsCommandInput} for command's `input` shape.
 * @see {@link ListLineageGroupsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListLineageGroupsCommand extends $Command<
  ListLineageGroupsCommandInput,
  ListLineageGroupsCommandOutput,
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
  constructor(readonly input: ListLineageGroupsCommandInput) {
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
  ): Handler<ListLineageGroupsCommandInput, ListLineageGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLineageGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListLineageGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ListLineageGroups",
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
  private serialize(input: ListLineageGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLineageGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLineageGroupsCommandOutput> {
    return de_ListLineageGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
