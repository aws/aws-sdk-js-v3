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
import { DescribeAnalysisSchemesRequest, DescribeAnalysisSchemesResponse } from "../models/models_0";
import { de_DescribeAnalysisSchemesCommand, se_DescribeAnalysisSchemesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAnalysisSchemesCommand}.
 */
export interface DescribeAnalysisSchemesCommandInput extends DescribeAnalysisSchemesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAnalysisSchemesCommand}.
 */
export interface DescribeAnalysisSchemesCommandOutput extends DescribeAnalysisSchemesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name.  By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes.  For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeAnalysisSchemesCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeAnalysisSchemesCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const input = { // DescribeAnalysisSchemesRequest
 *   DomainName: "STRING_VALUE", // required
 *   AnalysisSchemeNames: [ // StandardNameList
 *     "STRING_VALUE",
 *   ],
 *   Deployed: true || false,
 * };
 * const command = new DescribeAnalysisSchemesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAnalysisSchemesResponse
 * //   AnalysisSchemes: [ // AnalysisSchemeStatusList // required
 * //     { // AnalysisSchemeStatus
 * //       Options: { // AnalysisScheme
 * //         AnalysisSchemeName: "STRING_VALUE", // required
 * //         AnalysisSchemeLanguage: "STRING_VALUE", // required
 * //         AnalysisOptions: { // AnalysisOptions
 * //           Synonyms: "STRING_VALUE",
 * //           Stopwords: "STRING_VALUE",
 * //           StemmingDictionary: "STRING_VALUE",
 * //           JapaneseTokenizationDictionary: "STRING_VALUE",
 * //           AlgorithmicStemming: "STRING_VALUE",
 * //         },
 * //       },
 * //       Status: { // OptionStatus
 * //         CreationDate: new Date("TIMESTAMP"), // required
 * //         UpdateDate: new Date("TIMESTAMP"), // required
 * //         UpdateVersion: Number("int"),
 * //         State: "STRING_VALUE", // required
 * //         PendingDeletion: true || false,
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAnalysisSchemesCommandInput - {@link DescribeAnalysisSchemesCommandInput}
 * @returns {@link DescribeAnalysisSchemesCommandOutput}
 * @see {@link DescribeAnalysisSchemesCommandInput} for command's `input` shape.
 * @see {@link DescribeAnalysisSchemesCommandOutput} for command's `response` shape.
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
export class DescribeAnalysisSchemesCommand extends $Command<
  DescribeAnalysisSchemesCommandInput,
  DescribeAnalysisSchemesCommandOutput,
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
  constructor(readonly input: DescribeAnalysisSchemesCommandInput) {
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
  ): Handler<DescribeAnalysisSchemesCommandInput, DescribeAnalysisSchemesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAnalysisSchemesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DescribeAnalysisSchemesCommand";
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
  private serialize(input: DescribeAnalysisSchemesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAnalysisSchemesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAnalysisSchemesCommandOutput> {
    return de_DescribeAnalysisSchemesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
