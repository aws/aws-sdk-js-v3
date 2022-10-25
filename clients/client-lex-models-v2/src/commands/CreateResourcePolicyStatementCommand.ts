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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import {
  CreateResourcePolicyStatementRequest,
  CreateResourcePolicyStatementRequestFilterSensitiveLog,
  CreateResourcePolicyStatementResponse,
  CreateResourcePolicyStatementResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateResourcePolicyStatementCommand,
  serializeAws_restJson1CreateResourcePolicyStatementCommand,
} from "../protocols/Aws_restJson1";

export interface CreateResourcePolicyStatementCommandInput extends CreateResourcePolicyStatementRequest {}
export interface CreateResourcePolicyStatementCommandOutput
  extends CreateResourcePolicyStatementResponse,
    __MetadataBearer {}

/**
 * <p>Adds a new resource policy statement to a bot or bot alias. If a
 *          resource policy exists, the statement is added to the current resource
 *          policy. If a policy doesn't exist, a new policy is created.</p>
 *          <p>You can't create a resource policy statement that allows
 *          cross-account access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateResourcePolicyStatementCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateResourcePolicyStatementCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateResourcePolicyStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourcePolicyStatementCommandInput} for command's `input` shape.
 * @see {@link CreateResourcePolicyStatementCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 */
export class CreateResourcePolicyStatementCommand extends $Command<
  CreateResourcePolicyStatementCommandInput,
  CreateResourcePolicyStatementCommandOutput,
  LexModelsV2ClientResolvedConfig
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

  constructor(readonly input: CreateResourcePolicyStatementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateResourcePolicyStatementCommandInput, CreateResourcePolicyStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateResourcePolicyStatementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "CreateResourcePolicyStatementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateResourcePolicyStatementRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateResourcePolicyStatementResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateResourcePolicyStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateResourcePolicyStatementCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateResourcePolicyStatementCommandOutput> {
    return deserializeAws_restJson1CreateResourcePolicyStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
