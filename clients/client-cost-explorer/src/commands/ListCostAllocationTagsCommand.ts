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

import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { ListCostAllocationTagsRequest, ListCostAllocationTagsResponse } from "../models/models_0";
import { de_ListCostAllocationTagsCommand, se_ListCostAllocationTagsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCostAllocationTagsCommand}.
 */
export interface ListCostAllocationTagsCommandInput extends ListCostAllocationTagsRequest {}
/**
 * @public
 *
 * The output of {@link ListCostAllocationTagsCommand}.
 */
export interface ListCostAllocationTagsCommandOutput extends ListCostAllocationTagsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get a list of cost allocation tags. All inputs in the API are optional and serve as
 *       filters. By default, all cost allocation tags are returned. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, ListCostAllocationTagsCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, ListCostAllocationTagsCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const input = { // ListCostAllocationTagsRequest
 *   Status: "Active" || "Inactive",
 *   TagKeys: [ // CostAllocationTagKeyList
 *     "STRING_VALUE",
 *   ],
 *   Type: "AWSGenerated" || "UserDefined",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCostAllocationTagsCommand(input);
 * const response = await client.send(command);
 * // { // ListCostAllocationTagsResponse
 * //   CostAllocationTags: [ // CostAllocationTagList
 * //     { // CostAllocationTag
 * //       TagKey: "STRING_VALUE", // required
 * //       Type: "AWSGenerated" || "UserDefined", // required
 * //       Status: "Active" || "Inactive", // required
 * //       LastUpdatedDate: "STRING_VALUE",
 * //       LastUsedDate: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCostAllocationTagsCommandInput - {@link ListCostAllocationTagsCommandInput}
 * @returns {@link ListCostAllocationTagsCommandOutput}
 * @see {@link ListCostAllocationTagsCommandInput} for command's `input` shape.
 * @see {@link ListCostAllocationTagsCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for CostExplorerClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The pagination token is invalid. Try again without a pagination token.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You made too many calls in a short period of time. Try again later.</p>
 *
 * @throws {@link CostExplorerServiceException}
 * <p>Base exception class for all service exceptions from CostExplorer service.</p>
 *
 */
export class ListCostAllocationTagsCommand extends $Command<
  ListCostAllocationTagsCommandInput,
  ListCostAllocationTagsCommandOutput,
  CostExplorerClientResolvedConfig
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
  constructor(readonly input: ListCostAllocationTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCostAllocationTagsCommandInput, ListCostAllocationTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCostAllocationTagsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "ListCostAllocationTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSInsightsIndexService",
        operation: "ListCostAllocationTags",
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
  private serialize(input: ListCostAllocationTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCostAllocationTagsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCostAllocationTagsCommandOutput> {
    return de_ListCostAllocationTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
