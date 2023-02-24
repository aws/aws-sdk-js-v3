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
  AssumeImpersonationRoleRequest,
  AssumeImpersonationRoleRequestFilterSensitiveLog,
  AssumeImpersonationRoleResponse,
  AssumeImpersonationRoleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssumeImpersonationRoleCommand,
  serializeAws_json1_1AssumeImpersonationRoleCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

export interface AssumeImpersonationRoleCommandInput extends AssumeImpersonationRoleRequest {}
export interface AssumeImpersonationRoleCommandOutput extends AssumeImpersonationRoleResponse, __MetadataBearer {}

/**
 * <p>Assumes an impersonation role for the given WorkMail organization. This method returns an
 *          authentication token you can use to make impersonated calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, AssumeImpersonationRoleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, AssumeImpersonationRoleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new AssumeImpersonationRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssumeImpersonationRoleCommandInput} for command's `input` shape.
 * @see {@link AssumeImpersonationRoleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 */
export class AssumeImpersonationRoleCommand extends $Command<
  AssumeImpersonationRoleCommandInput,
  AssumeImpersonationRoleCommandOutput,
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

  constructor(readonly input: AssumeImpersonationRoleCommandInput) {
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
  ): Handler<AssumeImpersonationRoleCommandInput, AssumeImpersonationRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssumeImpersonationRoleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "AssumeImpersonationRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssumeImpersonationRoleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssumeImpersonationRoleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssumeImpersonationRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssumeImpersonationRoleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssumeImpersonationRoleCommandOutput> {
    return deserializeAws_json1_1AssumeImpersonationRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
