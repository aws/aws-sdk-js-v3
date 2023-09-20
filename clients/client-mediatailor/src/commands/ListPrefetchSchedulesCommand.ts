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
import { ListPrefetchSchedulesRequest, ListPrefetchSchedulesResponse } from "../models/models_0";
import { de_ListPrefetchSchedulesCommand, se_ListPrefetchSchedulesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPrefetchSchedulesCommand}.
 */
export interface ListPrefetchSchedulesCommandInput extends ListPrefetchSchedulesRequest {}
/**
 * @public
 *
 * The output of {@link ListPrefetchSchedulesCommand}.
 */
export interface ListPrefetchSchedulesCommandOutput extends ListPrefetchSchedulesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the prefetch schedules for a playback configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, ListPrefetchSchedulesCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, ListPrefetchSchedulesCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // ListPrefetchSchedulesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   PlaybackConfigurationName: "STRING_VALUE", // required
 *   StreamId: "STRING_VALUE",
 * };
 * const command = new ListPrefetchSchedulesCommand(input);
 * const response = await client.send(command);
 * // { // ListPrefetchSchedulesResponse
 * //   Items: [ // __listOfPrefetchSchedule
 * //     { // PrefetchSchedule
 * //       Arn: "STRING_VALUE", // required
 * //       Consumption: { // PrefetchConsumption
 * //         AvailMatchingCriteria: [ // __listOfAvailMatchingCriteria
 * //           { // AvailMatchingCriteria
 * //             DynamicVariable: "STRING_VALUE", // required
 * //             Operator: "EQUALS", // required
 * //           },
 * //         ],
 * //         EndTime: new Date("TIMESTAMP"), // required
 * //         StartTime: new Date("TIMESTAMP"),
 * //       },
 * //       Name: "STRING_VALUE", // required
 * //       PlaybackConfigurationName: "STRING_VALUE", // required
 * //       Retrieval: { // PrefetchRetrieval
 * //         DynamicVariables: { // __mapOf__string
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         EndTime: new Date("TIMESTAMP"), // required
 * //         StartTime: new Date("TIMESTAMP"),
 * //       },
 * //       StreamId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPrefetchSchedulesCommandInput - {@link ListPrefetchSchedulesCommandInput}
 * @returns {@link ListPrefetchSchedulesCommandOutput}
 * @see {@link ListPrefetchSchedulesCommandInput} for command's `input` shape.
 * @see {@link ListPrefetchSchedulesCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 */
export class ListPrefetchSchedulesCommand extends $Command<
  ListPrefetchSchedulesCommandInput,
  ListPrefetchSchedulesCommandOutput,
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
  constructor(readonly input: ListPrefetchSchedulesCommandInput) {
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
  ): Handler<ListPrefetchSchedulesCommandInput, ListPrefetchSchedulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPrefetchSchedulesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "ListPrefetchSchedulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaTailor",
        operation: "ListPrefetchSchedules",
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
  private serialize(input: ListPrefetchSchedulesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPrefetchSchedulesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPrefetchSchedulesCommandOutput> {
    return de_ListPrefetchSchedulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
