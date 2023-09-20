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
import { GetRealtimeLogConfigRequest, GetRealtimeLogConfigResult } from "../models/models_1";
import { de_GetRealtimeLogConfigCommand, se_GetRealtimeLogConfigCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRealtimeLogConfigCommand}.
 */
export interface GetRealtimeLogConfigCommandInput extends GetRealtimeLogConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetRealtimeLogConfigCommand}.
 */
export interface GetRealtimeLogConfigCommandOutput extends GetRealtimeLogConfigResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets a real-time log configuration.</p>
 *          <p>To get a real-time log configuration, you can provide the configuration's name or its
 * 			Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront
 * 			uses the name to identify the real-time log configuration to get.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetRealtimeLogConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetRealtimeLogConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetRealtimeLogConfigRequest
 *   Name: "STRING_VALUE",
 *   ARN: "STRING_VALUE",
 * };
 * const command = new GetRealtimeLogConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetRealtimeLogConfigResult
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
 * @param GetRealtimeLogConfigCommandInput - {@link GetRealtimeLogConfigCommandInput}
 * @returns {@link GetRealtimeLogConfigCommandOutput}
 * @see {@link GetRealtimeLogConfigCommandInput} for command's `input` shape.
 * @see {@link GetRealtimeLogConfigCommandOutput} for command's `response` shape.
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
export class GetRealtimeLogConfigCommand extends $Command<
  GetRealtimeLogConfigCommandInput,
  GetRealtimeLogConfigCommandOutput,
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
  constructor(readonly input: GetRealtimeLogConfigCommandInput) {
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
  ): Handler<GetRealtimeLogConfigCommandInput, GetRealtimeLogConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRealtimeLogConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetRealtimeLogConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "GetRealtimeLogConfig",
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
  private serialize(input: GetRealtimeLogConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRealtimeLogConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRealtimeLogConfigCommandOutput> {
    return de_GetRealtimeLogConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
