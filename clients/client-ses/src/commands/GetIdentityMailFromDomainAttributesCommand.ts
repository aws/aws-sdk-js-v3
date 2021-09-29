import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import {
  GetIdentityMailFromDomainAttributesRequest,
  GetIdentityMailFromDomainAttributesResponse,
} from "../models/models_0";
import {
  deserializeAws_queryGetIdentityMailFromDomainAttributesCommand,
  serializeAws_queryGetIdentityMailFromDomainAttributesCommand,
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

export interface GetIdentityMailFromDomainAttributesCommandInput extends GetIdentityMailFromDomainAttributesRequest {}
export interface GetIdentityMailFromDomainAttributesCommandOutput
  extends GetIdentityMailFromDomainAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Returns the custom MAIL FROM attributes for a list of identities (email addresses :
 *             domains).</p>
 *         <p>This operation is throttled at one request per second and can only get custom MAIL
 *             FROM attributes for up to 100 identities at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetIdentityMailFromDomainAttributesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetIdentityMailFromDomainAttributesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new GetIdentityMailFromDomainAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIdentityMailFromDomainAttributesCommandInput} for command's `input` shape.
 * @see {@link GetIdentityMailFromDomainAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetIdentityMailFromDomainAttributesCommand extends $Command<
  GetIdentityMailFromDomainAttributesCommandInput,
  GetIdentityMailFromDomainAttributesCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetIdentityMailFromDomainAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetIdentityMailFromDomainAttributesCommandInput, GetIdentityMailFromDomainAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "GetIdentityMailFromDomainAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIdentityMailFromDomainAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetIdentityMailFromDomainAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetIdentityMailFromDomainAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetIdentityMailFromDomainAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetIdentityMailFromDomainAttributesCommandOutput> {
    return deserializeAws_queryGetIdentityMailFromDomainAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
