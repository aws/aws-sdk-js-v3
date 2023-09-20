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
import { DescribeExpressionsRequest, DescribeExpressionsResponse } from "../models/models_0";
import { de_DescribeExpressionsCommand, se_DescribeExpressionsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeExpressionsCommand}.
 */
export interface DescribeExpressionsCommandInput extends DescribeExpressionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeExpressionsCommand}.
 */
export interface DescribeExpressionsCommandOutput extends DescribeExpressionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see  <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, DescribeExpressionsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, DescribeExpressionsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const input = { // DescribeExpressionsRequest
 *   DomainName: "STRING_VALUE", // required
 *   ExpressionNames: [ // StandardNameList
 *     "STRING_VALUE",
 *   ],
 *   Deployed: true || false,
 * };
 * const command = new DescribeExpressionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExpressionsResponse
 * //   Expressions: [ // ExpressionStatusList // required
 * //     { // ExpressionStatus
 * //       Options: { // Expression
 * //         ExpressionName: "STRING_VALUE", // required
 * //         ExpressionValue: "STRING_VALUE", // required
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
 * @param DescribeExpressionsCommandInput - {@link DescribeExpressionsCommandInput}
 * @returns {@link DescribeExpressionsCommandOutput}
 * @see {@link DescribeExpressionsCommandInput} for command's `input` shape.
 * @see {@link DescribeExpressionsCommandOutput} for command's `response` shape.
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
export class DescribeExpressionsCommand extends $Command<
  DescribeExpressionsCommandInput,
  DescribeExpressionsCommandOutput,
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
  constructor(readonly input: DescribeExpressionsCommandInput) {
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
  ): Handler<DescribeExpressionsCommandInput, DescribeExpressionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeExpressionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudSearchClient";
    const commandName = "DescribeExpressionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "A9SearchCloudConfigService2013",
        operation: "DescribeExpressions",
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
  private serialize(input: DescribeExpressionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeExpressionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeExpressionsCommandOutput> {
    return de_DescribeExpressionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
