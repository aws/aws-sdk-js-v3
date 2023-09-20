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
import { GetChannelScheduleRequest, GetChannelScheduleResponse } from "../models/models_0";
import { de_GetChannelScheduleCommand, se_GetChannelScheduleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetChannelScheduleCommand}.
 */
export interface GetChannelScheduleCommandInput extends GetChannelScheduleRequest {}
/**
 * @public
 *
 * The output of {@link GetChannelScheduleCommand}.
 */
export interface GetChannelScheduleCommandOutput extends GetChannelScheduleResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about your channel's schedule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaTailorClient, GetChannelScheduleCommand } from "@aws-sdk/client-mediatailor"; // ES Modules import
 * // const { MediaTailorClient, GetChannelScheduleCommand } = require("@aws-sdk/client-mediatailor"); // CommonJS import
 * const client = new MediaTailorClient(config);
 * const input = { // GetChannelScheduleRequest
 *   ChannelName: "STRING_VALUE", // required
 *   DurationMinutes: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetChannelScheduleCommand(input);
 * const response = await client.send(command);
 * // { // GetChannelScheduleResponse
 * //   Items: [ // __listOfScheduleEntry
 * //     { // ScheduleEntry
 * //       ApproximateDurationSeconds: Number("long"),
 * //       ApproximateStartTime: new Date("TIMESTAMP"),
 * //       Arn: "STRING_VALUE", // required
 * //       ChannelName: "STRING_VALUE", // required
 * //       LiveSourceName: "STRING_VALUE",
 * //       ProgramName: "STRING_VALUE", // required
 * //       ScheduleAdBreaks: [ // __listOfScheduleAdBreak
 * //         { // ScheduleAdBreak
 * //           ApproximateDurationSeconds: Number("long"),
 * //           ApproximateStartTime: new Date("TIMESTAMP"),
 * //           SourceLocationName: "STRING_VALUE",
 * //           VodSourceName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ScheduleEntryType: "PROGRAM" || "FILLER_SLATE",
 * //       SourceLocationName: "STRING_VALUE", // required
 * //       VodSourceName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetChannelScheduleCommandInput - {@link GetChannelScheduleCommandInput}
 * @returns {@link GetChannelScheduleCommandOutput}
 * @see {@link GetChannelScheduleCommandInput} for command's `input` shape.
 * @see {@link GetChannelScheduleCommandOutput} for command's `response` shape.
 * @see {@link MediaTailorClientResolvedConfig | config} for MediaTailorClient's `config` shape.
 *
 * @throws {@link MediaTailorServiceException}
 * <p>Base exception class for all service exceptions from MediaTailor service.</p>
 *
 */
export class GetChannelScheduleCommand extends $Command<
  GetChannelScheduleCommandInput,
  GetChannelScheduleCommandOutput,
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
  constructor(readonly input: GetChannelScheduleCommandInput) {
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
  ): Handler<GetChannelScheduleCommandInput, GetChannelScheduleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetChannelScheduleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaTailorClient";
    const commandName = "GetChannelScheduleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaTailor",
        operation: "GetChannelSchedule",
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
  private serialize(input: GetChannelScheduleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetChannelScheduleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetChannelScheduleCommandOutput> {
    return de_GetChannelScheduleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
