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

import { ListLanguageModelsRequest, ListLanguageModelsResponse } from "../models/models_0";
import { de_ListLanguageModelsCommand, se_ListLanguageModelsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranscribeClientResolvedConfig } from "../TranscribeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLanguageModelsCommand}.
 */
export interface ListLanguageModelsCommandInput extends ListLanguageModelsRequest {}
/**
 * @public
 *
 * The output of {@link ListLanguageModelsCommand}.
 */
export interface ListLanguageModelsCommandOutput extends ListLanguageModelsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides a list of custom language models that match the specified criteria. If no
 *             criteria are specified, all custom language models are returned.</p>
 *          <p>To get detailed information about a specific custom language model, use the  operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranscribeClient, ListLanguageModelsCommand } from "@aws-sdk/client-transcribe"; // ES Modules import
 * // const { TranscribeClient, ListLanguageModelsCommand } = require("@aws-sdk/client-transcribe"); // CommonJS import
 * const client = new TranscribeClient(config);
 * const input = { // ListLanguageModelsRequest
 *   StatusEquals: "IN_PROGRESS" || "FAILED" || "COMPLETED",
 *   NameContains: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListLanguageModelsCommand(input);
 * const response = await client.send(command);
 * // { // ListLanguageModelsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Models: [ // Models
 * //     { // LanguageModel
 * //       ModelName: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LanguageCode: "en-US" || "hi-IN" || "es-US" || "en-GB" || "en-AU" || "de-DE" || "ja-JP",
 * //       BaseModelName: "NarrowBand" || "WideBand",
 * //       ModelStatus: "IN_PROGRESS" || "FAILED" || "COMPLETED",
 * //       UpgradeAvailability: true || false,
 * //       FailureReason: "STRING_VALUE",
 * //       InputDataConfig: { // InputDataConfig
 * //         S3Uri: "STRING_VALUE", // required
 * //         TuningDataS3Uri: "STRING_VALUE",
 * //         DataAccessRoleArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListLanguageModelsCommandInput - {@link ListLanguageModelsCommandInput}
 * @returns {@link ListLanguageModelsCommandOutput}
 * @see {@link ListLanguageModelsCommandInput} for command's `input` shape.
 * @see {@link ListLanguageModelsCommandOutput} for command's `response` shape.
 * @see {@link TranscribeClientResolvedConfig | config} for TranscribeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Your request didn't pass one or more validation tests. This can occur when the entity
 *             you're trying to delete doesn't exist or if it's in a non-terminal state (such as
 *                 <code>IN PROGRESS</code>). See the exception message field for more
 *             information.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>There was an internal error. Check the error message, correct the issue, and try your
 *             request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You've either sent too many requests or your input file is too long. Wait before
 *             retrying your request, or use a smaller file and try your request again.</p>
 *
 * @throws {@link TranscribeServiceException}
 * <p>Base exception class for all service exceptions from Transcribe service.</p>
 *
 */
export class ListLanguageModelsCommand extends $Command<
  ListLanguageModelsCommandInput,
  ListLanguageModelsCommandOutput,
  TranscribeClientResolvedConfig
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
  constructor(readonly input: ListLanguageModelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranscribeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLanguageModelsCommandInput, ListLanguageModelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLanguageModelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranscribeClient";
    const commandName = "ListLanguageModelsCommand";
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
  private serialize(input: ListLanguageModelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLanguageModelsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLanguageModelsCommandOutput> {
    return de_ListLanguageModelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
