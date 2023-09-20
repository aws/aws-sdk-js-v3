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

import { MedicalImagingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MedicalImagingClient";
import {
  SearchImageSetsRequest,
  SearchImageSetsRequestFilterSensitiveLog,
  SearchImageSetsResponse,
  SearchImageSetsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_SearchImageSetsCommand, se_SearchImageSetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchImageSetsCommand}.
 */
export interface SearchImageSetsCommandInput extends SearchImageSetsRequest {}
/**
 * @public
 *
 * The output of {@link SearchImageSetsCommand}.
 */
export interface SearchImageSetsCommandOutput extends SearchImageSetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Search image sets based on defined input attributes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, SearchImageSetsCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, SearchImageSetsCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * const client = new MedicalImagingClient(config);
 * const input = { // SearchImageSetsRequest
 *   datastoreId: "STRING_VALUE", // required
 *   searchCriteria: { // SearchCriteria
 *     filters: [ // SearchFilters
 *       { // SearchFilter
 *         values: [ // SearchByAttributeValues // required
 *           { // SearchByAttributeValue Union: only one key present
 *             DICOMPatientId: "STRING_VALUE",
 *             DICOMAccessionNumber: "STRING_VALUE",
 *             DICOMStudyId: "STRING_VALUE",
 *             DICOMStudyInstanceUID: "STRING_VALUE",
 *             createdAt: new Date("TIMESTAMP"),
 *             DICOMStudyDateAndTime: { // DICOMStudyDateAndTime
 *               DICOMStudyDate: "STRING_VALUE", // required
 *               DICOMStudyTime: "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         operator: "EQUAL" || "BETWEEN", // required
 *       },
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new SearchImageSetsCommand(input);
 * const response = await client.send(command);
 * // { // SearchImageSetsResponse
 * //   imageSetsMetadataSummaries: [ // ImageSetsMetadataSummaries // required
 * //     { // ImageSetsMetadataSummary
 * //       imageSetId: "STRING_VALUE", // required
 * //       version: Number("int"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       DICOMTags: { // DICOMTags
 * //         DICOMPatientId: "STRING_VALUE",
 * //         DICOMPatientName: "STRING_VALUE",
 * //         DICOMPatientBirthDate: "STRING_VALUE",
 * //         DICOMPatientSex: "STRING_VALUE",
 * //         DICOMStudyInstanceUID: "STRING_VALUE",
 * //         DICOMStudyId: "STRING_VALUE",
 * //         DICOMStudyDescription: "STRING_VALUE",
 * //         DICOMNumberOfStudyRelatedSeries: Number("int"),
 * //         DICOMNumberOfStudyRelatedInstances: Number("int"),
 * //         DICOMAccessionNumber: "STRING_VALUE",
 * //         DICOMStudyDate: "STRING_VALUE",
 * //         DICOMStudyTime: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchImageSetsCommandInput - {@link SearchImageSetsCommandInput}
 * @returns {@link SearchImageSetsCommandOutput}
 * @see {@link SearchImageSetsCommandInput} for command's `input` shape.
 * @see {@link SearchImageSetsCommandOutput} for command's `response` shape.
 * @see {@link MedicalImagingClientResolvedConfig | config} for MedicalImagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link MedicalImagingServiceException}
 * <p>Base exception class for all service exceptions from MedicalImaging service.</p>
 *
 */
export class SearchImageSetsCommand extends $Command<
  SearchImageSetsCommandInput,
  SearchImageSetsCommandOutput,
  MedicalImagingClientResolvedConfig
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
  constructor(readonly input: SearchImageSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MedicalImagingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchImageSetsCommandInput, SearchImageSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchImageSetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MedicalImagingClient";
    const commandName = "SearchImageSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchImageSetsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SearchImageSetsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AHIGatewayService",
        operation: "SearchImageSets",
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
  private serialize(input: SearchImageSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchImageSetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchImageSetsCommandOutput> {
    return de_SearchImageSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
