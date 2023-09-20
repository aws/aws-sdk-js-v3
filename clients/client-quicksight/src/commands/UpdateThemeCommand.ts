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

import { UpdateThemeRequest, UpdateThemeResponse } from "../models/models_4";
import { de_UpdateThemeCommand, se_UpdateThemeCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateThemeCommand}.
 */
export interface UpdateThemeCommandInput extends UpdateThemeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateThemeCommand}.
 */
export interface UpdateThemeCommandOutput extends UpdateThemeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateThemeCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateThemeCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // UpdateThemeRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ThemeId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   BaseThemeId: "STRING_VALUE", // required
 *   VersionDescription: "STRING_VALUE",
 *   Configuration: { // ThemeConfiguration
 *     DataColorPalette: { // DataColorPalette
 *       Colors: [ // ColorList
 *         "STRING_VALUE",
 *       ],
 *       MinMaxGradient: [
 *         "STRING_VALUE",
 *       ],
 *       EmptyFillColor: "STRING_VALUE",
 *     },
 *     UIColorPalette: { // UIColorPalette
 *       PrimaryForeground: "STRING_VALUE",
 *       PrimaryBackground: "STRING_VALUE",
 *       SecondaryForeground: "STRING_VALUE",
 *       SecondaryBackground: "STRING_VALUE",
 *       Accent: "STRING_VALUE",
 *       AccentForeground: "STRING_VALUE",
 *       Danger: "STRING_VALUE",
 *       DangerForeground: "STRING_VALUE",
 *       Warning: "STRING_VALUE",
 *       WarningForeground: "STRING_VALUE",
 *       Success: "STRING_VALUE",
 *       SuccessForeground: "STRING_VALUE",
 *       Dimension: "STRING_VALUE",
 *       DimensionForeground: "STRING_VALUE",
 *       Measure: "STRING_VALUE",
 *       MeasureForeground: "STRING_VALUE",
 *     },
 *     Sheet: { // SheetStyle
 *       Tile: { // TileStyle
 *         Border: { // BorderStyle
 *           Show: true || false,
 *         },
 *       },
 *       TileLayout: { // TileLayoutStyle
 *         Gutter: { // GutterStyle
 *           Show: true || false,
 *         },
 *         Margin: { // MarginStyle
 *           Show: true || false,
 *         },
 *       },
 *     },
 *     Typography: { // Typography
 *       FontFamilies: [ // FontList
 *         { // Font
 *           FontFamily: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateThemeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateThemeResponse
 * //   ThemeId: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   VersionArn: "STRING_VALUE",
 * //   CreationStatus: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETED",
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateThemeCommandInput - {@link UpdateThemeCommandInput}
 * @returns {@link UpdateThemeCommandOutput}
 * @see {@link UpdateThemeCommandInput} for command's `input` shape.
 * @see {@link UpdateThemeCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Amazon QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 */
export class UpdateThemeCommand extends $Command<
  UpdateThemeCommandInput,
  UpdateThemeCommandOutput,
  QuickSightClientResolvedConfig
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
  constructor(readonly input: UpdateThemeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QuickSightClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateThemeCommandInput, UpdateThemeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateThemeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "UpdateThemeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "QuickSight_20180401",
        operation: "UpdateTheme",
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
  private serialize(input: UpdateThemeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateThemeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateThemeCommandOutput> {
    return de_UpdateThemeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
