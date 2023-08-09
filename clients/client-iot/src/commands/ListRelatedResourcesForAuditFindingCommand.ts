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
import {
  ListRelatedResourcesForAuditFindingRequest,
  ListRelatedResourcesForAuditFindingResponse,
} from "../models/models_2";
import {
  de_ListRelatedResourcesForAuditFindingCommand,
  se_ListRelatedResourcesForAuditFindingCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRelatedResourcesForAuditFindingCommand}.
 */
export interface ListRelatedResourcesForAuditFindingCommandInput extends ListRelatedResourcesForAuditFindingRequest {}
/**
 * @public
 *
 * The output of {@link ListRelatedResourcesForAuditFindingCommand}.
 */
export interface ListRelatedResourcesForAuditFindingCommandOutput
  extends ListRelatedResourcesForAuditFindingResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>The related resources of an Audit finding.
 *       The following resources can be returned from calling this API:</p>
 *          <ul>
 *             <li>
 *                <p>DEVICE_CERTIFICATE</p>
 *             </li>
 *             <li>
 *                <p>CA_CERTIFICATE</p>
 *             </li>
 *             <li>
 *                <p>IOT_POLICY</p>
 *             </li>
 *             <li>
 *                <p>COGNITO_IDENTITY_POOL</p>
 *             </li>
 *             <li>
 *                <p>CLIENT_ID</p>
 *             </li>
 *             <li>
 *                <p>ACCOUNT_SETTINGS</p>
 *             </li>
 *             <li>
 *                <p>ROLE_ALIAS</p>
 *             </li>
 *             <li>
 *                <p>IAM_ROLE</p>
 *             </li>
 *             <li>
 *                <p>ISSUER_CERTIFICATE</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>This API is similar to DescribeAuditFinding's <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html">RelatedResources</a>
 *       but provides pagination and is not limited to 10 resources.
 *       When calling <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DescribeAuditFinding.html">DescribeAuditFinding</a> for the intermediate CA revoked for
 *       active device certificates check, RelatedResources will not be populated. You must use this API, ListRelatedResourcesForAuditFinding, to list the certificates.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListRelatedResourcesForAuditFindingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListRelatedResourcesForAuditFindingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListRelatedResourcesForAuditFindingRequest
 *   findingId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRelatedResourcesForAuditFindingCommand(input);
 * const response = await client.send(command);
 * // { // ListRelatedResourcesForAuditFindingResponse
 * //   relatedResources: [ // RelatedResources
 * //     { // RelatedResource
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
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRelatedResourcesForAuditFindingCommandInput - {@link ListRelatedResourcesForAuditFindingCommandInput}
 * @returns {@link ListRelatedResourcesForAuditFindingCommandOutput}
 * @see {@link ListRelatedResourcesForAuditFindingCommandInput} for command's `input` shape.
 * @see {@link ListRelatedResourcesForAuditFindingCommandOutput} for command's `response` shape.
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
export class ListRelatedResourcesForAuditFindingCommand extends $Command<
  ListRelatedResourcesForAuditFindingCommandInput,
  ListRelatedResourcesForAuditFindingCommandOutput,
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
  constructor(readonly input: ListRelatedResourcesForAuditFindingCommandInput) {
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
  ): Handler<ListRelatedResourcesForAuditFindingCommandInput, ListRelatedResourcesForAuditFindingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRelatedResourcesForAuditFindingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListRelatedResourcesForAuditFindingCommand";
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
  private serialize(
    input: ListRelatedResourcesForAuditFindingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListRelatedResourcesForAuditFindingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRelatedResourcesForAuditFindingCommandOutput> {
    return de_ListRelatedResourcesForAuditFindingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
