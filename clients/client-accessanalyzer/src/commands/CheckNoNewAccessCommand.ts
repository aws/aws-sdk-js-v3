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
  CheckNoNewAccessRequest,
  CheckNoNewAccessRequestFilterSensitiveLog,
  CheckNoNewAccessResponse,
} from "../models/models_0";
import { de_CheckNoNewAccessCommand, se_CheckNoNewAccessCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CheckNoNewAccessCommand}.
 */
export interface CheckNoNewAccessCommandInput extends CheckNoNewAccessRequest {}
/**
 * @public
 *
 * The output of {@link CheckNoNewAccessCommand}.
 */
export interface CheckNoNewAccessCommandOutput extends CheckNoNewAccessResponse, __MetadataBearer {}

/**
 * @public
 * <p>Checks whether new access is allowed for an updated policy when compared to the existing
 *          policy.</p>
 *          <p>You can find examples for reference policies and learn how to set up and run a custom
 *          policy check for new access in the <a href="https://github.com/aws-samples/iam-access-analyzer-custom-policy-check-samples">IAM Access Analyzer custom policy checks samples</a> repository on GitHub. The reference
 *          policies in this repository are meant to be passed to the
 *             <code>existingPolicyDocument</code> request parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, CheckNoNewAccessCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, CheckNoNewAccessCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // CheckNoNewAccessRequest
 *   newPolicyDocument: "STRING_VALUE", // required
 *   existingPolicyDocument: "STRING_VALUE", // required
 *   policyType: "STRING_VALUE", // required
 * };
 * const command = new CheckNoNewAccessCommand(input);
 * const response = await client.send(command);
 * // { // CheckNoNewAccessResponse
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
 * @param CheckNoNewAccessCommandInput - {@link CheckNoNewAccessCommandInput}
 * @returns {@link CheckNoNewAccessCommandOutput}
 * @see {@link CheckNoNewAccessCommandInput} for command's `input` shape.
 * @see {@link CheckNoNewAccessCommandOutput} for command's `response` shape.
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
export class CheckNoNewAccessCommand extends $Command<
  CheckNoNewAccessCommandInput,
  CheckNoNewAccessCommandOutput,
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
  constructor(readonly input: CheckNoNewAccessCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AccessAnalyzerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CheckNoNewAccessCommandInput, CheckNoNewAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CheckNoNewAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "CheckNoNewAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CheckNoNewAccessRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AccessAnalyzer",
        operation: "CheckNoNewAccess",
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
  private serialize(input: CheckNoNewAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CheckNoNewAccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CheckNoNewAccessCommandOutput> {
    return de_CheckNoNewAccessCommand(output, context);
  }
}
