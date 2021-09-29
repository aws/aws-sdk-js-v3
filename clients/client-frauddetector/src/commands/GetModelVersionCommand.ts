import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { GetModelVersionRequest, GetModelVersionResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetModelVersionCommand,
  serializeAws_json1_1GetModelVersionCommand,
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

export interface GetModelVersionCommandInput extends GetModelVersionRequest {}
export interface GetModelVersionCommandOutput extends GetModelVersionResult, __MetadataBearer {}

/**
 * <p>Gets the details of the specified model version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetModelVersionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetModelVersionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const command = new GetModelVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetModelVersionCommandInput} for command's `input` shape.
 * @see {@link GetModelVersionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetModelVersionCommand extends $Command<
  GetModelVersionCommandInput,
  GetModelVersionCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetModelVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetModelVersionCommandInput, GetModelVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "GetModelVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetModelVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetModelVersionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetModelVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetModelVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetModelVersionCommandOutput> {
    return deserializeAws_json1_1GetModelVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
