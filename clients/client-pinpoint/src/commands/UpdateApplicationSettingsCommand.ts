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

import { UpdateApplicationSettingsRequest, UpdateApplicationSettingsResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_UpdateApplicationSettingsCommand, se_UpdateApplicationSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationSettingsCommand}.
 */
export interface UpdateApplicationSettingsCommandInput extends UpdateApplicationSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationSettingsCommand}.
 */
export interface UpdateApplicationSettingsCommandOutput extends UpdateApplicationSettingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the settings for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateApplicationSettingsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateApplicationSettingsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // UpdateApplicationSettingsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   WriteApplicationSettingsRequest: { // WriteApplicationSettingsRequest
 *     CampaignHook: { // CampaignHook
 *       LambdaFunctionName: "STRING_VALUE",
 *       Mode: "DELIVERY" || "FILTER",
 *       WebUrl: "STRING_VALUE",
 *     },
 *     CloudWatchMetricsEnabled: true || false,
 *     EventTaggingEnabled: true || false,
 *     Limits: { // CampaignLimits
 *       Daily: Number("int"),
 *       MaximumDuration: Number("int"),
 *       MessagesPerSecond: Number("int"),
 *       Total: Number("int"),
 *       Session: Number("int"),
 *     },
 *     QuietTime: { // QuietTime
 *       End: "STRING_VALUE",
 *       Start: "STRING_VALUE",
 *     },
 *     JourneyLimits: { // ApplicationSettingsJourneyLimits
 *       DailyCap: Number("int"),
 *       TimeframeCap: { // JourneyTimeframeCap
 *         Cap: Number("int"),
 *         Days: Number("int"),
 *       },
 *       TotalCap: Number("int"),
 *     },
 *   },
 * };
 * const command = new UpdateApplicationSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApplicationSettingsResponse
 * //   ApplicationSettingsResource: { // ApplicationSettingsResource
 * //     ApplicationId: "STRING_VALUE", // required
 * //     CampaignHook: { // CampaignHook
 * //       LambdaFunctionName: "STRING_VALUE",
 * //       Mode: "DELIVERY" || "FILTER",
 * //       WebUrl: "STRING_VALUE",
 * //     },
 * //     LastModifiedDate: "STRING_VALUE",
 * //     Limits: { // CampaignLimits
 * //       Daily: Number("int"),
 * //       MaximumDuration: Number("int"),
 * //       MessagesPerSecond: Number("int"),
 * //       Total: Number("int"),
 * //       Session: Number("int"),
 * //     },
 * //     QuietTime: { // QuietTime
 * //       End: "STRING_VALUE",
 * //       Start: "STRING_VALUE",
 * //     },
 * //     JourneyLimits: { // ApplicationSettingsJourneyLimits
 * //       DailyCap: Number("int"),
 * //       TimeframeCap: { // JourneyTimeframeCap
 * //         Cap: Number("int"),
 * //         Days: Number("int"),
 * //       },
 * //       TotalCap: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateApplicationSettingsCommandInput - {@link UpdateApplicationSettingsCommandInput}
 * @returns {@link UpdateApplicationSettingsCommandOutput}
 * @see {@link UpdateApplicationSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationSettingsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 */
export class UpdateApplicationSettingsCommand extends $Command<
  UpdateApplicationSettingsCommandInput,
  UpdateApplicationSettingsCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: UpdateApplicationSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateApplicationSettingsCommandInput, UpdateApplicationSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateApplicationSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdateApplicationSettingsCommand";
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
  private serialize(input: UpdateApplicationSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateApplicationSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateApplicationSettingsCommandOutput> {
    return de_UpdateApplicationSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
