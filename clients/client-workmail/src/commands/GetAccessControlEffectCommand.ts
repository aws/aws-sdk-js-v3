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
  GetAccessControlEffectRequest,
  GetAccessControlEffectRequestFilterSensitiveLog,
  GetAccessControlEffectResponse,
  GetAccessControlEffectResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetAccessControlEffectCommand,
  serializeAws_json1_1GetAccessControlEffectCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

export interface GetAccessControlEffectCommandInput extends GetAccessControlEffectRequest {}
export interface GetAccessControlEffectCommandOutput extends GetAccessControlEffectResponse, __MetadataBearer {}

/**
 * <p>Gets the effects of an organization's access control rules as they apply to a
 *          specified IPv4 address, access protocol action, and  user ID or impersonation role ID. You must provide either the user ID or impersonation role ID. Impersonation role ID can only be used with Action EWS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetAccessControlEffectCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetAccessControlEffectCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new GetAccessControlEffectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccessControlEffectCommandInput} for command's `input` shape.
 * @see {@link GetAccessControlEffectCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 */
export class GetAccessControlEffectCommand extends $Command<
  GetAccessControlEffectCommandInput,
  GetAccessControlEffectCommandOutput,
  WorkMailClientResolvedConfig
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

  constructor(readonly input: GetAccessControlEffectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccessControlEffectCommandInput, GetAccessControlEffectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAccessControlEffectCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "GetAccessControlEffectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAccessControlEffectRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetAccessControlEffectResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAccessControlEffectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetAccessControlEffectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccessControlEffectCommandOutput> {
    return deserializeAws_json1_1GetAccessControlEffectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
