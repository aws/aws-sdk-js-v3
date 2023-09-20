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

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { UpdateThemeRequest, UpdateThemeResponse } from "../models/models_0";
import { de_UpdateThemeCommand, se_UpdateThemeCommand } from "../protocols/Aws_restJson1";

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
 * <p>Updates an existing theme.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, UpdateThemeCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, UpdateThemeCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // UpdateThemeRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   updatedTheme: { // UpdateThemeData
 *     id: "STRING_VALUE",
 *     name: "STRING_VALUE",
 *     values: [ // ThemeValuesList // required
 *       { // ThemeValues
 *         key: "STRING_VALUE",
 *         value: { // ThemeValue
 *           value: "STRING_VALUE",
 *           children: [
 *             {
 *               key: "STRING_VALUE",
 *               value: {
 *                 value: "STRING_VALUE",
 *                 children: "<ThemeValuesList>",
 *               },
 *             },
 *           ],
 *         },
 *       },
 *     ],
 *     overrides: "<ThemeValuesList>",
 *   },
 * };
 * const command = new UpdateThemeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateThemeResponse
 * //   entity: { // Theme
 * //     appId: "STRING_VALUE", // required
 * //     environmentName: "STRING_VALUE", // required
 * //     id: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     modifiedAt: new Date("TIMESTAMP"),
 * //     values: [ // ThemeValuesList // required
 * //       { // ThemeValues
 * //         key: "STRING_VALUE",
 * //         value: { // ThemeValue
 * //           value: "STRING_VALUE",
 * //           children: [
 * //             {
 * //               key: "STRING_VALUE",
 * //               value: {
 * //                 value: "STRING_VALUE",
 * //                 children: "<ThemeValuesList>",
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     overrides: "<ThemeValuesList>",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateThemeCommandInput - {@link UpdateThemeCommandInput}
 * @returns {@link UpdateThemeCommandOutput}
 * @see {@link UpdateThemeCommandInput} for command's `input` shape.
 * @see {@link UpdateThemeCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An invalid or out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource specified in the request conflicts with an existing resource.</p>
 *
 * @throws {@link AmplifyUIBuilderServiceException}
 * <p>Base exception class for all service exceptions from AmplifyUIBuilder service.</p>
 *
 */
export class UpdateThemeCommand extends $Command<
  UpdateThemeCommandInput,
  UpdateThemeCommandOutput,
  AmplifyUIBuilderClientResolvedConfig
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
    configuration: AmplifyUIBuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateThemeCommandInput, UpdateThemeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateThemeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyUIBuilderClient";
    const commandName = "UpdateThemeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmplifyUIBuilder",
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
