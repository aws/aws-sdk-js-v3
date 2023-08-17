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
import { ExportFormsRequest, ExportFormsResponse } from "../models/models_0";
import { de_ExportFormsCommand, se_ExportFormsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExportFormsCommand}.
 */
export interface ExportFormsCommandInput extends ExportFormsRequest {}
/**
 * @public
 *
 * The output of {@link ExportFormsCommand}.
 */
export interface ExportFormsCommandOutput extends ExportFormsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Exports form configurations to code that is ready to integrate into an Amplify app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, ExportFormsCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, ExportFormsCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * const client = new AmplifyUIBuilderClient(config);
 * const input = { // ExportFormsRequest
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ExportFormsCommand(input);
 * const response = await client.send(command);
 * // { // ExportFormsResponse
 * //   entities: [ // FormList // required
 * //     { // Form
 * //       appId: "STRING_VALUE", // required
 * //       environmentName: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       formActionType: "STRING_VALUE", // required
 * //       style: { // FormStyle
 * //         horizontalGap: { // FormStyleConfig Union: only one key present
 * //           tokenReference: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //         verticalGap: {//  Union: only one key present
 * //           tokenReference: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //         outerPadding: {//  Union: only one key present
 * //           tokenReference: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       },
 * //       dataType: { // FormDataTypeConfig
 * //         dataSourceType: "STRING_VALUE", // required
 * //         dataTypeName: "STRING_VALUE", // required
 * //       },
 * //       fields: { // FieldsMap // required
 * //         "<keys>": { // FieldConfig
 * //           label: "STRING_VALUE",
 * //           position: { // FieldPosition Union: only one key present
 * //             fixed: "STRING_VALUE",
 * //             rightOf: "STRING_VALUE",
 * //             below: "STRING_VALUE",
 * //           },
 * //           excluded: true || false,
 * //           inputType: { // FieldInputConfig
 * //             type: "STRING_VALUE", // required
 * //             required: true || false,
 * //             readOnly: true || false,
 * //             placeholder: "STRING_VALUE",
 * //             defaultValue: "STRING_VALUE",
 * //             descriptiveText: "STRING_VALUE",
 * //             defaultChecked: true || false,
 * //             defaultCountryCode: "STRING_VALUE",
 * //             valueMappings: { // ValueMappings
 * //               values: [ // ValueMappingList // required
 * //                 { // ValueMapping
 * //                   displayValue: { // FormInputValueProperty
 * //                     value: "STRING_VALUE",
 * //                     bindingProperties: { // FormInputValuePropertyBindingProperties
 * //                       property: "STRING_VALUE", // required
 * //                       field: "STRING_VALUE",
 * //                     },
 * //                     concat: [ // FormInputValuePropertyList
 * //                       {
 * //                         value: "STRING_VALUE",
 * //                         bindingProperties: {
 * //                           property: "STRING_VALUE", // required
 * //                           field: "STRING_VALUE",
 * //                         },
 * //                         concat: [
 * //                           "<FormInputValueProperty>",
 * //                         ],
 * //                       },
 * //                     ],
 * //                   },
 * //                   value: "<FormInputValueProperty>", // required
 * //                 },
 * //               ],
 * //               bindingProperties: { // FormInputBindingProperties
 * //                 "<keys>": { // FormInputBindingPropertiesValue
 * //                   type: "STRING_VALUE",
 * //                   bindingProperties: { // FormInputBindingPropertiesValueProperties
 * //                     model: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //             },
 * //             name: "STRING_VALUE",
 * //             minValue: Number("float"),
 * //             maxValue: Number("float"),
 * //             step: Number("float"),
 * //             value: "STRING_VALUE",
 * //             isArray: true || false,
 * //             fileUploaderConfig: { // FileUploaderFieldConfig
 * //               accessLevel: "STRING_VALUE", // required
 * //               acceptedFileTypes: [ // StrValues // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               showThumbnails: true || false,
 * //               isResumable: true || false,
 * //               maxFileCount: Number("int"),
 * //               maxSize: Number("int"),
 * //             },
 * //           },
 * //           validations: [ // ValidationsList
 * //             { // FieldValidationConfiguration
 * //               type: "STRING_VALUE", // required
 * //               strValues: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               numValues: [ // NumValues
 * //                 Number("int"),
 * //               ],
 * //               validationMessage: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       sectionalElements: { // SectionalElementMap // required
 * //         "<keys>": { // SectionalElement
 * //           type: "STRING_VALUE", // required
 * //           position: {//  Union: only one key present
 * //             fixed: "STRING_VALUE",
 * //             rightOf: "STRING_VALUE",
 * //             below: "STRING_VALUE",
 * //           },
 * //           text: "STRING_VALUE",
 * //           level: Number("int"),
 * //           orientation: "STRING_VALUE",
 * //           excluded: true || false,
 * //         },
 * //       },
 * //       schemaVersion: "STRING_VALUE", // required
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       cta: { // FormCTA
 * //         position: "STRING_VALUE",
 * //         clear: { // FormButton
 * //           excluded: true || false,
 * //           children: "STRING_VALUE",
 * //           position: {//  Union: only one key present
 * //             fixed: "STRING_VALUE",
 * //             rightOf: "STRING_VALUE",
 * //             below: "STRING_VALUE",
 * //           },
 * //         },
 * //         cancel: {
 * //           excluded: true || false,
 * //           children: "STRING_VALUE",
 * //           position: {//  Union: only one key present
 * //             fixed: "STRING_VALUE",
 * //             rightOf: "STRING_VALUE",
 * //             below: "STRING_VALUE",
 * //           },
 * //         },
 * //         submit: {
 * //           excluded: true || false,
 * //           children: "STRING_VALUE",
 * //           position: {//  Union: only one key present
 * //             fixed: "STRING_VALUE",
 * //             rightOf: "STRING_VALUE",
 * //             below: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       labelDecorator: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportFormsCommandInput - {@link ExportFormsCommandInput}
 * @returns {@link ExportFormsCommandOutput}
 * @see {@link ExportFormsCommandInput} for command's `input` shape.
 * @see {@link ExportFormsCommandOutput} for command's `response` shape.
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
export class ExportFormsCommand extends $Command<
  ExportFormsCommandInput,
  ExportFormsCommandOutput,
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
  constructor(readonly input: ExportFormsCommandInput) {
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
  ): Handler<ExportFormsCommandInput, ExportFormsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ExportFormsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyUIBuilderClient";
    const commandName = "ExportFormsCommand";
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
  private serialize(input: ExportFormsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ExportFormsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportFormsCommandOutput> {
    return de_ExportFormsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
