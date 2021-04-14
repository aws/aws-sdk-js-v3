import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { GetResolverDnssecConfigRequest, GetResolverDnssecConfigResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetResolverDnssecConfigCommand,
  serializeAws_json1_1GetResolverDnssecConfigCommand,
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

export type GetResolverDnssecConfigCommandInput = GetResolverDnssecConfigRequest;
export type GetResolverDnssecConfigCommandOutput = GetResolverDnssecConfigResponse & __MetadataBearer;

/**
 * <p>Gets DNSSEC validation information for a specified resource.</p>
 */
export class GetResolverDnssecConfigCommand extends $Command<
  GetResolverDnssecConfigCommandInput,
  GetResolverDnssecConfigCommandOutput,
  Route53ResolverClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetResolverDnssecConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ResolverClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResolverDnssecConfigCommandInput, GetResolverDnssecConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53ResolverClient";
    const commandName = "GetResolverDnssecConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResolverDnssecConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetResolverDnssecConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResolverDnssecConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetResolverDnssecConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResolverDnssecConfigCommandOutput> {
    return deserializeAws_json1_1GetResolverDnssecConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
