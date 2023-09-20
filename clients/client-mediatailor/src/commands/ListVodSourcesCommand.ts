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

import { MediaTailorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaTailorClient";
import { ListVodSourcesRequest, ListVodSourcesResponse } from "../models/models_0";
import { de_ListVodSourcesCommand, se_ListVodSourcesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListVodSourcesCommand}.
 */
export interface ListVodSourcesCommandInput extends ListVodSourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListVodSourcesCommand}.
 */
export interface ListVodSourcesCommandOutput extends ListVodSourcesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the VOD sources contained in a source location. A source represents a piece of content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListVodSourcesCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListVodSourcesCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // ListVodSourcesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SourceLocationName: "STRING_VALUE", // required
 * };
 * const command = new ListVodSourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListVodSourcesResponse
 * //   Items: [ // __listOfVodSource
 * //     { // VodSource
 * //       Arn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       HttpPackageConfigurations: [ // HttpPackageConfigurations // required
 * //         { // HttpPackageConfiguration
 * //           Path: "STRING_VALUE", // required
 * //           SourceGroup: "STRING_VALUE", // required
 * //           Type: "DASH" || "HLS", // required
 * //         },
 * //       ],
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       SourceLocationName: "STRING_VALUE", // required
 * //       Tags: { // __mapOf__string
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       VodSourceName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVodSourcesCommandInput - {@link ListVodSourcesCommandInput}
 * @returns {@link ListVodSourcesCommandOutput}
 * @see {@link ListVodSourcesCommandInput} for command's `input` shape.
 * @see {@link ListVodSourcesCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 */
export class ListVodSourcesCommand extends $Command<
  ListVodSourcesCommandInput,
  ListVodSourcesCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ListVodSourcesCommandInput) {
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
  ): Handler<ListVodSourcesCommandInput, ListVodSourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVodSourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "ListVodSourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaTailor",
        operation: "ListVodSources",
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
  private serialize(input: ListVodSourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListVodSourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVodSourcesCommandOutput> {
    return de_ListVodSourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
