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
import { UpdateConnectivityRequest, UpdateConnectivityResponse } from "../models/models_0";
import { de_UpdateConnectivityCommand, se_UpdateConnectivityCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateConnectivityCommand}.
 */
export interface UpdateConnectivityCommandInput extends UpdateConnectivityRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectivityCommand}.
 */
export interface UpdateConnectivityCommandOutput extends UpdateConnectivityResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the cluster's connectivity configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateConnectivityCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateConnectivityCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // UpdateConnectivityRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   ConnectivityInfo: { // ConnectivityInfo
 *     PublicAccess: { // PublicAccess
 *       Type: "STRING_VALUE",
 *     },
 *     VpcConnectivity: { // VpcConnectivity
 *       ClientAuthentication: { // VpcConnectivityClientAuthentication
 *         Sasl: { // VpcConnectivitySasl
 *           Scram: { // VpcConnectivityScram
 *             Enabled: true || false,
 *           },
 *           Iam: { // VpcConnectivityIam
 *             Enabled: true || false,
 *           },
 *         },
 *         Tls: { // VpcConnectivityTls
 *           Enabled: true || false,
 *         },
 *       },
 *     },
 *   },
 *   CurrentVersion: "STRING_VALUE", // required
 * };
 * const command = new UpdateConnectivityCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConnectivityResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   ClusterOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateConnectivityCommandInput - {@link UpdateConnectivityCommandInput}
 * @returns {@link UpdateConnectivityCommandOutput}
 * @see {@link UpdateConnectivityCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectivityCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 */
export class UpdateConnectivityCommand extends $Command<
  UpdateConnectivityCommandInput,
  UpdateConnectivityCommandOutput,
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
  constructor(readonly input: UpdateConnectivityCommandInput) {
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
  ): Handler<UpdateConnectivityCommandInput, UpdateConnectivityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateConnectivityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "UpdateConnectivityCommand";
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
  private serialize(input: UpdateConnectivityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateConnectivityCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateConnectivityCommandOutput> {
    return de_UpdateConnectivityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
