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
import { DescribeAuditSuppressionRequest, DescribeAuditSuppressionResponse } from "../models/models_1";
import { de_DescribeAuditSuppressionCommand, se_DescribeAuditSuppressionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAuditSuppressionCommand}.
 */
export interface DescribeAuditSuppressionCommandInput extends DescribeAuditSuppressionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAuditSuppressionCommand}.
 */
export interface DescribeAuditSuppressionCommandOutput extends DescribeAuditSuppressionResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *       Gets information about a Device Defender audit suppression.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuditSuppressionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAuditSuppressionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeAuditSuppressionRequest
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
 * const command = new DescribeAuditSuppressionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAuditSuppressionResponse
 * //   checkName: "STRING_VALUE",
 * //   resourceIdentifier: { // ResourceIdentifier
 * //     deviceCertificateId: "STRING_VALUE",
 * //     caCertificateId: "STRING_VALUE",
 * //     cognitoIdentityPoolId: "STRING_VALUE",
 * //     clientId: "STRING_VALUE",
 * //     policyVersionIdentifier: { // PolicyVersionIdentifier
 * //       policyName: "STRING_VALUE",
 * //       policyVersionId: "STRING_VALUE",
 * //     },
 * //     account: "STRING_VALUE",
 * //     iamRoleArn: "STRING_VALUE",
 * //     roleAliasArn: "STRING_VALUE",
 * //     issuerCertificateIdentifier: { // IssuerCertificateIdentifier
 * //       issuerCertificateSubject: "STRING_VALUE",
 * //       issuerId: "STRING_VALUE",
 * //       issuerCertificateSerialNumber: "STRING_VALUE",
 * //     },
 * //     deviceCertificateArn: "STRING_VALUE",
 * //   },
 * //   expirationDate: new Date("TIMESTAMP"),
 * //   suppressIndefinitely: true || false,
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAuditSuppressionCommandInput - {@link DescribeAuditSuppressionCommandInput}
 * @returns {@link DescribeAuditSuppressionCommandOutput}
 * @see {@link DescribeAuditSuppressionCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditSuppressionCommandOutput} for command's `response` shape.
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
export class DescribeAuditSuppressionCommand extends $Command<
  DescribeAuditSuppressionCommandInput,
  DescribeAuditSuppressionCommandOutput,
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
  constructor(readonly input: DescribeAuditSuppressionCommandInput) {
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
  ): Handler<DescribeAuditSuppressionCommandInput, DescribeAuditSuppressionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAuditSuppressionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeAuditSuppressionCommand";
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
  private serialize(input: DescribeAuditSuppressionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAuditSuppressionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAuditSuppressionCommandOutput> {
    return de_DescribeAuditSuppressionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
