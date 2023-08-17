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
import { DescribeSlotTypeRequest } from "../models/models_0";
import { DescribeSlotTypeResponse } from "../models/models_1";
import { de_DescribeSlotTypeCommand, se_DescribeSlotTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSlotTypeCommand}.
 */
export interface DescribeSlotTypeCommandInput extends DescribeSlotTypeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSlotTypeCommand}.
 */
export interface DescribeSlotTypeCommandOutput extends DescribeSlotTypeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets metadata information about a slot type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeSlotTypeCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeSlotTypeCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeSlotTypeRequest
 *   slotTypeId: "STRING_VALUE", // required
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 * };
 * const command = new DescribeSlotTypeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSlotTypeResponse
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
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
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
 * @param DescribeSlotTypeCommandInput - {@link DescribeSlotTypeCommandInput}
 * @returns {@link DescribeSlotTypeCommandOutput}
 * @see {@link DescribeSlotTypeCommandInput} for command's `input` shape.
 * @see {@link DescribeSlotTypeCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
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
export class DescribeSlotTypeCommand extends $Command<
  DescribeSlotTypeCommandInput,
  DescribeSlotTypeCommandOutput,
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
  constructor(readonly input: DescribeSlotTypeCommandInput) {
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
  ): Handler<DescribeSlotTypeCommandInput, DescribeSlotTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSlotTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "DescribeSlotTypeCommand";
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
  private serialize(input: DescribeSlotTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSlotTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSlotTypeCommandOutput> {
    return de_DescribeSlotTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
