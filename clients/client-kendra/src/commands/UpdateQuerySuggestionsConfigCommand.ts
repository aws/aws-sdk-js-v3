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
import { UpdateQuerySuggestionsConfigRequest } from "../models/models_1";
import {
  de_UpdateQuerySuggestionsConfigCommand,
  se_UpdateQuerySuggestionsConfigCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateQuerySuggestionsConfigCommand}.
 */
export interface UpdateQuerySuggestionsConfigCommandInput extends UpdateQuerySuggestionsConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateQuerySuggestionsConfigCommand}.
 */
export interface UpdateQuerySuggestionsConfigCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates the settings of query suggestions for an index.</p>
 *          <p>Amazon Kendra supports partial updates, so you only need to provide
 *             the fields you want to update.</p>
 *          <p>If an update is currently processing, you
 *             need to wait for the update to finish before making another update.</p>
 *          <p>Updates to query suggestions settings might not take effect right away.
 *             The time for your updated settings to take effect depends on the updates
 *             made and the number of search queries in your index.</p>
 *          <p>You can still enable/disable query suggestions at any time.</p>
 *          <p>
 *             <code>UpdateQuerySuggestionsConfig</code> is currently not supported in the
 *             Amazon Web Services GovCloud (US-West) region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, UpdateQuerySuggestionsConfigCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, UpdateQuerySuggestionsConfigCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // UpdateQuerySuggestionsConfigRequest
 *   IndexId: "STRING_VALUE", // required
 *   Mode: "ENABLED" || "LEARN_ONLY",
 *   QueryLogLookBackWindowInDays: Number("int"),
 *   IncludeQueriesWithoutUserInformation: true || false,
 *   MinimumNumberOfQueryingUsers: Number("int"),
 *   MinimumQueryCount: Number("int"),
 *   AttributeSuggestionsConfig: { // AttributeSuggestionsUpdateConfig
 *     SuggestableConfigList: [ // SuggestableConfigList
 *       { // SuggestableConfig
 *         AttributeName: "STRING_VALUE",
 *         Suggestable: true || false,
 *       },
 *     ],
 *     AttributeSuggestionsMode: "ACTIVE" || "INACTIVE",
 *   },
 * };
 * const command = new UpdateQuerySuggestionsConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateQuerySuggestionsConfigCommandInput - {@link UpdateQuerySuggestionsConfigCommandInput}
 * @returns {@link UpdateQuerySuggestionsConfigCommandOutput}
 * @see {@link UpdateQuerySuggestionsConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateQuerySuggestionsConfigCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for KendraClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Please ensure you have the
 *             required permission policies and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred with the request. Please fix any inconsistences with your
 *             resources and try again.</p>
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
export class UpdateQuerySuggestionsConfigCommand extends $Command<
  UpdateQuerySuggestionsConfigCommandInput,
  UpdateQuerySuggestionsConfigCommandOutput,
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
  constructor(readonly input: UpdateQuerySuggestionsConfigCommandInput) {
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
  ): Handler<UpdateQuerySuggestionsConfigCommandInput, UpdateQuerySuggestionsConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateQuerySuggestionsConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "UpdateQuerySuggestionsConfigCommand";
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
  private serialize(input: UpdateQuerySuggestionsConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateQuerySuggestionsConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateQuerySuggestionsConfigCommandOutput> {
    return de_UpdateQuerySuggestionsConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
