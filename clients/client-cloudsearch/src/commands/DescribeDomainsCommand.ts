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
import { DescribeDomainsRequest, DescribeDomainsResponse } from "../models/models_0";
import { de_DescribeDomainsCommand, se_DescribeDomainsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDomainsCommand}.
 */
export interface DescribeDomainsCommandInput extends DescribeDomainsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDomainsCommand}.
 */
export interface DescribeDomainsCommandOutput extends DescribeDomainsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the search domains owned by this account. Can be limited to specific domains. Shows
 *       all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;q.parser=structured&amp;size=0</code>. For more information,
 *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeDomainsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeDomainsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const input = { // DescribeDomainsRequest
 *   DomainNames: [ // DomainNameList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeDomainsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDomainsResponse
 * //   DomainStatusList: [ // DomainStatusList // required
 * //     { // DomainStatus
 * //       DomainId: "STRING_VALUE", // required
 * //       DomainName: "STRING_VALUE", // required
 * //       ARN: "STRING_VALUE",
 * //       Created: true || false,
 * //       Deleted: true || false,
 * //       DocService: { // ServiceEndpoint
 * //         Endpoint: "STRING_VALUE",
 * //       },
 * //       SearchService: {
 * //         Endpoint: "STRING_VALUE",
 * //       },
 * //       RequiresIndexDocuments: true || false, // required
 * //       Processing: true || false,
 * //       SearchInstanceType: "STRING_VALUE",
 * //       SearchPartitionCount: Number("int"),
 * //       SearchInstanceCount: Number("int"),
 * //       Limits: { // Limits
 * //         MaximumReplicationCount: Number("int"), // required
 * //         MaximumPartitionCount: Number("int"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDomainsCommandInput - {@link DescribeDomainsCommandInput}
 * @returns {@link DescribeDomainsCommandOutput}
 * @see {@link DescribeDomainsCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for CloudSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 *
 * @throws {@link CloudSearchServiceException}
 * <p>Base exception class for all service exceptions from CloudSearch service.</p>
 *
 */
export class DescribeDomainsCommand extends $Command<
  DescribeDomainsCommandInput,
  DescribeDomainsCommandOutput,
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
  constructor(readonly input: DescribeDomainsCommandInput) {
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
  ): Handler<DescribeDomainsCommandInput, DescribeDomainsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDomainsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DescribeDomainsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "A9SearchCloudConfigService2013",
        operation: "DescribeDomains",
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
  private serialize(input: DescribeDomainsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDomainsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDomainsCommandOutput> {
    return de_DescribeDomainsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
