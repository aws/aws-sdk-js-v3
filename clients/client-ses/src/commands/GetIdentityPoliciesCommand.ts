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
  GetIdentityPoliciesRequest,
  GetIdentityPoliciesRequestFilterSensitiveLog,
  GetIdentityPoliciesResponse,
  GetIdentityPoliciesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryGetIdentityPoliciesCommand,
  serializeAws_queryGetIdentityPoliciesCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

export interface GetIdentityPoliciesCommandInput extends GetIdentityPoliciesRequest {}
export interface GetIdentityPoliciesCommandOutput extends GetIdentityPoliciesResponse, __MetadataBearer {}

/**
 * <p>Returns the requested sending authorization policies for the given identity (an email
 *             address or a domain). The policies are returned as a map of policy names to policy
 *             contents. You can retrieve a maximum of 20 policies at a time.</p>
 *         <note>
 *             <p>This API is for the identity owner only. If you have not verified the identity,
 *                 this API will return an error.</p>
 *         </note>
 *         <p>Sending authorization is a feature that enables an identity owner to authorize other
 *             senders to use its identities. For information about using sending authorization, see
 *             the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/sending-authorization.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, GetIdentityPoliciesCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, GetIdentityPoliciesCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new GetIdentityPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIdentityPoliciesCommandInput} for command's `input` shape.
 * @see {@link GetIdentityPoliciesCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 */
export class GetIdentityPoliciesCommand extends $Command<
  GetIdentityPoliciesCommandInput,
  GetIdentityPoliciesCommandOutput,
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

  constructor(readonly input: GetIdentityPoliciesCommandInput) {
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
  ): Handler<GetIdentityPoliciesCommandInput, GetIdentityPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetIdentityPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "GetIdentityPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetIdentityPoliciesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetIdentityPoliciesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetIdentityPoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetIdentityPoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetIdentityPoliciesCommandOutput> {
    return deserializeAws_queryGetIdentityPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
