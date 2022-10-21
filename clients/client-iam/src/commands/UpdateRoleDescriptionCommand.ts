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
import {
  UpdateRoleDescriptionRequest,
  UpdateRoleDescriptionRequestFilterSensitiveLog,
  UpdateRoleDescriptionResponse,
  UpdateRoleDescriptionResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryUpdateRoleDescriptionCommand,
  serializeAws_queryUpdateRoleDescriptionCommand,
} from "../protocols/Aws_query";

export interface UpdateRoleDescriptionCommandInput extends UpdateRoleDescriptionRequest {}
export interface UpdateRoleDescriptionCommandOutput extends UpdateRoleDescriptionResponse, __MetadataBearer {}

/**
 * <p>Use <a>UpdateRole</a> instead.</p>
 *         <p>Modifies only the description of a role. This operation performs the same function as
 *             the <code>Description</code> parameter in the <code>UpdateRole</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateRoleDescriptionCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateRoleDescriptionCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UpdateRoleDescriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoleDescriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateRoleDescriptionCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class UpdateRoleDescriptionCommand extends $Command<
  UpdateRoleDescriptionCommandInput,
  UpdateRoleDescriptionCommandOutput,
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

  constructor(readonly input: UpdateRoleDescriptionCommandInput) {
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
  ): Handler<UpdateRoleDescriptionCommandInput, UpdateRoleDescriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRoleDescriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateRoleDescriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRoleDescriptionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateRoleDescriptionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRoleDescriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateRoleDescriptionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRoleDescriptionCommandOutput> {
    return deserializeAws_queryUpdateRoleDescriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
