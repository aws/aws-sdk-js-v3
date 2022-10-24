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
  DisassociateDRTRoleRequest,
  DisassociateDRTRoleRequestFilterSensitiveLog,
  DisassociateDRTRoleResponse,
  DisassociateDRTRoleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateDRTRoleCommand,
  serializeAws_json1_1DisassociateDRTRoleCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

export interface DisassociateDRTRoleCommandInput extends DisassociateDRTRoleRequest {}
export interface DisassociateDRTRoleCommandOutput extends DisassociateDRTRoleResponse, __MetadataBearer {}

/**
 * <p>Removes the Shield Response Team's (SRT) access to your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DisassociateDRTRoleCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DisassociateDRTRoleCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DisassociateDRTRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateDRTRoleCommandInput} for command's `input` shape.
 * @see {@link DisassociateDRTRoleCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 */
export class DisassociateDRTRoleCommand extends $Command<
  DisassociateDRTRoleCommandInput,
  DisassociateDRTRoleCommandOutput,
  ShieldClientResolvedConfig
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

  constructor(readonly input: DisassociateDRTRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateDRTRoleCommandInput, DisassociateDRTRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateDRTRoleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "DisassociateDRTRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateDRTRoleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateDRTRoleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateDRTRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateDRTRoleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateDRTRoleCommandOutput> {
    return deserializeAws_json1_1DisassociateDRTRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
