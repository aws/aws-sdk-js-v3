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
import { ListReservationsRequest, ListReservationsResponse } from "../models/models_1";
import { de_ListReservationsCommand, se_ListReservationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListReservationsCommand}.
 */
export interface ListReservationsCommandInput extends ListReservationsRequest {}
/**
 * @public
 *
 * The output of {@link ListReservationsCommand}.
 */
export interface ListReservationsCommandOutput extends ListReservationsResponse, __MetadataBearer {}

/**
 * @public
 * List purchased reservations.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, ListReservationsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, ListReservationsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // ListReservationsRequest
 *   ChannelClass: "STRING_VALUE",
 *   Codec: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   MaximumBitrate: "STRING_VALUE",
 *   MaximumFramerate: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Resolution: "STRING_VALUE",
 *   ResourceType: "STRING_VALUE",
 *   SpecialFeature: "STRING_VALUE",
 *   VideoQuality: "STRING_VALUE",
 * };
 * const command = new ListReservationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListReservationsCommandInput - {@link ListReservationsCommandInput}
 * @returns {@link ListReservationsCommandOutput}
 * @see {@link ListReservationsCommandInput} for command's `input` shape.
 * @see {@link ListReservationsCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 *
 */
export class ListReservationsCommand extends $Command<
  ListReservationsCommandInput,
  ListReservationsCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ListReservationsCommandInput) {
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
  ): Handler<ListReservationsCommandInput, ListReservationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListReservationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "ListReservationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListReservationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListReservationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReservationsCommandOutput> {
    return de_ListReservationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
