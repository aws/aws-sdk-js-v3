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
  CreateAssistantAssociationRequest,
  CreateAssistantAssociationRequestFilterSensitiveLog,
  CreateAssistantAssociationResponse,
  CreateAssistantAssociationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateAssistantAssociationCommand,
  serializeAws_restJson1CreateAssistantAssociationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

export interface CreateAssistantAssociationCommandInput extends CreateAssistantAssociationRequest {}
export interface CreateAssistantAssociationCommandOutput extends CreateAssistantAssociationResponse, __MetadataBearer {}

/**
 * <p>Creates an association between an Amazon Connect Wisdom assistant and another resource. Currently, the
 *       only supported association is with a knowledge base. An assistant can have only a single
 *       association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, CreateAssistantAssociationCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, CreateAssistantAssociationCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const command = new CreateAssistantAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssistantAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateAssistantAssociationCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 */
export class CreateAssistantAssociationCommand extends $Command<
  CreateAssistantAssociationCommandInput,
  CreateAssistantAssociationCommandOutput,
  WisdomClientResolvedConfig
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

  constructor(readonly input: CreateAssistantAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WisdomClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAssistantAssociationCommandInput, CreateAssistantAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAssistantAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WisdomClient";
    const commandName = "CreateAssistantAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAssistantAssociationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAssistantAssociationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAssistantAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAssistantAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateAssistantAssociationCommandOutput> {
    return deserializeAws_restJson1CreateAssistantAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
