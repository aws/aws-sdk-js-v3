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
  GetBackupSelectionInput,
  GetBackupSelectionInputFilterSensitiveLog,
  GetBackupSelectionOutput,
  GetBackupSelectionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetBackupSelectionCommand,
  serializeAws_restJson1GetBackupSelectionCommand,
} from "../protocols/Aws_restJson1";

export interface GetBackupSelectionCommandInput extends GetBackupSelectionInput {}
export interface GetBackupSelectionCommandOutput extends GetBackupSelectionOutput, __MetadataBearer {}

/**
 * <p>Returns selection metadata and a document in JSON format that specifies a list of
 *          resources that are associated with a backup plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupSelectionCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupSelectionCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new GetBackupSelectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBackupSelectionCommandInput} for command's `input` shape.
 * @see {@link GetBackupSelectionCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class GetBackupSelectionCommand extends $Command<
  GetBackupSelectionCommandInput,
  GetBackupSelectionCommandOutput,
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

  constructor(readonly input: GetBackupSelectionCommandInput) {
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
  ): Handler<GetBackupSelectionCommandInput, GetBackupSelectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBackupSelectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "GetBackupSelectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBackupSelectionInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetBackupSelectionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBackupSelectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBackupSelectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBackupSelectionCommandOutput> {
    return deserializeAws_restJson1GetBackupSelectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
