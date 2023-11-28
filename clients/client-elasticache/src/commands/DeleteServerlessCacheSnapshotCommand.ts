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
import { DeleteServerlessCacheSnapshotRequest, DeleteServerlessCacheSnapshotResponse } from "../models/models_0";
import {
  de_DeleteServerlessCacheSnapshotCommand,
  se_DeleteServerlessCacheSnapshotCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteServerlessCacheSnapshotCommand}.
 */
export interface DeleteServerlessCacheSnapshotCommandInput extends DeleteServerlessCacheSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServerlessCacheSnapshotCommand}.
 */
export interface DeleteServerlessCacheSnapshotCommandOutput
  extends DeleteServerlessCacheSnapshotResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes an existing serverless cache snapshot. Available for Redis only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteServerlessCacheSnapshotCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteServerlessCacheSnapshotCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DeleteServerlessCacheSnapshotRequest
 *   ServerlessCacheSnapshotName: "STRING_VALUE", // required
 * };
 * const command = new DeleteServerlessCacheSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // DeleteServerlessCacheSnapshotResponse
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
 * @param DeleteServerlessCacheSnapshotCommandInput - {@link DeleteServerlessCacheSnapshotCommandInput}
 * @returns {@link DeleteServerlessCacheSnapshotCommandOutput}
 * @see {@link DeleteServerlessCacheSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteServerlessCacheSnapshotCommandOutput} for command's `response` shape.
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
export class DeleteServerlessCacheSnapshotCommand extends $Command<
  DeleteServerlessCacheSnapshotCommandInput,
  DeleteServerlessCacheSnapshotCommandOutput,
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
  constructor(readonly input: DeleteServerlessCacheSnapshotCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteServerlessCacheSnapshotCommandInput, DeleteServerlessCacheSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteServerlessCacheSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DeleteServerlessCacheSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "DeleteServerlessCacheSnapshot",
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
  private serialize(input: DeleteServerlessCacheSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteServerlessCacheSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteServerlessCacheSnapshotCommandOutput> {
    return de_DeleteServerlessCacheSnapshotCommand(output, context);
  }
}
