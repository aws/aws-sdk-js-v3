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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListSamplesRequest, ListSamplesResult } from "../models/models_0";
import { de_ListSamplesCommand, se_ListSamplesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSamplesCommand}.
 */
export interface ListSamplesCommandInput extends ListSamplesRequest {}
/**
 * @public
 *
 * The output of {@link ListSamplesCommand}.
 */
export interface ListSamplesCommandOutput extends ListSamplesResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about samples, given an AWS Device Farm job ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListSamplesCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListSamplesCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // ListSamplesRequest
 *   arn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSamplesCommand(input);
 * const response = await client.send(command);
 * // { // ListSamplesResult
 * //   samples: [ // Samples
 * //     { // Sample
 * //       arn: "STRING_VALUE",
 * //       type: "CPU" || "MEMORY" || "THREADS" || "RX_RATE" || "TX_RATE" || "RX" || "TX" || "NATIVE_FRAMES" || "NATIVE_FPS" || "NATIVE_MIN_DRAWTIME" || "NATIVE_AVG_DRAWTIME" || "NATIVE_MAX_DRAWTIME" || "OPENGL_FRAMES" || "OPENGL_FPS" || "OPENGL_MIN_DRAWTIME" || "OPENGL_AVG_DRAWTIME" || "OPENGL_MAX_DRAWTIME",
 * //       url: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSamplesCommandInput - {@link ListSamplesCommandInput}
 * @returns {@link ListSamplesCommandOutput}
 * @see {@link ListSamplesCommandInput} for command's `input` shape.
 * @see {@link ListSamplesCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 * @example To get information about samples
 * ```javascript
 * // The following example returns information about samples, given a specific Device Farm project.
 * const input = {
 *   "arn": "arn:aws:devicefarm:us-west-2:123456789101:project:EXAMPLE-GUID-123-456",
 *   "nextToken": "RW5DdDJkMWYwZjM2MzM2VHVpOHJIUXlDUXlhc2QzRGViYnc9SEXAMPLE"
 * };
 * const command = new ListSamplesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "samples": []
 * }
 * *\/
 * // example id: to-get-information-about-samples-1472582847534
 * ```
 *
 */
export class ListSamplesCommand extends $Command<
  ListSamplesCommandInput,
  ListSamplesCommandOutput,
  DeviceFarmClientResolvedConfig
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
  constructor(readonly input: ListSamplesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSamplesCommandInput, ListSamplesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListSamplesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListSamplesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DeviceFarm_20150623",
        operation: "ListSamples",
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
  private serialize(input: ListSamplesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSamplesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSamplesCommandOutput> {
    return de_ListSamplesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
