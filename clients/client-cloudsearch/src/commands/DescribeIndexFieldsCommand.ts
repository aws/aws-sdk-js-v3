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

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeIndexFieldsRequest, DescribeIndexFieldsResponse } from "../models/models_0";
import { de_DescribeIndexFieldsCommand, se_DescribeIndexFieldsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeIndexFieldsCommand}.
 */
export interface DescribeIndexFieldsCommandInput extends DescribeIndexFieldsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIndexFieldsCommand}.
 */
export interface DescribeIndexFieldsCommandOutput extends DescribeIndexFieldsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the index fields configured for the search domain.
 *       Can be limited to specific fields by name.  By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information,
 *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeIndexFieldsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeIndexFieldsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const input = { // DescribeIndexFieldsRequest
 *   DomainName: "STRING_VALUE", // required
 *   FieldNames: [ // DynamicFieldNameList
 *     "STRING_VALUE",
 *   ],
 *   Deployed: true || false,
 * };
 * const command = new DescribeIndexFieldsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIndexFieldsResponse
 * //   IndexFields: [ // IndexFieldStatusList // required
 * //     { // IndexFieldStatus
 * //       Options: { // IndexField
 * //         IndexFieldName: "STRING_VALUE", // required
 * //         IndexFieldType: "int" || "double" || "literal" || "text" || "date" || "latlon" || "int-array" || "double-array" || "literal-array" || "text-array" || "date-array", // required
 * //         IntOptions: { // IntOptions
 * //           DefaultValue: Number("long"),
 * //           SourceField: "STRING_VALUE",
 * //           FacetEnabled: true || false,
 * //           SearchEnabled: true || false,
 * //           ReturnEnabled: true || false,
 * //           SortEnabled: true || false,
 * //         },
 * //         DoubleOptions: { // DoubleOptions
 * //           DefaultValue: Number("double"),
 * //           SourceField: "STRING_VALUE",
 * //           FacetEnabled: true || false,
 * //           SearchEnabled: true || false,
 * //           ReturnEnabled: true || false,
 * //           SortEnabled: true || false,
 * //         },
 * //         LiteralOptions: { // LiteralOptions
 * //           DefaultValue: "STRING_VALUE",
 * //           SourceField: "STRING_VALUE",
 * //           FacetEnabled: true || false,
 * //           SearchEnabled: true || false,
 * //           ReturnEnabled: true || false,
 * //           SortEnabled: true || false,
 * //         },
 * //         TextOptions: { // TextOptions
 * //           DefaultValue: "STRING_VALUE",
 * //           SourceField: "STRING_VALUE",
 * //           ReturnEnabled: true || false,
 * //           SortEnabled: true || false,
 * //           HighlightEnabled: true || false,
 * //           AnalysisScheme: "STRING_VALUE",
 * //         },
 * //         DateOptions: { // DateOptions
 * //           DefaultValue: "STRING_VALUE",
 * //           SourceField: "STRING_VALUE",
 * //           FacetEnabled: true || false,
 * //           SearchEnabled: true || false,
 * //           ReturnEnabled: true || false,
 * //           SortEnabled: true || false,
 * //         },
 * //         LatLonOptions: { // LatLonOptions
 * //           DefaultValue: "STRING_VALUE",
 * //           SourceField: "STRING_VALUE",
 * //           FacetEnabled: true || false,
 * //           SearchEnabled: true || false,
 * //           ReturnEnabled: true || false,
 * //           SortEnabled: true || false,
 * //         },
 * //         IntArrayOptions: { // IntArrayOptions
 * //           DefaultValue: Number("long"),
 * //           SourceFields: "STRING_VALUE",
 * //           FacetEnabled: true || false,
 * //           SearchEnabled: true || false,
 * //           ReturnEnabled: true || false,
 * //         },
 * //         DoubleArrayOptions: { // DoubleArrayOptions
 * //           DefaultValue: Number("double"),
 * //           SourceFields: "STRING_VALUE",
 * //           FacetEnabled: true || false,
 * //           SearchEnabled: true || false,
 * //           ReturnEnabled: true || false,
 * //         },
 * //         LiteralArrayOptions: { // LiteralArrayOptions
 * //           DefaultValue: "STRING_VALUE",
 * //           SourceFields: "STRING_VALUE",
 * //           FacetEnabled: true || false,
 * //           SearchEnabled: true || false,
 * //           ReturnEnabled: true || false,
 * //         },
 * //         TextArrayOptions: { // TextArrayOptions
 * //           DefaultValue: "STRING_VALUE",
 * //           SourceFields: "STRING_VALUE",
 * //           ReturnEnabled: true || false,
 * //           HighlightEnabled: true || false,
 * //           AnalysisScheme: "STRING_VALUE",
 * //         },
 * //         DateArrayOptions: { // DateArrayOptions
 * //           DefaultValue: "STRING_VALUE",
 * //           SourceFields: "STRING_VALUE",
 * //           FacetEnabled: true || false,
 * //           SearchEnabled: true || false,
 * //           ReturnEnabled: true || false,
 * //         },
 * //       },
 * //       Status: { // OptionStatus
 * //         CreationDate: new Date("TIMESTAMP"), // required
 * //         UpdateDate: new Date("TIMESTAMP"), // required
 * //         UpdateVersion: Number("int"),
 * //         State: "RequiresIndexDocuments" || "Processing" || "Active" || "FailedToValidate", // required
 * //         PendingDeletion: true || false,
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeIndexFieldsCommandInput - {@link DescribeIndexFieldsCommandInput}
 * @returns {@link DescribeIndexFieldsCommandOutput}
 * @see {@link DescribeIndexFieldsCommandInput} for command's `input` shape.
 * @see {@link DescribeIndexFieldsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 *
 * @throws {@link CloudSearchServiceException}
 * <p>Base exception class for all service exceptions from CloudSearch service.</p>
 *
 */
export class DescribeIndexFieldsCommand extends $Command<
  DescribeIndexFieldsCommandInput,
  DescribeIndexFieldsCommandOutput,
  CloudSearchClientResolvedConfig
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
  constructor(readonly input: DescribeIndexFieldsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeIndexFieldsCommandInput, DescribeIndexFieldsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeIndexFieldsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DescribeIndexFieldsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "A9SearchCloudConfigService2013",
        operation: "DescribeIndexFields",
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
  private serialize(input: DescribeIndexFieldsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeIndexFieldsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeIndexFieldsCommandOutput> {
    return de_DescribeIndexFieldsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
