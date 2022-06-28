// smithy-typescript generated code
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
import { DescribeLocationFsxOntapRequest, DescribeLocationFsxOntapResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeLocationFsxOntapCommand,
  serializeAws_json1_1DescribeLocationFsxOntapCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeLocationFsxOntapCommandInput extends DescribeLocationFsxOntapRequest {}
export interface DescribeLocationFsxOntapCommandOutput extends DescribeLocationFsxOntapResponse, __MetadataBearer {}

/**
 * <p>Provides details about how an DataSync location for an Amazon FSx for NetApp ONTAP file system is configured.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationFsxOntapCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationFsxOntapCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DescribeLocationFsxOntapCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLocationFsxOntapCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationFsxOntapCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 */
export class DescribeLocationFsxOntapCommand extends $Command<
  DescribeLocationFsxOntapCommandInput,
  DescribeLocationFsxOntapCommandOutput,
  DataSyncClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLocationFsxOntapCommandInput) {
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
  ): Handler<DescribeLocationFsxOntapCommandInput, DescribeLocationFsxOntapCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DescribeLocationFsxOntapCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLocationFsxOntapRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLocationFsxOntapResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLocationFsxOntapCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeLocationFsxOntapCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLocationFsxOntapCommandOutput> {
    return deserializeAws_json1_1DescribeLocationFsxOntapCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
