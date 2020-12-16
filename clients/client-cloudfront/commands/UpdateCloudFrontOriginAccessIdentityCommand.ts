import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import {
  UpdateCloudFrontOriginAccessIdentityRequest,
  UpdateCloudFrontOriginAccessIdentityResult,
} from "../models/models_1";
import {
  deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand,
  serializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand,
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

export type UpdateCloudFrontOriginAccessIdentityCommandInput = UpdateCloudFrontOriginAccessIdentityRequest;
export type UpdateCloudFrontOriginAccessIdentityCommandOutput = UpdateCloudFrontOriginAccessIdentityResult &
  __MetadataBearer;

/**
 * <p>Update an origin access identity. </p>
 */
export class UpdateCloudFrontOriginAccessIdentityCommand extends $Command<
  UpdateCloudFrontOriginAccessIdentityCommandInput,
  UpdateCloudFrontOriginAccessIdentityCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateCloudFrontOriginAccessIdentityCommandInput) {
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
  ): Handler<UpdateCloudFrontOriginAccessIdentityCommandInput, UpdateCloudFrontOriginAccessIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateCloudFrontOriginAccessIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCloudFrontOriginAccessIdentityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateCloudFrontOriginAccessIdentityResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateCloudFrontOriginAccessIdentityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateCloudFrontOriginAccessIdentityCommandOutput> {
    return deserializeAws_restXmlUpdateCloudFrontOriginAccessIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
