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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListAuditFindingsRequest, ListAuditFindingsResponse } from "../models/models_1";
import { de_ListAuditFindingsCommand, se_ListAuditFindingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAuditFindingsCommand}.
 */
export interface ListAuditFindingsCommandInput extends ListAuditFindingsRequest {}
/**
 * @public
 *
 * The output of {@link ListAuditFindingsCommand}.
 */
export interface ListAuditFindingsCommandOutput extends ListAuditFindingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the findings (results) of a Device Defender audit or of the audits
 *         performed during a specified time period. (Findings are retained for 90 days.)</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditFindings</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuditFindingsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuditFindingsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListAuditFindingsRequest
 *   taskId: "STRING_VALUE",
 *   checkName: "STRING_VALUE",
 *   resourceIdentifier: { // ResourceIdentifier
 *     deviceCertificateId: "STRING_VALUE",
 *     caCertificateId: "STRING_VALUE",
 *     cognitoIdentityPoolId: "STRING_VALUE",
 *     clientId: "STRING_VALUE",
 *     policyVersionIdentifier: { // PolicyVersionIdentifier
 *       policyName: "STRING_VALUE",
 *       policyVersionId: "STRING_VALUE",
 *     },
 *     account: "STRING_VALUE",
 *     iamRoleArn: "STRING_VALUE",
 *     roleAliasArn: "STRING_VALUE",
 *     issuerCertificateIdentifier: { // IssuerCertificateIdentifier
 *       issuerCertificateSubject: "STRING_VALUE",
 *       issuerId: "STRING_VALUE",
 *       issuerCertificateSerialNumber: "STRING_VALUE",
 *     },
 *     deviceCertificateArn: "STRING_VALUE",
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   listSuppressedFindings: true || false,
 * };
 * const command = new ListAuditFindingsCommand(input);
 * const response = await client.send(command);
 * // { // ListAuditFindingsResponse
 * //   findings: [ // AuditFindings
 * //     { // AuditFinding
 * //       findingId: "STRING_VALUE",
 * //       taskId: "STRING_VALUE",
 * //       checkName: "STRING_VALUE",
 * //       taskStartTime: new Date("TIMESTAMP"),
 * //       findingTime: new Date("TIMESTAMP"),
 * //       severity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW",
 * //       nonCompliantResource: { // NonCompliantResource
 * //         resourceType: "DEVICE_CERTIFICATE" || "CA_CERTIFICATE" || "IOT_POLICY" || "COGNITO_IDENTITY_POOL" || "CLIENT_ID" || "ACCOUNT_SETTINGS" || "ROLE_ALIAS" || "IAM_ROLE" || "ISSUER_CERTIFICATE",
 * //         resourceIdentifier: { // ResourceIdentifier
 * //           deviceCertificateId: "STRING_VALUE",
 * //           caCertificateId: "STRING_VALUE",
 * //           cognitoIdentityPoolId: "STRING_VALUE",
 * //           clientId: "STRING_VALUE",
 * //           policyVersionIdentifier: { // PolicyVersionIdentifier
 * //             policyName: "STRING_VALUE",
 * //             policyVersionId: "STRING_VALUE",
 * //           },
 * //           account: "STRING_VALUE",
 * //           iamRoleArn: "STRING_VALUE",
 * //           roleAliasArn: "STRING_VALUE",
 * //           issuerCertificateIdentifier: { // IssuerCertificateIdentifier
 * //             issuerCertificateSubject: "STRING_VALUE",
 * //             issuerId: "STRING_VALUE",
 * //             issuerCertificateSerialNumber: "STRING_VALUE",
 * //           },
 * //           deviceCertificateArn: "STRING_VALUE",
 * //         },
 * //         additionalInfo: { // StringMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       relatedResources: [ // RelatedResources
 * //         { // RelatedResource
 * //           resourceType: "DEVICE_CERTIFICATE" || "CA_CERTIFICATE" || "IOT_POLICY" || "COGNITO_IDENTITY_POOL" || "CLIENT_ID" || "ACCOUNT_SETTINGS" || "ROLE_ALIAS" || "IAM_ROLE" || "ISSUER_CERTIFICATE",
 * //           resourceIdentifier: {
 * //             deviceCertificateId: "STRING_VALUE",
 * //             caCertificateId: "STRING_VALUE",
 * //             cognitoIdentityPoolId: "STRING_VALUE",
 * //             clientId: "STRING_VALUE",
 * //             policyVersionIdentifier: {
 * //               policyName: "STRING_VALUE",
 * //               policyVersionId: "STRING_VALUE",
 * //             },
 * //             account: "STRING_VALUE",
 * //             iamRoleArn: "STRING_VALUE",
 * //             roleAliasArn: "STRING_VALUE",
 * //             issuerCertificateIdentifier: {
 * //               issuerCertificateSubject: "STRING_VALUE",
 * //               issuerId: "STRING_VALUE",
 * //               issuerCertificateSerialNumber: "STRING_VALUE",
 * //             },
 * //             deviceCertificateArn: "STRING_VALUE",
 * //           },
 * //           additionalInfo: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       reasonForNonCompliance: "STRING_VALUE",
 * //       reasonForNonComplianceCode: "STRING_VALUE",
 * //       isSuppressed: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAuditFindingsCommandInput - {@link ListAuditFindingsCommandInput}
 * @returns {@link ListAuditFindingsCommandOutput}
 * @see {@link ListAuditFindingsCommandInput} for command's `input` shape.
 * @see {@link ListAuditFindingsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class ListAuditFindingsCommand extends $Command<
  ListAuditFindingsCommandInput,
  ListAuditFindingsCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: ListAuditFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAuditFindingsCommandInput, ListAuditFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAuditFindingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListAuditFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "ListAuditFindings",
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
  private serialize(input: ListAuditFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAuditFindingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAuditFindingsCommandOutput> {
    return de_ListAuditFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
