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

import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { CreateIntentVersionRequest, CreateIntentVersionResponse } from "../models/models_0";
import { de_CreateIntentVersionCommand, se_CreateIntentVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateIntentVersionCommand}.
 */
export interface CreateIntentVersionCommandInput extends CreateIntentVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateIntentVersionCommand}.
 */
export interface CreateIntentVersionCommandOutput extends CreateIntentVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new version of an intent based on the
 *         <code>$LATEST</code> version of the intent. If the <code>$LATEST</code>
 *       version of this intent hasn't changed since you last updated it, Amazon Lex
 *       doesn't create a new version. It returns the last version you
 *       created.</p>
 *          <note>
 *             <p>You can update only the <code>$LATEST</code> version of the
 *         intent. You can't update the numbered versions that you create with the
 *           <code>CreateIntentVersion</code> operation.</p>
 *          </note>
 *          <p> When you create a version of an intent, Amazon Lex sets the version to
 *       1. Subsequent versions increment by 1. For more information, see <a>versioning-intro</a>. </p>
 *          <p>This operation requires permissions to perform the
 *         <code>lex:CreateIntentVersion</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, CreateIntentVersionCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, CreateIntentVersionCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // CreateIntentVersionRequest
 *   name: "STRING_VALUE", // required
 *   checksum: "STRING_VALUE",
 * };
 * const command = new CreateIntentVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateIntentVersionResponse
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   slots: [ // SlotList
 * //     { // Slot
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       slotConstraint: "STRING_VALUE", // required
 * //       slotType: "STRING_VALUE",
 * //       slotTypeVersion: "STRING_VALUE",
 * //       valueElicitationPrompt: { // Prompt
 * //         messages: [ // MessageList // required
 * //           { // Message
 * //             contentType: "STRING_VALUE", // required
 * //             content: "STRING_VALUE", // required
 * //             groupNumber: Number("int"),
 * //           },
 * //         ],
 * //         maxAttempts: Number("int"), // required
 * //         responseCard: "STRING_VALUE",
 * //       },
 * //       priority: Number("int"),
 * //       sampleUtterances: [ // SlotUtteranceList
 * //         "STRING_VALUE",
 * //       ],
 * //       responseCard: "STRING_VALUE",
 * //       obfuscationSetting: "STRING_VALUE",
 * //       defaultValueSpec: { // SlotDefaultValueSpec
 * //         defaultValueList: [ // SlotDefaultValueList // required
 * //           { // SlotDefaultValue
 * //             defaultValue: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   sampleUtterances: [ // IntentUtteranceList
 * //     "STRING_VALUE",
 * //   ],
 * //   confirmationPrompt: {
 * //     messages: [ // required
 * //       {
 * //         contentType: "STRING_VALUE", // required
 * //         content: "STRING_VALUE", // required
 * //         groupNumber: Number("int"),
 * //       },
 * //     ],
 * //     maxAttempts: Number("int"), // required
 * //     responseCard: "STRING_VALUE",
 * //   },
 * //   rejectionStatement: { // Statement
 * //     messages: [ // required
 * //       {
 * //         contentType: "STRING_VALUE", // required
 * //         content: "STRING_VALUE", // required
 * //         groupNumber: Number("int"),
 * //       },
 * //     ],
 * //     responseCard: "STRING_VALUE",
 * //   },
 * //   followUpPrompt: { // FollowUpPrompt
 * //     prompt: "<Prompt>", // required
 * //     rejectionStatement: {
 * //       messages: "<MessageList>", // required
 * //       responseCard: "STRING_VALUE",
 * //     },
 * //   },
 * //   conclusionStatement: {
 * //     messages: "<MessageList>", // required
 * //     responseCard: "STRING_VALUE",
 * //   },
 * //   dialogCodeHook: { // CodeHook
 * //     uri: "STRING_VALUE", // required
 * //     messageVersion: "STRING_VALUE", // required
 * //   },
 * //   fulfillmentActivity: { // FulfillmentActivity
 * //     type: "STRING_VALUE", // required
 * //     codeHook: {
 * //       uri: "STRING_VALUE", // required
 * //       messageVersion: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   parentIntentSignature: "STRING_VALUE",
 * //   lastUpdatedDate: new Date("TIMESTAMP"),
 * //   createdDate: new Date("TIMESTAMP"),
 * //   version: "STRING_VALUE",
 * //   checksum: "STRING_VALUE",
 * //   kendraConfiguration: { // KendraConfiguration
 * //     kendraIndex: "STRING_VALUE", // required
 * //     queryFilterString: "STRING_VALUE",
 * //     role: "STRING_VALUE", // required
 * //   },
 * //   inputContexts: [ // InputContextList
 * //     { // InputContext
 * //       name: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   outputContexts: [ // OutputContextList
 * //     { // OutputContext
 * //       name: "STRING_VALUE", // required
 * //       timeToLiveInSeconds: Number("int"), // required
 * //       turnsToLive: Number("int"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateIntentVersionCommandInput - {@link CreateIntentVersionCommandInput}
 * @returns {@link CreateIntentVersionCommandOutput}
 * @see {@link CreateIntentVersionCommandInput} for command's `input` shape.
 * @see {@link CreateIntentVersionCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict processing the request. Try your request
 *       again. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal Amazon Lex error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the
 *       resource and try again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p> The checksum of the resource that you are trying to change does
 *       not match the checksum in the request. Check the resource's checksum and
 *       try again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 */
export class CreateIntentVersionCommand extends $Command<
  CreateIntentVersionCommandInput,
  CreateIntentVersionCommandOutput,
  LexModelBuildingServiceClientResolvedConfig
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
  constructor(readonly input: CreateIntentVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelBuildingServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateIntentVersionCommandInput, CreateIntentVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateIntentVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelBuildingServiceClient";
    const commandName = "CreateIntentVersionCommand";
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
  private serialize(input: CreateIntentVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateIntentVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateIntentVersionCommandOutput> {
    return de_CreateIntentVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
