import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListTrafficPolicyVersionsRequest, ListTrafficPolicyVersionsResponse } from "../models/models_0";
import {
  deserializeAws_restXmlListTrafficPolicyVersionsCommand,
  serializeAws_restXmlListTrafficPolicyVersionsCommand,
} from "../protocols/Aws_restXml";
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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

export type ListTrafficPolicyVersionsCommandInput = ListTrafficPolicyVersionsRequest;
export type ListTrafficPolicyVersionsCommandOutput = ListTrafficPolicyVersionsResponse & __MetadataBearer;

/**
 * <p>Gets information about all of the versions for a specified traffic policy.</p>
 * 		       <p>Traffic policy versions are listed in numerical order by <code>VersionNumber</code>.</p>
 */
export class ListTrafficPolicyVersionsCommand extends $Command<
  ListTrafficPolicyVersionsCommandInput,
  ListTrafficPolicyVersionsCommandOutput,
  Route53ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTrafficPolicyVersionsCommandInput) {
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
  ): Handler<ListTrafficPolicyVersionsCommandInput, ListTrafficPolicyVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListTrafficPolicyVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTrafficPolicyVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTrafficPolicyVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTrafficPolicyVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListTrafficPolicyVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTrafficPolicyVersionsCommandOutput> {
    return deserializeAws_restXmlListTrafficPolicyVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
