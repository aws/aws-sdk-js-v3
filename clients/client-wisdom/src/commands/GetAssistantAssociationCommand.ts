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
  GetAssistantAssociationRequest,
  GetAssistantAssociationRequestFilterSensitiveLog,
  GetAssistantAssociationResponse,
  GetAssistantAssociationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetAssistantAssociationCommand,
  serializeAws_restJson1GetAssistantAssociationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

export interface GetAssistantAssociationCommandInput extends GetAssistantAssociationRequest {}
export interface GetAssistantAssociationCommandOutput extends GetAssistantAssociationResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an assistant association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, GetAssistantAssociationCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, GetAssistantAssociationCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const command = new GetAssistantAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAssistantAssociationCommandInput} for command's `input` shape.
 * @see {@link GetAssistantAssociationCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 */
export class GetAssistantAssociationCommand extends $Command<
  GetAssistantAssociationCommandInput,
  GetAssistantAssociationCommandOutput,
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

  constructor(readonly input: GetAssistantAssociationCommandInput) {
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
  ): Handler<GetAssistantAssociationCommandInput, GetAssistantAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAssistantAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WisdomClient";
    const commandName = "GetAssistantAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAssistantAssociationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetAssistantAssociationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAssistantAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAssistantAssociationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAssistantAssociationCommandOutput> {
    return deserializeAws_restJson1GetAssistantAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
