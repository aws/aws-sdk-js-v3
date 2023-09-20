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

import { DescribeAttackRequest, DescribeAttackResponse } from "../models/models_0";
import { de_DescribeAttackCommand, se_DescribeAttackCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAttackCommand}.
 */
export interface DescribeAttackCommandInput extends DescribeAttackRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAttackCommand}.
 */
export interface DescribeAttackCommandOutput extends DescribeAttackResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the details of a DDoS attack. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeAttackCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeAttackCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const input = { // DescribeAttackRequest
 *   AttackId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAttackCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAttackResponse
 * //   Attack: { // AttackDetail
 * //     AttackId: "STRING_VALUE",
 * //     ResourceArn: "STRING_VALUE",
 * //     SubResources: [ // SubResourceSummaryList
 * //       { // SubResourceSummary
 * //         Type: "IP" || "URL",
 * //         Id: "STRING_VALUE",
 * //         AttackVectors: [ // SummarizedAttackVectorList
 * //           { // SummarizedAttackVector
 * //             VectorType: "STRING_VALUE", // required
 * //             VectorCounters: [ // SummarizedCounterList
 * //               { // SummarizedCounter
 * //                 Name: "STRING_VALUE",
 * //                 Max: Number("double"),
 * //                 Average: Number("double"),
 * //                 Sum: Number("double"),
 * //                 N: Number("int"),
 * //                 Unit: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         Counters: [
 * //           {
 * //             Name: "STRING_VALUE",
 * //             Max: Number("double"),
 * //             Average: Number("double"),
 * //             Sum: Number("double"),
 * //             N: Number("int"),
 * //             Unit: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     AttackCounters: "<SummarizedCounterList>",
 * //     AttackProperties: [ // AttackProperties
 * //       { // AttackProperty
 * //         AttackLayer: "NETWORK" || "APPLICATION",
 * //         AttackPropertyIdentifier: "DESTINATION_URL" || "REFERRER" || "SOURCE_ASN" || "SOURCE_COUNTRY" || "SOURCE_IP_ADDRESS" || "SOURCE_USER_AGENT" || "WORDPRESS_PINGBACK_REFLECTOR" || "WORDPRESS_PINGBACK_SOURCE",
 * //         TopContributors: [ // TopContributors
 * //           { // Contributor
 * //             Name: "STRING_VALUE",
 * //             Value: Number("long"),
 * //           },
 * //         ],
 * //         Unit: "BITS" || "BYTES" || "PACKETS" || "REQUESTS",
 * //         Total: Number("long"),
 * //       },
 * //     ],
 * //     Mitigations: [ // MitigationList
 * //       { // Mitigation
 * //         MitigationName: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAttackCommandInput - {@link DescribeAttackCommandInput}
 * @returns {@link DescribeAttackCommandOutput}
 * @see {@link DescribeAttackCommandInput} for command's `input` shape.
 * @see {@link DescribeAttackCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Exception that indicates the specified <code>AttackId</code> does not exist, or the requester does not have the appropriate permissions to access the <code>AttackId</code>.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 */
export class DescribeAttackCommand extends $Command<
  DescribeAttackCommandInput,
  DescribeAttackCommandOutput,
  ShieldClientResolvedConfig
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
  constructor(readonly input: DescribeAttackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAttackCommandInput, DescribeAttackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAttackCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "DescribeAttackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSShield_20160616",
        operation: "DescribeAttack",
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
  private serialize(input: DescribeAttackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAttackCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAttackCommandOutput> {
    return de_DescribeAttackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
