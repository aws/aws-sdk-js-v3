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
import { DescribeServerlessCachesRequest, DescribeServerlessCachesResponse } from "../models/models_0";
import { de_DescribeServerlessCachesCommand, se_DescribeServerlessCachesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeServerlessCachesCommand}.
 */
export interface DescribeServerlessCachesCommandInput extends DescribeServerlessCachesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServerlessCachesCommand}.
 */
export interface DescribeServerlessCachesCommandOutput extends DescribeServerlessCachesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a specific serverless cache.
 *            If no identifier is specified, then the API returns information on all the serverless caches belonging to
 *            this Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeServerlessCachesCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeServerlessCachesCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeServerlessCachesRequest
 *   ServerlessCacheName: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeServerlessCachesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServerlessCachesResponse
 * //   NextToken: "STRING_VALUE",
 * //   ServerlessCaches: [ // ServerlessCacheList
 * //     { // ServerlessCache
 * //       ServerlessCacheName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       Status: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       MajorEngineVersion: "STRING_VALUE",
 * //       FullEngineVersion: "STRING_VALUE",
 * //       CacheUsageLimits: { // CacheUsageLimits
 * //         DataStorage: { // DataStorage
 * //           Maximum: Number("int"), // required
 * //           Unit: "GB", // required
 * //         },
 * //         ECPUPerSecond: { // ECPUPerSecond
 * //           Maximum: Number("int"), // required
 * //         },
 * //       },
 * //       KmsKeyId: "STRING_VALUE",
 * //       SecurityGroupIds: [ // SecurityGroupIdsList
 * //         "STRING_VALUE",
 * //       ],
 * //       Endpoint: { // Endpoint
 * //         Address: "STRING_VALUE",
 * //         Port: Number("int"),
 * //       },
 * //       ReaderEndpoint: {
 * //         Address: "STRING_VALUE",
 * //         Port: Number("int"),
 * //       },
 * //       ARN: "STRING_VALUE",
 * //       UserGroupId: "STRING_VALUE",
 * //       SubnetIds: [ // SubnetIdsList
 * //         "STRING_VALUE",
 * //       ],
 * //       SnapshotRetentionLimit: Number("int"),
 * //       DailySnapshotTime: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeServerlessCachesCommandInput - {@link DescribeServerlessCachesCommandInput}
 * @returns {@link DescribeServerlessCachesCommandOutput}
 * @see {@link DescribeServerlessCachesCommandInput} for command's `input` shape.
 * @see {@link DescribeServerlessCachesCommandOutput} for command's `response` shape.
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
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 */
export class DescribeServerlessCachesCommand extends $Command<
  DescribeServerlessCachesCommandInput,
  DescribeServerlessCachesCommandOutput,
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
  constructor(readonly input: DescribeServerlessCachesCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeServerlessCachesCommandInput, DescribeServerlessCachesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeServerlessCachesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DescribeServerlessCachesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "DescribeServerlessCaches",
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
  private serialize(input: DescribeServerlessCachesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeServerlessCachesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeServerlessCachesCommandOutput> {
    return de_DescribeServerlessCachesCommand(output, context);
  }
}
