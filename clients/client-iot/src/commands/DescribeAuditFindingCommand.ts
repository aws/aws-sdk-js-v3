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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeAuditFindingRequest, DescribeAuditFindingResponse } from "../models/models_1";
import { de_DescribeAuditFindingCommand, se_DescribeAuditFindingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAuditFindingCommand}.
 */
export interface DescribeAuditFindingCommandInput extends DescribeAuditFindingRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAuditFindingCommand}.
 */
export interface DescribeAuditFindingCommandOutput extends DescribeAuditFindingResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a single audit finding. Properties include the reason for
 *       noncompliance, the severity of the issue,
 *       and the start time
 *       when the audit that returned the
 *       finding.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeAuditFinding</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuditFindingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAuditFindingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeAuditFindingRequest
 *   findingId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAuditFindingCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAuditFindingResponse
 * //   finding: { // AuditFinding
 * //     findingId: "STRING_VALUE",
 * //     taskId: "STRING_VALUE",
 * //     checkName: "STRING_VALUE",
 * //     taskStartTime: new Date("TIMESTAMP"),
 * //     findingTime: new Date("TIMESTAMP"),
 * //     severity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW",
 * //     nonCompliantResource: { // NonCompliantResource
 * //       resourceType: "DEVICE_CERTIFICATE" || "CA_CERTIFICATE" || "IOT_POLICY" || "COGNITO_IDENTITY_POOL" || "CLIENT_ID" || "ACCOUNT_SETTINGS" || "ROLE_ALIAS" || "IAM_ROLE" || "ISSUER_CERTIFICATE",
 * //       resourceIdentifier: { // ResourceIdentifier
 * //         deviceCertificateId: "STRING_VALUE",
 * //         caCertificateId: "STRING_VALUE",
 * //         cognitoIdentityPoolId: "STRING_VALUE",
 * //         clientId: "STRING_VALUE",
 * //         policyVersionIdentifier: { // PolicyVersionIdentifier
 * //           policyName: "STRING_VALUE",
 * //           policyVersionId: "STRING_VALUE",
 * //         },
 * //         account: "STRING_VALUE",
 * //         iamRoleArn: "STRING_VALUE",
 * //         roleAliasArn: "STRING_VALUE",
 * //         issuerCertificateIdentifier: { // IssuerCertificateIdentifier
 * //           issuerCertificateSubject: "STRING_VALUE",
 * //           issuerId: "STRING_VALUE",
 * //           issuerCertificateSerialNumber: "STRING_VALUE",
 * //         },
 * //         deviceCertificateArn: "STRING_VALUE",
 * //       },
 * //       additionalInfo: { // StringMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     relatedResources: [ // RelatedResources
 * //       { // RelatedResource
 * //         resourceType: "DEVICE_CERTIFICATE" || "CA_CERTIFICATE" || "IOT_POLICY" || "COGNITO_IDENTITY_POOL" || "CLIENT_ID" || "ACCOUNT_SETTINGS" || "ROLE_ALIAS" || "IAM_ROLE" || "ISSUER_CERTIFICATE",
 * //         resourceIdentifier: {
 * //           deviceCertificateId: "STRING_VALUE",
 * //           caCertificateId: "STRING_VALUE",
 * //           cognitoIdentityPoolId: "STRING_VALUE",
 * //           clientId: "STRING_VALUE",
 * //           policyVersionIdentifier: {
 * //             policyName: "STRING_VALUE",
 * //             policyVersionId: "STRING_VALUE",
 * //           },
 * //           account: "STRING_VALUE",
 * //           iamRoleArn: "STRING_VALUE",
 * //           roleAliasArn: "STRING_VALUE",
 * //           issuerCertificateIdentifier: {
 * //             issuerCertificateSubject: "STRING_VALUE",
 * //             issuerId: "STRING_VALUE",
 * //             issuerCertificateSerialNumber: "STRING_VALUE",
 * //           },
 * //           deviceCertificateArn: "STRING_VALUE",
 * //         },
 * //         additionalInfo: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     reasonForNonCompliance: "STRING_VALUE",
 * //     reasonForNonComplianceCode: "STRING_VALUE",
 * //     isSuppressed: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAuditFindingCommandInput - {@link DescribeAuditFindingCommandInput}
 * @returns {@link DescribeAuditFindingCommandOutput}
 * @see {@link DescribeAuditFindingCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditFindingCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class DescribeAuditFindingCommand extends $Command<
  DescribeAuditFindingCommandInput,
  DescribeAuditFindingCommandOutput,
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
  constructor(readonly input: DescribeAuditFindingCommandInput) {
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
  ): Handler<DescribeAuditFindingCommandInput, DescribeAuditFindingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAuditFindingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeAuditFindingCommand";
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
  private serialize(input: DescribeAuditFindingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAuditFindingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAuditFindingCommandOutput> {
    return de_DescribeAuditFindingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
