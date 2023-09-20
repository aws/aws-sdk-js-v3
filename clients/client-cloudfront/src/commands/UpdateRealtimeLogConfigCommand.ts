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
import { UpdateRealtimeLogConfigRequest, UpdateRealtimeLogConfigResult } from "../models/models_1";
import { de_UpdateRealtimeLogConfigCommand, se_UpdateRealtimeLogConfigCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateRealtimeLogConfigCommand}.
 */
export interface UpdateRealtimeLogConfigCommandInput extends UpdateRealtimeLogConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRealtimeLogConfigCommand}.
 */
export interface UpdateRealtimeLogConfigCommandOutput extends UpdateRealtimeLogConfigResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates a real-time log configuration.</p>
 *          <p>When you update a real-time log configuration, all the parameters are updated with the
 * 			values provided in the request. You cannot update some parameters independent of others.
 * 			To update a real-time log configuration:</p>
 *          <ol>
 *             <li>
 *                <p>Call <code>GetRealtimeLogConfig</code> to get the current real-time log
 * 					configuration.</p>
 *             </li>
 *             <li>
 *                <p>Locally modify the parameters in the real-time log configuration that you want
 * 					to update.</p>
 *             </li>
 *             <li>
 *                <p>Call this API (<code>UpdateRealtimeLogConfig</code>) by providing the entire
 * 					real-time log configuration, including the parameters that you modified and
 * 					those that you didn't.</p>
 *             </li>
 *          </ol>
 *          <p>You cannot update a real-time log configuration's <code>Name</code> or
 * 				<code>ARN</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateRealtimeLogConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateRealtimeLogConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateRealtimeLogConfigRequest
 *   EndPoints: [ // EndPointList
 *     { // EndPoint
 *       StreamType: "STRING_VALUE", // required
 *       KinesisStreamConfig: { // KinesisStreamConfig
 *         RoleARN: "STRING_VALUE", // required
 *         StreamARN: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 *   Fields: [ // FieldList
 *     "STRING_VALUE",
 *   ],
 *   Name: "STRING_VALUE",
 *   ARN: "STRING_VALUE",
 *   SamplingRate: Number("long"),
 * };
 * const command = new UpdateRealtimeLogConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRealtimeLogConfigResult
 * //   RealtimeLogConfig: { // RealtimeLogConfig
 * //     ARN: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     SamplingRate: Number("long"), // required
 * //     EndPoints: [ // EndPointList // required
 * //       { // EndPoint
 * //         StreamType: "STRING_VALUE", // required
 * //         KinesisStreamConfig: { // KinesisStreamConfig
 * //           RoleARN: "STRING_VALUE", // required
 * //           StreamARN: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     ],
 * //     Fields: [ // FieldList // required
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateRealtimeLogConfigCommandInput - {@link UpdateRealtimeLogConfigCommandInput}
 * @returns {@link UpdateRealtimeLogConfigCommandOutput}
 * @see {@link UpdateRealtimeLogConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateRealtimeLogConfigCommandOutput} for command's `response` shape.
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
export class UpdateRealtimeLogConfigCommand extends $Command<
  UpdateRealtimeLogConfigCommandInput,
  UpdateRealtimeLogConfigCommandOutput,
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
  constructor(readonly input: UpdateRealtimeLogConfigCommandInput) {
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
  ): Handler<UpdateRealtimeLogConfigCommandInput, UpdateRealtimeLogConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRealtimeLogConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "UpdateRealtimeLogConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "UpdateRealtimeLogConfig",
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
  private serialize(input: UpdateRealtimeLogConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateRealtimeLogConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRealtimeLogConfigCommandOutput> {
    return de_UpdateRealtimeLogConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
