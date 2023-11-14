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

import { ListAssetsInput, ListAssetsOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_ListAssetsCommand, se_ListAssetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAssetsCommand}.
 */
export interface ListAssetsCommandInput extends ListAssetsInput {}
/**
 * @public
 *
 * The output of {@link ListAssetsCommand}.
 */
export interface ListAssetsCommandOutput extends ListAssetsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the hardware assets for the specified Outpost.</p>
 *          <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match
 *  all of the specified filters. For a filter where you can specify multiple values, the results include
 *  items that match any of the values that you specify for the filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, ListAssetsCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, ListAssetsCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const input = { // ListAssetsInput
 *   OutpostIdentifier: "STRING_VALUE", // required
 *   HostIdFilter: [ // HostIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   StatusFilter: [ // StatusList
 *     "ACTIVE" || "RETIRING" || "ISOLATED",
 *   ],
 * };
 * const command = new ListAssetsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetsOutput
 * //   Assets: [ // AssetListDefinition
 * //     { // AssetInfo
 * //       AssetId: "STRING_VALUE",
 * //       RackId: "STRING_VALUE",
 * //       AssetType: "COMPUTE",
 * //       ComputeAttributes: { // ComputeAttributes
 * //         HostId: "STRING_VALUE",
 * //         State: "ACTIVE" || "ISOLATED" || "RETIRING",
 * //         InstanceFamilies: [ // InstanceFamilies
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       AssetLocation: { // AssetLocation
 * //         RackElevation: Number("float"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssetsCommandInput - {@link ListAssetsCommandInput}
 * @returns {@link ListAssetsCommandOutput}
 * @see {@link ListAssetsCommandInput} for command's `input` shape.
 * @see {@link ListAssetsCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 */
export class ListAssetsCommand extends $Command<
  ListAssetsCommandInput,
  ListAssetsCommandOutput,
  OutpostsClientResolvedConfig
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
  constructor(readonly input: ListAssetsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssetsCommandInput, ListAssetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListAssetsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "ListAssetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OutpostsOlafService",
        operation: "ListAssets",
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
  private serialize(input: ListAssetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAssetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssetsCommandOutput> {
    return de_ListAssetsCommand(output, context);
  }
}
