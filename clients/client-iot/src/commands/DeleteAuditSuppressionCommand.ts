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
import { DeleteAuditSuppressionRequest, DeleteAuditSuppressionResponse } from "../models/models_0";
import { de_DeleteAuditSuppressionCommand, se_DeleteAuditSuppressionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAuditSuppressionCommand}.
 */
export interface DeleteAuditSuppressionCommandInput extends DeleteAuditSuppressionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAuditSuppressionCommand}.
 */
export interface DeleteAuditSuppressionCommandOutput extends DeleteAuditSuppressionResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Deletes a Device Defender audit suppression.
 *     </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAuditSuppression</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteAuditSuppressionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteAuditSuppressionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DeleteAuditSuppressionRequest
 *   checkName: "STRING_VALUE", // required
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
 * };
 * const command = new DeleteAuditSuppressionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAuditSuppressionCommandInput - {@link DeleteAuditSuppressionCommandInput}
 * @returns {@link DeleteAuditSuppressionCommandOutput}
 * @see {@link DeleteAuditSuppressionCommandInput} for command's `input` shape.
 * @see {@link DeleteAuditSuppressionCommandOutput} for command's `response` shape.
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
export class DeleteAuditSuppressionCommand extends $Command<
  DeleteAuditSuppressionCommandInput,
  DeleteAuditSuppressionCommandOutput,
  IoTClientResolvedConfig
> {
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
  constructor(readonly input: DeleteAuditSuppressionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAuditSuppressionCommandInput, DeleteAuditSuppressionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAuditSuppressionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeleteAuditSuppressionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "DeleteAuditSuppression",
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
  private serialize(input: DeleteAuditSuppressionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteAuditSuppressionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAuditSuppressionCommandOutput> {
    return de_DeleteAuditSuppressionCommand(output, context);
  }
}
