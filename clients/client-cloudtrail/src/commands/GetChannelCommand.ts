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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { GetChannelRequest, GetChannelResponse } from "../models/models_0";
import { de_GetChannelCommand, se_GetChannelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetChannelCommand}.
 */
export interface GetChannelCommandInput extends GetChannelRequest {}
/**
 * @public
 *
 * The output of {@link GetChannelCommand}.
 */
export interface GetChannelCommandOutput extends GetChannelResponse, __MetadataBearer {}

/**
 * @public
 * <p> Returns information about a specific channel.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, GetChannelCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, GetChannelCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const input = { // GetChannelRequest
 *   Channel: "STRING_VALUE", // required
 * };
 * const command = new GetChannelCommand(input);
 * const response = await client.send(command);
 * // { // GetChannelResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Source: "STRING_VALUE",
 * //   SourceConfig: { // SourceConfig
 * //     ApplyToAllRegions: true || false,
 * //     AdvancedEventSelectors: [ // AdvancedEventSelectors
 * //       { // AdvancedEventSelector
 * //         Name: "STRING_VALUE",
 * //         FieldSelectors: [ // AdvancedFieldSelectors // required
 * //           { // AdvancedFieldSelector
 * //             Field: "STRING_VALUE", // required
 * //             Equals: [ // Operator
 * //               "STRING_VALUE",
 * //             ],
 * //             StartsWith: [
 * //               "STRING_VALUE",
 * //             ],
 * //             EndsWith: [
 * //               "STRING_VALUE",
 * //             ],
 * //             NotEquals: [
 * //               "STRING_VALUE",
 * //             ],
 * //             NotStartsWith: [
 * //               "STRING_VALUE",
 * //             ],
 * //             NotEndsWith: "<Operator>",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   Destinations: [ // Destinations
 * //     { // Destination
 * //       Type: "EVENT_DATA_STORE" || "AWS_SERVICE", // required
 * //       Location: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   IngestionStatus: { // IngestionStatus
 * //     LatestIngestionSuccessTime: new Date("TIMESTAMP"),
 * //     LatestIngestionSuccessEventID: "STRING_VALUE",
 * //     LatestIngestionErrorCode: "STRING_VALUE",
 * //     LatestIngestionAttemptTime: new Date("TIMESTAMP"),
 * //     LatestIngestionAttemptEventID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetChannelCommandInput - {@link GetChannelCommandInput}
 * @returns {@link GetChannelCommandOutput}
 * @see {@link GetChannelCommandInput} for command's `input` shape.
 * @see {@link GetChannelCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link ChannelARNInvalidException} (client fault)
 *  <p>This exception is thrown when the specified value of <code>ChannelARN</code> is not
 *          valid.</p>
 *
 * @throws {@link ChannelNotFoundException} (client fault)
 *  <p>This exception is thrown when CloudTrail cannot find the specified channel.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 */
export class GetChannelCommand extends $Command<
  GetChannelCommandInput,
  GetChannelCommandOutput,
  CloudTrailClientResolvedConfig
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
  constructor(readonly input: GetChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetChannelCommandInput, GetChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetChannelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "GetChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudTrail_20131101",
        operation: "GetChannel",
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
  private serialize(input: GetChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetChannelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetChannelCommandOutput> {
    return de_GetChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
