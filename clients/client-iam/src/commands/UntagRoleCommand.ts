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
import { UntagRoleRequest, UntagRoleRequestFilterSensitiveLog } from "../models/models_1";
import { deserializeAws_queryUntagRoleCommand, serializeAws_queryUntagRoleCommand } from "../protocols/Aws_query";

export interface UntagRoleCommandInput extends UntagRoleRequest {}
export interface UntagRoleCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified tags from the role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UntagRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagRoleCommandInput} for command's `input` shape.
 * @see {@link UntagRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class UntagRoleCommand extends $Command<UntagRoleCommandInput, UntagRoleCommandOutput, IAMClientResolvedConfig> {
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

  constructor(readonly input: UntagRoleCommandInput) {
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
  ): Handler<UntagRoleCommandInput, UntagRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UntagRoleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UntagRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UntagRoleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UntagRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUntagRoleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UntagRoleCommandOutput> {
    return deserializeAws_queryUntagRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
