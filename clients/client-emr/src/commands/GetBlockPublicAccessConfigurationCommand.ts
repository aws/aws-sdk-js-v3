import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { GetBlockPublicAccessConfigurationInput, GetBlockPublicAccessConfigurationOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetBlockPublicAccessConfigurationCommand,
  serializeAws_json1_1GetBlockPublicAccessConfigurationCommand,
} from "../protocols/Aws_json1_1";
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

export interface GetBlockPublicAccessConfigurationCommandInput extends GetBlockPublicAccessConfigurationInput {}
export interface GetBlockPublicAccessConfigurationCommandOutput
  extends GetBlockPublicAccessConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Returns the Amazon EMR block public access configuration for your Amazon Web Services account in the
 *          current Region. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/configure-block-public-access.html">Configure Block
 *             Public Access for Amazon EMR</a> in the <i>Amazon EMR Management
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetBlockPublicAccessConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetBlockPublicAccessConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new GetBlockPublicAccessConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBlockPublicAccessConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetBlockPublicAccessConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetBlockPublicAccessConfigurationCommand extends $Command<
  GetBlockPublicAccessConfigurationCommandInput,
  GetBlockPublicAccessConfigurationCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBlockPublicAccessConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBlockPublicAccessConfigurationCommandInput, GetBlockPublicAccessConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "GetBlockPublicAccessConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBlockPublicAccessConfigurationInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetBlockPublicAccessConfigurationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetBlockPublicAccessConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetBlockPublicAccessConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetBlockPublicAccessConfigurationCommandOutput> {
    return deserializeAws_json1_1GetBlockPublicAccessConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
