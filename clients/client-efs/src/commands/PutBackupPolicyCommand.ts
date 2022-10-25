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

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import {
  BackupPolicyDescription,
  BackupPolicyDescriptionFilterSensitiveLog,
  PutBackupPolicyRequest,
  PutBackupPolicyRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutBackupPolicyCommand,
  serializeAws_restJson1PutBackupPolicyCommand,
} from "../protocols/Aws_restJson1";

export interface PutBackupPolicyCommandInput extends PutBackupPolicyRequest {}
export interface PutBackupPolicyCommandOutput extends BackupPolicyDescription, __MetadataBearer {}

/**
 * <p>Updates the file system's backup policy. Use this action to start or stop automatic backups of the file system. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, PutBackupPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, PutBackupPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new PutBackupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutBackupPolicyCommandInput} for command's `input` shape.
 * @see {@link PutBackupPolicyCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 */
export class PutBackupPolicyCommand extends $Command<
  PutBackupPolicyCommandInput,
  PutBackupPolicyCommandOutput,
  EFSClientResolvedConfig
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

  constructor(readonly input: PutBackupPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutBackupPolicyCommandInput, PutBackupPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutBackupPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "PutBackupPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutBackupPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BackupPolicyDescriptionFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutBackupPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutBackupPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutBackupPolicyCommandOutput> {
    return deserializeAws_restJson1PutBackupPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
