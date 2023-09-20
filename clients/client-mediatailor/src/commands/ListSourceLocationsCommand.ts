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
import { ListSourceLocationsRequest, ListSourceLocationsResponse } from "../models/models_0";
import { de_ListSourceLocationsCommand, se_ListSourceLocationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSourceLocationsCommand}.
 */
export interface ListSourceLocationsCommandInput extends ListSourceLocationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSourceLocationsCommand}.
 */
export interface ListSourceLocationsCommandOutput extends ListSourceLocationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the source locations for a channel. A source location defines the host server URL, and contains a list of sources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListSourceLocationsCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListSourceLocationsCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // ListSourceLocationsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSourceLocationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSourceLocationsResponse
 * //   Items: [ // __listOfSourceLocation
 * //     { // SourceLocation
 * //       AccessConfiguration: { // AccessConfiguration
 * //         AccessType: "S3_SIGV4" || "SECRETS_MANAGER_ACCESS_TOKEN" || "AUTODETECT_SIGV4",
 * //         SecretsManagerAccessTokenConfiguration: { // SecretsManagerAccessTokenConfiguration
 * //           HeaderName: "STRING_VALUE",
 * //           SecretArn: "STRING_VALUE",
 * //           SecretStringKey: "STRING_VALUE",
 * //         },
 * //       },
 * //       Arn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       DefaultSegmentDeliveryConfiguration: { // DefaultSegmentDeliveryConfiguration
 * //         BaseUrl: "STRING_VALUE",
 * //       },
 * //       HttpConfiguration: { // HttpConfiguration
 * //         BaseUrl: "STRING_VALUE", // required
 * //       },
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       SegmentDeliveryConfigurations: [ // __listOfSegmentDeliveryConfiguration
 * //         { // SegmentDeliveryConfiguration
 * //           BaseUrl: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //         },
 * //       ],
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
 * @param ListSourceLocationsCommandInput - {@link ListSourceLocationsCommandInput}
 * @returns {@link ListSourceLocationsCommandOutput}
 * @see {@link ListSourceLocationsCommandInput} for command's `input` shape.
 * @see {@link ListSourceLocationsCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 */
export class ListSourceLocationsCommand extends $Command<
  ListSourceLocationsCommandInput,
  ListSourceLocationsCommandOutput,
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
  constructor(readonly input: ListSourceLocationsCommandInput) {
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
  ): Handler<ListSourceLocationsCommandInput, ListSourceLocationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSourceLocationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "ListSourceLocationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaTailor",
        operation: "ListSourceLocations",
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
  private serialize(input: ListSourceLocationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSourceLocationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSourceLocationsCommandOutput> {
    return de_ListSourceLocationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
