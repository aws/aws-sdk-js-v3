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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { BatchDeleteCustomVocabularyItemRequest, BatchDeleteCustomVocabularyItemResponse } from "../models/models_0";
import {
  de_BatchDeleteCustomVocabularyItemCommand,
  se_BatchDeleteCustomVocabularyItemCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteCustomVocabularyItemCommand}.
 */
export interface BatchDeleteCustomVocabularyItemCommandInput extends BatchDeleteCustomVocabularyItemRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteCustomVocabularyItemCommand}.
 */
export interface BatchDeleteCustomVocabularyItemCommandOutput
  extends BatchDeleteCustomVocabularyItemResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Delete a batch of custom vocabulary items for a given bot locale's
 *          custom vocabulary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, BatchDeleteCustomVocabularyItemCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, BatchDeleteCustomVocabularyItemCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // BatchDeleteCustomVocabularyItemRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   customVocabularyItemList: [ // DeleteCustomVocabularyItemsList // required
 *     { // CustomVocabularyEntryId
 *       itemId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchDeleteCustomVocabularyItemCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteCustomVocabularyItemResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   errors: [ // FailedCustomVocabularyItems
 * //     { // FailedCustomVocabularyItem
 * //       itemId: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "DUPLICATE_INPUT" || "RESOURCE_DOES_NOT_EXIST" || "RESOURCE_ALREADY_EXISTS" || "INTERNAL_SERVER_FAILURE",
 * //     },
 * //   ],
 * //   resources: [ // CustomVocabularyItems
 * //     { // CustomVocabularyItem
 * //       itemId: "STRING_VALUE", // required
 * //       phrase: "STRING_VALUE", // required
 * //       weight: Number("int"),
 * //       displayAs: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteCustomVocabularyItemCommandInput - {@link BatchDeleteCustomVocabularyItemCommandInput}
 * @returns {@link BatchDeleteCustomVocabularyItemCommandOutput}
 * @see {@link BatchDeleteCustomVocabularyItemCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteCustomVocabularyItemCommandOutput} for command's `response` shape.
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
export class BatchDeleteCustomVocabularyItemCommand extends $Command<
  BatchDeleteCustomVocabularyItemCommandInput,
  BatchDeleteCustomVocabularyItemCommandOutput,
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
  constructor(readonly input: BatchDeleteCustomVocabularyItemCommandInput) {
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
  ): Handler<BatchDeleteCustomVocabularyItemCommandInput, BatchDeleteCustomVocabularyItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchDeleteCustomVocabularyItemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "BatchDeleteCustomVocabularyItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LexModelBuildingServiceV2",
        operation: "BatchDeleteCustomVocabularyItem",
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
  private serialize(
    input: BatchDeleteCustomVocabularyItemCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchDeleteCustomVocabularyItemCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDeleteCustomVocabularyItemCommandOutput> {
    return de_BatchDeleteCustomVocabularyItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
