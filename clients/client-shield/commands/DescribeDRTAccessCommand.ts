import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DescribeDRTAccessRequest, DescribeDRTAccessResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDRTAccessCommand,
  serializeAws_json1_1DescribeDRTAccessCommand,
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

export type DescribeDRTAccessCommandInput = DescribeDRTAccessRequest;
export type DescribeDRTAccessCommandOutput = DescribeDRTAccessResponse & __MetadataBearer;

/**
 * <p>Returns the current role and list of Amazon S3 log buckets used by the DDoS Response Team (DRT) to access your AWS account while assisting with attack mitigation.</p>
 */
export class DescribeDRTAccessCommand extends $Command<
  DescribeDRTAccessCommandInput,
  DescribeDRTAccessCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDRTAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDRTAccessCommandInput, DescribeDRTAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "DescribeDRTAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDRTAccessRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDRTAccessResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDRTAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDRTAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDRTAccessCommandOutput> {
    return deserializeAws_json1_1DescribeDRTAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
