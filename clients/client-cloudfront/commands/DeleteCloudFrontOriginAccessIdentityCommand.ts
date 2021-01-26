import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeleteCloudFrontOriginAccessIdentityRequest } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand,
  serializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand,
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

export type DeleteCloudFrontOriginAccessIdentityCommandInput = DeleteCloudFrontOriginAccessIdentityRequest;
export type DeleteCloudFrontOriginAccessIdentityCommandOutput = __MetadataBearer;

/**
 * <p>Delete an origin access identity. </p>
 */
export class DeleteCloudFrontOriginAccessIdentityCommand extends $Command<
  DeleteCloudFrontOriginAccessIdentityCommandInput,
  DeleteCloudFrontOriginAccessIdentityCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCloudFrontOriginAccessIdentityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCloudFrontOriginAccessIdentityCommandInput, DeleteCloudFrontOriginAccessIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "DeleteCloudFrontOriginAccessIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCloudFrontOriginAccessIdentityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteCloudFrontOriginAccessIdentityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteCloudFrontOriginAccessIdentityCommandOutput> {
    return deserializeAws_restXmlDeleteCloudFrontOriginAccessIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
