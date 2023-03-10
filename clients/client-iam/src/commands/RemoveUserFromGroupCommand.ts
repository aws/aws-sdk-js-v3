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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { RemoveUserFromGroupRequest, RemoveUserFromGroupRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryRemoveUserFromGroupCommand,
  serializeAws_queryRemoveUserFromGroupCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link RemoveUserFromGroupCommand}.
 */
export interface RemoveUserFromGroupCommandInput extends RemoveUserFromGroupRequest {}
/**
 * The output of {@link RemoveUserFromGroupCommand}.
 */
export interface RemoveUserFromGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified user from the specified group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, RemoveUserFromGroupCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, RemoveUserFromGroupCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new RemoveUserFromGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveUserFromGroupCommandInput} for command's `input` shape.
 * @see {@link RemoveUserFromGroupCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @example To remove a user from an IAM group
 * ```javascript
 * // The following command removes the user named Bob from the IAM group named Admins.
 * const input = {
 *   "GroupName": "Admins",
 *   "UserName": "Bob"
 * };
 * const command = new RemoveUserFromGroupCommand(input);
 * await client.send(command);
 * // example id: fb54d5b4-0caf-41d8-af0e-10a84413f174
 * ```
 *
 */
export class RemoveUserFromGroupCommand extends $Command<
  RemoveUserFromGroupCommandInput,
  RemoveUserFromGroupCommandOutput,
  IAMClientResolvedConfig
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

  constructor(readonly input: RemoveUserFromGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveUserFromGroupCommandInput, RemoveUserFromGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveUserFromGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "RemoveUserFromGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveUserFromGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveUserFromGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRemoveUserFromGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveUserFromGroupCommandOutput> {
    return deserializeAws_queryRemoveUserFromGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
