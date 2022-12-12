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
  DeleteDBSnapshotMessage,
  DeleteDBSnapshotMessageFilterSensitiveLog,
  DeleteDBSnapshotResult,
  DeleteDBSnapshotResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteDBSnapshotCommand,
  serializeAws_queryDeleteDBSnapshotCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface DeleteDBSnapshotCommandInput extends DeleteDBSnapshotMessage {}
export interface DeleteDBSnapshotCommandOutput extends DeleteDBSnapshotResult, __MetadataBearer {}

/**
 * <p>Deletes a DB snapshot. If the snapshot is being copied, the copy operation is
 *             terminated.</p>
 *          <note>
 *             <p>The DB snapshot must be in the <code>available</code> state to be deleted.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteDBSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteDBSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class DeleteDBSnapshotCommand extends $Command<
  DeleteDBSnapshotCommandInput,
  DeleteDBSnapshotCommandOutput,
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

  constructor(readonly input: DeleteDBSnapshotCommandInput) {
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
  ): Handler<DeleteDBSnapshotCommandInput, DeleteDBSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDBSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteDBSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDBSnapshotMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteDBSnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDBSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteDBSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDBSnapshotCommandOutput> {
    return deserializeAws_queryDeleteDBSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
