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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { PutManagedInsightRulesInput, PutManagedInsightRulesOutput } from "../models/models_0";
import { de_PutManagedInsightRulesCommand, se_PutManagedInsightRulesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutManagedInsightRulesCommand}.
 */
export interface PutManagedInsightRulesCommandInput extends PutManagedInsightRulesInput {}
/**
 * @public
 *
 * The output of {@link PutManagedInsightRulesCommand}.
 */
export interface PutManagedInsightRulesCommandOutput extends PutManagedInsightRulesOutput, __MetadataBearer {}

/**
 * @public
 * <p>
 * 			Creates a managed Contributor Insights rule
 * 			for a specified Amazon Web Services resource.
 * 			When you enable a managed rule,
 * 			you create a Contributor Insights rule
 * 			that collects data
 * 			from Amazon Web Services services.
 * 			You cannot edit these rules
 * 			with <code>PutInsightRule</code>.
 * 			The rules can be enabled, disabled, and deleted using <code>EnableInsightRules</code>, <code>DisableInsightRules</code>, and <code>DeleteInsightRules</code>.
 * 			If a previously created managed rule is currently disabled,
 * 			a subsequent call
 * 			to this API will re-enable it.
 * 			Use <code>ListManagedInsightRules</code>
 * 			to describe all available rules.
 *
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutManagedInsightRulesCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutManagedInsightRulesCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // PutManagedInsightRulesInput
 *   ManagedRules: [ // ManagedRules // required
 *     { // ManagedRule
 *       TemplateName: "STRING_VALUE", // required
 *       ResourceARN: "STRING_VALUE", // required
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new PutManagedInsightRulesCommand(input);
 * const response = await client.send(command);
 * // { // PutManagedInsightRulesOutput
 * //   Failures: [ // BatchFailures
 * //     { // PartialFailure
 * //       FailureResource: "STRING_VALUE",
 * //       ExceptionType: "STRING_VALUE",
 * //       FailureCode: "STRING_VALUE",
 * //       FailureDescription: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutManagedInsightRulesCommandInput - {@link PutManagedInsightRulesCommandInput}
 * @returns {@link PutManagedInsightRulesCommandOutput}
 * @see {@link PutManagedInsightRulesCommandInput} for command's `input` shape.
 * @see {@link PutManagedInsightRulesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of an input parameter is bad or out-of-range.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>An input parameter that is required is missing.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 */
export class PutManagedInsightRulesCommand extends $Command<
  PutManagedInsightRulesCommandInput,
  PutManagedInsightRulesCommandOutput,
  CloudWatchClientResolvedConfig
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
  constructor(readonly input: PutManagedInsightRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutManagedInsightRulesCommandInput, PutManagedInsightRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutManagedInsightRulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "PutManagedInsightRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GraniteServiceVersion20100801",
        operation: "PutManagedInsightRules",
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
  private serialize(input: PutManagedInsightRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutManagedInsightRulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutManagedInsightRulesCommandOutput> {
    return de_PutManagedInsightRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
