import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetInventoryResult } from "../models/models_1";
import { GetInventoryRequest } from "../models/models_2";
import {
  deserializeAws_json1_1GetInventoryCommand,
  serializeAws_json1_1GetInventoryCommand,
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

export interface GetInventoryCommandInput extends GetInventoryRequest {}
export interface GetInventoryCommandOutput extends GetInventoryResult, __MetadataBearer {}

/**
 * <p>Query inventory information. This includes instance status, such as <code>Stopped</code> or
 *     <code>Terminated</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetInventoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetInventoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetInventoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetInventoryCommandInput} for command's `input` shape.
 * @see {@link GetInventoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetInventoryCommand extends $Command<
  GetInventoryCommandInput,
  GetInventoryCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetInventoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInventoryCommandInput, GetInventoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetInventoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetInventoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetInventoryResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetInventoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetInventoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInventoryCommandOutput> {
    return deserializeAws_json1_1GetInventoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
