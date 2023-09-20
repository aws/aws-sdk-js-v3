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

import { CreateKeySigningKeyRequest, CreateKeySigningKeyResponse } from "../models/models_0";
import { de_CreateKeySigningKeyCommand, se_CreateKeySigningKeyCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateKeySigningKeyCommand}.
 */
export interface CreateKeySigningKeyCommandInput extends CreateKeySigningKeyRequest {}
/**
 * @public
 *
 * The output of {@link CreateKeySigningKeyCommand}.
 */
export interface CreateKeySigningKeyCommandOutput extends CreateKeySigningKeyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new key-signing key (KSK) associated with a hosted zone. You can only have
 * 			two KSKs per hosted zone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, CreateKeySigningKeyCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, CreateKeySigningKeyCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // CreateKeySigningKeyRequest
 *   CallerReference: "STRING_VALUE", // required
 *   HostedZoneId: "STRING_VALUE", // required
 *   KeyManagementServiceArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Status: "STRING_VALUE", // required
 * };
 * const command = new CreateKeySigningKeyCommand(input);
 * const response = await client.send(command);
 * // { // CreateKeySigningKeyResponse
 * //   ChangeInfo: { // ChangeInfo
 * //     Id: "STRING_VALUE", // required
 * //     Status: "PENDING" || "INSYNC", // required
 * //     SubmittedAt: new Date("TIMESTAMP"), // required
 * //     Comment: "STRING_VALUE",
 * //   },
 * //   KeySigningKey: { // KeySigningKey
 * //     Name: "STRING_VALUE",
 * //     KmsArn: "STRING_VALUE",
 * //     Flag: Number("int"),
 * //     SigningAlgorithmMnemonic: "STRING_VALUE",
 * //     SigningAlgorithmType: Number("int"),
 * //     DigestAlgorithmMnemonic: "STRING_VALUE",
 * //     DigestAlgorithmType: Number("int"),
 * //     KeyTag: Number("int"),
 * //     DigestValue: "STRING_VALUE",
 * //     PublicKey: "STRING_VALUE",
 * //     DSRecord: "STRING_VALUE",
 * //     DNSKEYRecord: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //   },
 * //   Location: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateKeySigningKeyCommandInput - {@link CreateKeySigningKeyCommandInput}
 * @returns {@link CreateKeySigningKeyCommandOutput}
 * @see {@link CreateKeySigningKeyCommandInput} for command's `input` shape.
 * @see {@link CreateKeySigningKeyCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link ConcurrentModification} (client fault)
 *  <p>Another user submitted a request to create, update, or delete the object at the same
 * 			time that you did. Retry the request. </p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>Parameter name is not valid.</p>
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link InvalidKeySigningKeyName} (client fault)
 *  <p>The key-signing key (KSK) name that you specified isn't a valid name.</p>
 *
 * @throws {@link InvalidKeySigningKeyStatus} (client fault)
 *  <p>The key-signing key (KSK) status isn't valid or another KSK has the status
 * 				<code>INTERNAL_FAILURE</code>.</p>
 *
 * @throws {@link InvalidKMSArn} (client fault)
 *  <p>The KeyManagementServiceArn that you specified isn't valid to use with DNSSEC
 * 			signing.</p>
 *
 * @throws {@link InvalidSigningStatus} (client fault)
 *  <p>Your hosted zone status isn't valid for this operation. In the hosted zone, change the
 * 			status to enable <code>DNSSEC</code> or disable <code>DNSSEC</code>.</p>
 *
 * @throws {@link KeySigningKeyAlreadyExists} (client fault)
 *  <p>You've already created a key-signing key (KSK) with this name or with the same customer managed key ARN.</p>
 *
 * @throws {@link NoSuchHostedZone} (client fault)
 *  <p>No hosted zone exists with the ID that you specified.</p>
 *
 * @throws {@link TooManyKeySigningKeys} (client fault)
 *  <p>You've reached the limit for the number of key-signing keys (KSKs). Remove at least
 * 			one KSK, and then try again.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class CreateKeySigningKeyCommand extends $Command<
  CreateKeySigningKeyCommandInput,
  CreateKeySigningKeyCommandOutput,
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
  constructor(readonly input: CreateKeySigningKeyCommandInput) {
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
  ): Handler<CreateKeySigningKeyCommandInput, CreateKeySigningKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateKeySigningKeyCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getIdNormalizerPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "CreateKeySigningKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDnsV20130401",
        operation: "CreateKeySigningKey",
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
  private serialize(input: CreateKeySigningKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateKeySigningKeyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateKeySigningKeyCommandOutput> {
    return de_CreateKeySigningKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
