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

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import {
  GetRecoveryPointRestoreMetadataInput,
  GetRecoveryPointRestoreMetadataInputFilterSensitiveLog,
  GetRecoveryPointRestoreMetadataOutput,
  GetRecoveryPointRestoreMetadataOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommand,
  serializeAws_restJson1GetRecoveryPointRestoreMetadataCommand,
} from "../protocols/Aws_restJson1";

export interface GetRecoveryPointRestoreMetadataCommandInput extends GetRecoveryPointRestoreMetadataInput {}
export interface GetRecoveryPointRestoreMetadataCommandOutput
  extends GetRecoveryPointRestoreMetadataOutput,
    __MetadataBearer {}

/**
 * <p>Returns a set of metadata key-value pairs that were used to create the backup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetRecoveryPointRestoreMetadataCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetRecoveryPointRestoreMetadataCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new GetRecoveryPointRestoreMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRecoveryPointRestoreMetadataCommandInput} for command's `input` shape.
 * @see {@link GetRecoveryPointRestoreMetadataCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class GetRecoveryPointRestoreMetadataCommand extends $Command<
  GetRecoveryPointRestoreMetadataCommandInput,
  GetRecoveryPointRestoreMetadataCommandOutput,
  BackupClientResolvedConfig
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

  constructor(readonly input: GetRecoveryPointRestoreMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRecoveryPointRestoreMetadataCommandInput, GetRecoveryPointRestoreMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRecoveryPointRestoreMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "GetRecoveryPointRestoreMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRecoveryPointRestoreMetadataInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetRecoveryPointRestoreMetadataOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetRecoveryPointRestoreMetadataCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRecoveryPointRestoreMetadataCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRecoveryPointRestoreMetadataCommandOutput> {
    return deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
