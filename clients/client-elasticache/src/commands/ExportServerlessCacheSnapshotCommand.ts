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
import { ExportServerlessCacheSnapshotRequest, ExportServerlessCacheSnapshotResponse } from "../models/models_0";
import {
  de_ExportServerlessCacheSnapshotCommand,
  se_ExportServerlessCacheSnapshotCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExportServerlessCacheSnapshotCommand}.
 */
export interface ExportServerlessCacheSnapshotCommandInput extends ExportServerlessCacheSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link ExportServerlessCacheSnapshotCommand}.
 */
export interface ExportServerlessCacheSnapshotCommandOutput
  extends ExportServerlessCacheSnapshotResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Provides the functionality to export the serverless cache snapshot data to Amazon S3. Available for Redis only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, ExportServerlessCacheSnapshotCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, ExportServerlessCacheSnapshotCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // ExportServerlessCacheSnapshotRequest
 *   ServerlessCacheSnapshotName: "STRING_VALUE", // required
 *   S3BucketName: "STRING_VALUE", // required
 * };
 * const command = new ExportServerlessCacheSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // ExportServerlessCacheSnapshotResponse
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
 * @param ExportServerlessCacheSnapshotCommandInput - {@link ExportServerlessCacheSnapshotCommandInput}
 * @returns {@link ExportServerlessCacheSnapshotCommandOutput}
 * @see {@link ExportServerlessCacheSnapshotCommandInput} for command's `input` shape.
 * @see {@link ExportServerlessCacheSnapshotCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidServerlessCacheSnapshotStateFault} (client fault)
 *  <p>The state of the serverless cache snapshot was not received. Available for Redis only.</p>
 *
 * @throws {@link ServerlessCacheSnapshotNotFoundFault} (client fault)
 *  <p>This serverless cache snapshot could not be found or does not exist. Available for Redis only.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 */
export class ExportServerlessCacheSnapshotCommand extends $Command<
  ExportServerlessCacheSnapshotCommandInput,
  ExportServerlessCacheSnapshotCommandOutput,
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
  constructor(readonly input: ExportServerlessCacheSnapshotCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportServerlessCacheSnapshotCommandInput, ExportServerlessCacheSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExportServerlessCacheSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "ExportServerlessCacheSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "ExportServerlessCacheSnapshot",
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
  private serialize(input: ExportServerlessCacheSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExportServerlessCacheSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportServerlessCacheSnapshotCommandOutput> {
    return de_ExportServerlessCacheSnapshotCommand(output, context);
  }
}
