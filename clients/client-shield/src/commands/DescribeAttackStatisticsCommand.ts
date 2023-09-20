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

import { DescribeAttackStatisticsRequest, DescribeAttackStatisticsResponse } from "../models/models_0";
import { de_DescribeAttackStatisticsCommand, se_DescribeAttackStatisticsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAttackStatisticsCommand}.
 */
export interface DescribeAttackStatisticsCommandInput extends DescribeAttackStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAttackStatisticsCommand}.
 */
export interface DescribeAttackStatisticsCommandOutput extends DescribeAttackStatisticsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides information about the number and type of attacks Shield has detected in the last year for all resources that belong to your account, regardless of whether you've defined Shield protections for them. This operation is available to Shield customers as well as to Shield Advanced customers.</p>
 *          <p>The operation returns data for the time range of midnight UTC, one year ago, to midnight UTC, today. For example, if the current time is <code>2020-10-26 15:39:32 PDT</code>, equal to <code>2020-10-26 22:39:32 UTC</code>, then the time range for the attack data returned is from <code>2019-10-26 00:00:00 UTC</code> to <code>2020-10-26 00:00:00 UTC</code>. </p>
 *          <p>The time range indicates the period covered by the attack statistics data items.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DescribeAttackStatisticsCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DescribeAttackStatisticsCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const input = {};
 * const command = new DescribeAttackStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAttackStatisticsResponse
 * //   TimeRange: { // TimeRange
 * //     FromInclusive: new Date("TIMESTAMP"),
 * //     ToExclusive: new Date("TIMESTAMP"),
 * //   },
 * //   DataItems: [ // AttackStatisticsDataList // required
 * //     { // AttackStatisticsDataItem
 * //       AttackVolume: { // AttackVolume
 * //         BitsPerSecond: { // AttackVolumeStatistics
 * //           Max: Number("double"), // required
 * //         },
 * //         PacketsPerSecond: {
 * //           Max: Number("double"), // required
 * //         },
 * //         RequestsPerSecond: {
 * //           Max: Number("double"), // required
 * //         },
 * //       },
 * //       AttackCount: Number("long"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAttackStatisticsCommandInput - {@link DescribeAttackStatisticsCommandInput}
 * @returns {@link DescribeAttackStatisticsCommandOutput}
 * @see {@link DescribeAttackStatisticsCommandInput} for command's `input` shape.
 * @see {@link DescribeAttackStatisticsCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 */
export class DescribeAttackStatisticsCommand extends $Command<
  DescribeAttackStatisticsCommandInput,
  DescribeAttackStatisticsCommandOutput,
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
  constructor(readonly input: DescribeAttackStatisticsCommandInput) {
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
  ): Handler<DescribeAttackStatisticsCommandInput, DescribeAttackStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAttackStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "DescribeAttackStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSShield_20160616",
        operation: "DescribeAttackStatistics",
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
  private serialize(input: DescribeAttackStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAttackStatisticsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAttackStatisticsCommandOutput> {
    return de_DescribeAttackStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
