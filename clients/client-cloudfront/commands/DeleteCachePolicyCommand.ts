import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeleteCachePolicyRequest } from "../models/index";
import {
  deserializeAws_restXmlDeleteCachePolicyCommand,
  serializeAws_restXmlDeleteCachePolicyCommand,
} from "../protocols/Aws_restXml";
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

export type DeleteCachePolicyCommandInput = DeleteCachePolicyRequest;
export type DeleteCachePolicyCommandOutput = __MetadataBearer;

export class DeleteCachePolicyCommand extends $Command<
  DeleteCachePolicyCommandInput,
  DeleteCachePolicyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCachePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCachePolicyCommandInput, DeleteCachePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: DeleteCachePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCachePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteCachePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCachePolicyCommandOutput> {
    return deserializeAws_restXmlDeleteCachePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
