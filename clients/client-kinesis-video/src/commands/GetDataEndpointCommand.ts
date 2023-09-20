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

import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { GetDataEndpointInput, GetDataEndpointOutput } from "../models/models_0";
import { de_GetDataEndpointCommand, se_GetDataEndpointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDataEndpointCommand}.
 */
export interface GetDataEndpointCommandInput extends GetDataEndpointInput {}
/**
 * @public
 *
 * The output of {@link GetDataEndpointCommand}.
 */
export interface GetDataEndpointCommandOutput extends GetDataEndpointOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets an endpoint for a specified stream for either reading or writing. Use this
 *             endpoint in your application to read from the specified stream (using the
 *                 <code>GetMedia</code> or <code>GetMediaForFragmentList</code> operations) or write
 *             to it (using the <code>PutMedia</code> operation).
 *             </p>
 *          <note>
 *             <p>The returned endpoint does not have the API name appended. The client needs to
 *                 add the API name to the returned endpoint.</p>
 *          </note>
 *          <p>In the request, specify the stream either by <code>StreamName</code> or
 *                 <code>StreamARN</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, GetDataEndpointCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, GetDataEndpointCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const input = { // GetDataEndpointInput
 *   StreamName: "STRING_VALUE",
 *   StreamARN: "STRING_VALUE",
 *   APIName: "PUT_MEDIA" || "GET_MEDIA" || "LIST_FRAGMENTS" || "GET_MEDIA_FOR_FRAGMENT_LIST" || "GET_HLS_STREAMING_SESSION_URL" || "GET_DASH_STREAMING_SESSION_URL" || "GET_CLIP" || "GET_IMAGES", // required
 * };
 * const command = new GetDataEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetDataEndpointOutput
 * //   DataEndpoint: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDataEndpointCommandInput - {@link GetDataEndpointCommandInput}
 * @returns {@link GetDataEndpointCommandOutput}
 * @see {@link GetDataEndpointCommandInput} for command's `input` shape.
 * @see {@link GetDataEndpointCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *             allowed client calls. Try making the call later.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The value for this input parameter is invalid.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>The caller is not authorized to perform this operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
 *
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 */
export class GetDataEndpointCommand extends $Command<
  GetDataEndpointCommandInput,
  GetDataEndpointCommandOutput,
  KinesisVideoClientResolvedConfig
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
  constructor(readonly input: GetDataEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDataEndpointCommandInput, GetDataEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDataEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "GetDataEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "KinesisVideo_20170930",
        operation: "GetDataEndpoint",
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
  private serialize(input: GetDataEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDataEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataEndpointCommandOutput> {
    return de_GetDataEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
