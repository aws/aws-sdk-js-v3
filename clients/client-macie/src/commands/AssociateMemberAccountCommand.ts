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

import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { AssociateMemberAccountRequest, AssociateMemberAccountRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1AssociateMemberAccountCommand,
  serializeAws_json1_1AssociateMemberAccountCommand,
} from "../protocols/Aws_json1_1";

export interface AssociateMemberAccountCommandInput extends AssociateMemberAccountRequest {}
export interface AssociateMemberAccountCommandOutput extends __MetadataBearer {}

/**
 * <p>(Discontinued) Associates a specified Amazon Web Services account with Amazon Macie Classic as a member
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MacieClient, AssociateMemberAccountCommand } from "@aws-sdk/client-macie"; // ES Modules import
 * // const { MacieClient, AssociateMemberAccountCommand } = require("@aws-sdk/client-macie"); // CommonJS import
 * const client = new MacieClient(config);
 * const command = new AssociateMemberAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateMemberAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateMemberAccountCommandOutput} for command's `response` shape.
 * @see {@link MacieClientResolvedConfig | config} for MacieClient's `config` shape.
 *
 */
export class AssociateMemberAccountCommand extends $Command<
  AssociateMemberAccountCommandInput,
  AssociateMemberAccountCommandOutput,
  MacieClientResolvedConfig
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

  constructor(readonly input: AssociateMemberAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MacieClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateMemberAccountCommandInput, AssociateMemberAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateMemberAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MacieClient";
    const commandName = "AssociateMemberAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateMemberAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateMemberAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateMemberAccountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateMemberAccountCommandOutput> {
    return deserializeAws_json1_1AssociateMemberAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
