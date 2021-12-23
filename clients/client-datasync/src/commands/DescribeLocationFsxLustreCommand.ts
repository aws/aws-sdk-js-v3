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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeLocationFsxLustreRequest, DescribeLocationFsxLustreResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeLocationFsxLustreCommand,
  serializeAws_json1_1DescribeLocationFsxLustreCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeLocationFsxLustreCommandInput extends DescribeLocationFsxLustreRequest {}
export interface DescribeLocationFsxLustreCommandOutput extends DescribeLocationFsxLustreResponse, __MetadataBearer {}

/**
 * <p>Returns metadata, such as the path information about an Amazon FSx for Lustre
 *       location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationFsxLustreCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationFsxLustreCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DescribeLocationFsxLustreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocationFsxLustreCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationFsxLustreCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 */
export class DescribeLocationFsxLustreCommand extends $Command<
  DescribeLocationFsxLustreCommandInput,
  DescribeLocationFsxLustreCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLocationFsxLustreCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeLocationFsxLustreCommandInput, DescribeLocationFsxLustreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DescribeLocationFsxLustreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLocationFsxLustreRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLocationFsxLustreResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLocationFsxLustreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeLocationFsxLustreCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLocationFsxLustreCommandOutput> {
    return deserializeAws_json1_1DescribeLocationFsxLustreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
