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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetCertificatesRequest, GetCertificatesResult } from "../models/models_0";
import { de_GetCertificatesCommand, se_GetCertificatesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCertificatesCommand}.
 */
export interface GetCertificatesCommandInput extends GetCertificatesRequest {}
/**
 * @public
 *
 * The output of {@link GetCertificatesCommand}.
 */
export interface GetCertificatesCommandOutput extends GetCertificatesResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about one or more Amazon Lightsail SSL/TLS certificates.</p>
 *          <note>
 *             <p>To get a summary of a certificate, omit <code>includeCertificateDetails</code> from
 *         your request. The response will include only the certificate Amazon Resource Name (ARN),
 *         certificate name, domain name, and tags.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetCertificatesCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetCertificatesCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const input = { // GetCertificatesRequest
 *   certificateStatuses: [ // CertificateStatusList
 *     "PENDING_VALIDATION" || "ISSUED" || "INACTIVE" || "EXPIRED" || "VALIDATION_TIMED_OUT" || "REVOKED" || "FAILED",
 *   ],
 *   includeCertificateDetails: true || false,
 *   certificateName: "STRING_VALUE",
 *   pageToken: "STRING_VALUE",
 * };
 * const command = new GetCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // GetCertificatesResult
 * //   certificates: [ // CertificateSummaryList
 * //     { // CertificateSummary
 * //       certificateArn: "STRING_VALUE",
 * //       certificateName: "STRING_VALUE",
 * //       domainName: "STRING_VALUE",
 * //       certificateDetail: { // Certificate
 * //         arn: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //         domainName: "STRING_VALUE",
 * //         status: "PENDING_VALIDATION" || "ISSUED" || "INACTIVE" || "EXPIRED" || "VALIDATION_TIMED_OUT" || "REVOKED" || "FAILED",
 * //         serialNumber: "STRING_VALUE",
 * //         subjectAlternativeNames: [ // SubjectAlternativeNameList
 * //           "STRING_VALUE",
 * //         ],
 * //         domainValidationRecords: [ // DomainValidationRecordList
 * //           { // DomainValidationRecord
 * //             domainName: "STRING_VALUE",
 * //             resourceRecord: { // ResourceRecord
 * //               name: "STRING_VALUE",
 * //               type: "STRING_VALUE",
 * //               value: "STRING_VALUE",
 * //             },
 * //             dnsRecordCreationState: { // DnsRecordCreationState
 * //               code: "SUCCEEDED" || "STARTED" || "FAILED",
 * //               message: "STRING_VALUE",
 * //             },
 * //             validationStatus: "PENDING_VALIDATION" || "FAILED" || "SUCCESS",
 * //           },
 * //         ],
 * //         requestFailureReason: "STRING_VALUE",
 * //         inUseResourceCount: Number("int"),
 * //         keyAlgorithm: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         issuedAt: new Date("TIMESTAMP"),
 * //         issuerCA: "STRING_VALUE",
 * //         notBefore: new Date("TIMESTAMP"),
 * //         notAfter: new Date("TIMESTAMP"),
 * //         eligibleToRenew: "STRING_VALUE",
 * //         renewalSummary: { // RenewalSummary
 * //           domainValidationRecords: [
 * //             {
 * //               domainName: "STRING_VALUE",
 * //               resourceRecord: {
 * //                 name: "STRING_VALUE",
 * //                 type: "STRING_VALUE",
 * //                 value: "STRING_VALUE",
 * //               },
 * //               dnsRecordCreationState: {
 * //                 code: "SUCCEEDED" || "STARTED" || "FAILED",
 * //                 message: "STRING_VALUE",
 * //               },
 * //               validationStatus: "PENDING_VALIDATION" || "FAILED" || "SUCCESS",
 * //             },
 * //           ],
 * //           renewalStatus: "PendingAutoRenewal" || "PendingValidation" || "Success" || "Failed",
 * //           renewalStatusReason: "STRING_VALUE",
 * //           updatedAt: new Date("TIMESTAMP"),
 * //         },
 * //         revokedAt: new Date("TIMESTAMP"),
 * //         revocationReason: "STRING_VALUE",
 * //         tags: [ // TagList
 * //           { // Tag
 * //             key: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         supportCode: "STRING_VALUE",
 * //       },
 * //       tags: [
 * //         {
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCertificatesCommandInput - {@link GetCertificatesCommandInput}
 * @returns {@link GetCertificatesCommandOutput}
 * @see {@link GetCertificatesCommandInput} for command's `input` shape.
 * @see {@link GetCertificatesCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 */
export class GetCertificatesCommand extends $Command<
  GetCertificatesCommandInput,
  GetCertificatesCommandOutput,
  LightsailClientResolvedConfig
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
  constructor(readonly input: GetCertificatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCertificatesCommandInput, GetCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCertificatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Lightsail_20161128",
        operation: "GetCertificates",
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
  private serialize(input: GetCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCertificatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCertificatesCommandOutput> {
    return de_GetCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
