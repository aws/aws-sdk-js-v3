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
import { ClearQuerySuggestionsRequest } from "../models/models_0";
import { de_ClearQuerySuggestionsCommand, se_ClearQuerySuggestionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ClearQuerySuggestionsCommand}.
 */
export interface ClearQuerySuggestionsCommandInput extends ClearQuerySuggestionsRequest {}
/**
 * @public
 *
 * The output of {@link ClearQuerySuggestionsCommand}.
 */
export interface ClearQuerySuggestionsCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Clears existing query suggestions from an index.</p>
 *          <p>This deletes existing suggestions only, not the queries
 *             in the query log. After you clear suggestions, Amazon Kendra learns
 *             new suggestions based on new queries added to the query log
 *             from the time you cleared suggestions. If you do not see any
 *             new suggestions, then please allow Amazon Kendra to collect
 *             enough queries to learn new suggestions.</p>
 *          <p>
 *             <code>ClearQuerySuggestions</code> is currently not supported in the
 *             Amazon Web Services GovCloud (US-West) region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ClearQuerySuggestionsCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ClearQuerySuggestionsCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const input = { // ClearQuerySuggestionsRequest
 *   IndexId: "STRING_VALUE", // required
 * };
 * const command = new ClearQuerySuggestionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ClearQuerySuggestionsCommandInput - {@link ClearQuerySuggestionsCommandInput}
 * @returns {@link ClearQuerySuggestionsCommandOutput}
 * @see {@link ClearQuerySuggestionsCommandInput} for command's `input` shape.
 * @see {@link ClearQuerySuggestionsCommandOutput} for command's `response` shape.
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
export class ClearQuerySuggestionsCommand extends $Command<
  ClearQuerySuggestionsCommandInput,
  ClearQuerySuggestionsCommandOutput,
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
  constructor(readonly input: ClearQuerySuggestionsCommandInput) {
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
  ): Handler<ClearQuerySuggestionsCommandInput, ClearQuerySuggestionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ClearQuerySuggestionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraClient";
    const commandName = "ClearQuerySuggestionsCommand";
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
  private serialize(input: ClearQuerySuggestionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ClearQuerySuggestionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ClearQuerySuggestionsCommandOutput> {
    return de_ClearQuerySuggestionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
