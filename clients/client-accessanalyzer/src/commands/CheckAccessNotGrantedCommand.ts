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
import {
  CheckAccessNotGrantedRequest,
  CheckAccessNotGrantedRequestFilterSensitiveLog,
  CheckAccessNotGrantedResponse,
} from "../models/models_0";
import { de_CheckAccessNotGrantedCommand, se_CheckAccessNotGrantedCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CheckAccessNotGrantedCommand}.
 */
export interface CheckAccessNotGrantedCommandInput extends CheckAccessNotGrantedRequest {}
/**
 * @public
 *
 * The output of {@link CheckAccessNotGrantedCommand}.
 */
export interface CheckAccessNotGrantedCommandOutput extends CheckAccessNotGrantedResponse, __MetadataBearer {}

/**
 * @public
 * <p>Checks whether the specified access isn't allowed by a policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CheckAccessNotGrantedCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CheckAccessNotGrantedCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // CheckAccessNotGrantedRequest
 *   policyDocument: "STRING_VALUE", // required
 *   access: [ // AccessList // required
 *     { // Access
 *       actions: [ // ActionsList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   policyType: "STRING_VALUE", // required
 * };
 * const command = new CheckAccessNotGrantedCommand(input);
 * const response = await client.send(command);
 * // { // CheckAccessNotGrantedResponse
 * //   result: "STRING_VALUE",
 * //   message: "STRING_VALUE",
 * //   reasons: [ // ReasonSummaryList
 * //     { // ReasonSummary
 * //       description: "STRING_VALUE",
 * //       statementIndex: Number("int"),
 * //       statementId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CheckAccessNotGrantedCommandInput - {@link CheckAccessNotGrantedCommandInput}
 * @returns {@link CheckAccessNotGrantedCommandOutput}
 * @see {@link CheckAccessNotGrantedCommandInput} for command's `input` shape.
 * @see {@link CheckAccessNotGrantedCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  <p>The specified entity could not be processed.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 */
export class CheckAccessNotGrantedCommand extends $Command<
  CheckAccessNotGrantedCommandInput,
  CheckAccessNotGrantedCommandOutput,
  AccessAnalyzerClientResolvedConfig
> {
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
  constructor(readonly input: CheckAccessNotGrantedCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CheckAccessNotGrantedCommandInput, CheckAccessNotGrantedCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CheckAccessNotGrantedCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "CheckAccessNotGrantedCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CheckAccessNotGrantedRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AccessAnalyzer",
        operation: "CheckAccessNotGranted",
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
  private serialize(input: CheckAccessNotGrantedCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CheckAccessNotGrantedCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CheckAccessNotGrantedCommandOutput> {
    return de_CheckAccessNotGrantedCommand(output, context);
  }
}
