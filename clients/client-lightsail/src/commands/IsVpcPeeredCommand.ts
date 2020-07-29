import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { IsVpcPeeredRequest, IsVpcPeeredResult } from "../models/index";
import {
  deserializeAws_json1_1IsVpcPeeredCommand,
  serializeAws_json1_1IsVpcPeeredCommand,
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

export type IsVpcPeeredCommandInput = IsVpcPeeredRequest;
export type IsVpcPeeredCommandOutput = IsVpcPeeredResult & __MetadataBearer;

export class IsVpcPeeredCommand extends $Command<
  IsVpcPeeredCommandInput,
  IsVpcPeeredCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: IsVpcPeeredCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<IsVpcPeeredCommandInput, IsVpcPeeredCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: IsVpcPeeredCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1IsVpcPeeredCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<IsVpcPeeredCommandOutput> {
    return deserializeAws_json1_1IsVpcPeeredCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
