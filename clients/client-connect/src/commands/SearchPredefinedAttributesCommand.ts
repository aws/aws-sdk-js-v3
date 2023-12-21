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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { SearchPredefinedAttributesRequest, SearchPredefinedAttributesResponse } from "../models/models_2";
import { de_SearchPredefinedAttributesCommand, se_SearchPredefinedAttributesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchPredefinedAttributesCommand}.
 */
export interface SearchPredefinedAttributesCommandInput extends SearchPredefinedAttributesRequest {}
/**
 * @public
 *
 * The output of {@link SearchPredefinedAttributesCommand}.
 */
export interface SearchPredefinedAttributesCommandOutput extends SearchPredefinedAttributesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Predefined attributes that meet certain criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchPredefinedAttributesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchPredefinedAttributesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // SearchPredefinedAttributesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchCriteria: { // PredefinedAttributeSearchCriteria
 *     OrConditions: [ // PredefinedAttributeSearchConditionList
 *       {
 *         OrConditions: [
 *           "<PredefinedAttributeSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<PredefinedAttributeSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<PredefinedAttributeSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *   },
 * };
 * const command = new SearchPredefinedAttributesCommand(input);
 * const response = await client.send(command);
 * // { // SearchPredefinedAttributesResponse
 * //   PredefinedAttributes: [ // PredefinedAttributeSearchSummaryList
 * //     { // PredefinedAttribute
 * //       Name: "STRING_VALUE",
 * //       Values: { // PredefinedAttributeValues Union: only one key present
 * //         StringList: [ // PredefinedAttributeStringValuesList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchPredefinedAttributesCommandInput - {@link SearchPredefinedAttributesCommandInput}
 * @returns {@link SearchPredefinedAttributesCommandOutput}
 * @see {@link SearchPredefinedAttributesCommandInput} for command's `input` shape.
 * @see {@link SearchPredefinedAttributesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class SearchPredefinedAttributesCommand extends $Command<
  SearchPredefinedAttributesCommandInput,
  SearchPredefinedAttributesCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: SearchPredefinedAttributesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchPredefinedAttributesCommandInput, SearchPredefinedAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchPredefinedAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "SearchPredefinedAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "SearchPredefinedAttributes",
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
  private serialize(input: SearchPredefinedAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchPredefinedAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchPredefinedAttributesCommandOutput> {
    return de_SearchPredefinedAttributesCommand(output, context);
  }
}
