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

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutEvaluationsRequest, PutEvaluationsResponse } from "../models/models_1";
import { de_PutEvaluationsCommand, se_PutEvaluationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutEvaluationsCommand}.
 */
export interface PutEvaluationsCommandInput extends PutEvaluationsRequest {}
/**
 * @public
 *
 * The output of {@link PutEvaluationsCommand}.
 */
export interface PutEvaluationsCommandOutput extends PutEvaluationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Used by an Lambda function to deliver evaluation results to
 * 			Config. This action is required in every Lambda function
 * 			that is invoked by an Config rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutEvaluationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutEvaluationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // PutEvaluationsRequest
 *   Evaluations: [ // Evaluations
 *     { // Evaluation
 *       ComplianceResourceType: "STRING_VALUE", // required
 *       ComplianceResourceId: "STRING_VALUE", // required
 *       ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "NOT_APPLICABLE" || "INSUFFICIENT_DATA", // required
 *       Annotation: "STRING_VALUE",
 *       OrderingTimestamp: new Date("TIMESTAMP"), // required
 *     },
 *   ],
 *   ResultToken: "STRING_VALUE", // required
 *   TestMode: true || false,
 * };
 * const command = new PutEvaluationsCommand(input);
 * const response = await client.send(command);
 * // { // PutEvaluationsResponse
 * //   FailedEvaluations: [ // Evaluations
 * //     { // Evaluation
 * //       ComplianceResourceType: "STRING_VALUE", // required
 * //       ComplianceResourceId: "STRING_VALUE", // required
 * //       ComplianceType: "COMPLIANT" || "NON_COMPLIANT" || "NOT_APPLICABLE" || "INSUFFICIENT_DATA", // required
 * //       Annotation: "STRING_VALUE",
 * //       OrderingTimestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutEvaluationsCommandInput - {@link PutEvaluationsCommandInput}
 * @returns {@link PutEvaluationsCommandOutput}
 * @see {@link PutEvaluationsCommandInput} for command's `input` shape.
 * @see {@link PutEvaluationsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link InvalidResultTokenException} (client fault)
 *  <p>The specified <code>ResultToken</code> is not valid.</p>
 *
 * @throws {@link NoSuchConfigRuleException} (client fault)
 *  <p>The Config rule in the request is not valid. Verify that the rule is an Config Process Check rule, that the rule name is correct, and that valid Amazon Resouce Names (ARNs) are used before trying again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 */
export class PutEvaluationsCommand extends $Command<
  PutEvaluationsCommandInput,
  PutEvaluationsCommandOutput,
  ConfigServiceClientResolvedConfig
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
  constructor(readonly input: PutEvaluationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutEvaluationsCommandInput, PutEvaluationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutEvaluationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "PutEvaluationsCommand";
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
  private serialize(input: PutEvaluationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutEvaluationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutEvaluationsCommandOutput> {
    return de_PutEvaluationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
