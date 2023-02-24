// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  RestoreDBClusterToPointInTimeMessage,
  RestoreDBClusterToPointInTimeMessageFilterSensitiveLog,
  RestoreDBClusterToPointInTimeResult,
  RestoreDBClusterToPointInTimeResultFilterSensitiveLog,
} from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  deserializeAws_queryRestoreDBClusterToPointInTimeCommand,
  serializeAws_queryRestoreDBClusterToPointInTimeCommand,
} from "../protocols/Aws_query";

export interface RestoreDBClusterToPointInTimeCommandInput extends RestoreDBClusterToPointInTimeMessage {}
export interface RestoreDBClusterToPointInTimeCommandOutput
  extends RestoreDBClusterToPointInTimeResult,
    __MetadataBearer {}

/**
 * <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in
 *       time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code>
 *       days. The target DB cluster is created from the source DB cluster with the same configuration
 *       as the original DB cluster, except that the new DB cluster is created with the default DB
 *       security group.</p>
 *          <note>
 *             <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You
 *         must invoke the <a>CreateDBInstance</a> action to create DB instances for the
 *         restored DB cluster, specifying the identifier of the restored DB cluster in
 *         <code>DBClusterIdentifier</code>. You can create DB instances only after the
 *         <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is
 *         available.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, RestoreDBClusterToPointInTimeCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, RestoreDBClusterToPointInTimeCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new RestoreDBClusterToPointInTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBClusterToPointInTimeCommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterToPointInTimeCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 */
export class RestoreDBClusterToPointInTimeCommand extends $Command<
  RestoreDBClusterToPointInTimeCommandInput,
  RestoreDBClusterToPointInTimeCommandOutput,
  NeptuneClientResolvedConfig
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

  constructor(readonly input: RestoreDBClusterToPointInTimeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreDBClusterToPointInTimeCommandInput, RestoreDBClusterToPointInTimeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreDBClusterToPointInTimeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "RestoreDBClusterToPointInTimeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreDBClusterToPointInTimeMessageFilterSensitiveLog,
      outputFilterSensitiveLog: RestoreDBClusterToPointInTimeResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreDBClusterToPointInTimeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRestoreDBClusterToPointInTimeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreDBClusterToPointInTimeCommandOutput> {
    return deserializeAws_queryRestoreDBClusterToPointInTimeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
