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
  MergeDeveloperIdentitiesInput,
  MergeDeveloperIdentitiesInputFilterSensitiveLog,
  MergeDeveloperIdentitiesResponse,
  MergeDeveloperIdentitiesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1MergeDeveloperIdentitiesCommand,
  serializeAws_json1_1MergeDeveloperIdentitiesCommand,
} from "../protocols/Aws_json1_1";

export interface MergeDeveloperIdentitiesCommandInput extends MergeDeveloperIdentitiesInput {}
export interface MergeDeveloperIdentitiesCommandOutput extends MergeDeveloperIdentitiesResponse, __MetadataBearer {}

/**
 * <p>Merges two users having different <code>IdentityId</code>s, existing in the same
 *          identity pool, and identified by the same developer provider. You can use this action to
 *          request that discrete users be merged and identified as a single user in the Cognito
 *          environment. Cognito associates the given source user (<code>SourceUserIdentifier</code>)
 *          with the <code>IdentityId</code> of the <code>DestinationUserIdentifier</code>. Only
 *          developer-authenticated users can be merged. If the users to be merged are associated with
 *          the same public provider, but as two different users, an exception will be
 *          thrown.</p>
 *          <p>The number of linked logins is limited to 20. So, the number of linked logins for the
 *          source user, <code>SourceUserIdentifier</code>, and the destination user,
 *          <code>DestinationUserIdentifier</code>, together should not be larger than 20.
 *          Otherwise, an exception will be thrown.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, MergeDeveloperIdentitiesCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, MergeDeveloperIdentitiesCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * const client = new CognitoIdentityClient(config);
 * const command = new MergeDeveloperIdentitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MergeDeveloperIdentitiesCommandInput} for command's `input` shape.
 * @see {@link MergeDeveloperIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 */
export class MergeDeveloperIdentitiesCommand extends $Command<
  MergeDeveloperIdentitiesCommandInput,
  MergeDeveloperIdentitiesCommandOutput,
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

  constructor(readonly input: MergeDeveloperIdentitiesCommandInput) {
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
  ): Handler<MergeDeveloperIdentitiesCommandInput, MergeDeveloperIdentitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, MergeDeveloperIdentitiesCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityClient";
    const commandName = "MergeDeveloperIdentitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MergeDeveloperIdentitiesInputFilterSensitiveLog,
      outputFilterSensitiveLog: MergeDeveloperIdentitiesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MergeDeveloperIdentitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1MergeDeveloperIdentitiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MergeDeveloperIdentitiesCommandOutput> {
    return deserializeAws_json1_1MergeDeveloperIdentitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
