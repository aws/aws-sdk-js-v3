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
import { GetPrefetchScheduleRequest, GetPrefetchScheduleResponse } from "../models/models_0";
import { de_GetPrefetchScheduleCommand, se_GetPrefetchScheduleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPrefetchScheduleCommand}.
 */
export interface GetPrefetchScheduleCommandInput extends GetPrefetchScheduleRequest {}
/**
 * @public
 *
 * The output of {@link GetPrefetchScheduleCommand}.
 */
export interface GetPrefetchScheduleCommandOutput extends GetPrefetchScheduleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a prefetch schedule for a playback configuration. A prefetch schedule allows you to tell MediaTailor to fetch and prepare certain ads before an ad break happens. For more information about ad prefetching, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/prefetching-ads.html">Using ad prefetching</a> in the <i>MediaTailor User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, GetPrefetchScheduleCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, GetPrefetchScheduleCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // GetPrefetchScheduleRequest
 *   Name: "STRING_VALUE", // required
 *   PlaybackConfigurationName: "STRING_VALUE", // required
 * };
 * const command = new GetPrefetchScheduleCommand(input);
 * const response = await client.send(command);
 * // { // GetPrefetchScheduleResponse
 * //   Arn: "STRING_VALUE",
 * //   Consumption: { // PrefetchConsumption
 * //     AvailMatchingCriteria: [ // __listOfAvailMatchingCriteria
 * //       { // AvailMatchingCriteria
 * //         DynamicVariable: "STRING_VALUE", // required
 * //         Operator: "EQUALS", // required
 * //       },
 * //     ],
 * //     EndTime: new Date("TIMESTAMP"), // required
 * //     StartTime: new Date("TIMESTAMP"),
 * //   },
 * //   Name: "STRING_VALUE",
 * //   PlaybackConfigurationName: "STRING_VALUE",
 * //   Retrieval: { // PrefetchRetrieval
 * //     DynamicVariables: { // __mapOf__string
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     EndTime: new Date("TIMESTAMP"), // required
 * //     StartTime: new Date("TIMESTAMP"),
 * //   },
 * //   StreamId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPrefetchScheduleCommandInput - {@link GetPrefetchScheduleCommandInput}
 * @returns {@link GetPrefetchScheduleCommandOutput}
 * @see {@link GetPrefetchScheduleCommandInput} for command's `input` shape.
 * @see {@link GetPrefetchScheduleCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 */
export class GetPrefetchScheduleCommand extends $Command<
  GetPrefetchScheduleCommandInput,
  GetPrefetchScheduleCommandOutput,
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
  constructor(readonly input: GetPrefetchScheduleCommandInput) {
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
  ): Handler<GetPrefetchScheduleCommandInput, GetPrefetchScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPrefetchScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "GetPrefetchScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaTailor",
        operation: "GetPrefetchSchedule",
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
  private serialize(input: GetPrefetchScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPrefetchScheduleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPrefetchScheduleCommandOutput> {
    return de_GetPrefetchScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
