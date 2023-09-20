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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { ListPiiEntitiesDetectionJobsRequest, ListPiiEntitiesDetectionJobsResponse } from "../models/models_0";
import {
  de_ListPiiEntitiesDetectionJobsCommand,
  se_ListPiiEntitiesDetectionJobsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPiiEntitiesDetectionJobsCommand}.
 */
export interface ListPiiEntitiesDetectionJobsCommandInput extends ListPiiEntitiesDetectionJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListPiiEntitiesDetectionJobsCommand}.
 */
export interface ListPiiEntitiesDetectionJobsCommandOutput
  extends ListPiiEntitiesDetectionJobsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of the PII entity detection jobs that you have submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListPiiEntitiesDetectionJobsCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListPiiEntitiesDetectionJobsCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // ListPiiEntitiesDetectionJobsRequest
 *   Filter: { // PiiEntitiesDetectionJobFilter
 *     JobName: "STRING_VALUE",
 *     JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 *     SubmitTimeBefore: new Date("TIMESTAMP"),
 *     SubmitTimeAfter: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPiiEntitiesDetectionJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListPiiEntitiesDetectionJobsResponse
 * //   PiiEntitiesDetectionJobPropertiesList: [ // PiiEntitiesDetectionJobPropertiesList
 * //     { // PiiEntitiesDetectionJobProperties
 * //       JobId: "STRING_VALUE",
 * //       JobArn: "STRING_VALUE",
 * //       JobName: "STRING_VALUE",
 * //       JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * //       Message: "STRING_VALUE",
 * //       SubmitTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       InputDataConfig: { // InputDataConfig
 * //         S3Uri: "STRING_VALUE", // required
 * //         InputFormat: "ONE_DOC_PER_FILE" || "ONE_DOC_PER_LINE",
 * //         DocumentReaderConfig: { // DocumentReaderConfig
 * //           DocumentReadAction: "TEXTRACT_DETECT_DOCUMENT_TEXT" || "TEXTRACT_ANALYZE_DOCUMENT", // required
 * //           DocumentReadMode: "SERVICE_DEFAULT" || "FORCE_DOCUMENT_READ_ACTION",
 * //           FeatureTypes: [ // ListOfDocumentReadFeatureTypes
 * //             "TABLES" || "FORMS",
 * //           ],
 * //         },
 * //       },
 * //       OutputDataConfig: { // PiiOutputDataConfig
 * //         S3Uri: "STRING_VALUE", // required
 * //         KmsKeyId: "STRING_VALUE",
 * //       },
 * //       RedactionConfig: { // RedactionConfig
 * //         PiiEntityTypes: [ // ListOfPiiEntityTypes
 * //           "BANK_ACCOUNT_NUMBER" || "BANK_ROUTING" || "CREDIT_DEBIT_NUMBER" || "CREDIT_DEBIT_CVV" || "CREDIT_DEBIT_EXPIRY" || "PIN" || "EMAIL" || "ADDRESS" || "NAME" || "PHONE" || "SSN" || "DATE_TIME" || "PASSPORT_NUMBER" || "DRIVER_ID" || "URL" || "AGE" || "USERNAME" || "PASSWORD" || "AWS_ACCESS_KEY" || "AWS_SECRET_KEY" || "IP_ADDRESS" || "MAC_ADDRESS" || "ALL" || "LICENSE_PLATE" || "VEHICLE_IDENTIFICATION_NUMBER" || "UK_NATIONAL_INSURANCE_NUMBER" || "CA_SOCIAL_INSURANCE_NUMBER" || "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER" || "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER" || "IN_PERMANENT_ACCOUNT_NUMBER" || "IN_NREGA" || "INTERNATIONAL_BANK_ACCOUNT_NUMBER" || "SWIFT_CODE" || "UK_NATIONAL_HEALTH_SERVICE_NUMBER" || "CA_HEALTH_NUMBER" || "IN_AADHAAR" || "IN_VOTER_NUMBER",
 * //         ],
 * //         MaskMode: "MASK" || "REPLACE_WITH_PII_ENTITY_TYPE",
 * //         MaskCharacter: "STRING_VALUE",
 * //       },
 * //       LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW",
 * //       DataAccessRoleArn: "STRING_VALUE",
 * //       Mode: "ONLY_REDACTION" || "ONLY_OFFSETS",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPiiEntitiesDetectionJobsCommandInput - {@link ListPiiEntitiesDetectionJobsCommandInput}
 * @returns {@link ListPiiEntitiesDetectionJobsCommandOutput}
 * @see {@link ListPiiEntitiesDetectionJobsCommandInput} for command's `input` shape.
 * @see {@link ListPiiEntitiesDetectionJobsCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidFilterException} (client fault)
 *  <p>The filter specified for the operation is invalid. Specify a different
 *       filter.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 */
export class ListPiiEntitiesDetectionJobsCommand extends $Command<
  ListPiiEntitiesDetectionJobsCommandInput,
  ListPiiEntitiesDetectionJobsCommandOutput,
  ComprehendClientResolvedConfig
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
  constructor(readonly input: ListPiiEntitiesDetectionJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPiiEntitiesDetectionJobsCommandInput, ListPiiEntitiesDetectionJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPiiEntitiesDetectionJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "ListPiiEntitiesDetectionJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Comprehend_20171127",
        operation: "ListPiiEntitiesDetectionJobs",
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
  private serialize(input: ListPiiEntitiesDetectionJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPiiEntitiesDetectionJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPiiEntitiesDetectionJobsCommandOutput> {
    return de_ListPiiEntitiesDetectionJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
