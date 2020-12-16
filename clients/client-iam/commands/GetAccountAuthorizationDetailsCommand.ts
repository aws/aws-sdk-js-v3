import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetAccountAuthorizationDetailsRequest, GetAccountAuthorizationDetailsResponse } from "../models/models_0";
import {
  deserializeAws_queryGetAccountAuthorizationDetailsCommand,
  serializeAws_queryGetAccountAuthorizationDetailsCommand,
} from "../protocols/Aws_query";
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

export type GetAccountAuthorizationDetailsCommandInput = GetAccountAuthorizationDetailsRequest;
export type GetAccountAuthorizationDetailsCommandOutput = GetAccountAuthorizationDetailsResponse & __MetadataBearer;

/**
 * <p>Retrieves information about all IAM users, groups, roles, and policies in your AWS
 *          account, including their relationships to one another. Use this API to obtain a snapshot of
 *          the configuration of IAM permissions (users, groups, roles, and policies) in your
 *          account.</p>
 *          <note>
 *             <p>Policies returned by this API are URL-encoded compliant
 *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
 *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
 *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
 *     the Java SDK. Other languages and SDKs provide similar functionality.</p>
 *          </note>
 *          <p>You can optionally filter the results using the
 *             <code>Filter</code> parameter. You can paginate the results using the
 *             <code>MaxItems</code> and <code>Marker</code> parameters.</p>
 */
export class GetAccountAuthorizationDetailsCommand extends $Command<
  GetAccountAuthorizationDetailsCommandInput,
  GetAccountAuthorizationDetailsCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAccountAuthorizationDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccountAuthorizationDetailsCommandInput, GetAccountAuthorizationDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetAccountAuthorizationDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAccountAuthorizationDetailsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAccountAuthorizationDetailsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetAccountAuthorizationDetailsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetAccountAuthorizationDetailsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAccountAuthorizationDetailsCommandOutput> {
    return deserializeAws_queryGetAccountAuthorizationDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
