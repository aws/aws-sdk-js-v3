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

import { GetInsightResultsRequest, GetInsightResultsResponse } from "../models/models_2";
import { de_GetInsightResultsCommand, se_GetInsightResultsCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetInsightResultsCommand}.
 */
export interface GetInsightResultsCommandInput extends GetInsightResultsRequest {}
/**
 * @public
 *
 * The output of {@link GetInsightResultsCommand}.
 */
export interface GetInsightResultsCommandOutput extends GetInsightResultsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the results of the Security Hub insight specified by the insight ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetInsightResultsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetInsightResultsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // GetInsightResultsRequest
 *   InsightArn: "STRING_VALUE", // required
 * };
 * const command = new GetInsightResultsCommand(input);
 * const response = await client.send(command);
 * // { // GetInsightResultsResponse
 * //   InsightResults: { // InsightResults
 * //     InsightArn: "STRING_VALUE", // required
 * //     GroupByAttribute: "STRING_VALUE", // required
 * //     ResultValues: [ // InsightResultValueList // required
 * //       { // InsightResultValue
 * //         GroupByAttributeValue: "STRING_VALUE", // required
 * //         Count: Number("int"), // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInsightResultsCommandInput - {@link GetInsightResultsCommandInput}
 * @returns {@link GetInsightResultsCommandOutput}
 * @see {@link GetInsightResultsCommandInput} for command's `input` shape.
 * @see {@link GetInsightResultsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To get the results of a Security Hub insight
 * ```javascript
 * // The following example returns the results of the Security Hub insight specified by the insight ARN.
 * const input = {
 *   "InsightArn": "arn:aws:securityhub:us-west-1:123456789012:insight/123456789012/custom/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 * };
 * const command = new GetInsightResultsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InsightResults": {
 *     "GroupByAttribute": "ResourceId",
 *     "InsightArn": "arn:aws:securityhub:us-west-1:123456789012:insight/123456789012/custom/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *     "ResultValues": [
 *       {
 *         "Count": 10,
 *         "GroupByAttributeValue": "AWS::::Account:111122223333"
 *       },
 *       {
 *         "Count": 3,
 *         "GroupByAttributeValue": "AWS::::Account:444455556666"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: to-get-the-results-of-a-security-hub-insight-1677182822019
 * ```
 *
 */
export class GetInsightResultsCommand extends $Command<
  GetInsightResultsCommandInput,
  GetInsightResultsCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: GetInsightResultsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInsightResultsCommandInput, GetInsightResultsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetInsightResultsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "GetInsightResultsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SecurityHubAPIService",
        operation: "GetInsightResults",
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
  private serialize(input: GetInsightResultsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetInsightResultsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInsightResultsCommandOutput> {
    return de_GetInsightResultsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
