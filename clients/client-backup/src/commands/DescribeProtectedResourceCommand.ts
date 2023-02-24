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
  DescribeProtectedResourceInput,
  DescribeProtectedResourceInputFilterSensitiveLog,
  DescribeProtectedResourceOutput,
  DescribeProtectedResourceOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeProtectedResourceCommand,
  serializeAws_restJson1DescribeProtectedResourceCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeProtectedResourceCommandInput extends DescribeProtectedResourceInput {}
export interface DescribeProtectedResourceCommandOutput extends DescribeProtectedResourceOutput, __MetadataBearer {}

/**
 * <p>Returns information about a saved resource, including the last time it was backed up,
 *          its Amazon Resource Name (ARN), and the Amazon Web Services service type of the saved
 *          resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeProtectedResourceCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeProtectedResourceCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DescribeProtectedResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProtectedResourceCommandInput} for command's `input` shape.
 * @see {@link DescribeProtectedResourceCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class DescribeProtectedResourceCommand extends $Command<
  DescribeProtectedResourceCommandInput,
  DescribeProtectedResourceCommandOutput,
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

  constructor(readonly input: DescribeProtectedResourceCommandInput) {
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
  ): Handler<DescribeProtectedResourceCommandInput, DescribeProtectedResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeProtectedResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DescribeProtectedResourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeProtectedResourceInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeProtectedResourceOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeProtectedResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeProtectedResourceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeProtectedResourceCommandOutput> {
    return deserializeAws_restJson1DescribeProtectedResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
