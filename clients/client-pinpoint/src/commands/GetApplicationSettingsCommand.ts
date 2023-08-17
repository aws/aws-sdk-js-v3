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

import { GetApplicationSettingsRequest, GetApplicationSettingsResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_GetApplicationSettingsCommand, se_GetApplicationSettingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetApplicationSettingsCommand}.
 */
export interface GetApplicationSettingsCommandInput extends GetApplicationSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationSettingsCommand}.
 */
export interface GetApplicationSettingsCommandOutput extends GetApplicationSettingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about the settings for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetApplicationSettingsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetApplicationSettingsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // GetApplicationSettingsRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new GetApplicationSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationSettingsResponse
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
 * @param GetApplicationSettingsCommandInput - {@link GetApplicationSettingsCommandInput}
 * @returns {@link GetApplicationSettingsCommandOutput}
 * @see {@link GetApplicationSettingsCommandInput} for command's `input` shape.
 * @see {@link GetApplicationSettingsCommandOutput} for command's `response` shape.
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
export class GetApplicationSettingsCommand extends $Command<
  GetApplicationSettingsCommandInput,
  GetApplicationSettingsCommandOutput,
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
  constructor(readonly input: GetApplicationSettingsCommandInput) {
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
  ): Handler<GetApplicationSettingsCommandInput, GetApplicationSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetApplicationSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetApplicationSettingsCommand";
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
  private serialize(input: GetApplicationSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetApplicationSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetApplicationSettingsCommandOutput> {
    return de_GetApplicationSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
