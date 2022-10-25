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
  DescribeRecoveryPointInput,
  DescribeRecoveryPointInputFilterSensitiveLog,
  DescribeRecoveryPointOutput,
  DescribeRecoveryPointOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeRecoveryPointCommand,
  serializeAws_restJson1DescribeRecoveryPointCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeRecoveryPointCommandInput extends DescribeRecoveryPointInput {}
export interface DescribeRecoveryPointCommandOutput extends DescribeRecoveryPointOutput, __MetadataBearer {}

/**
 * <p>Returns metadata associated with a recovery point, including ID, status, encryption, and
 *          lifecycle.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeRecoveryPointCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeRecoveryPointCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DescribeRecoveryPointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link DescribeRecoveryPointCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class DescribeRecoveryPointCommand extends $Command<
  DescribeRecoveryPointCommandInput,
  DescribeRecoveryPointCommandOutput,
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

  constructor(readonly input: DescribeRecoveryPointCommandInput) {
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
  ): Handler<DescribeRecoveryPointCommandInput, DescribeRecoveryPointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRecoveryPointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DescribeRecoveryPointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRecoveryPointInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeRecoveryPointOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRecoveryPointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeRecoveryPointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRecoveryPointCommandOutput> {
    return deserializeAws_restJson1DescribeRecoveryPointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
