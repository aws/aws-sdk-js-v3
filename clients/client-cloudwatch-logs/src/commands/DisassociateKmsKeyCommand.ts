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

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DisassociateKmsKeyRequest, DisassociateKmsKeyRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateKmsKeyCommand,
  serializeAws_json1_1DisassociateKmsKeyCommand,
} from "../protocols/Aws_json1_1";

export interface DisassociateKmsKeyCommandInput extends DisassociateKmsKeyRequest {}
export interface DisassociateKmsKeyCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociates the associated KMS key from the specified log
 *       group.</p>
 *          <p>After the KMS key is disassociated from the log group, CloudWatch Logs stops encrypting newly ingested data for the log group. All previously ingested data
 *       remains encrypted, and CloudWatch Logs requires permissions for the KMS key
 *       whenever the encrypted data is requested.</p>
 *          <p>Note that it can take up to 5 minutes for this operation to take effect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DisassociateKmsKeyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DisassociateKmsKeyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new DisassociateKmsKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateKmsKeyCommandInput} for command's `input` shape.
 * @see {@link DisassociateKmsKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 */
export class DisassociateKmsKeyCommand extends $Command<
  DisassociateKmsKeyCommandInput,
  DisassociateKmsKeyCommandOutput,
  CloudWatchLogsClientResolvedConfig
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

  constructor(readonly input: DisassociateKmsKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateKmsKeyCommandInput, DisassociateKmsKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateKmsKeyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "DisassociateKmsKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateKmsKeyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateKmsKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateKmsKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateKmsKeyCommandOutput> {
    return deserializeAws_json1_1DisassociateKmsKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
