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
} from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListRealtimeLogConfigsRequest, ListRealtimeLogConfigsResult } from "../models/models_1";
import { de_ListRealtimeLogConfigsCommand, se_ListRealtimeLogConfigsCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRealtimeLogConfigsCommand}.
 */
export interface ListRealtimeLogConfigsCommandInput extends ListRealtimeLogConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListRealtimeLogConfigsCommand}.
 */
export interface ListRealtimeLogConfigsCommandOutput extends ListRealtimeLogConfigsResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of real-time log configurations.</p>
 *          <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListRealtimeLogConfigsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListRealtimeLogConfigsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // ListRealtimeLogConfigsRequest
 *   MaxItems: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListRealtimeLogConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListRealtimeLogConfigsResult
 * //   RealtimeLogConfigs: { // RealtimeLogConfigs
 * //     MaxItems: Number("int"), // required
 * //     Items: [ // RealtimeLogConfigList
 * //       { // RealtimeLogConfig
 * //         ARN: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE", // required
 * //         SamplingRate: Number("long"), // required
 * //         EndPoints: [ // EndPointList // required
 * //           { // EndPoint
 * //             StreamType: "STRING_VALUE", // required
 * //             KinesisStreamConfig: { // KinesisStreamConfig
 * //               RoleARN: "STRING_VALUE", // required
 * //               StreamARN: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         ],
 * //         Fields: [ // FieldList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     IsTruncated: true || false, // required
 * //     Marker: "STRING_VALUE", // required
 * //     NextMarker: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListRealtimeLogConfigsCommandInput - {@link ListRealtimeLogConfigsCommandInput}
 * @returns {@link ListRealtimeLogConfigsCommandOutput}
 * @see {@link ListRealtimeLogConfigsCommandInput} for command's `input` shape.
 * @see {@link ListRealtimeLogConfigsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchRealtimeLogConfig} (client fault)
 *  <p>The real-time log configuration does not exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class ListRealtimeLogConfigsCommand extends $Command<
  ListRealtimeLogConfigsCommandInput,
  ListRealtimeLogConfigsCommandOutput,
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
  constructor(readonly input: ListRealtimeLogConfigsCommandInput) {
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
  ): Handler<ListRealtimeLogConfigsCommandInput, ListRealtimeLogConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRealtimeLogConfigsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListRealtimeLogConfigsCommand";
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
  private serialize(input: ListRealtimeLogConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRealtimeLogConfigsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRealtimeLogConfigsCommandOutput> {
    return de_ListRealtimeLogConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
