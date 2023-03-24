// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateThemeRequest, CreateThemeResponse } from "../models/models_2";
import {
  deserializeAws_restJson1CreateThemeCommand,
  serializeAws_restJson1CreateThemeCommand,
} from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 *
 * The input for {@link CreateThemeCommand}.
 */
export interface CreateThemeCommandInput extends CreateThemeRequest {}
/**
 * @public
 *
 * The output of {@link CreateThemeCommand}.
 */
export interface CreateThemeCommandOutput extends CreateThemeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a theme.</p>
 *          <p>A <i>theme</i> is set of configuration options for color and layout.
 * 			Themes apply to analyses and dashboards. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/themes-in-quicksight.html">Using
 * 			Themes in Amazon QuickSight</a> in the <i>Amazon QuickSight User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateThemeCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateThemeCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = {
 *   AwsAccountId: "STRING_VALUE", // required
 *   ThemeId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   BaseThemeId: "STRING_VALUE", // required
 *   VersionDescription: "STRING_VALUE",
 *   Configuration: {
 *     DataColorPalette: {
 *       Colors: [
 *         "STRING_VALUE",
 *       ],
 *       MinMaxGradient: [
 *         "STRING_VALUE",
 *       ],
 *       EmptyFillColor: "STRING_VALUE",
 *     },
 *     UIColorPalette: {
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
 *     Sheet: {
 *       Tile: {
 *         Border: {
 *           Show: true || false,
 *         },
 *       },
 *       TileLayout: {
 *         Gutter: {
 *           Show: true || false,
 *         },
 *         Margin: {
 *           Show: true || false,
 *         },
 *       },
 *     },
 *     Typography: {
 *       FontFamilies: [
 *         {
 *           FontFamily: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   },
 *   Permissions: [
 *     {
 *       Principal: "STRING_VALUE", // required
 *       Actions: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateThemeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateThemeCommandInput - {@link CreateThemeCommandInput}
 * @returns {@link CreateThemeCommandOutput}
 * @see {@link CreateThemeCommandInput} for command's `input` shape.
 * @see {@link CreateThemeCommandOutput} for command's `response` shape.
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
 *
 */
export class CreateThemeCommand extends $Command<
  CreateThemeCommandInput,
  CreateThemeCommandOutput,
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
  constructor(readonly input: CreateThemeCommandInput) {
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
  ): Handler<CreateThemeCommandInput, CreateThemeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateThemeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "CreateThemeCommand";
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
  private serialize(input: CreateThemeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateThemeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateThemeCommandOutput> {
    return deserializeAws_restJson1CreateThemeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
