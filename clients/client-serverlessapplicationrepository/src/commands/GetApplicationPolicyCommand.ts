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
  GetApplicationPolicyRequest,
  GetApplicationPolicyRequestFilterSensitiveLog,
  GetApplicationPolicyResponse,
  GetApplicationPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetApplicationPolicyCommand,
  serializeAws_restJson1GetApplicationPolicyCommand,
} from "../protocols/Aws_restJson1";
import {
  ServerlessApplicationRepositoryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServerlessApplicationRepositoryClient";

export interface GetApplicationPolicyCommandInput extends GetApplicationPolicyRequest {}
export interface GetApplicationPolicyCommandOutput extends GetApplicationPolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the policy for the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServerlessApplicationRepositoryClient, GetApplicationPolicyCommand } from "@aws-sdk/client-serverlessapplicationrepository"; // ES Modules import
 * // const { ServerlessApplicationRepositoryClient, GetApplicationPolicyCommand } = require("@aws-sdk/client-serverlessapplicationrepository"); // CommonJS import
 * const client = new ServerlessApplicationRepositoryClient(config);
 * const command = new GetApplicationPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApplicationPolicyCommandInput} for command's `input` shape.
 * @see {@link GetApplicationPolicyCommandOutput} for command's `response` shape.
 * @see {@link ServerlessApplicationRepositoryClientResolvedConfig | config} for ServerlessApplicationRepositoryClient's `config` shape.
 *
 */
export class GetApplicationPolicyCommand extends $Command<
  GetApplicationPolicyCommandInput,
  GetApplicationPolicyCommandOutput,
  ServerlessApplicationRepositoryClientResolvedConfig
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

  constructor(readonly input: GetApplicationPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServerlessApplicationRepositoryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetApplicationPolicyCommandInput, GetApplicationPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetApplicationPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServerlessApplicationRepositoryClient";
    const commandName = "GetApplicationPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetApplicationPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetApplicationPolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetApplicationPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetApplicationPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetApplicationPolicyCommandOutput> {
    return deserializeAws_restJson1GetApplicationPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
