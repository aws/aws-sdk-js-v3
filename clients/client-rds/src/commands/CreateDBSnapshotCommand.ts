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
  CreateDBSnapshotMessage,
  CreateDBSnapshotMessageFilterSensitiveLog,
  CreateDBSnapshotResult,
  CreateDBSnapshotResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateDBSnapshotCommand,
  serializeAws_queryCreateDBSnapshotCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface CreateDBSnapshotCommandInput extends CreateDBSnapshotMessage {}
export interface CreateDBSnapshotCommandOutput extends CreateDBSnapshotResult, __MetadataBearer {}

/**
 * <p>Creates a snapshot of a DB instance. The source DB instance must be in the <code>available</code> or
 *                 <code>storage-optimization</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateDBSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class CreateDBSnapshotCommand extends $Command<
  CreateDBSnapshotCommandInput,
  CreateDBSnapshotCommandOutput,
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

  constructor(readonly input: CreateDBSnapshotCommandInput) {
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
  ): Handler<CreateDBSnapshotCommandInput, CreateDBSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDBSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDBSnapshotMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDBSnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDBSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBSnapshotCommandOutput> {
    return deserializeAws_queryCreateDBSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
