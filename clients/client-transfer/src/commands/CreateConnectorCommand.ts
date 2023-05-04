// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateConnectorRequest, CreateConnectorResponse } from "../models/models_0";
import { de_CreateConnectorCommand, se_CreateConnectorCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 *
 * The input for {@link CreateConnectorCommand}.
 */
export interface CreateConnectorCommandInput extends CreateConnectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectorCommand}.
 */
export interface CreateConnectorCommandOutput extends CreateConnectorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates the connector, which captures the parameters for an outbound connection for the
 *       AS2 protocol. The connector is required for sending files to an externally hosted AS2 server.
 *       For more details about connectors, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/create-b2b-server.html#configure-as2-connector">Create AS2 connectors</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, CreateConnectorCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, CreateConnectorCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // CreateConnectorRequest
 *   Url: "STRING_VALUE", // required
 *   As2Config: { // As2ConnectorConfig
 *     LocalProfileId: "STRING_VALUE",
 *     PartnerProfileId: "STRING_VALUE",
 *     MessageSubject: "STRING_VALUE",
 *     Compression: "ZLIB" || "DISABLED",
 *     EncryptionAlgorithm: "AES128_CBC" || "AES192_CBC" || "AES256_CBC" || "NONE",
 *     SigningAlgorithm: "SHA256" || "SHA384" || "SHA512" || "SHA1" || "NONE",
 *     MdnSigningAlgorithm: "SHA256" || "SHA384" || "SHA512" || "SHA1" || "NONE" || "DEFAULT",
 *     MdnResponse: "SYNC" || "NONE",
 *   },
 *   AccessRole: "STRING_VALUE", // required
 *   LoggingRole: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateConnectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectorResponse
 * //   ConnectorId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateConnectorCommandInput - {@link CreateConnectorCommandInput}
 * @returns {@link CreateConnectorCommandOutput}
 * @see {@link CreateConnectorCommandInput} for command's `input` shape.
 * @see {@link CreateConnectorCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The requested resource does not exist.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 */
export class CreateConnectorCommand extends $Command<
  CreateConnectorCommandInput,
  CreateConnectorCommandOutput,
  TransferClientResolvedConfig
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
  constructor(readonly input: CreateConnectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConnectorCommandInput, CreateConnectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConnectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "CreateConnectorCommand";
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
  private serialize(input: CreateConnectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateConnectorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateConnectorCommandOutput> {
    return de_CreateConnectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
