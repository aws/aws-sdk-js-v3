// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  GetIdentityNotificationAttributesRequest,
  GetIdentityNotificationAttributesRequestFilterSensitiveLog,
  GetIdentityNotificationAttributesResponse,
  GetIdentityNotificationAttributesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryGetIdentityNotificationAttributesCommand,
  serializeAws_queryGetIdentityNotificationAttributesCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

export interface GetIdentityNotificationAttributesCommandInput extends GetIdentityNotificationAttributesRequest {}
export interface GetIdentityNotificationAttributesCommandOutput
  extends GetIdentityNotificationAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Given a list of verified identities (email addresses and/or domains), returns a
 *             structure describing identity notification attributes.</p>
 *         <p>This operation is throttled at one request per second and can only get notification
 *             attributes for up to 100 identities at a time.</p>
 *         <p>For more information about using notifications with Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/notifications.html">Amazon SES
 *                 Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetIdentityNotificationAttributesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetIdentityNotificationAttributesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new GetIdentityNotificationAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIdentityNotificationAttributesCommandInput} for command's `input` shape.
 * @see {@link GetIdentityNotificationAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 */
export class GetIdentityNotificationAttributesCommand extends $Command<
  GetIdentityNotificationAttributesCommandInput,
  GetIdentityNotificationAttributesCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: GetIdentityNotificationAttributesCommandInput) {
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
  ): Handler<GetIdentityNotificationAttributesCommandInput, GetIdentityNotificationAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIdentityNotificationAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "GetIdentityNotificationAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIdentityNotificationAttributesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetIdentityNotificationAttributesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetIdentityNotificationAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetIdentityNotificationAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetIdentityNotificationAttributesCommandOutput> {
    return deserializeAws_queryGetIdentityNotificationAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
