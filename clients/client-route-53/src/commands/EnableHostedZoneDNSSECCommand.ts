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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EnableHostedZoneDNSSECRequest, EnableHostedZoneDNSSECResponse } from "../models/models_0";
import { de_EnableHostedZoneDNSSECCommand, se_EnableHostedZoneDNSSECCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EnableHostedZoneDNSSECCommand}.
 */
export interface EnableHostedZoneDNSSECCommandInput extends EnableHostedZoneDNSSECRequest {}
/**
 * @public
 *
 * The output of {@link EnableHostedZoneDNSSECCommand}.
 */
export interface EnableHostedZoneDNSSECCommandOutput extends EnableHostedZoneDNSSECResponse, __MetadataBearer {}

/**
 * @public
 * <p>Enables DNSSEC signing in a specific hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, EnableHostedZoneDNSSECCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, EnableHostedZoneDNSSECCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // EnableHostedZoneDNSSECRequest
 *   HostedZoneId: "STRING_VALUE", // required
 * };
 * const command = new EnableHostedZoneDNSSECCommand(input);
 * const response = await client.send(command);
 * // { // EnableHostedZoneDNSSECResponse
 * //   ChangeInfo: { // ChangeInfo
 * //     Id: "STRING_VALUE", // required
 * //     Status: "PENDING" || "INSYNC", // required
 * //     SubmittedAt: new Date("TIMESTAMP"), // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param EnableHostedZoneDNSSECCommandInput - {@link EnableHostedZoneDNSSECCommandInput}
 * @returns {@link EnableHostedZoneDNSSECCommandOutput}
 * @see {@link EnableHostedZoneDNSSECCommandInput} for command's `input` shape.
 * @see {@link EnableHostedZoneDNSSECCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link ConcurrentModification} (client fault)
 *  <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 *
 * @throws {@link DNSSECNotFound} (client fault)
 *  <p>The hosted zone doesn't have any DNSSEC resources.</p>
 *
 * @throws {@link HostedZonePartiallyDelegated} (client fault)
 *  <p>The hosted zone nameservers don't match the parent nameservers. The hosted zone and
 * 			parent must have the same nameservers.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>Parameter name is not valid.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidKeySigningKeyStatus} (client fault)
 *  <p>The key-signing key (KSK) status isn't valid or another KSK has the status
 * 				<code>INTERNAL_FAILURE</code>.</p>
 *
 * @throws {@link InvalidKMSArn} (client fault)
 *  <p>The KeyManagementServiceArn that you specified isn't valid to use with DNSSEC
 * 			signing.</p>
 *
 * @throws {@link KeySigningKeyWithActiveStatusNotFound} (client fault)
 *  <p>A key-signing key (KSK) with <code>ACTIVE</code> status wasn't found.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class EnableHostedZoneDNSSECCommand extends $Command<
  EnableHostedZoneDNSSECCommandInput,
  EnableHostedZoneDNSSECCommandOutput,
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
  constructor(readonly input: EnableHostedZoneDNSSECCommandInput) {
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
  ): Handler<EnableHostedZoneDNSSECCommandInput, EnableHostedZoneDNSSECCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableHostedZoneDNSSECCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "EnableHostedZoneDNSSECCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDnsV20130401",
        operation: "EnableHostedZoneDNSSEC",
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
  private serialize(input: EnableHostedZoneDNSSECCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EnableHostedZoneDNSSECCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableHostedZoneDNSSECCommandOutput> {
    return de_EnableHostedZoneDNSSECCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
