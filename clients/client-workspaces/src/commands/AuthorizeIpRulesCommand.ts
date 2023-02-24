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
  AuthorizeIpRulesRequest,
  AuthorizeIpRulesRequestFilterSensitiveLog,
  AuthorizeIpRulesResult,
  AuthorizeIpRulesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AuthorizeIpRulesCommand,
  serializeAws_json1_1AuthorizeIpRulesCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

export interface AuthorizeIpRulesCommandInput extends AuthorizeIpRulesRequest {}
export interface AuthorizeIpRulesCommandOutput extends AuthorizeIpRulesResult, __MetadataBearer {}

/**
 * <p>Adds one or more rules to the specified IP access control group.</p>
 *          <p>This action gives users permission to access their WorkSpaces from the CIDR address
 *          ranges specified in the rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, AuthorizeIpRulesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, AuthorizeIpRulesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new AuthorizeIpRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeIpRulesCommandInput} for command's `input` shape.
 * @see {@link AuthorizeIpRulesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 */
export class AuthorizeIpRulesCommand extends $Command<
  AuthorizeIpRulesCommandInput,
  AuthorizeIpRulesCommandOutput,
  WorkSpacesClientResolvedConfig
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

  constructor(readonly input: AuthorizeIpRulesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AuthorizeIpRulesCommandInput, AuthorizeIpRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AuthorizeIpRulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "AuthorizeIpRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AuthorizeIpRulesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AuthorizeIpRulesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AuthorizeIpRulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AuthorizeIpRulesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AuthorizeIpRulesCommandOutput> {
    return deserializeAws_json1_1AuthorizeIpRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
