// smithy-typescript generated code
import { getIdNormalizerPlugin } from "@aws-sdk/middleware-sdk-route53";
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

import { GetDNSSECRequest, GetDNSSECResponse } from "../models/models_0";
import { de_GetDNSSECCommand, se_GetDNSSECCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDNSSECCommand}.
 */
export interface GetDNSSECCommandInput extends GetDNSSECRequest {}
/**
 * @public
 *
 * The output of {@link GetDNSSECCommand}.
 */
export interface GetDNSSECCommandOutput extends GetDNSSECResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about DNSSEC for a specific hosted zone, including the key-signing
 * 			keys (KSKs) in the hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetDNSSECCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetDNSSECCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // GetDNSSECRequest
 *   HostedZoneId: "STRING_VALUE", // required
 * };
 * const command = new GetDNSSECCommand(input);
 * const response = await client.send(command);
 * // { // GetDNSSECResponse
 * //   Status: { // DNSSECStatus
 * //     ServeSignature: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //   },
 * //   KeySigningKeys: [ // KeySigningKeys // required
 * //     { // KeySigningKey
 * //       Name: "STRING_VALUE",
 * //       KmsArn: "STRING_VALUE",
 * //       Flag: Number("int"),
 * //       SigningAlgorithmMnemonic: "STRING_VALUE",
 * //       SigningAlgorithmType: Number("int"),
 * //       DigestAlgorithmMnemonic: "STRING_VALUE",
 * //       DigestAlgorithmType: Number("int"),
 * //       KeyTag: Number("int"),
 * //       DigestValue: "STRING_VALUE",
 * //       PublicKey: "STRING_VALUE",
 * //       DSRecord: "STRING_VALUE",
 * //       DNSKEYRecord: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       LastModifiedDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDNSSECCommandInput - {@link GetDNSSECCommandInput}
 * @returns {@link GetDNSSECCommandOutput}
 * @see {@link GetDNSSECCommandInput} for command's `input` shape.
 * @see {@link GetDNSSECCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>Parameter name is not valid.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class GetDNSSECCommand extends $Command<
  GetDNSSECCommandInput,
  GetDNSSECCommandOutput,
  Route53ClientResolvedConfig
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
  constructor(readonly input: GetDNSSECCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDNSSECCommandInput, GetDNSSECCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetDNSSECCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "GetDNSSECCommand";
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
  private serialize(input: GetDNSSECCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDNSSECCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDNSSECCommandOutput> {
    return de_GetDNSSECCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
