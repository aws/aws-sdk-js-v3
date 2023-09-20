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

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { PutQueryDefinitionRequest, PutQueryDefinitionResponse } from "../models/models_0";
import { de_PutQueryDefinitionCommand, se_PutQueryDefinitionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutQueryDefinitionCommand}.
 */
export interface PutQueryDefinitionCommandInput extends PutQueryDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link PutQueryDefinitionCommand}.
 */
export interface PutQueryDefinitionCommandOutput extends PutQueryDefinitionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates a query definition for CloudWatch Logs Insights. For
 *       more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html">Analyzing Log Data with CloudWatch Logs Insights</a>.</p>
 *          <p>To update a query definition, specify its <code>queryDefinitionId</code> in your request.
 *       The values of <code>name</code>, <code>queryString</code>, and <code>logGroupNames</code> are
 *       changed to the values that you specify in your update operation. No current values are
 *       retained from the current query definition. For example, imagine updating a current query
 *       definition that includes log groups. If you don't specify the <code>logGroupNames</code>
 *       parameter in your update operation, the query definition changes to contain no log
 *       groups.</p>
 *          <p>You must have the <code>logs:PutQueryDefinition</code> permission to be able to perform
 *     this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutQueryDefinitionCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutQueryDefinitionCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutQueryDefinitionRequest
 *   name: "STRING_VALUE", // required
 *   queryDefinitionId: "STRING_VALUE",
 *   logGroupNames: [ // LogGroupNames
 *     "STRING_VALUE",
 *   ],
 *   queryString: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new PutQueryDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // PutQueryDefinitionResponse
 * //   queryDefinitionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutQueryDefinitionCommandInput - {@link PutQueryDefinitionCommandInput}
 * @returns {@link PutQueryDefinitionCommandOutput}
 * @see {@link PutQueryDefinitionCommandInput} for command's `input` shape.
 * @see {@link PutQueryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the maximum number of resources that can be created.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 */
export class PutQueryDefinitionCommand extends $Command<
  PutQueryDefinitionCommandInput,
  PutQueryDefinitionCommandOutput,
  CloudWatchLogsClientResolvedConfig
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
  constructor(readonly input: PutQueryDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutQueryDefinitionCommandInput, PutQueryDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutQueryDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "PutQueryDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Logs_20140328",
        operation: "PutQueryDefinition",
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
  private serialize(input: PutQueryDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutQueryDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutQueryDefinitionCommandOutput> {
    return de_PutQueryDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
