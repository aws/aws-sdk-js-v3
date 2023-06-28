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

import { DescribeThemeRequest, DescribeThemeResponse } from "../models/models_3";
import { de_DescribeThemeCommand, se_DescribeThemeCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeThemeCommand}.
 */
export interface DescribeThemeCommandInput extends DescribeThemeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeThemeCommand}.
 */
export interface DescribeThemeCommandOutput extends DescribeThemeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeThemeCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeThemeCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // DescribeThemeRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   ThemeId: "STRING_VALUE", // required
 *   VersionNumber: Number("long"),
 *   AliasName: "STRING_VALUE",
 * };
 * const command = new DescribeThemeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeThemeResponse
 * //   Theme: { // Theme
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     ThemeId: "STRING_VALUE",
 * //     Version: { // ThemeVersion
 * //       VersionNumber: Number("long"),
 * //       Arn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       BaseThemeId: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       Configuration: { // ThemeConfiguration
 * //         DataColorPalette: { // DataColorPalette
 * //           Colors: [ // ColorList
 * //             "STRING_VALUE",
 * //           ],
 * //           MinMaxGradient: [
 * //             "STRING_VALUE",
 * //           ],
 * //           EmptyFillColor: "STRING_VALUE",
 * //         },
 * //         UIColorPalette: { // UIColorPalette
 * //           PrimaryForeground: "STRING_VALUE",
 * //           PrimaryBackground: "STRING_VALUE",
 * //           SecondaryForeground: "STRING_VALUE",
 * //           SecondaryBackground: "STRING_VALUE",
 * //           Accent: "STRING_VALUE",
 * //           AccentForeground: "STRING_VALUE",
 * //           Danger: "STRING_VALUE",
 * //           DangerForeground: "STRING_VALUE",
 * //           Warning: "STRING_VALUE",
 * //           WarningForeground: "STRING_VALUE",
 * //           Success: "STRING_VALUE",
 * //           SuccessForeground: "STRING_VALUE",
 * //           Dimension: "STRING_VALUE",
 * //           DimensionForeground: "STRING_VALUE",
 * //           Measure: "STRING_VALUE",
 * //           MeasureForeground: "STRING_VALUE",
 * //         },
 * //         Sheet: { // SheetStyle
 * //           Tile: { // TileStyle
 * //             Border: { // BorderStyle
 * //               Show: true || false,
 * //             },
 * //           },
 * //           TileLayout: { // TileLayoutStyle
 * //             Gutter: { // GutterStyle
 * //               Show: true || false,
 * //             },
 * //             Margin: { // MarginStyle
 * //               Show: true || false,
 * //             },
 * //           },
 * //         },
 * //         Typography: { // Typography
 * //           FontFamilies: [ // FontList
 * //             { // Font
 * //               FontFamily: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       Errors: [ // ThemeErrorList
 * //         { // ThemeError
 * //           Type: "INTERNAL_FAILURE",
 * //           Message: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Status: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETED",
 * //     },
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     Type: "QUICKSIGHT" || "CUSTOM" || "ALL",
 * //   },
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeThemeCommandInput - {@link DescribeThemeCommandInput}
 * @returns {@link DescribeThemeCommandOutput}
 * @see {@link DescribeThemeCommandInput} for command's `input` shape.
 * @see {@link DescribeThemeCommandOutput} for command's `response` shape.
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
export class DescribeThemeCommand extends $Command<
  DescribeThemeCommandInput,
  DescribeThemeCommandOutput,
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
  constructor(readonly input: DescribeThemeCommandInput) {
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
  ): Handler<DescribeThemeCommandInput, DescribeThemeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeThemeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QuickSightClient";
    const commandName = "DescribeThemeCommand";
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
  private serialize(input: DescribeThemeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeThemeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeThemeCommandOutput> {
    return de_DescribeThemeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
