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

import { GetParallelDataRequest, GetParallelDataResponse } from "../models/models_0";
import { de_GetParallelDataCommand, se_GetParallelDataCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetParallelDataCommand}.
 */
export interface GetParallelDataCommandInput extends GetParallelDataRequest {}
/**
 * @public
 *
 * The output of {@link GetParallelDataCommand}.
 */
export interface GetParallelDataCommandOutput extends GetParallelDataResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides information about a parallel data resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, GetParallelDataCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, GetParallelDataCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const input = { // GetParallelDataRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetParallelDataCommand(input);
 * const response = await client.send(command);
 * // { // GetParallelDataResponse
 * //   ParallelDataProperties: { // ParallelDataProperties
 * //     Name: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Status: "CREATING" || "UPDATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //     SourceLanguageCode: "STRING_VALUE",
 * //     TargetLanguageCodes: [ // LanguageCodeStringList
 * //       "STRING_VALUE",
 * //     ],
 * //     ParallelDataConfig: { // ParallelDataConfig
 * //       S3Uri: "STRING_VALUE", // required
 * //       Format: "TSV" || "CSV" || "TMX", // required
 * //     },
 * //     Message: "STRING_VALUE",
 * //     ImportedDataSize: Number("long"),
 * //     ImportedRecordCount: Number("long"),
 * //     FailedRecordCount: Number("long"),
 * //     SkippedRecordCount: Number("long"),
 * //     EncryptionKey: { // EncryptionKey
 * //       Type: "KMS", // required
 * //       Id: "STRING_VALUE", // required
 * //     },
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     LastUpdatedAt: new Date("TIMESTAMP"),
 * //     LatestUpdateAttemptStatus: "CREATING" || "UPDATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //     LatestUpdateAttemptAt: new Date("TIMESTAMP"),
 * //   },
 * //   DataLocation: { // ParallelDataDataLocation
 * //     RepositoryType: "STRING_VALUE", // required
 * //     Location: "STRING_VALUE", // required
 * //   },
 * //   AuxiliaryDataLocation: {
 * //     RepositoryType: "STRING_VALUE", // required
 * //     Location: "STRING_VALUE", // required
 * //   },
 * //   LatestUpdateAttemptAuxiliaryDataLocation: {
 * //     RepositoryType: "STRING_VALUE", // required
 * //     Location: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetParallelDataCommandInput - {@link GetParallelDataCommandInput}
 * @returns {@link GetParallelDataCommandOutput}
 * @see {@link GetParallelDataCommandInput} for command's `input` shape.
 * @see {@link GetParallelDataCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of the parameter is not valid. Review the value of the parameter you are using
 *       to correct it, and then retry your operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are looking for has not been found. Review the resource you're looking
 *       for and see if a different resource will accomplish your needs before retrying the revised
 *       request.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again.</p>
 *
 * @throws {@link TranslateServiceException}
 * <p>Base exception class for all service exceptions from Translate service.</p>
 *
 */
export class GetParallelDataCommand extends $Command<
  GetParallelDataCommandInput,
  GetParallelDataCommandOutput,
  TranslateClientResolvedConfig
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
  constructor(readonly input: GetParallelDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranslateClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetParallelDataCommandInput, GetParallelDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetParallelDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "GetParallelDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSShineFrontendService_20170701",
        operation: "GetParallelData",
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
  private serialize(input: GetParallelDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetParallelDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetParallelDataCommandOutput> {
    return de_GetParallelDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
