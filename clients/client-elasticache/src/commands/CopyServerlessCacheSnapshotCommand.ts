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
import { CopyServerlessCacheSnapshotRequest, CopyServerlessCacheSnapshotResponse } from "../models/models_0";
import { de_CopyServerlessCacheSnapshotCommand, se_CopyServerlessCacheSnapshotCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CopyServerlessCacheSnapshotCommand}.
 */
export interface CopyServerlessCacheSnapshotCommandInput extends CopyServerlessCacheSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link CopyServerlessCacheSnapshotCommand}.
 */
export interface CopyServerlessCacheSnapshotCommandOutput
  extends CopyServerlessCacheSnapshotResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a copy of an existing serverless cache’s snapshot. Available for Redis only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, CopyServerlessCacheSnapshotCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, CopyServerlessCacheSnapshotCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // CopyServerlessCacheSnapshotRequest
 *   SourceServerlessCacheSnapshotName: "STRING_VALUE", // required
 *   TargetServerlessCacheSnapshotName: "STRING_VALUE", // required
 *   KmsKeyId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CopyServerlessCacheSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CopyServerlessCacheSnapshotResponse
 * //   ServerlessCacheSnapshot: { // ServerlessCacheSnapshot
 * //     ServerlessCacheSnapshotName: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //     KmsKeyId: "STRING_VALUE",
 * //     SnapshotType: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     ExpiryTime: new Date("TIMESTAMP"),
 * //     BytesUsedForCache: "STRING_VALUE",
 * //     ServerlessCacheConfiguration: { // ServerlessCacheConfiguration
 * //       ServerlessCacheName: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       MajorEngineVersion: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CopyServerlessCacheSnapshotCommandInput - {@link CopyServerlessCacheSnapshotCommandInput}
 * @returns {@link CopyServerlessCacheSnapshotCommandOutput}
 * @see {@link CopyServerlessCacheSnapshotCommandInput} for command's `input` shape.
 * @see {@link CopyServerlessCacheSnapshotCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidServerlessCacheSnapshotStateFault} (client fault)
 *  <p>The state of the serverless cache snapshot was not received. Available for Redis only.</p>
 *
 * @throws {@link ServerlessCacheSnapshotAlreadyExistsFault} (client fault)
 *  <p>A serverless cache snapshot with this name already exists. Available for Redis only.</p>
 *
 * @throws {@link ServerlessCacheSnapshotNotFoundFault} (client fault)
 *  <p>This serverless cache snapshot could not be found or does not exist. Available for Redis only.</p>
 *
 * @throws {@link ServerlessCacheSnapshotQuotaExceededFault} (client fault)
 *  <p>The number of serverless cache snapshots exceeds the customer snapshot quota. Available for Redis only.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p>The request cannot be processed because it would cause the resource to have more than
 *             the allowed number of tags. The maximum number of tags permitted on a resource is
 *             50.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 */
export class CopyServerlessCacheSnapshotCommand extends $Command<
  CopyServerlessCacheSnapshotCommandInput,
  CopyServerlessCacheSnapshotCommandOutput,
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
  constructor(readonly input: CopyServerlessCacheSnapshotCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyServerlessCacheSnapshotCommandInput, CopyServerlessCacheSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CopyServerlessCacheSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "CopyServerlessCacheSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "CopyServerlessCacheSnapshot",
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
  private serialize(input: CopyServerlessCacheSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CopyServerlessCacheSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CopyServerlessCacheSnapshotCommandOutput> {
    return de_CopyServerlessCacheSnapshotCommand(output, context);
  }
}
