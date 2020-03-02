import {
  CloudFrontClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudFrontClient";
import {
  UpdateDistributionRequest,
  UpdateDistributionResult
} from "../models/index";
import {
  deserializeAws_restXmlUpdateDistributionCommand,
  serializeAws_restXmlUpdateDistributionCommand
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type UpdateDistributionCommandInput = UpdateDistributionRequest;
export type UpdateDistributionCommandOutput = UpdateDistributionResult &
  __MetadataBearer;

export class UpdateDistributionCommand extends $Command<
  UpdateDistributionCommandInput,
  UpdateDistributionCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDistributionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDistributionCommandInput, UpdateDistributionCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateDistributionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateDistributionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDistributionCommandOutput> {
    return deserializeAws_restXmlUpdateDistributionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
