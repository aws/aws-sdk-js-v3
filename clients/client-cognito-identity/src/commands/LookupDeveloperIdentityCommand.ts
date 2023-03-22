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

import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import {
  LookupDeveloperIdentityInput,
  LookupDeveloperIdentityInputFilterSensitiveLog,
  LookupDeveloperIdentityResponse,
  LookupDeveloperIdentityResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1LookupDeveloperIdentityCommand,
  serializeAws_json1_1LookupDeveloperIdentityCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link LookupDeveloperIdentityCommand}.
 */
export interface LookupDeveloperIdentityCommandInput extends LookupDeveloperIdentityInput {}
/**
 * @public
 *
 * The output of {@link LookupDeveloperIdentityCommand}.
 */
export interface LookupDeveloperIdentityCommandOutput extends LookupDeveloperIdentityResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the <code>IdentityID</code> associated with a
 *             <code>DeveloperUserIdentifier</code> or the list of <code>DeveloperUserIdentifier</code>
 *          values associated with an <code>IdentityId</code> for an existing identity. Either
 *             <code>IdentityID</code> or <code>DeveloperUserIdentifier</code> must not be null. If you
 *          supply only one of these values, the other value will be searched in the database and
 *          returned as a part of the response. If you supply both,
 *             <code>DeveloperUserIdentifier</code> will be matched against <code>IdentityID</code>. If
 *          the values are verified against the database, the response returns both values and is the
 *          same as the request. Otherwise a <code>ResourceConflictException</code> is
 *          thrown.</p>
 *          <p>
 *             <code>LookupDeveloperIdentity</code> is intended for low-throughput control plane
 *          operations: for example, to enable customer service to locate an identity ID by username.
 *          If you are using it for higher-volume operations such as user authentication, your requests
 *          are likely to be throttled. <a>GetOpenIdTokenForDeveloperIdentity</a> is a
 *          better option for higher-volume operations for user authentication.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, LookupDeveloperIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, LookupDeveloperIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new LookupDeveloperIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param LookupDeveloperIdentityCommandInput - {@link LookupDeveloperIdentityCommandInput}
 * @returns {@link LookupDeveloperIdentityCommandOutput}
 * @see {@link LookupDeveloperIdentityCommandInput} for command's `input` shape.
 * @see {@link LookupDeveloperIdentityCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Thrown when the service encounters an error during processing the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Thrown for missing or bad input parameter(s).</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>Thrown when a user is not authorized to access the requested resource.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>Thrown when a user tries to use a login which is already linked to another
 *          account.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when the requested resource (for example, a dataset or record) does not
 *          exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Thrown when a request is throttled.</p>
 *
 *
 */
export class LookupDeveloperIdentityCommand extends $Command<
  LookupDeveloperIdentityCommandInput,
  LookupDeveloperIdentityCommandOutput,
  CognitoIdentityClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: LookupDeveloperIdentityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<LookupDeveloperIdentityCommandInput, LookupDeveloperIdentityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, LookupDeveloperIdentityCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "LookupDeveloperIdentityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: LookupDeveloperIdentityInputFilterSensitiveLog,
      outputFilterSensitiveLog: LookupDeveloperIdentityResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: LookupDeveloperIdentityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1LookupDeveloperIdentityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<LookupDeveloperIdentityCommandOutput> {
    return deserializeAws_json1_1LookupDeveloperIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
