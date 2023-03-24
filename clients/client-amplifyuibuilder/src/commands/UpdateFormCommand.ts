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

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { UpdateFormRequest, UpdateFormResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateFormCommand,
  serializeAws_restJson1UpdateFormCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateFormCommand}.
 */
export interface UpdateFormCommandInput extends UpdateFormRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFormCommand}.
 */
export interface UpdateFormCommandOutput extends UpdateFormResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing form.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, UpdateFormCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, UpdateFormCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * const client = new AmplifyUIBuilderClient(config);
 * const input = {
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   updatedForm: {
 *     name: "STRING_VALUE",
 *     dataType: {
 *       dataSourceType: "STRING_VALUE", // required
 *       dataTypeName: "STRING_VALUE", // required
 *     },
 *     formActionType: "STRING_VALUE",
 *     fields: {
 *       "<keys>": {
 *         label: "STRING_VALUE",
 *         position: { // Union: only one key present
 *           fixed: "STRING_VALUE",
 *           rightOf: "STRING_VALUE",
 *           below: "STRING_VALUE",
 *         },
 *         excluded: true || false,
 *         inputType: {
 *           type: "STRING_VALUE", // required
 *           required: true || false,
 *           readOnly: true || false,
 *           placeholder: "STRING_VALUE",
 *           defaultValue: "STRING_VALUE",
 *           descriptiveText: "STRING_VALUE",
 *           defaultChecked: true || false,
 *           defaultCountryCode: "STRING_VALUE",
 *           valueMappings: {
 *             values: [ // required
 *               {
 *                 displayValue: {
 *                   value: "STRING_VALUE",
 *                 },
 *                 value: {
 *                   value: "STRING_VALUE",
 *                 },
 *               },
 *             ],
 *           },
 *           name: "STRING_VALUE",
 *           minValue: Number("float"),
 *           maxValue: Number("float"),
 *           step: Number("float"),
 *           value: "STRING_VALUE",
 *           isArray: true || false,
 *         },
 *         validations: [
 *           {
 *             type: "STRING_VALUE", // required
 *             strValues: [
 *               "STRING_VALUE",
 *             ],
 *             numValues: [
 *               Number("int"),
 *             ],
 *             validationMessage: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     },
 *     style: {
 *       horizontalGap: { // Union: only one key present
 *         tokenReference: "STRING_VALUE",
 *         value: "STRING_VALUE",
 *       },
 *       verticalGap: { // Union: only one key present
 *         tokenReference: "STRING_VALUE",
 *         value: "STRING_VALUE",
 *       },
 *       outerPadding: { // Union: only one key present
 *         tokenReference: "STRING_VALUE",
 *         value: "STRING_VALUE",
 *       },
 *     },
 *     sectionalElements: {
 *       "<keys>": {
 *         type: "STRING_VALUE", // required
 *         position: { // Union: only one key present
 *           fixed: "STRING_VALUE",
 *           rightOf: "STRING_VALUE",
 *           below: "STRING_VALUE",
 *         },
 *         text: "STRING_VALUE",
 *         level: Number("int"),
 *         orientation: "STRING_VALUE",
 *       },
 *     },
 *     schemaVersion: "STRING_VALUE",
 *     cta: {
 *       position: "STRING_VALUE",
 *       clear: {
 *         excluded: true || false,
 *         children: "STRING_VALUE",
 *         position: { // Union: only one key present
 *           fixed: "STRING_VALUE",
 *           rightOf: "STRING_VALUE",
 *           below: "STRING_VALUE",
 *         },
 *       },
 *       cancel: {
 *         excluded: true || false,
 *         children: "STRING_VALUE",
 *         position: { // Union: only one key present
 *           fixed: "STRING_VALUE",
 *           rightOf: "STRING_VALUE",
 *           below: "STRING_VALUE",
 *         },
 *       },
 *       submit: {
 *         excluded: true || false,
 *         children: "STRING_VALUE",
 *         position: { // Union: only one key present
 *           fixed: "STRING_VALUE",
 *           rightOf: "STRING_VALUE",
 *           below: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateFormCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateFormCommandInput - {@link UpdateFormCommandInput}
 * @returns {@link UpdateFormCommandOutput}
 * @see {@link UpdateFormCommandInput} for command's `input` shape.
 * @see {@link UpdateFormCommandOutput} for command's `response` shape.
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
 *
 */
export class UpdateFormCommand extends $Command<
  UpdateFormCommandInput,
  UpdateFormCommandOutput,
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
  constructor(readonly input: UpdateFormCommandInput) {
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
  ): Handler<UpdateFormCommandInput, UpdateFormCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateFormCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyUIBuilderClient";
    const commandName = "UpdateFormCommand";
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
  private serialize(input: UpdateFormCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFormCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFormCommandOutput> {
    return deserializeAws_restJson1UpdateFormCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
