// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import {
  SetUICustomizationRequest,
  SetUICustomizationRequestFilterSensitiveLog,
  SetUICustomizationResponse,
  SetUICustomizationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1SetUICustomizationCommand,
  serializeAws_json1_1SetUICustomizationCommand,
} from "../protocols/Aws_json1_1";

export interface SetUICustomizationCommandInput extends SetUICustomizationRequest {}
export interface SetUICustomizationCommandOutput extends SetUICustomizationResponse, __MetadataBearer {}

/**
 * <p>Sets the user interface (UI) customization information for a user pool's built-in app
 *             UI.</p>
 *         <p>You can specify app UI customization settings for a single client (with a specific
 *                 <code>clientId</code>) or for all clients (by setting the <code>clientId</code> to
 *                 <code>ALL</code>). If you specify <code>ALL</code>, the default configuration is
 *             used for every client that has no previously set UI customization. If you specify UI
 *             customization settings for a particular client, it will no longer return to the
 *                 <code>ALL</code> configuration.</p>
 *         <note>
 *             <p>To use this API, your user pool must have a domain associated with it. Otherwise,
 *                 there is no place to host the app's pages, and the service will throw an
 *                 error.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SetUICustomizationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetUICustomizationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new SetUICustomizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetUICustomizationCommandInput} for command's `input` shape.
 * @see {@link SetUICustomizationCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 */
export class SetUICustomizationCommand extends $Command<
  SetUICustomizationCommandInput,
  SetUICustomizationCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
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

  constructor(readonly input: SetUICustomizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetUICustomizationCommandInput, SetUICustomizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetUICustomizationCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "SetUICustomizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetUICustomizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SetUICustomizationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetUICustomizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SetUICustomizationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetUICustomizationCommandOutput> {
    return deserializeAws_json1_1SetUICustomizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
