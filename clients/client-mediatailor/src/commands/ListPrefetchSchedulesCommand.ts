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
  ListPrefetchSchedulesRequest,
  ListPrefetchSchedulesRequestFilterSensitiveLog,
  ListPrefetchSchedulesResponse,
  ListPrefetchSchedulesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListPrefetchSchedulesCommand,
  serializeAws_restJson1ListPrefetchSchedulesCommand,
} from "../protocols/Aws_restJson1";

export interface ListPrefetchSchedulesCommandInput extends ListPrefetchSchedulesRequest {}
export interface ListPrefetchSchedulesCommandOutput extends ListPrefetchSchedulesResponse, __MetadataBearer {}

/**
 * <p>Lists the prefetch schedules for a playback configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListPrefetchSchedulesCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListPrefetchSchedulesCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const command = new ListPrefetchSchedulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPrefetchSchedulesCommandInput} for command's `input` shape.
 * @see {@link ListPrefetchSchedulesCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 */
export class ListPrefetchSchedulesCommand extends $Command<
  ListPrefetchSchedulesCommandInput,
  ListPrefetchSchedulesCommandOutput,
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

  constructor(readonly input: ListPrefetchSchedulesCommandInput) {
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
  ): Handler<ListPrefetchSchedulesCommandInput, ListPrefetchSchedulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPrefetchSchedulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "ListPrefetchSchedulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPrefetchSchedulesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPrefetchSchedulesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPrefetchSchedulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPrefetchSchedulesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPrefetchSchedulesCommandOutput> {
    return deserializeAws_restJson1ListPrefetchSchedulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
