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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { CreateSlotTypeRequest, CreateSlotTypeResponse } from "../models/models_0";
import { de_CreateSlotTypeCommand, se_CreateSlotTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSlotTypeCommand}.
 */
export interface CreateSlotTypeCommandInput extends CreateSlotTypeRequest {}
/**
 * @public
 *
 * The output of {@link CreateSlotTypeCommand}.
 */
export interface CreateSlotTypeCommandOutput extends CreateSlotTypeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a custom slot type</p>
 *          <p> To create a custom slot type, specify a name for the slot type and
 *          a set of enumeration values, the values that a slot of this type can
 *          assume. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateSlotTypeCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateSlotTypeCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // CreateSlotTypeRequest
 *   slotTypeName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   slotTypeValues: [ // SlotTypeValues
 *     { // SlotTypeValue
 *       sampleValue: { // SampleValue
 *         value: "STRING_VALUE", // required
 *       },
 *       synonyms: [ // SynonymList
 *         {
 *           value: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 *   valueSelectionSetting: { // SlotValueSelectionSetting
 *     resolutionStrategy: "OriginalValue" || "TopResolution" || "Concatenation", // required
 *     regexFilter: { // SlotValueRegexFilter
 *       pattern: "STRING_VALUE", // required
 *     },
 *     advancedRecognitionSetting: { // AdvancedRecognitionSetting
 *       audioRecognitionStrategy: "UseSlotValuesAsCustomVocabulary",
 *     },
 *   },
 *   parentSlotTypeSignature: "STRING_VALUE",
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   externalSourceSetting: { // ExternalSourceSetting
 *     grammarSlotTypeSetting: { // GrammarSlotTypeSetting
 *       source: { // GrammarSlotTypeSource
 *         s3BucketName: "STRING_VALUE", // required
 *         s3ObjectKey: "STRING_VALUE", // required
 *         kmsKeyArn: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   compositeSlotTypeSetting: { // CompositeSlotTypeSetting
 *     subSlots: [ // SubSlotTypeList
 *       { // SubSlotTypeComposition
 *         name: "STRING_VALUE", // required
 *         slotTypeId: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateSlotTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateSlotTypeResponse
 * //   slotTypeId: "STRING_VALUE",
 * //   slotTypeName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   slotTypeValues: [ // SlotTypeValues
 * //     { // SlotTypeValue
 * //       sampleValue: { // SampleValue
 * //         value: "STRING_VALUE", // required
 * //       },
 * //       synonyms: [ // SynonymList
 * //         {
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   valueSelectionSetting: { // SlotValueSelectionSetting
 * //     resolutionStrategy: "OriginalValue" || "TopResolution" || "Concatenation", // required
 * //     regexFilter: { // SlotValueRegexFilter
 * //       pattern: "STRING_VALUE", // required
 * //     },
 * //     advancedRecognitionSetting: { // AdvancedRecognitionSetting
 * //       audioRecognitionStrategy: "UseSlotValuesAsCustomVocabulary",
 * //     },
 * //   },
 * //   parentSlotTypeSignature: "STRING_VALUE",
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   externalSourceSetting: { // ExternalSourceSetting
 * //     grammarSlotTypeSetting: { // GrammarSlotTypeSetting
 * //       source: { // GrammarSlotTypeSource
 * //         s3BucketName: "STRING_VALUE", // required
 * //         s3ObjectKey: "STRING_VALUE", // required
 * //         kmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   compositeSlotTypeSetting: { // CompositeSlotTypeSetting
 * //     subSlots: [ // SubSlotTypeList
 * //       { // SubSlotTypeComposition
 * //         name: "STRING_VALUE", // required
 * //         slotTypeId: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSlotTypeCommandInput - {@link CreateSlotTypeCommandInput}
 * @returns {@link CreateSlotTypeCommandOutput}
 * @see {@link CreateSlotTypeCommandInput} for command's `input` shape.
 * @see {@link CreateSlotTypeCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 */
export class CreateSlotTypeCommand extends $Command<
  CreateSlotTypeCommandInput,
  CreateSlotTypeCommandOutput,
  LexModelsV2ClientResolvedConfig
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
  constructor(readonly input: CreateSlotTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSlotTypeCommandInput, CreateSlotTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSlotTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "CreateSlotTypeCommand";
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
  private serialize(input: CreateSlotTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSlotTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSlotTypeCommandOutput> {
    return de_CreateSlotTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
