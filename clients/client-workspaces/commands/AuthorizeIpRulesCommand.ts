import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { AuthorizeIpRulesRequest, AuthorizeIpRulesResult } from "../models/models_0";
import {
  deserializeAws_json1_1AuthorizeIpRulesCommand,
  serializeAws_json1_1AuthorizeIpRulesCommand,
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

export type AuthorizeIpRulesCommandInput = AuthorizeIpRulesRequest;
export type AuthorizeIpRulesCommandOutput = AuthorizeIpRulesResult & __MetadataBearer;

/**
 * <p>Adds one or more rules to the specified IP access control group.</p>
 *          <p>This action gives users permission to access their WorkSpaces from the CIDR address
 *          ranges specified in the rules.</p>
 */
export class AuthorizeIpRulesCommand extends $Command<
  AuthorizeIpRulesCommandInput,
  AuthorizeIpRulesCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "AuthorizeIpRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AuthorizeIpRulesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AuthorizeIpRulesResult.filterSensitiveLog,
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
