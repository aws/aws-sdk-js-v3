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
  GetRoleCredentialsRequest,
  GetRoleCredentialsRequestFilterSensitiveLog,
  GetRoleCredentialsResponse,
  GetRoleCredentialsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetRoleCredentialsCommand,
  serializeAws_restJson1GetRoleCredentialsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSOClientResolvedConfig } from "../SSOClient";

export interface GetRoleCredentialsCommandInput extends GetRoleCredentialsRequest {}
export interface GetRoleCredentialsCommandOutput extends GetRoleCredentialsResponse, __MetadataBearer {}

/**
 * <p>Returns the STS short-term credentials for a given role name that is assigned to the
 *       user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOClient, GetRoleCredentialsCommand } from "@aws-sdk/client-sso"; // ES Modules import
 * // const { SSOClient, GetRoleCredentialsCommand } = require("@aws-sdk/client-sso"); // CommonJS import
 * const client = new SSOClient(config);
 * const command = new GetRoleCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRoleCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetRoleCredentialsCommandOutput} for command's `response` shape.
 * @see {@link SSOClientResolvedConfig | config} for SSOClient's `config` shape.
 *
 */
export class GetRoleCredentialsCommand extends $Command<
  GetRoleCredentialsCommandInput,
  GetRoleCredentialsCommandOutput,
  SSOClientResolvedConfig
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

  constructor(readonly input: GetRoleCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRoleCredentialsCommandInput, GetRoleCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRoleCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOClient";
    const commandName = "GetRoleCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRoleCredentialsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetRoleCredentialsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRoleCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRoleCredentialsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRoleCredentialsCommandOutput> {
    return deserializeAws_restJson1GetRoleCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
