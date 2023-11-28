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

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeServerlessCacheSnapshotsRequest, DescribeServerlessCacheSnapshotsResponse } from "../models/models_0";
import {
  de_DescribeServerlessCacheSnapshotsCommand,
  se_DescribeServerlessCacheSnapshotsCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeServerlessCacheSnapshotsCommand}.
 */
export interface DescribeServerlessCacheSnapshotsCommandInput extends DescribeServerlessCacheSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServerlessCacheSnapshotsCommand}.
 */
export interface DescribeServerlessCacheSnapshotsCommandOutput
  extends DescribeServerlessCacheSnapshotsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information about serverless cache snapshots.
 *            By default, this API lists all of the customer’s serverless cache snapshots.
 *            It can also describe a single serverless cache snapshot, or the snapshots associated with
 *            a particular serverless cache. Available for Redis only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeServerlessCacheSnapshotsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeServerlessCacheSnapshotsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeServerlessCacheSnapshotsRequest
 *   ServerlessCacheName: "STRING_VALUE",
 *   ServerlessCacheSnapshotName: "STRING_VALUE",
 *   SnapshotType: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeServerlessCacheSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServerlessCacheSnapshotsResponse
 * //   NextToken: "STRING_VALUE",
 * //   ServerlessCacheSnapshots: [ // ServerlessCacheSnapshotList
 * //     { // ServerlessCacheSnapshot
 * //       ServerlessCacheSnapshotName: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       SnapshotType: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       ExpiryTime: new Date("TIMESTAMP"),
 * //       BytesUsedForCache: "STRING_VALUE",
 * //       ServerlessCacheConfiguration: { // ServerlessCacheConfiguration
 * //         ServerlessCacheName: "STRING_VALUE",
 * //         Engine: "STRING_VALUE",
 * //         MajorEngineVersion: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeServerlessCacheSnapshotsCommandInput - {@link DescribeServerlessCacheSnapshotsCommandInput}
 * @returns {@link DescribeServerlessCacheSnapshotsCommandOutput}
 * @see {@link DescribeServerlessCacheSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeServerlessCacheSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ServerlessCacheNotFoundFault} (client fault)
 *  <p>The serverless cache was not found or does not exist.</p>
 *
 * @throws {@link ServerlessCacheSnapshotNotFoundFault} (client fault)
 *  <p>This serverless cache snapshot could not be found or does not exist. Available for Redis only.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 */
export class DescribeServerlessCacheSnapshotsCommand extends $Command<
  DescribeServerlessCacheSnapshotsCommandInput,
  DescribeServerlessCacheSnapshotsCommandOutput,
  ElastiCacheClientResolvedConfig
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
  constructor(readonly input: DescribeServerlessCacheSnapshotsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeServerlessCacheSnapshotsCommandInput, DescribeServerlessCacheSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeServerlessCacheSnapshotsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeServerlessCacheSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "DescribeServerlessCacheSnapshots",
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
  private serialize(
    input: DescribeServerlessCacheSnapshotsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeServerlessCacheSnapshotsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeServerlessCacheSnapshotsCommandOutput> {
    return de_DescribeServerlessCacheSnapshotsCommand(output, context);
  }
}
