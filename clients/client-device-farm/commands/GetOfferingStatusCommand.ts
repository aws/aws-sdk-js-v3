import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetOfferingStatusRequest, GetOfferingStatusResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetOfferingStatusCommand,
  serializeAws_json1_1GetOfferingStatusCommand,
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

export type GetOfferingStatusCommandInput = GetOfferingStatusRequest;
export type GetOfferingStatusCommandOutput = GetOfferingStatusResult & __MetadataBearer;

/**
 * <p>Gets the current status and future status of all offerings purchased by an AWS account. The response
 *             indicates how many offerings are currently available and the offerings that will be available in the next
 *             period. The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the
 *             operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
 */
export class GetOfferingStatusCommand extends $Command<
  GetOfferingStatusCommandInput,
  GetOfferingStatusCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetOfferingStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOfferingStatusCommandInput, GetOfferingStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetOfferingStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetOfferingStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetOfferingStatusResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetOfferingStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetOfferingStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetOfferingStatusCommandOutput> {
    return deserializeAws_json1_1GetOfferingStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
