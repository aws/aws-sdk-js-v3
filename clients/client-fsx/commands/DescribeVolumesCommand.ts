import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DescribeVolumesRequest, DescribeVolumesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeVolumesCommand,
  serializeAws_json1_1DescribeVolumesCommand,
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

export interface DescribeVolumesCommandInput extends DescribeVolumesRequest {}
export interface DescribeVolumesCommandOutput extends DescribeVolumesResponse, __MetadataBearer {}

/**
 * <p>Describes one or more Amazon FSx for NetApp ONTAP volumes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeVolumesCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeVolumesCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DescribeVolumesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVolumesCommandInput} for command's `input` shape.
 * @see {@link DescribeVolumesCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeVolumesCommand extends $Command<
  DescribeVolumesCommandInput,
  DescribeVolumesCommandOutput,
  FSxClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeVolumesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeVolumesCommandInput, DescribeVolumesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DescribeVolumesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeVolumesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeVolumesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeVolumesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeVolumesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVolumesCommandOutput> {
    return deserializeAws_json1_1DescribeVolumesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
