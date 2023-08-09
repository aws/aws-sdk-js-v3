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

import { DescribeUsageLimitsMessage, UsageLimitList } from "../models/models_1";
import { de_DescribeUsageLimitsCommand, se_DescribeUsageLimitsCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeUsageLimitsCommand}.
 */
export interface DescribeUsageLimitsCommandInput extends DescribeUsageLimitsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeUsageLimitsCommand}.
 */
export interface DescribeUsageLimitsCommandOutput extends UsageLimitList, __MetadataBearer {}

/**
 * @public
 * <p>Shows usage limits on a cluster.
 *             Results are filtered based on the combination of input usage limit identifier, cluster identifier, and feature type parameters:</p>
 *          <ul>
 *             <li>
 *                <p>If usage limit identifier, cluster identifier, and feature type are not provided,
 *                 then all usage limit objects for the current account in the current region are returned.</p>
 *             </li>
 *             <li>
 *                <p>If usage limit identifier is provided,
 *                 then the corresponding usage limit object is returned.</p>
 *             </li>
 *             <li>
 *                <p>If cluster identifier is provided,
 *                 then all usage limit objects for the specified cluster are returned.</p>
 *             </li>
 *             <li>
 *                <p>If cluster identifier and feature type are provided,
 *                 then all usage limit objects for the combination of cluster and feature are returned.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeUsageLimitsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeUsageLimitsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeUsageLimitsMessage
 *   UsageLimitId: "STRING_VALUE",
 *   ClusterIdentifier: "STRING_VALUE",
 *   FeatureType: "spectrum" || "concurrency-scaling" || "cross-region-datasharing",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   TagKeys: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 *   TagValues: [ // TagValueList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeUsageLimitsCommand(input);
 * const response = await client.send(command);
 * // { // UsageLimitList
 * //   UsageLimits: [ // UsageLimits
 * //     { // UsageLimit
 * //       UsageLimitId: "STRING_VALUE",
 * //       ClusterIdentifier: "STRING_VALUE",
 * //       FeatureType: "spectrum" || "concurrency-scaling" || "cross-region-datasharing",
 * //       LimitType: "time" || "data-scanned",
 * //       Amount: Number("long"),
 * //       Period: "daily" || "weekly" || "monthly",
 * //       BreachAction: "log" || "emit-metric" || "disable",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeUsageLimitsCommandInput - {@link DescribeUsageLimitsCommandInput}
 * @returns {@link DescribeUsageLimitsCommandOutput}
 * @see {@link DescribeUsageLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeUsageLimitsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DescribeUsageLimitsCommand extends $Command<
  DescribeUsageLimitsCommandInput,
  DescribeUsageLimitsCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: DescribeUsageLimitsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeUsageLimitsCommandInput, DescribeUsageLimitsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeUsageLimitsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeUsageLimitsCommand";
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
  private serialize(input: DescribeUsageLimitsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeUsageLimitsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeUsageLimitsCommandOutput> {
    return de_DescribeUsageLimitsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
