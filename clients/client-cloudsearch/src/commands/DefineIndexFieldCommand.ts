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

import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DefineIndexFieldRequest, DefineIndexFieldResponse } from "../models/models_0";
import { de_DefineIndexFieldCommand, se_DefineIndexFieldCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DefineIndexFieldCommand}.
 */
export interface DefineIndexFieldCommandInput extends DefineIndexFieldRequest {}
/**
 * @public
 *
 * The output of {@link DefineIndexFieldCommand}.
 */
export interface DefineIndexFieldCommandOutput extends DefineIndexFieldResponse, __MetadataBearer {}

/**
 * @public
 * <p>Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DefineIndexFieldCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DefineIndexFieldCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const input = { // DefineIndexFieldRequest
 *   DomainName: "STRING_VALUE", // required
 *   IndexField: { // IndexField
 *     IndexFieldName: "STRING_VALUE", // required
 *     IndexFieldType: "STRING_VALUE", // required
 *     IntOptions: { // IntOptions
 *       DefaultValue: Number("long"),
 *       SourceField: "STRING_VALUE",
 *       FacetEnabled: true || false,
 *       SearchEnabled: true || false,
 *       ReturnEnabled: true || false,
 *       SortEnabled: true || false,
 *     },
 *     DoubleOptions: { // DoubleOptions
 *       DefaultValue: Number("double"),
 *       SourceField: "STRING_VALUE",
 *       FacetEnabled: true || false,
 *       SearchEnabled: true || false,
 *       ReturnEnabled: true || false,
 *       SortEnabled: true || false,
 *     },
 *     LiteralOptions: { // LiteralOptions
 *       DefaultValue: "STRING_VALUE",
 *       SourceField: "STRING_VALUE",
 *       FacetEnabled: true || false,
 *       SearchEnabled: true || false,
 *       ReturnEnabled: true || false,
 *       SortEnabled: true || false,
 *     },
 *     TextOptions: { // TextOptions
 *       DefaultValue: "STRING_VALUE",
 *       SourceField: "STRING_VALUE",
 *       ReturnEnabled: true || false,
 *       SortEnabled: true || false,
 *       HighlightEnabled: true || false,
 *       AnalysisScheme: "STRING_VALUE",
 *     },
 *     DateOptions: { // DateOptions
 *       DefaultValue: "STRING_VALUE",
 *       SourceField: "STRING_VALUE",
 *       FacetEnabled: true || false,
 *       SearchEnabled: true || false,
 *       ReturnEnabled: true || false,
 *       SortEnabled: true || false,
 *     },
 *     LatLonOptions: { // LatLonOptions
 *       DefaultValue: "STRING_VALUE",
 *       SourceField: "STRING_VALUE",
 *       FacetEnabled: true || false,
 *       SearchEnabled: true || false,
 *       ReturnEnabled: true || false,
 *       SortEnabled: true || false,
 *     },
 *     IntArrayOptions: { // IntArrayOptions
 *       DefaultValue: Number("long"),
 *       SourceFields: "STRING_VALUE",
 *       FacetEnabled: true || false,
 *       SearchEnabled: true || false,
 *       ReturnEnabled: true || false,
 *     },
 *     DoubleArrayOptions: { // DoubleArrayOptions
 *       DefaultValue: Number("double"),
 *       SourceFields: "STRING_VALUE",
 *       FacetEnabled: true || false,
 *       SearchEnabled: true || false,
 *       ReturnEnabled: true || false,
 *     },
 *     LiteralArrayOptions: { // LiteralArrayOptions
 *       DefaultValue: "STRING_VALUE",
 *       SourceFields: "STRING_VALUE",
 *       FacetEnabled: true || false,
 *       SearchEnabled: true || false,
 *       ReturnEnabled: true || false,
 *     },
 *     TextArrayOptions: { // TextArrayOptions
 *       DefaultValue: "STRING_VALUE",
 *       SourceFields: "STRING_VALUE",
 *       ReturnEnabled: true || false,
 *       HighlightEnabled: true || false,
 *       AnalysisScheme: "STRING_VALUE",
 *     },
 *     DateArrayOptions: { // DateArrayOptions
 *       DefaultValue: "STRING_VALUE",
 *       SourceFields: "STRING_VALUE",
 *       FacetEnabled: true || false,
 *       SearchEnabled: true || false,
 *       ReturnEnabled: true || false,
 *     },
 *   },
 * };
 * const command = new DefineIndexFieldCommand(input);
 * const response = await client.send(command);
 * // { // DefineIndexFieldResponse
 * //   IndexField: { // IndexFieldStatus
 * //     Options: { // IndexField
 * //       IndexFieldName: "STRING_VALUE", // required
 * //       IndexFieldType: "STRING_VALUE", // required
 * //       IntOptions: { // IntOptions
 * //         DefaultValue: Number("long"),
 * //         SourceField: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //         SortEnabled: true || false,
 * //       },
 * //       DoubleOptions: { // DoubleOptions
 * //         DefaultValue: Number("double"),
 * //         SourceField: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //         SortEnabled: true || false,
 * //       },
 * //       LiteralOptions: { // LiteralOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceField: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //         SortEnabled: true || false,
 * //       },
 * //       TextOptions: { // TextOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceField: "STRING_VALUE",
 * //         ReturnEnabled: true || false,
 * //         SortEnabled: true || false,
 * //         HighlightEnabled: true || false,
 * //         AnalysisScheme: "STRING_VALUE",
 * //       },
 * //       DateOptions: { // DateOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceField: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //         SortEnabled: true || false,
 * //       },
 * //       LatLonOptions: { // LatLonOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceField: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //         SortEnabled: true || false,
 * //       },
 * //       IntArrayOptions: { // IntArrayOptions
 * //         DefaultValue: Number("long"),
 * //         SourceFields: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //       },
 * //       DoubleArrayOptions: { // DoubleArrayOptions
 * //         DefaultValue: Number("double"),
 * //         SourceFields: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //       },
 * //       LiteralArrayOptions: { // LiteralArrayOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceFields: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //       },
 * //       TextArrayOptions: { // TextArrayOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceFields: "STRING_VALUE",
 * //         ReturnEnabled: true || false,
 * //         HighlightEnabled: true || false,
 * //         AnalysisScheme: "STRING_VALUE",
 * //       },
 * //       DateArrayOptions: { // DateArrayOptions
 * //         DefaultValue: "STRING_VALUE",
 * //         SourceFields: "STRING_VALUE",
 * //         FacetEnabled: true || false,
 * //         SearchEnabled: true || false,
 * //         ReturnEnabled: true || false,
 * //       },
 * //     },
 * //     Status: { // OptionStatus
 * //       CreationDate: new Date("TIMESTAMP"), // required
 * //       UpdateDate: new Date("TIMESTAMP"), // required
 * //       UpdateVersion: Number("int"),
 * //       State: "STRING_VALUE", // required
 * //       PendingDeletion: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DefineIndexFieldCommandInput - {@link DefineIndexFieldCommandInput}
 * @returns {@link DefineIndexFieldCommandOutput}
 * @see {@link DefineIndexFieldCommandInput} for command's `input` shape.
 * @see {@link DefineIndexFieldCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 *
 * @throws {@link InvalidTypeException} (client fault)
 *  <p>The request was rejected because it specified an invalid type definition.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because a resource limit has already been met.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was rejected because it has invalid parameters.</p>
 *
 * @throws {@link CloudSearchServiceException}
 * <p>Base exception class for all service exceptions from CloudSearch service.</p>
 *
 */
export class DefineIndexFieldCommand extends $Command<
  DefineIndexFieldCommandInput,
  DefineIndexFieldCommandOutput,
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
  constructor(readonly input: DefineIndexFieldCommandInput) {
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
  ): Handler<DefineIndexFieldCommandInput, DefineIndexFieldCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DefineIndexFieldCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DefineIndexFieldCommand";
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
  private serialize(input: DefineIndexFieldCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DefineIndexFieldCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DefineIndexFieldCommandOutput> {
    return de_DefineIndexFieldCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
