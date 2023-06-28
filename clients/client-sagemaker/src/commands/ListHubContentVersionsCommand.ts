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

import { ListHubContentVersionsRequest, ListHubContentVersionsResponse } from "../models/models_3";
import { de_ListHubContentVersionsCommand, se_ListHubContentVersionsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListHubContentVersionsCommand}.
 */
export interface ListHubContentVersionsCommandInput extends ListHubContentVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListHubContentVersionsCommand}.
 */
export interface ListHubContentVersionsCommandOutput extends ListHubContentVersionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>List hub content versions.</p>
 *          <note>
 *             <p>Hub APIs are only callable through SageMaker Studio.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListHubContentVersionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListHubContentVersionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListHubContentVersionsRequest
 *   HubName: "STRING_VALUE", // required
 *   HubContentType: "Model" || "Notebook", // required
 *   HubContentName: "STRING_VALUE", // required
 *   MinVersion: "STRING_VALUE",
 *   MaxSchemaVersion: "STRING_VALUE",
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   SortBy: "HubContentName" || "CreationTime" || "HubContentStatus",
 *   SortOrder: "Ascending" || "Descending",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListHubContentVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListHubContentVersionsResponse
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
 * @param ListHubContentVersionsCommandInput - {@link ListHubContentVersionsCommandInput}
 * @returns {@link ListHubContentVersionsCommandOutput}
 * @see {@link ListHubContentVersionsCommandInput} for command's `input` shape.
 * @see {@link ListHubContentVersionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListHubContentVersionsCommand extends $Command<
  ListHubContentVersionsCommandInput,
  ListHubContentVersionsCommandOutput,
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
  constructor(readonly input: ListHubContentVersionsCommandInput) {
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
  ): Handler<ListHubContentVersionsCommandInput, ListHubContentVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListHubContentVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListHubContentVersionsCommand";
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
  private serialize(input: ListHubContentVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListHubContentVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHubContentVersionsCommandOutput> {
    return de_ListHubContentVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
