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

import { DescribeDataSetRequest, DescribeDataSetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeDataSetCommand,
  serializeAws_restJson1DescribeDataSetCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

export interface DescribeDataSetCommandInput extends DescribeDataSetRequest {}
export interface DescribeDataSetCommandOutput extends DescribeDataSetResponse, __MetadataBearer {}

/**
 * <p>Describes a dataset. This operation doesn't support datasets that include uploaded files as a source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeDataSetCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeDataSetCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DescribeDataSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDataSetCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSetCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 */
export class DescribeDataSetCommand extends $Command<
  DescribeDataSetCommandInput,
  DescribeDataSetCommandOutput,
  QuickSightClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDataSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDataSetCommandInput, DescribeDataSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeDataSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDataSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDataSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDataSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeDataSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDataSetCommandOutput> {
    return deserializeAws_restJson1DescribeDataSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
