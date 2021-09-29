import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { DescribeHarvestJobRequest, DescribeHarvestJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeHarvestJobCommand,
  serializeAws_restJson1DescribeHarvestJobCommand,
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

export interface DescribeHarvestJobCommandInput extends DescribeHarvestJobRequest {}
export interface DescribeHarvestJobCommandOutput extends DescribeHarvestJobResponse, __MetadataBearer {}

/**
 * Gets details about an existing HarvestJob.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, DescribeHarvestJobCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, DescribeHarvestJobCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new DescribeHarvestJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeHarvestJobCommandInput} for command's `input` shape.
 * @see {@link DescribeHarvestJobCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeHarvestJobCommand extends $Command<
  DescribeHarvestJobCommandInput,
  DescribeHarvestJobCommandOutput,
  MediaPackageClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeHarvestJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeHarvestJobCommandInput, DescribeHarvestJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageClient";
    const commandName = "DescribeHarvestJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeHarvestJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeHarvestJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeHarvestJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeHarvestJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeHarvestJobCommandOutput> {
    return deserializeAws_restJson1DescribeHarvestJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
