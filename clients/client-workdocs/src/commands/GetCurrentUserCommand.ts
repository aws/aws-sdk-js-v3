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
  GetCurrentUserRequest,
  GetCurrentUserRequestFilterSensitiveLog,
  GetCurrentUserResponse,
  GetCurrentUserResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetCurrentUserCommand,
  serializeAws_restJson1GetCurrentUserCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

export interface GetCurrentUserCommandInput extends GetCurrentUserRequest {}
export interface GetCurrentUserCommandOutput extends GetCurrentUserResponse, __MetadataBearer {}

/**
 * <p>Retrieves details of the current user for whom the authentication token was
 *             generated. This is not a valid action for SigV4 (administrative API) clients.</p>
 *         <p>This action requires an authentication token. To get an authentication token,
 *             register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access
 *                 Control for User Applications</a> in the
 *             <i>Amazon
 *                 WorkDocs Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetCurrentUserCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetCurrentUserCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new GetCurrentUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCurrentUserCommandInput} for command's `input` shape.
 * @see {@link GetCurrentUserCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 */
export class GetCurrentUserCommand extends $Command<
  GetCurrentUserCommandInput,
  GetCurrentUserCommandOutput,
  WorkDocsClientResolvedConfig
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

  constructor(readonly input: GetCurrentUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCurrentUserCommandInput, GetCurrentUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCurrentUserCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "GetCurrentUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCurrentUserRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCurrentUserResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCurrentUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetCurrentUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCurrentUserCommandOutput> {
    return deserializeAws_restJson1GetCurrentUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
