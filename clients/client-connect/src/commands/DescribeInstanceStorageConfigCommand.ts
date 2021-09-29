import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DescribeInstanceStorageConfigRequest, DescribeInstanceStorageConfigResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeInstanceStorageConfigCommand,
  serializeAws_restJson1DescribeInstanceStorageConfigCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DescribeInstanceStorageConfigCommandInput extends DescribeInstanceStorageConfigRequest {}
export interface DescribeInstanceStorageConfigCommandOutput
  extends DescribeInstanceStorageConfigResponse,
    __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Retrieves the current storage configurations for the specified resource type, association
 *    ID, and instance ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeInstanceStorageConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeInstanceStorageConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DescribeInstanceStorageConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceStorageConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceStorageConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeInstanceStorageConfigCommand extends $Command<
  DescribeInstanceStorageConfigCommandInput,
  DescribeInstanceStorageConfigCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeInstanceStorageConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInstanceStorageConfigCommandInput, DescribeInstanceStorageConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DescribeInstanceStorageConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstanceStorageConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstanceStorageConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInstanceStorageConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeInstanceStorageConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceStorageConfigCommandOutput> {
    return deserializeAws_restJson1DescribeInstanceStorageConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
