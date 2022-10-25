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

import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import {
  DescribeDefaultEncryptionConfigurationRequest,
  DescribeDefaultEncryptionConfigurationRequestFilterSensitiveLog,
  DescribeDefaultEncryptionConfigurationResponse,
  DescribeDefaultEncryptionConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand,
  serializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeDefaultEncryptionConfigurationCommandInput
  extends DescribeDefaultEncryptionConfigurationRequest {}
export interface DescribeDefaultEncryptionConfigurationCommandOutput
  extends DescribeDefaultEncryptionConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about the default encryption configuration for the Amazon Web Services account in
 *       the default or specified Region. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the
 *         <i>IoT SiteWise User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeDefaultEncryptionConfigurationCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeDefaultEncryptionConfigurationCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const command = new DescribeDefaultEncryptionConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDefaultEncryptionConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeDefaultEncryptionConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 */
export class DescribeDefaultEncryptionConfigurationCommand extends $Command<
  DescribeDefaultEncryptionConfigurationCommandInput,
  DescribeDefaultEncryptionConfigurationCommandOutput,
  IoTSiteWiseClientResolvedConfig
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

  constructor(readonly input: DescribeDefaultEncryptionConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDefaultEncryptionConfigurationCommandInput, DescribeDefaultEncryptionConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDefaultEncryptionConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "DescribeDefaultEncryptionConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDefaultEncryptionConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeDefaultEncryptionConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeDefaultEncryptionConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDefaultEncryptionConfigurationCommandOutput> {
    return deserializeAws_restJson1DescribeDefaultEncryptionConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
