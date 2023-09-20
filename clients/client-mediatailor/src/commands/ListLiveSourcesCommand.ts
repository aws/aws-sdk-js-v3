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
import { ListLiveSourcesRequest, ListLiveSourcesResponse } from "../models/models_0";
import { de_ListLiveSourcesCommand, se_ListLiveSourcesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLiveSourcesCommand}.
 */
export interface ListLiveSourcesCommandInput extends ListLiveSourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListLiveSourcesCommand}.
 */
export interface ListLiveSourcesCommandOutput extends ListLiveSourcesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the live sources contained in a source location. A source represents a piece of content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListLiveSourcesCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListLiveSourcesCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // ListLiveSourcesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SourceLocationName: "STRING_VALUE", // required
 * };
 * const command = new ListLiveSourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListLiveSourcesResponse
 * //   Items: [ // __listOfLiveSource
 * //     { // LiveSource
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
 * //       LiveSourceName: "STRING_VALUE", // required
 * //       SourceLocationName: "STRING_VALUE", // required
 * //       Tags: { // __mapOf__string
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLiveSourcesCommandInput - {@link ListLiveSourcesCommandInput}
 * @returns {@link ListLiveSourcesCommandOutput}
 * @see {@link ListLiveSourcesCommandInput} for command's `input` shape.
 * @see {@link ListLiveSourcesCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 */
export class ListLiveSourcesCommand extends $Command<
  ListLiveSourcesCommandInput,
  ListLiveSourcesCommandOutput,
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
  constructor(readonly input: ListLiveSourcesCommandInput) {
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
  ): Handler<ListLiveSourcesCommandInput, ListLiveSourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLiveSourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "ListLiveSourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaTailor",
        operation: "ListLiveSources",
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
  private serialize(input: ListLiveSourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLiveSourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLiveSourcesCommandOutput> {
    return de_ListLiveSourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
