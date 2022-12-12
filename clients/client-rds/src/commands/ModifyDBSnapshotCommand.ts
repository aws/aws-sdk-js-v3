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
  ModifyDBSnapshotMessage,
  ModifyDBSnapshotMessageFilterSensitiveLog,
  ModifyDBSnapshotResult,
  ModifyDBSnapshotResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryModifyDBSnapshotCommand,
  serializeAws_queryModifyDBSnapshotCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface ModifyDBSnapshotCommandInput extends ModifyDBSnapshotMessage {}
export interface ModifyDBSnapshotCommandOutput extends ModifyDBSnapshotResult, __MetadataBearer {}

/**
 * <p>Updates a manual DB snapshot with a new engine version. The snapshot can be encrypted
 *             or unencrypted, but not shared or public.
 *
 *     </p>
 *          <p>Amazon RDS supports upgrading DB snapshots for MySQL, PostgreSQL, and Oracle. This command
 *           doesn't apply to RDS Custom.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBSnapshotCommandInput} for command's `input` shape.
 * @see {@link ModifyDBSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class ModifyDBSnapshotCommand extends $Command<
  ModifyDBSnapshotCommandInput,
  ModifyDBSnapshotCommandOutput,
  RDSClientResolvedConfig
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

  constructor(readonly input: ModifyDBSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBSnapshotCommandInput, ModifyDBSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyDBSnapshotMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyDBSnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyDBSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyDBSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBSnapshotCommandOutput> {
    return deserializeAws_queryModifyDBSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
