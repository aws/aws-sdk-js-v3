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
import { DeleteServerlessCacheRequest, DeleteServerlessCacheResponse } from "../models/models_0";
import { de_DeleteServerlessCacheCommand, se_DeleteServerlessCacheCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteServerlessCacheCommand}.
 */
export interface DeleteServerlessCacheCommandInput extends DeleteServerlessCacheRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServerlessCacheCommand}.
 */
export interface DeleteServerlessCacheCommandOutput extends DeleteServerlessCacheResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a specified existing serverless cache.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DeleteServerlessCacheCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DeleteServerlessCacheCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const input = { // DeleteServerlessCacheRequest
 *   ServerlessCacheName: "STRING_VALUE", // required
 *   FinalSnapshotName: "STRING_VALUE",
 * };
 * const command = new DeleteServerlessCacheCommand(input);
 * const response = await client.send(command);
 * // { // DeleteServerlessCacheResponse
 * //   ServerlessCache: { // ServerlessCache
 * //     ServerlessCacheName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     Status: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     MajorEngineVersion: "STRING_VALUE",
 * //     FullEngineVersion: "STRING_VALUE",
 * //     CacheUsageLimits: { // CacheUsageLimits
 * //       DataStorage: { // DataStorage
 * //         Maximum: Number("int"), // required
 * //         Unit: "GB", // required
 * //       },
 * //       ECPUPerSecond: { // ECPUPerSecond
 * //         Maximum: Number("int"), // required
 * //       },
 * //     },
 * //     KmsKeyId: "STRING_VALUE",
 * //     SecurityGroupIds: [ // SecurityGroupIdsList
 * //       "STRING_VALUE",
 * //     ],
 * //     Endpoint: { // Endpoint
 * //       Address: "STRING_VALUE",
 * //       Port: Number("int"),
 * //     },
 * //     ReaderEndpoint: {
 * //       Address: "STRING_VALUE",
 * //       Port: Number("int"),
 * //     },
 * //     ARN: "STRING_VALUE",
 * //     UserGroupId: "STRING_VALUE",
 * //     SubnetIds: [ // SubnetIdsList
 * //       "STRING_VALUE",
 * //     ],
 * //     SnapshotRetentionLimit: Number("int"),
 * //     DailySnapshotTime: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteServerlessCacheCommandInput - {@link DeleteServerlessCacheCommandInput}
 * @returns {@link DeleteServerlessCacheCommandOutput}
 * @see {@link DeleteServerlessCacheCommandInput} for command's `input` shape.
 * @see {@link DeleteServerlessCacheCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidCredentialsException} (client fault)
 *  <p>You must enter valid credentials.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link InvalidServerlessCacheStateFault} (client fault)
 *  <p>The account for these credentials is not currently active.</p>
 *
 * @throws {@link ServerlessCacheNotFoundFault} (client fault)
 *  <p>The serverless cache was not found or does not exist.</p>
 *
 * @throws {@link ServerlessCacheSnapshotAlreadyExistsFault} (client fault)
 *  <p>A serverless cache snapshot with this name already exists. Available for Redis only.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 */
export class DeleteServerlessCacheCommand extends $Command<
  DeleteServerlessCacheCommandInput,
  DeleteServerlessCacheCommandOutput,
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
  constructor(readonly input: DeleteServerlessCacheCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteServerlessCacheCommandInput, DeleteServerlessCacheCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteServerlessCacheCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "DeleteServerlessCacheCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonElastiCacheV9",
        operation: "DeleteServerlessCache",
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
  private serialize(input: DeleteServerlessCacheCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteServerlessCacheCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteServerlessCacheCommandOutput> {
    return de_DeleteServerlessCacheCommand(output, context);
  }
}
