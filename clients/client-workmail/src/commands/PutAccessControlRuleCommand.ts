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
  PutAccessControlRuleRequest,
  PutAccessControlRuleRequestFilterSensitiveLog,
  PutAccessControlRuleResponse,
  PutAccessControlRuleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutAccessControlRuleCommand,
  serializeAws_json1_1PutAccessControlRuleCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

export interface PutAccessControlRuleCommandInput extends PutAccessControlRuleRequest {}
export interface PutAccessControlRuleCommandOutput extends PutAccessControlRuleResponse, __MetadataBearer {}

/**
 * <p>Adds a new access control rule for the specified organization. The rule allows or
 *          denies access to the organization for the specified IPv4 addresses, access protocol
 *          actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces
 *          the older rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, PutAccessControlRuleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, PutAccessControlRuleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new PutAccessControlRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccessControlRuleCommandInput} for command's `input` shape.
 * @see {@link PutAccessControlRuleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 */
export class PutAccessControlRuleCommand extends $Command<
  PutAccessControlRuleCommandInput,
  PutAccessControlRuleCommandOutput,
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

  constructor(readonly input: PutAccessControlRuleCommandInput) {
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
  ): Handler<PutAccessControlRuleCommandInput, PutAccessControlRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAccessControlRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "PutAccessControlRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutAccessControlRuleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutAccessControlRuleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutAccessControlRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAccessControlRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAccessControlRuleCommandOutput> {
    return deserializeAws_json1_1PutAccessControlRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
