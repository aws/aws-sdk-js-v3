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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import {
  CreatePartnerInputRequest,
  CreatePartnerInputRequestFilterSensitiveLog,
  CreatePartnerInputResponse,
  CreatePartnerInputResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1CreatePartnerInputCommand,
  serializeAws_restJson1CreatePartnerInputCommand,
} from "../protocols/Aws_restJson1";

export interface CreatePartnerInputCommandInput extends CreatePartnerInputRequest {}
export interface CreatePartnerInputCommandOutput extends CreatePartnerInputResponse, __MetadataBearer {}

/**
 * Create a partner input
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreatePartnerInputCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreatePartnerInputCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new CreatePartnerInputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePartnerInputCommandInput} for command's `input` shape.
 * @see {@link CreatePartnerInputCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 */
export class CreatePartnerInputCommand extends $Command<
  CreatePartnerInputCommandInput,
  CreatePartnerInputCommandOutput,
  MediaLiveClientResolvedConfig
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

  constructor(readonly input: CreatePartnerInputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePartnerInputCommandInput, CreatePartnerInputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePartnerInputCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "CreatePartnerInputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePartnerInputRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreatePartnerInputResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePartnerInputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreatePartnerInputCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePartnerInputCommandOutput> {
    return deserializeAws_restJson1CreatePartnerInputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
