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
import { CreateComponentRequest, CreateComponentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateComponentCommand,
  serializeAws_restJson1CreateComponentCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateComponentCommand}.
 */
export interface CreateComponentCommandInput extends CreateComponentRequest {}
/**
 * @public
 *
 * The output of {@link CreateComponentCommand}.
 */
export interface CreateComponentCommandOutput extends CreateComponentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new component for an Amplify app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, CreateComponentCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, CreateComponentCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * const client = new AmplifyUIBuilderClient(config);
 * const input = {
 *   appId: "STRING_VALUE", // required
 *   environmentName: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   componentToCreate: {
 *     name: "STRING_VALUE", // required
 *     sourceId: "STRING_VALUE",
 *     componentType: "STRING_VALUE", // required
 *     properties: { // required
 *       "<keys>": {
 *         value: "STRING_VALUE",
 *         bindingProperties: {
 *           property: "STRING_VALUE", // required
 *           field: "STRING_VALUE",
 *         },
 *         collectionBindingProperties: {
 *           property: "STRING_VALUE", // required
 *           field: "STRING_VALUE",
 *         },
 *         defaultValue: "STRING_VALUE",
 *         model: "STRING_VALUE",
 *         bindings: {
 *           "<keys>": {
 *             element: "STRING_VALUE", // required
 *             property: "STRING_VALUE", // required
 *           },
 *         },
 *         event: "STRING_VALUE",
 *         userAttribute: "STRING_VALUE",
 *         concat: [
 *           {
 *             value: "STRING_VALUE",
 *             bindingProperties: {
 *               property: "STRING_VALUE", // required
 *               field: "STRING_VALUE",
 *             },
 *             collectionBindingProperties: {
 *               property: "STRING_VALUE", // required
 *               field: "STRING_VALUE",
 *             },
 *             defaultValue: "STRING_VALUE",
 *             model: "STRING_VALUE",
 *             bindings: {
 *               "<keys>": {
 *                 element: "STRING_VALUE", // required
 *                 property: "STRING_VALUE", // required
 *               },
 *             },
 *             event: "STRING_VALUE",
 *             userAttribute: "STRING_VALUE",
 *             concat: [
 *               {
 *                 value: "<ComponentProperty>",
 *                 bindingProperties: "<ComponentProperty>",
 *                 collectionBindingProperties: "<ComponentProperty>",
 *                 defaultValue: "<ComponentProperty>",
 *                 model: "<ComponentProperty>",
 *                 bindings: "<ComponentProperty>",
 *                 event: "<ComponentProperty>",
 *                 userAttribute: "<ComponentProperty>",
 *                 concat: "<ComponentProperty>",
 *                 condition: {
 *                   property: "STRING_VALUE",
 *                   field: "STRING_VALUE",
 *                   operator: "STRING_VALUE",
 *                   operand: "STRING_VALUE",
 *                   then: {
 *                     value: "<ComponentProperty>",
 *                     bindingProperties: "<ComponentProperty>",
 *                     collectionBindingProperties: "<ComponentProperty>",
 *                     defaultValue: "<ComponentProperty>",
 *                     model: "<ComponentProperty>",
 *                     bindings: "<ComponentProperty>",
 *                     event: "<ComponentProperty>",
 *                     userAttribute: "<ComponentProperty>",
 *                     concat: "<ComponentProperty>",
 *                     condition: {
 *                       property: "STRING_VALUE",
 *                       field: "STRING_VALUE",
 *                       operator: "STRING_VALUE",
 *                       operand: "STRING_VALUE",
 *                       then: {
 *                         value: "<ComponentProperty>",
 *                         bindingProperties: "<ComponentProperty>",
 *                         collectionBindingProperties: "<ComponentProperty>",
 *                         defaultValue: "<ComponentProperty>",
 *                         model: "<ComponentProperty>",
 *                         bindings: "<ComponentProperty>",
 *                         event: "<ComponentProperty>",
 *                         userAttribute: "<ComponentProperty>",
 *                         concat: "<ComponentProperty>",
 *                         condition: "<ComponentProperty>",
 *                         configured: true || false,
 *                         type: "STRING_VALUE",
 *                         importedValue: "STRING_VALUE",
 *                         componentName: "STRING_VALUE",
 *                         property: "STRING_VALUE",
 *                       },
 *                       else: {
 *                         value: "<ComponentProperty>",
 *                         bindingProperties: "<ComponentProperty>",
 *                         collectionBindingProperties: "<ComponentProperty>",
 *                         defaultValue: "<ComponentProperty>",
 *                         model: "<ComponentProperty>",
 *                         bindings: "<ComponentProperty>",
 *                         event: "<ComponentProperty>",
 *                         userAttribute: "<ComponentProperty>",
 *                         concat: "<ComponentProperty>",
 *                         condition: "<ComponentProperty>",
 *                         configured: true || false,
 *                         type: "STRING_VALUE",
 *                         importedValue: "STRING_VALUE",
 *                         componentName: "STRING_VALUE",
 *                         property: "STRING_VALUE",
 *                       },
 *                       operandType: "STRING_VALUE",
 *                     },
 *                     configured: true || false,
 *                     type: "STRING_VALUE",
 *                     importedValue: "STRING_VALUE",
 *                     componentName: "STRING_VALUE",
 *                     property: "STRING_VALUE",
 *                   },
 *                   else: {
 *                     value: "<ComponentProperty>",
 *                     bindingProperties: "<ComponentProperty>",
 *                     collectionBindingProperties: "<ComponentProperty>",
 *                     defaultValue: "<ComponentProperty>",
 *                     model: "<ComponentProperty>",
 *                     bindings: "<ComponentProperty>",
 *                     event: "<ComponentProperty>",
 *                     userAttribute: "<ComponentProperty>",
 *                     concat: "<ComponentProperty>",
 *                     condition: "<ComponentProperty>",
 *                     configured: true || false,
 *                     type: "STRING_VALUE",
 *                     importedValue: "STRING_VALUE",
 *                     componentName: "STRING_VALUE",
 *                     property: "STRING_VALUE",
 *                   },
 *                   operandType: "STRING_VALUE",
 *                 },
 *                 configured: "<ComponentProperty>",
 *                 type: "<ComponentProperty>",
 *                 importedValue: "<ComponentProperty>",
 *                 componentName: "<ComponentProperty>",
 *                 property: "<ComponentProperty>",
 *               },
 *             ],
 *             condition: "<ComponentProperty>",
 *             configured: "<ComponentProperty>",
 *             type: "<ComponentProperty>",
 *             importedValue: "<ComponentProperty>",
 *             componentName: "<ComponentProperty>",
 *             property: "<ComponentProperty>",
 *           },
 *         ],
 *         condition: "<ComponentProperty>",
 *         configured: "<ComponentProperty>",
 *         type: "<ComponentProperty>",
 *         importedValue: "<ComponentProperty>",
 *         componentName: "<ComponentProperty>",
 *         property: "<ComponentProperty>",
 *       },
 *     },
 *     children: [
 *       {
 *         componentType: "STRING_VALUE", // required
 *         name: "STRING_VALUE", // required
 *         properties: { // required
 *           "<keys>": {
 *             value: "<ComponentProperty>",
 *             bindingProperties: "<ComponentProperty>",
 *             collectionBindingProperties: "<ComponentProperty>",
 *             defaultValue: "<ComponentProperty>",
 *             model: "<ComponentProperty>",
 *             bindings: "<ComponentProperty>",
 *             event: "<ComponentProperty>",
 *             userAttribute: "<ComponentProperty>",
 *             concat: "<ComponentProperty>",
 *             condition: "<ComponentProperty>",
 *             configured: "<ComponentProperty>",
 *             type: "<ComponentProperty>",
 *             importedValue: "<ComponentProperty>",
 *             componentName: "<ComponentProperty>",
 *             property: "<ComponentProperty>",
 *           },
 *         },
 *         children: [
 *           {
 *             componentType: "STRING_VALUE", // required
 *             name: "STRING_VALUE", // required
 *             properties: { // required
 *               "<keys>": "<ComponentProperty>",
 *             },
 *             children: [
 *               "<ComponentChildList>",
 *             ],
 *             events: {
 *               "<keys>": {
 *                 action: "STRING_VALUE",
 *                 parameters: {
 *                   type: {
 *                     value: "<ComponentProperty>",
 *                     bindingProperties: "<ComponentProperty>",
 *                     collectionBindingProperties: "<ComponentProperty>",
 *                     defaultValue: "<ComponentProperty>",
 *                     model: "<ComponentProperty>",
 *                     bindings: "<ComponentProperty>",
 *                     event: "<ComponentProperty>",
 *                     userAttribute: "<ComponentProperty>",
 *                     concat: "<ComponentProperty>",
 *                     condition: "<ComponentProperty>",
 *                     configured: "<ComponentProperty>",
 *                     type: "<ComponentProperty>",
 *                     importedValue: "<ComponentProperty>",
 *                     componentName: "<ComponentProperty>",
 *                     property: "<ComponentProperty>",
 *                   },
 *                   url: {
 *                     value: "<ComponentProperty>",
 *                     bindingProperties: "<ComponentProperty>",
 *                     collectionBindingProperties: "<ComponentProperty>",
 *                     defaultValue: "<ComponentProperty>",
 *                     model: "<ComponentProperty>",
 *                     bindings: "<ComponentProperty>",
 *                     event: "<ComponentProperty>",
 *                     userAttribute: "<ComponentProperty>",
 *                     concat: "<ComponentProperty>",
 *                     condition: "<ComponentProperty>",
 *                     configured: "<ComponentProperty>",
 *                     type: "<ComponentProperty>",
 *                     importedValue: "<ComponentProperty>",
 *                     componentName: "<ComponentProperty>",
 *                     property: "<ComponentProperty>",
 *                   },
 *                   anchor: {
 *                     value: "<ComponentProperty>",
 *                     bindingProperties: "<ComponentProperty>",
 *                     collectionBindingProperties: "<ComponentProperty>",
 *                     defaultValue: "<ComponentProperty>",
 *                     model: "<ComponentProperty>",
 *                     bindings: "<ComponentProperty>",
 *                     event: "<ComponentProperty>",
 *                     userAttribute: "<ComponentProperty>",
 *                     concat: "<ComponentProperty>",
 *                     condition: "<ComponentProperty>",
 *                     configured: "<ComponentProperty>",
 *                     type: "<ComponentProperty>",
 *                     importedValue: "<ComponentProperty>",
 *                     componentName: "<ComponentProperty>",
 *                     property: "<ComponentProperty>",
 *                   },
 *                   target: {
 *                     value: "<ComponentProperty>",
 *                     bindingProperties: "<ComponentProperty>",
 *                     collectionBindingProperties: "<ComponentProperty>",
 *                     defaultValue: "<ComponentProperty>",
 *                     model: "<ComponentProperty>",
 *                     bindings: "<ComponentProperty>",
 *                     event: "<ComponentProperty>",
 *                     userAttribute: "<ComponentProperty>",
 *                     concat: "<ComponentProperty>",
 *                     condition: "<ComponentProperty>",
 *                     configured: "<ComponentProperty>",
 *                     type: "<ComponentProperty>",
 *                     importedValue: "<ComponentProperty>",
 *                     componentName: "<ComponentProperty>",
 *                     property: "<ComponentProperty>",
 *                   },
 *                   global: {
 *                     value: "<ComponentProperty>",
 *                     bindingProperties: "<ComponentProperty>",
 *                     collectionBindingProperties: "<ComponentProperty>",
 *                     defaultValue: "<ComponentProperty>",
 *                     model: "<ComponentProperty>",
 *                     bindings: "<ComponentProperty>",
 *                     event: "<ComponentProperty>",
 *                     userAttribute: "<ComponentProperty>",
 *                     concat: "<ComponentProperty>",
 *                     condition: "<ComponentProperty>",
 *                     configured: "<ComponentProperty>",
 *                     type: "<ComponentProperty>",
 *                     importedValue: "<ComponentProperty>",
 *                     componentName: "<ComponentProperty>",
 *                     property: "<ComponentProperty>",
 *                   },
 *                   model: "STRING_VALUE",
 *                   id: {
 *                     value: "<ComponentProperty>",
 *                     bindingProperties: "<ComponentProperty>",
 *                     collectionBindingProperties: "<ComponentProperty>",
 *                     defaultValue: "<ComponentProperty>",
 *                     model: "<ComponentProperty>",
 *                     bindings: "<ComponentProperty>",
 *                     event: "<ComponentProperty>",
 *                     userAttribute: "<ComponentProperty>",
 *                     concat: "<ComponentProperty>",
 *                     condition: "<ComponentProperty>",
 *                     configured: "<ComponentProperty>",
 *                     type: "<ComponentProperty>",
 *                     importedValue: "<ComponentProperty>",
 *                     componentName: "<ComponentProperty>",
 *                     property: "<ComponentProperty>",
 *                   },
 *                   fields: {
 *                     "<keys>": "<ComponentProperty>",
 *                   },
 *                   state: {
 *                     componentName: "STRING_VALUE", // required
 *                     property: "STRING_VALUE", // required
 *                     set: {
 *                       value: "<ComponentProperty>",
 *                       bindingProperties: "<ComponentProperty>",
 *                       collectionBindingProperties: "<ComponentProperty>",
 *                       defaultValue: "<ComponentProperty>",
 *                       model: "<ComponentProperty>",
 *                       bindings: "<ComponentProperty>",
 *                       event: "<ComponentProperty>",
 *                       userAttribute: "<ComponentProperty>",
 *                       concat: "<ComponentProperty>",
 *                       condition: "<ComponentProperty>",
 *                       configured: "<ComponentProperty>",
 *                       type: "<ComponentProperty>",
 *                       importedValue: "<ComponentProperty>",
 *                       componentName: "<ComponentProperty>",
 *                       property: "<ComponentProperty>",
 *                     },
 *                   },
 *                 },
 *                 bindingEvent: "STRING_VALUE",
 *               },
 *             },
 *             sourceId: "STRING_VALUE",
 *           },
 *         ],
 *         events: {
 *           "<keys>": {
 *             action: "STRING_VALUE",
 *             parameters: {
 *               type: {
 *                 value: "<ComponentProperty>",
 *                 bindingProperties: "<ComponentProperty>",
 *                 collectionBindingProperties: "<ComponentProperty>",
 *                 defaultValue: "<ComponentProperty>",
 *                 model: "<ComponentProperty>",
 *                 bindings: "<ComponentProperty>",
 *                 event: "<ComponentProperty>",
 *                 userAttribute: "<ComponentProperty>",
 *                 concat: "<ComponentProperty>",
 *                 condition: "<ComponentProperty>",
 *                 configured: "<ComponentProperty>",
 *                 type: "<ComponentProperty>",
 *                 importedValue: "<ComponentProperty>",
 *                 componentName: "<ComponentProperty>",
 *                 property: "<ComponentProperty>",
 *               },
 *               url: {
 *                 value: "<ComponentProperty>",
 *                 bindingProperties: "<ComponentProperty>",
 *                 collectionBindingProperties: "<ComponentProperty>",
 *                 defaultValue: "<ComponentProperty>",
 *                 model: "<ComponentProperty>",
 *                 bindings: "<ComponentProperty>",
 *                 event: "<ComponentProperty>",
 *                 userAttribute: "<ComponentProperty>",
 *                 concat: "<ComponentProperty>",
 *                 condition: "<ComponentProperty>",
 *                 configured: "<ComponentProperty>",
 *                 type: "<ComponentProperty>",
 *                 importedValue: "<ComponentProperty>",
 *                 componentName: "<ComponentProperty>",
 *                 property: "<ComponentProperty>",
 *               },
 *               anchor: {
 *                 value: "<ComponentProperty>",
 *                 bindingProperties: "<ComponentProperty>",
 *                 collectionBindingProperties: "<ComponentProperty>",
 *                 defaultValue: "<ComponentProperty>",
 *                 model: "<ComponentProperty>",
 *                 bindings: "<ComponentProperty>",
 *                 event: "<ComponentProperty>",
 *                 userAttribute: "<ComponentProperty>",
 *                 concat: "<ComponentProperty>",
 *                 condition: "<ComponentProperty>",
 *                 configured: "<ComponentProperty>",
 *                 type: "<ComponentProperty>",
 *                 importedValue: "<ComponentProperty>",
 *                 componentName: "<ComponentProperty>",
 *                 property: "<ComponentProperty>",
 *               },
 *               target: {
 *                 value: "<ComponentProperty>",
 *                 bindingProperties: "<ComponentProperty>",
 *                 collectionBindingProperties: "<ComponentProperty>",
 *                 defaultValue: "<ComponentProperty>",
 *                 model: "<ComponentProperty>",
 *                 bindings: "<ComponentProperty>",
 *                 event: "<ComponentProperty>",
 *                 userAttribute: "<ComponentProperty>",
 *                 concat: "<ComponentProperty>",
 *                 condition: "<ComponentProperty>",
 *                 configured: "<ComponentProperty>",
 *                 type: "<ComponentProperty>",
 *                 importedValue: "<ComponentProperty>",
 *                 componentName: "<ComponentProperty>",
 *                 property: "<ComponentProperty>",
 *               },
 *               global: {
 *                 value: "<ComponentProperty>",
 *                 bindingProperties: "<ComponentProperty>",
 *                 collectionBindingProperties: "<ComponentProperty>",
 *                 defaultValue: "<ComponentProperty>",
 *                 model: "<ComponentProperty>",
 *                 bindings: "<ComponentProperty>",
 *                 event: "<ComponentProperty>",
 *                 userAttribute: "<ComponentProperty>",
 *                 concat: "<ComponentProperty>",
 *                 condition: "<ComponentProperty>",
 *                 configured: "<ComponentProperty>",
 *                 type: "<ComponentProperty>",
 *                 importedValue: "<ComponentProperty>",
 *                 componentName: "<ComponentProperty>",
 *                 property: "<ComponentProperty>",
 *               },
 *               model: "STRING_VALUE",
 *               id: {
 *                 value: "<ComponentProperty>",
 *                 bindingProperties: "<ComponentProperty>",
 *                 collectionBindingProperties: "<ComponentProperty>",
 *                 defaultValue: "<ComponentProperty>",
 *                 model: "<ComponentProperty>",
 *                 bindings: "<ComponentProperty>",
 *                 event: "<ComponentProperty>",
 *                 userAttribute: "<ComponentProperty>",
 *                 concat: "<ComponentProperty>",
 *                 condition: "<ComponentProperty>",
 *                 configured: "<ComponentProperty>",
 *                 type: "<ComponentProperty>",
 *                 importedValue: "<ComponentProperty>",
 *                 componentName: "<ComponentProperty>",
 *                 property: "<ComponentProperty>",
 *               },
 *               fields: {
 *                 "<keys>": "<ComponentProperty>",
 *               },
 *               state: {
 *                 componentName: "STRING_VALUE", // required
 *                 property: "STRING_VALUE", // required
 *                 set: {
 *                   value: "<ComponentProperty>",
 *                   bindingProperties: "<ComponentProperty>",
 *                   collectionBindingProperties: "<ComponentProperty>",
 *                   defaultValue: "<ComponentProperty>",
 *                   model: "<ComponentProperty>",
 *                   bindings: "<ComponentProperty>",
 *                   event: "<ComponentProperty>",
 *                   userAttribute: "<ComponentProperty>",
 *                   concat: "<ComponentProperty>",
 *                   condition: "<ComponentProperty>",
 *                   configured: "<ComponentProperty>",
 *                   type: "<ComponentProperty>",
 *                   importedValue: "<ComponentProperty>",
 *                   componentName: "<ComponentProperty>",
 *                   property: "<ComponentProperty>",
 *                 },
 *               },
 *             },
 *             bindingEvent: "STRING_VALUE",
 *           },
 *         },
 *         sourceId: "STRING_VALUE",
 *       },
 *     ],
 *     variants: [ // required
 *       {
 *         variantValues: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         overrides: {
 *           "<keys>": {
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       },
 *     ],
 *     overrides: { // required
 *       "<keys>": {
 *         "<keys>": "<String>",
 *       },
 *     },
 *     bindingProperties: { // required
 *       "<keys>": {
 *         type: "STRING_VALUE",
 *         bindingProperties: {
 *           model: "STRING_VALUE",
 *           field: "STRING_VALUE",
 *           predicates: [
 *             {
 *               or: [
 *                 {
 *                   or: [
 *                     "<PredicateList>",
 *                   ],
 *                   and: [
 *                     "<PredicateList>",
 *                   ],
 *                   field: "STRING_VALUE",
 *                   operator: "STRING_VALUE",
 *                   operand: "STRING_VALUE",
 *                 },
 *               ],
 *               and: [
 *                 "<PredicateList>",
 *               ],
 *               field: "STRING_VALUE",
 *               operator: "STRING_VALUE",
 *               operand: "STRING_VALUE",
 *             },
 *           ],
 *           userAttribute: "STRING_VALUE",
 *           bucket: "STRING_VALUE",
 *           key: "STRING_VALUE",
 *           defaultValue: "STRING_VALUE",
 *           slotName: "STRING_VALUE",
 *         },
 *         defaultValue: "STRING_VALUE",
 *       },
 *     },
 *     collectionProperties: {
 *       "<keys>": {
 *         model: "STRING_VALUE", // required
 *         sort: [
 *           {
 *             field: "STRING_VALUE", // required
 *             direction: "STRING_VALUE", // required
 *           },
 *         ],
 *         predicate: {
 *           or: "<Predicate>",
 *           and: "<Predicate>",
 *           field: "<Predicate>",
 *           operator: "<Predicate>",
 *           operand: "<Predicate>",
 *         },
 *         identifiers: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     tags: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *     events: {
 *       "<keys>": "<ComponentEvent>",
 *     },
 *     schemaVersion: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateComponentCommandInput - {@link CreateComponentCommandInput}
 * @returns {@link CreateComponentCommandOutput}
 * @see {@link CreateComponentCommandInput} for command's `input` shape.
 * @see {@link CreateComponentCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You exceeded your service quota. Service quotas, also referred to as limits, are the
 *       maximum number of service resources or operations for your Amazon Web Services account. </p>
 *
 *
 */
export class CreateComponentCommand extends $Command<
  CreateComponentCommandInput,
  CreateComponentCommandOutput,
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
  constructor(readonly input: CreateComponentCommandInput) {
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
  ): Handler<CreateComponentCommandInput, CreateComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateComponentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyUIBuilderClient";
    const commandName = "CreateComponentCommand";
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
  private serialize(input: CreateComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateComponentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateComponentCommandOutput> {
    return deserializeAws_restJson1CreateComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
