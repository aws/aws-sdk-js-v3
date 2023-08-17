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

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { ExportThemesRequest, ExportThemesResponse } from "../models/models_0";
import { de_ExportThemesCommand, se_ExportThemesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExportThemesCommand}.
 */
export interface ExportThemesCommandInput extends ExportThemesRequest {}
/**
 * @public
 *
 * The output of {@link ExportThemesCommand}.
 */
export interface ExportThemesCommandOutput extends ExportThemesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Exports theme configurations to code that is ready to integrate into an Amplify app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, ExportThemesCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, ExportThemesCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // ExportThemesRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ExportThemesCommand(input);
 * const response = await client.send(command);
 * // { // ExportThemesResponse
 * //   entities: [ // ThemeList // required
 * //     { // Theme
 * //       appId: "STRING_VALUE", // required
 * //       environmentName: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       modifiedAt: new Date("TIMESTAMP"),
 * //       values: [ // ThemeValuesList // required
 * //         { // ThemeValues
 * //           key: "STRING_VALUE",
 * //           value: { // ThemeValue
 * //             value: "STRING_VALUE",
 * //             children: [
 * //               {
 * //                 key: "STRING_VALUE",
 * //                 value: {
 * //                   value: "STRING_VALUE",
 * //                   children: "<ThemeValuesList>",
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       overrides: "<ThemeValuesList>",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportThemesCommandInput - {@link ExportThemesCommandInput}
 * @returns {@link ExportThemesCommandOutput}
 * @see {@link ExportThemesCommandInput} for command's `input` shape.
 * @see {@link ExportThemesCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Please retry your request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>An invalid or out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link AmplifyUIBuilderServiceException}
 * <p>Base exception class for all service exceptions from AmplifyUIBuilder service.</p>
 *
 */
export class ExportThemesCommand extends $Command<
  ExportThemesCommandInput,
  ExportThemesCommandOutput,
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
  constructor(readonly input: ExportThemesCommandInput) {
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
  ): Handler<ExportThemesCommandInput, ExportThemesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ExportThemesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyUIBuilderClient";
    const commandName = "ExportThemesCommand";
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
  private serialize(input: ExportThemesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExportThemesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportThemesCommandOutput> {
    return de_ExportThemesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
