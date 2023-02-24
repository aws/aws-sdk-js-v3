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
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import {
  GetBotChannelAssociationRequest,
  GetBotChannelAssociationRequestFilterSensitiveLog,
  GetBotChannelAssociationResponse,
  GetBotChannelAssociationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetBotChannelAssociationCommand,
  serializeAws_restJson1GetBotChannelAssociationCommand,
} from "../protocols/Aws_restJson1";

export interface GetBotChannelAssociationCommandInput extends GetBotChannelAssociationRequest {}
export interface GetBotChannelAssociationCommandOutput extends GetBotChannelAssociationResponse, __MetadataBearer {}

/**
 * <p>Returns information about the association between an Amazon Lex bot and
 *       a messaging platform.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetBotChannelAssociation</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotChannelAssociationCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotChannelAssociationCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const command = new GetBotChannelAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBotChannelAssociationCommandInput} for command's `input` shape.
 * @see {@link GetBotChannelAssociationCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 */
export class GetBotChannelAssociationCommand extends $Command<
  GetBotChannelAssociationCommandInput,
  GetBotChannelAssociationCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
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

  constructor(readonly input: GetBotChannelAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetBotChannelAssociationCommandInput, GetBotChannelAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetBotChannelAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "GetBotChannelAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBotChannelAssociationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetBotChannelAssociationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBotChannelAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBotChannelAssociationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBotChannelAssociationCommandOutput> {
    return deserializeAws_restJson1GetBotChannelAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
