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

import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import {
  CreateLiveSourceRequest,
  CreateLiveSourceRequestFilterSensitiveLog,
  CreateLiveSourceResponse,
  CreateLiveSourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateLiveSourceCommand,
  serializeAws_restJson1CreateLiveSourceCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link CreateLiveSourceCommand}.
 */
export interface CreateLiveSourceCommandInput extends CreateLiveSourceRequest {}
/**
 * The output of {@link CreateLiveSourceCommand}.
 */
export interface CreateLiveSourceCommandOutput extends CreateLiveSourceResponse, __MetadataBearer {}

/**
 * <p>The live source configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, CreateLiveSourceCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, CreateLiveSourceCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new CreateLiveSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLiveSourceCommandInput} for command's `input` shape.
 * @see {@link CreateLiveSourceCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 */
export class CreateLiveSourceCommand extends $Command<
  CreateLiveSourceCommandInput,
  CreateLiveSourceCommandOutput,
  MediaTailorClientResolvedConfig
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

  constructor(readonly input: CreateLiveSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaTailorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLiveSourceCommandInput, CreateLiveSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLiveSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "CreateLiveSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLiveSourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateLiveSourceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateLiveSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateLiveSourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLiveSourceCommandOutput> {
    return deserializeAws_restJson1CreateLiveSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
