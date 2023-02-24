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
  GetSinkPolicyInput,
  GetSinkPolicyInputFilterSensitiveLog,
  GetSinkPolicyOutput,
  GetSinkPolicyOutputFilterSensitiveLog,
} from "../models/models_0";
import { OAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OAMClient";
import {
  deserializeAws_restJson1GetSinkPolicyCommand,
  serializeAws_restJson1GetSinkPolicyCommand,
} from "../protocols/Aws_restJson1";

export interface GetSinkPolicyCommandInput extends GetSinkPolicyInput {}
export interface GetSinkPolicyCommandOutput extends GetSinkPolicyOutput, __MetadataBearer {}

/**
 * <p>Returns the current sink policy attached to this sink. The sink policy specifies what
 *             accounts can attach to this sink as source accounts, and what types of data they can share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OAMClient, GetSinkPolicyCommand } from "@aws-sdk/client-oam"; // ES Modules import
 * // const { OAMClient, GetSinkPolicyCommand } = require("@aws-sdk/client-oam"); // CommonJS import
 * const client = new OAMClient(config);
 * const command = new GetSinkPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSinkPolicyCommandInput} for command's `input` shape.
 * @see {@link GetSinkPolicyCommandOutput} for command's `response` shape.
 * @see {@link OAMClientResolvedConfig | config} for OAMClient's `config` shape.
 *
 */
export class GetSinkPolicyCommand extends $Command<
  GetSinkPolicyCommandInput,
  GetSinkPolicyCommandOutput,
  OAMClientResolvedConfig
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

  constructor(readonly input: GetSinkPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSinkPolicyCommandInput, GetSinkPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetSinkPolicyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OAMClient";
    const commandName = "GetSinkPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSinkPolicyInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetSinkPolicyOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSinkPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSinkPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSinkPolicyCommandOutput> {
    return deserializeAws_restJson1GetSinkPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
