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

import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { UpdateKxClusterDatabasesRequest, UpdateKxClusterDatabasesResponse } from "../models/models_0";
import { de_UpdateKxClusterDatabasesCommand, se_UpdateKxClusterDatabasesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateKxClusterDatabasesCommand}.
 */
export interface UpdateKxClusterDatabasesCommandInput extends UpdateKxClusterDatabasesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKxClusterDatabasesCommand}.
 */
export interface UpdateKxClusterDatabasesCommandOutput extends UpdateKxClusterDatabasesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the databases mounted on a kdb cluster, which includes the <code>changesetId</code> and all the dbPaths to be cached. This API does not allow you to change a database name or add a database if you created a cluster without one. </p>
 *          <p>Using this API you can point a cluster to a different changeset and modify a list of partitions being cached.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, UpdateKxClusterDatabasesCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, UpdateKxClusterDatabasesCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const input = { // UpdateKxClusterDatabasesRequest
 *   environmentId: "STRING_VALUE", // required
 *   clusterName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   databases: [ // KxDatabaseConfigurations // required
 *     { // KxDatabaseConfiguration
 *       databaseName: "STRING_VALUE", // required
 *       cacheConfigurations: [ // KxDatabaseCacheConfigurations
 *         { // KxDatabaseCacheConfiguration
 *           cacheType: "STRING_VALUE", // required
 *           dbPaths: [ // DbPaths // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       changesetId: "STRING_VALUE",
 *     },
 *   ],
 *   deploymentConfiguration: { // KxDeploymentConfiguration
 *     deploymentStrategy: "NO_RESTART" || "ROLLING", // required
 *   },
 * };
 * const command = new UpdateKxClusterDatabasesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateKxClusterDatabasesCommandInput - {@link UpdateKxClusterDatabasesCommandInput}
 * @returns {@link UpdateKxClusterDatabasesCommandOutput}
 * @see {@link UpdateKxClusterDatabasesCommandInput} for command's `input` shape.
 * @see {@link UpdateKxClusterDatabasesCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit or quota is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 */
export class UpdateKxClusterDatabasesCommand extends $Command<
  UpdateKxClusterDatabasesCommandInput,
  UpdateKxClusterDatabasesCommandOutput,
  FinspaceClientResolvedConfig
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
  constructor(readonly input: UpdateKxClusterDatabasesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateKxClusterDatabasesCommandInput, UpdateKxClusterDatabasesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateKxClusterDatabasesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceClient";
    const commandName = "UpdateKxClusterDatabasesCommand";
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
  private serialize(input: UpdateKxClusterDatabasesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateKxClusterDatabasesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateKxClusterDatabasesCommandOutput> {
    return de_UpdateKxClusterDatabasesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
