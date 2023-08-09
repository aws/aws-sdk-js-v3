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

import { KendraClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraClient";
import { DescribeQuerySuggestionsConfigRequest, DescribeQuerySuggestionsConfigResponse } from "../models/models_0";
import {
  de_DescribeQuerySuggestionsConfigCommand,
  se_DescribeQuerySuggestionsConfigCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeQuerySuggestionsConfigCommand}.
 */
export interface DescribeQuerySuggestionsConfigCommandInput extends DescribeQuerySuggestionsConfigRequest {}
/**
 * @public
 *
 * The output of {@link DescribeQuerySuggestionsConfigCommand}.
 */
export interface DescribeQuerySuggestionsConfigCommandOutput
  extends DescribeQuerySuggestionsConfigResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets information on the settings of query suggestions for an index.</p>
 *          <p>This is used to check the current settings applied
 *             to query suggestions.</p>
 *          <p>
 *             <code>DescribeQuerySuggestionsConfig</code> is currently not supported in the
 *             Amazon Web Services GovCloud (US-West) region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, DescribeQuerySuggestionsConfigCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, DescribeQuerySuggestionsConfigCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // DescribeQuerySuggestionsConfigRequest
 *   IndexId: "STRING_VALUE", // required
 * };
 * const command = new DescribeQuerySuggestionsConfigCommand(input);
 * const response = await client.send(command);
 * // { // DescribeQuerySuggestionsConfigResponse
 * //   Mode: "ENABLED" || "LEARN_ONLY",
 * //   Status: "ACTIVE" || "UPDATING",
 * //   QueryLogLookBackWindowInDays: Number("int"),
 * //   IncludeQueriesWithoutUserInformation: true || false,
 * //   MinimumNumberOfQueryingUsers: Number("int"),
 * //   MinimumQueryCount: Number("int"),
 * //   LastSuggestionsBuildTime: new Date("TIMESTAMP"),
 * //   LastClearTime: new Date("TIMESTAMP"),
 * //   TotalSuggestionsCount: Number("int"),
 * //   AttributeSuggestionsConfig: { // AttributeSuggestionsDescribeConfig
 * //     SuggestableConfigList: [ // SuggestableConfigList
 * //       { // SuggestableConfig
 * //         AttributeName: "STRING_VALUE",
 * //         Suggestable: true || false,
 * //       },
 * //     ],
 * //     AttributeSuggestionsMode: "ACTIVE" || "INACTIVE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeQuerySuggestionsConfigCommandInput - {@link DescribeQuerySuggestionsConfigCommandInput}
 * @returns {@link DescribeQuerySuggestionsConfigCommandOutput}
 * @see {@link DescribeQuerySuggestionsConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeQuerySuggestionsConfigCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Kendra service.
 *             Please wait a few minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn’t exist. Please check you have provided the correct
 *             resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Please reduce the number of requests
 *             and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the Amazon Kendra service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraServiceException}
 * <p>Base exception class for all service exceptions from Kendra service.</p>
 *
 */
export class DescribeQuerySuggestionsConfigCommand extends $Command<
  DescribeQuerySuggestionsConfigCommandInput,
  DescribeQuerySuggestionsConfigCommandOutput,
  KendraClientResolvedConfig
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
  constructor(readonly input: DescribeQuerySuggestionsConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeQuerySuggestionsConfigCommandInput, DescribeQuerySuggestionsConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeQuerySuggestionsConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "DescribeQuerySuggestionsConfigCommand";
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
  private serialize(
    input: DescribeQuerySuggestionsConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeQuerySuggestionsConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeQuerySuggestionsConfigCommandOutput> {
    return de_DescribeQuerySuggestionsConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
