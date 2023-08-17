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

import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { ValidatePolicyRequest, ValidatePolicyResponse } from "../models/models_0";
import { de_ValidatePolicyCommand, se_ValidatePolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ValidatePolicyCommand}.
 */
export interface ValidatePolicyCommandInput extends ValidatePolicyRequest {}
/**
 * @public
 *
 * The output of {@link ValidatePolicyCommand}.
 */
export interface ValidatePolicyCommandOutput extends ValidatePolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Requests the validation of a policy and returns a list of findings. The findings help
 *          you identify issues and provide actionable recommendations to resolve the issue and enable
 *          you to author functional policies that meet security best practices. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, ValidatePolicyCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, ValidatePolicyCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * const client = new AccessAnalyzerClient(config);
 * const input = { // ValidatePolicyRequest
 *   locale: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   policyDocument: "STRING_VALUE", // required
 *   policyType: "STRING_VALUE", // required
 *   validatePolicyResourceType: "STRING_VALUE",
 * };
 * const command = new ValidatePolicyCommand(input);
 * const response = await client.send(command);
 * // { // ValidatePolicyResponse
 * //   findings: [ // ValidatePolicyFindingList // required
 * //     { // ValidatePolicyFinding
 * //       findingDetails: "STRING_VALUE", // required
 * //       findingType: "STRING_VALUE", // required
 * //       issueCode: "STRING_VALUE", // required
 * //       learnMoreLink: "STRING_VALUE", // required
 * //       locations: [ // LocationList // required
 * //         { // Location
 * //           path: [ // PathElementList // required
 * //             { // PathElement Union: only one key present
 * //               index: Number("int"),
 * //               key: "STRING_VALUE",
 * //               substring: { // Substring
 * //                 start: Number("int"), // required
 * //                 length: Number("int"), // required
 * //               },
 * //               value: "STRING_VALUE",
 * //             },
 * //           ],
 * //           span: { // Span
 * //             start: { // Position
 * //               line: Number("int"), // required
 * //               column: Number("int"), // required
 * //               offset: Number("int"), // required
 * //             },
 * //             end: {
 * //               line: Number("int"), // required
 * //               column: Number("int"), // required
 * //               offset: Number("int"), // required
 * //             },
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ValidatePolicyCommandInput - {@link ValidatePolicyCommandInput}
 * @returns {@link ValidatePolicyCommandOutput}
 * @see {@link ValidatePolicyCommandInput} for command's `input` shape.
 * @see {@link ValidatePolicyCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
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
export class ValidatePolicyCommand extends $Command<
  ValidatePolicyCommandInput,
  ValidatePolicyCommandOutput,
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
  constructor(readonly input: ValidatePolicyCommandInput) {
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
  ): Handler<ValidatePolicyCommandInput, ValidatePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ValidatePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AccessAnalyzerClient";
    const commandName = "ValidatePolicyCommand";
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
  private serialize(input: ValidatePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ValidatePolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ValidatePolicyCommandOutput> {
    return de_ValidatePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
