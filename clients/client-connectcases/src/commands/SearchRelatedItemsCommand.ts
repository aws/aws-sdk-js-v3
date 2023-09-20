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

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { SearchRelatedItemsRequest, SearchRelatedItemsResponse } from "../models/models_0";
import { de_SearchRelatedItemsCommand, se_SearchRelatedItemsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchRelatedItemsCommand}.
 */
export interface SearchRelatedItemsCommandInput extends SearchRelatedItemsRequest {}
/**
 * @public
 *
 * The output of {@link SearchRelatedItemsCommand}.
 */
export interface SearchRelatedItemsCommandOutput extends SearchRelatedItemsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Searches for related items that are associated with a case.</p>
 *          <note>
 *             <p>If no filters are provided, this returns all related items associated with a
 *         case.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, SearchRelatedItemsCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, SearchRelatedItemsCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const input = { // SearchRelatedItemsRequest
 *   domainId: "STRING_VALUE", // required
 *   caseId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filters: [ // RelatedItemFilterList
 *     { // RelatedItemTypeFilter Union: only one key present
 *       contact: { // ContactFilter
 *         channel: [ // ChannelList
 *           "STRING_VALUE",
 *         ],
 *         contactArn: "STRING_VALUE",
 *       },
 *       comment: {},
 *     },
 *   ],
 * };
 * const command = new SearchRelatedItemsCommand(input);
 * const response = await client.send(command);
 * // { // SearchRelatedItemsResponse
 * //   nextToken: "STRING_VALUE",
 * //   relatedItems: [ // SearchRelatedItemsResponseItemList // required
 * //     { // SearchRelatedItemsResponseItem
 * //       relatedItemId: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       associationTime: new Date("TIMESTAMP"), // required
 * //       content: { // RelatedItemContent Union: only one key present
 * //         contact: { // ContactContent
 * //           contactArn: "STRING_VALUE", // required
 * //           channel: "STRING_VALUE", // required
 * //           connectedToSystemTime: new Date("TIMESTAMP"), // required
 * //         },
 * //         comment: { // CommentContent
 * //           body: "STRING_VALUE", // required
 * //           contentType: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchRelatedItemsCommandInput - {@link SearchRelatedItemsCommandInput}
 * @returns {@link SearchRelatedItemsCommandOutput}
 * @see {@link SearchRelatedItemsCommandInput} for command's `input` shape.
 * @see {@link SearchRelatedItemsCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 */
export class SearchRelatedItemsCommand extends $Command<
  SearchRelatedItemsCommandInput,
  SearchRelatedItemsCommandOutput,
  ConnectCasesClientResolvedConfig
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
  constructor(readonly input: SearchRelatedItemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectCasesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchRelatedItemsCommandInput, SearchRelatedItemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchRelatedItemsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCasesClient";
    const commandName = "SearchRelatedItemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectCases",
        operation: "SearchRelatedItems",
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
  private serialize(input: SearchRelatedItemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchRelatedItemsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchRelatedItemsCommandOutput> {
    return de_SearchRelatedItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
