import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHostedZoneCountRequest, GetHostedZoneCountResponse } from "../models/models_0";
import {
  deserializeAws_restXmlGetHostedZoneCountCommand,
  serializeAws_restXmlGetHostedZoneCountCommand,
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

export type GetHostedZoneCountCommandInput = GetHostedZoneCountRequest;
export type GetHostedZoneCountCommandOutput = GetHostedZoneCountResponse & __MetadataBearer;

/**
 * <p>Retrieves the number of hosted zones that are associated with the current AWS account.</p>
 */
export class GetHostedZoneCountCommand extends $Command<
  GetHostedZoneCountCommandInput,
  GetHostedZoneCountCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetHostedZoneCountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetHostedZoneCountCommandInput, GetHostedZoneCountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetHostedZoneCountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetHostedZoneCountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetHostedZoneCountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetHostedZoneCountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetHostedZoneCountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetHostedZoneCountCommandOutput> {
    return deserializeAws_restXmlGetHostedZoneCountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
