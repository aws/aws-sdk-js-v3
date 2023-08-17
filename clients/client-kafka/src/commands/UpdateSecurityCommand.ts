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

import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateSecurityRequest, UpdateSecurityResponse } from "../models/models_0";
import { de_UpdateSecurityCommand, se_UpdateSecurityCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateSecurityCommand}.
 */
export interface UpdateSecurityCommandInput extends UpdateSecurityRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSecurityCommand}.
 */
export interface UpdateSecurityCommandOutput extends UpdateSecurityResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the security settings for the cluster. You can use this operation to specify encryption and authentication on existing clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateSecurityCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateSecurityCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // UpdateSecurityRequest
 *   ClientAuthentication: { // ClientAuthentication
 *     Sasl: { // Sasl
 *       Scram: { // Scram
 *         Enabled: true || false,
 *       },
 *       Iam: { // Iam
 *         Enabled: true || false,
 *       },
 *     },
 *     Tls: { // Tls
 *       CertificateAuthorityArnList: [ // __listOf__string
 *         "STRING_VALUE",
 *       ],
 *       Enabled: true || false,
 *     },
 *     Unauthenticated: { // Unauthenticated
 *       Enabled: true || false,
 *     },
 *   },
 *   ClusterArn: "STRING_VALUE", // required
 *   CurrentVersion: "STRING_VALUE", // required
 *   EncryptionInfo: { // EncryptionInfo
 *     EncryptionAtRest: { // EncryptionAtRest
 *       DataVolumeKMSKeyId: "STRING_VALUE", // required
 *     },
 *     EncryptionInTransit: { // EncryptionInTransit
 *       ClientBroker: "TLS" || "TLS_PLAINTEXT" || "PLAINTEXT",
 *       InCluster: true || false,
 *     },
 *   },
 * };
 * const command = new UpdateSecurityCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSecurityResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   ClusterOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateSecurityCommandInput - {@link UpdateSecurityCommandInput}
 * @returns {@link UpdateSecurityCommandOutput}
 * @see {@link UpdateSecurityCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 */
export class UpdateSecurityCommand extends $Command<
  UpdateSecurityCommandInput,
  UpdateSecurityCommandOutput,
  KafkaClientResolvedConfig
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
  constructor(readonly input: UpdateSecurityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateSecurityCommandInput, UpdateSecurityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSecurityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "UpdateSecurityCommand";
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
  private serialize(input: UpdateSecurityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSecurityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSecurityCommandOutput> {
    return de_UpdateSecurityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
