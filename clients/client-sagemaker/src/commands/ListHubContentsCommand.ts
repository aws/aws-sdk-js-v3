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

import { ListHubContentsRequest, ListHubContentsResponse } from "../models/models_3";
import { de_ListHubContentsCommand, se_ListHubContentsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListHubContentsCommand}.
 */
export interface ListHubContentsCommandInput extends ListHubContentsRequest {}
/**
 * @public
 *
 * The output of {@link ListHubContentsCommand}.
 */
export interface ListHubContentsCommandOutput extends ListHubContentsResponse, __MetadataBearer {}

/**
 * @public
 * <p>List the contents of a hub.</p>
 *          <note>
 *             <p>Hub APIs are only callable through SageMaker Studio.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListHubContentsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListHubContentsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListHubContentsRequest
 *   HubName: "STRING_VALUE", // required
 *   HubContentType: "Model" || "Notebook", // required
 *   NameContains: "STRING_VALUE",
 *   MaxSchemaVersion: "STRING_VALUE",
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   SortBy: "HubContentName" || "CreationTime" || "HubContentStatus",
 *   SortOrder: "Ascending" || "Descending",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListHubContentsCommand(input);
 * const response = await client.send(command);
 * // { // ListHubContentsResponse
 * //   HubContentSummaries: [ // HubContentInfoList // required
 * //     { // HubContentInfo
 * //       HubContentName: "STRING_VALUE", // required
 * //       HubContentArn: "STRING_VALUE", // required
 * //       HubContentVersion: "STRING_VALUE", // required
 * //       HubContentType: "Model" || "Notebook", // required
 * //       DocumentSchemaVersion: "STRING_VALUE", // required
 * //       HubContentDisplayName: "STRING_VALUE",
 * //       HubContentDescription: "STRING_VALUE",
 * //       HubContentSearchKeywords: [ // HubContentSearchKeywordList
 * //         "STRING_VALUE",
 * //       ],
 * //       HubContentStatus: "Available" || "Importing" || "Deleting" || "ImportFailed" || "DeleteFailed", // required
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHubContentsCommandInput - {@link ListHubContentsCommandInput}
 * @returns {@link ListHubContentsCommandOutput}
 * @see {@link ListHubContentsCommandInput} for command's `input` shape.
 * @see {@link ListHubContentsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListHubContentsCommand extends $Command<
  ListHubContentsCommandInput,
  ListHubContentsCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: ListHubContentsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListHubContentsCommandInput, ListHubContentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListHubContentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListHubContentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "ListHubContents",
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
  private serialize(input: ListHubContentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListHubContentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHubContentsCommandOutput> {
    return de_ListHubContentsCommand(output, context);
  }
}
