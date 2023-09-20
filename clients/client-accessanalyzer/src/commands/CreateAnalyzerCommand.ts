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

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { CreateAnalyzerRequest, CreateAnalyzerResponse } from "../models/models_0";
import { de_CreateAnalyzerCommand, se_CreateAnalyzerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAnalyzerCommand}.
 */
export interface CreateAnalyzerCommandInput extends CreateAnalyzerRequest {}
/**
 * @public
 *
 * The output of {@link CreateAnalyzerCommand}.
 */
export interface CreateAnalyzerCommandOutput extends CreateAnalyzerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an analyzer for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CreateAnalyzerCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CreateAnalyzerCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // CreateAnalyzerRequest
 *   analyzerName: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
 *   archiveRules: [ // InlineArchiveRulesList
 *     { // InlineArchiveRule
 *       ruleName: "STRING_VALUE", // required
 *       filter: { // FilterCriteriaMap // required
 *         "<keys>": { // Criterion
 *           eq: [ // ValueList
 *             "STRING_VALUE",
 *           ],
 *           neq: [
 *             "STRING_VALUE",
 *           ],
 *           contains: [
 *             "STRING_VALUE",
 *           ],
 *           exists: true || false,
 *         },
 *       },
 *     },
 *   ],
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAnalyzerCommand(input);
 * const response = await client.send(command);
 * // { // CreateAnalyzerResponse
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAnalyzerCommandInput - {@link CreateAnalyzerCommandInput}
 * @returns {@link CreateAnalyzerCommandOutput}
 * @see {@link CreateAnalyzerCommandInput} for command's `input` shape.
 * @see {@link CreateAnalyzerCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict exception error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Service quote met error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 */
export class CreateAnalyzerCommand extends $Command<
  CreateAnalyzerCommandInput,
  CreateAnalyzerCommandOutput,
  AccessAnalyzerClientResolvedConfig
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
  constructor(readonly input: CreateAnalyzerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAnalyzerCommandInput, CreateAnalyzerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAnalyzerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "CreateAnalyzerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AccessAnalyzer",
        operation: "CreateAnalyzer",
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
  private serialize(input: CreateAnalyzerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAnalyzerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAnalyzerCommandOutput> {
    return de_CreateAnalyzerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
