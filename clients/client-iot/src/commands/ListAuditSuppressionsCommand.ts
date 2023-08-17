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
import { ListAuditSuppressionsRequest, ListAuditSuppressionsResponse } from "../models/models_1";
import { de_ListAuditSuppressionsCommand, se_ListAuditSuppressionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAuditSuppressionsCommand}.
 */
export interface ListAuditSuppressionsCommandInput extends ListAuditSuppressionsRequest {}
/**
 * @public
 *
 * The output of {@link ListAuditSuppressionsCommand}.
 */
export interface ListAuditSuppressionsCommandOutput extends ListAuditSuppressionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Lists your Device Defender audit listings.
 *     </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListAuditSuppressions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuditSuppressionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuditSuppressionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // ListAuditSuppressionsRequest
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
 *   ascendingOrder: true || false,
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAuditSuppressionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAuditSuppressionsResponse
 * //   suppressions: [ // AuditSuppressionList
 * //     { // AuditSuppression
 * //       checkName: "STRING_VALUE", // required
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
 * //       expirationDate: new Date("TIMESTAMP"),
 * //       suppressIndefinitely: true || false,
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAuditSuppressionsCommandInput - {@link ListAuditSuppressionsCommandInput}
 * @returns {@link ListAuditSuppressionsCommandOutput}
 * @see {@link ListAuditSuppressionsCommandInput} for command's `input` shape.
 * @see {@link ListAuditSuppressionsCommandOutput} for command's `response` shape.
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
export class ListAuditSuppressionsCommand extends $Command<
  ListAuditSuppressionsCommandInput,
  ListAuditSuppressionsCommandOutput,
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
  constructor(readonly input: ListAuditSuppressionsCommandInput) {
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
  ): Handler<ListAuditSuppressionsCommandInput, ListAuditSuppressionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAuditSuppressionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListAuditSuppressionsCommand";
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
  private serialize(input: ListAuditSuppressionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAuditSuppressionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAuditSuppressionsCommandOutput> {
    return de_ListAuditSuppressionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
