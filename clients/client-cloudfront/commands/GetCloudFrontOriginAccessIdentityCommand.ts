import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetCloudFrontOriginAccessIdentityRequest, GetCloudFrontOriginAccessIdentityResult } from "../models/models_0";
import {
  deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand,
  serializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand,
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

export type GetCloudFrontOriginAccessIdentityCommandInput = GetCloudFrontOriginAccessIdentityRequest;
export type GetCloudFrontOriginAccessIdentityCommandOutput = GetCloudFrontOriginAccessIdentityResult & __MetadataBearer;

/**
 * <p>Get the information about an origin access identity. </p>
 */
export class GetCloudFrontOriginAccessIdentityCommand extends $Command<
  GetCloudFrontOriginAccessIdentityCommandInput,
  GetCloudFrontOriginAccessIdentityCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCloudFrontOriginAccessIdentityCommandInput) {
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
  ): Handler<GetCloudFrontOriginAccessIdentityCommandInput, GetCloudFrontOriginAccessIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetCloudFrontOriginAccessIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCloudFrontOriginAccessIdentityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCloudFrontOriginAccessIdentityResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetCloudFrontOriginAccessIdentityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCloudFrontOriginAccessIdentityCommandOutput> {
    return deserializeAws_restXmlGetCloudFrontOriginAccessIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
