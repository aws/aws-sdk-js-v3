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
  DescribeBackupPolicyRequest,
  DescribeBackupPolicyRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeBackupPolicyCommand,
  serializeAws_restJson1DescribeBackupPolicyCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeBackupPolicyCommandInput extends DescribeBackupPolicyRequest {}
export interface DescribeBackupPolicyCommandOutput extends BackupPolicyDescription, __MetadataBearer {}

/**
 * <p>Returns the backup policy for the specified EFS file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeBackupPolicyCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeBackupPolicyCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DescribeBackupPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBackupPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupPolicyCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 */
export class DescribeBackupPolicyCommand extends $Command<
  DescribeBackupPolicyCommandInput,
  DescribeBackupPolicyCommandOutput,
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

  constructor(readonly input: DescribeBackupPolicyCommandInput) {
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
  ): Handler<DescribeBackupPolicyCommandInput, DescribeBackupPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBackupPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DescribeBackupPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBackupPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BackupPolicyDescriptionFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeBackupPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeBackupPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBackupPolicyCommandOutput> {
    return deserializeAws_restJson1DescribeBackupPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
