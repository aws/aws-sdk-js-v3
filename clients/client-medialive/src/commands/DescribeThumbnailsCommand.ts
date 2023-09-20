// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DescribeThumbnailsRequest, DescribeThumbnailsResponse } from "../models/models_1";
import { de_DescribeThumbnailsCommand, se_DescribeThumbnailsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeThumbnailsCommand}.
 */
export interface DescribeThumbnailsCommandInput extends DescribeThumbnailsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeThumbnailsCommand}.
 */
export interface DescribeThumbnailsCommandOutput extends DescribeThumbnailsResponse, __MetadataBearer {}

/**
 * @public
 * Describe the latest thumbnails data.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DescribeThumbnailsCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DescribeThumbnailsCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // DescribeThumbnailsRequest
 *   ChannelId: "STRING_VALUE", // required
 *   PipelineId: "STRING_VALUE", // required
 *   ThumbnailType: "STRING_VALUE", // required
 * };
 * const command = new DescribeThumbnailsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeThumbnailsResponse
 * //   ThumbnailDetails: [ // __listOfThumbnailDetail
 * //     { // ThumbnailDetail
 * //       PipelineId: "STRING_VALUE",
 * //       Thumbnails: [ // __listOfThumbnail
 * //         { // Thumbnail
 * //           Body: "STRING_VALUE",
 * //           ContentType: "STRING_VALUE",
 * //           ThumbnailType: "UNSPECIFIED" || "CURRENT_ACTIVE",
 * //           TimeStamp: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeThumbnailsCommandInput - {@link DescribeThumbnailsCommandInput}
 * @returns {@link DescribeThumbnailsCommandOutput}
 * @see {@link DescribeThumbnailsCommandInput} for command's `input` shape.
 * @see {@link DescribeThumbnailsCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ConflictException} (client fault)
 *  Placeholder documentation for ConflictException
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
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 */
export class DescribeThumbnailsCommand extends $Command<
  DescribeThumbnailsCommandInput,
  DescribeThumbnailsCommandOutput,
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
  constructor(readonly input: DescribeThumbnailsCommandInput) {
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
  ): Handler<DescribeThumbnailsCommandInput, DescribeThumbnailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeThumbnailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "DescribeThumbnailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaLive",
        operation: "DescribeThumbnails",
      },
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
  private serialize(input: DescribeThumbnailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeThumbnailsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeThumbnailsCommandOutput> {
    return de_DescribeThumbnailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
