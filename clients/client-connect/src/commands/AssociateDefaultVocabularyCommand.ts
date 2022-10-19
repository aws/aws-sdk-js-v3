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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  AssociateDefaultVocabularyRequest,
  AssociateDefaultVocabularyRequestFilterSensitiveLog,
  AssociateDefaultVocabularyResponse,
  AssociateDefaultVocabularyResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateDefaultVocabularyCommand,
  serializeAws_restJson1AssociateDefaultVocabularyCommand,
} from "../protocols/Aws_restJson1";

export interface AssociateDefaultVocabularyCommandInput extends AssociateDefaultVocabularyRequest {}
export interface AssociateDefaultVocabularyCommandOutput extends AssociateDefaultVocabularyResponse, __MetadataBearer {}

/**
 * <p>Associates an existing vocabulary as the default. Contact Lens for Amazon Connect uses the vocabulary in post-call
 *    and real-time analysis sessions for the given language.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateDefaultVocabularyCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateDefaultVocabularyCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new AssociateDefaultVocabularyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDefaultVocabularyCommandInput} for command's `input` shape.
 * @see {@link AssociateDefaultVocabularyCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class AssociateDefaultVocabularyCommand extends $Command<
  AssociateDefaultVocabularyCommandInput,
  AssociateDefaultVocabularyCommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: AssociateDefaultVocabularyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateDefaultVocabularyCommandInput, AssociateDefaultVocabularyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateDefaultVocabularyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "AssociateDefaultVocabularyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateDefaultVocabularyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateDefaultVocabularyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateDefaultVocabularyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateDefaultVocabularyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateDefaultVocabularyCommandOutput> {
    return deserializeAws_restJson1AssociateDefaultVocabularyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
