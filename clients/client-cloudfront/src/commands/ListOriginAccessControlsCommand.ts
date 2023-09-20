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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListOriginAccessControlsRequest, ListOriginAccessControlsResult } from "../models/models_1";
import { de_ListOriginAccessControlsCommand, se_ListOriginAccessControlsCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListOriginAccessControlsCommand}.
 */
export interface ListOriginAccessControlsCommandInput extends ListOriginAccessControlsRequest {}
/**
 * @public
 *
 * The output of {@link ListOriginAccessControlsCommand}.
 */
export interface ListOriginAccessControlsCommandOutput extends ListOriginAccessControlsResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets the list of CloudFront origin access controls in this Amazon Web Services account.</p>
 *          <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send another
 * 			request that specifies the <code>NextMarker</code> value from the current response as
 * 			the <code>Marker</code> value in the next request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListOriginAccessControlsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListOriginAccessControlsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // ListOriginAccessControlsRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListOriginAccessControlsCommand(input);
 * const response = await client.send(command);
 * // { // ListOriginAccessControlsResult
 * //   OriginAccessControlList: { // OriginAccessControlList
 * //     Marker: "STRING_VALUE", // required
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     IsTruncated: true || false, // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // OriginAccessControlSummaryList
 * //       { // OriginAccessControlSummary
 * //         Id: "STRING_VALUE", // required
 * //         Description: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //         SigningProtocol: "sigv4", // required
 * //         SigningBehavior: "never" || "always" || "no-override", // required
 * //         OriginAccessControlOriginType: "s3" || "mediastore", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListOriginAccessControlsCommandInput - {@link ListOriginAccessControlsCommandInput}
 * @returns {@link ListOriginAccessControlsCommandOutput}
 * @see {@link ListOriginAccessControlsCommandInput} for command's `input` shape.
 * @see {@link ListOriginAccessControlsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class ListOriginAccessControlsCommand extends $Command<
  ListOriginAccessControlsCommandInput,
  ListOriginAccessControlsCommandOutput,
  CloudFrontClientResolvedConfig
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
  constructor(readonly input: ListOriginAccessControlsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOriginAccessControlsCommandInput, ListOriginAccessControlsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOriginAccessControlsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListOriginAccessControlsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "ListOriginAccessControls",
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
  private serialize(input: ListOriginAccessControlsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListOriginAccessControlsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOriginAccessControlsCommandOutput> {
    return de_ListOriginAccessControlsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
