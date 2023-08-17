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

import { CreateServerRequest, CreateServerRequestFilterSensitiveLog, CreateServerResponse } from "../models/models_0";
import { de_CreateServerCommand, se_CreateServerCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateServerCommand}.
 */
export interface CreateServerCommandInput extends CreateServerRequest {}
/**
 * @public
 *
 * The output of {@link CreateServerCommand}.
 */
export interface CreateServerCommandOutput extends CreateServerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Instantiates an auto-scaling virtual server based on the selected file transfer protocol
 *       in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work
 *       with users, use the service-generated <code>ServerId</code> property that is assigned to the
 *       newly created server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, CreateServerCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, CreateServerCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // CreateServerRequest
 *   Certificate: "STRING_VALUE",
 *   Domain: "S3" || "EFS",
 *   EndpointDetails: { // EndpointDetails
 *     AddressAllocationIds: [ // AddressAllocationIds
 *       "STRING_VALUE",
 *     ],
 *     SubnetIds: [ // SubnetIds
 *       "STRING_VALUE",
 *     ],
 *     VpcEndpointId: "STRING_VALUE",
 *     VpcId: "STRING_VALUE",
 *     SecurityGroupIds: [ // SecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *   },
 *   EndpointType: "PUBLIC" || "VPC" || "VPC_ENDPOINT",
 *   HostKey: "STRING_VALUE",
 *   IdentityProviderDetails: { // IdentityProviderDetails
 *     Url: "STRING_VALUE",
 *     InvocationRole: "STRING_VALUE",
 *     DirectoryId: "STRING_VALUE",
 *     Function: "STRING_VALUE",
 *     SftpAuthenticationMethods: "PASSWORD" || "PUBLIC_KEY" || "PUBLIC_KEY_OR_PASSWORD" || "PUBLIC_KEY_AND_PASSWORD",
 *   },
 *   IdentityProviderType: "SERVICE_MANAGED" || "API_GATEWAY" || "AWS_DIRECTORY_SERVICE" || "AWS_LAMBDA",
 *   LoggingRole: "STRING_VALUE",
 *   PostAuthenticationLoginBanner: "STRING_VALUE",
 *   PreAuthenticationLoginBanner: "STRING_VALUE",
 *   Protocols: [ // Protocols
 *     "SFTP" || "FTP" || "FTPS" || "AS2",
 *   ],
 *   ProtocolDetails: { // ProtocolDetails
 *     PassiveIp: "STRING_VALUE",
 *     TlsSessionResumptionMode: "DISABLED" || "ENABLED" || "ENFORCED",
 *     SetStatOption: "DEFAULT" || "ENABLE_NO_OP",
 *     As2Transports: [ // As2Transports
 *       "HTTP",
 *     ],
 *   },
 *   SecurityPolicyName: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   WorkflowDetails: { // WorkflowDetails
 *     OnUpload: [ // OnUploadWorkflowDetails
 *       { // WorkflowDetail
 *         WorkflowId: "STRING_VALUE", // required
 *         ExecutionRole: "STRING_VALUE", // required
 *       },
 *     ],
 *     OnPartialUpload: [ // OnPartialUploadWorkflowDetails
 *       {
 *         WorkflowId: "STRING_VALUE", // required
 *         ExecutionRole: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   StructuredLogDestinations: [ // StructuredLogDestinations
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateServerCommand(input);
 * const response = await client.send(command);
 * // { // CreateServerResponse
 * //   ServerId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateServerCommandInput - {@link CreateServerCommandInput}
 * @returns {@link CreateServerCommandOutput}
 * @see {@link CreateServerCommandInput} for command's `input` shape.
 * @see {@link CreateServerCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class CreateServerCommand extends $Command<
  CreateServerCommandInput,
  CreateServerCommandOutput,
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
  constructor(readonly input: CreateServerCommandInput) {
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
  ): Handler<CreateServerCommandInput, CreateServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateServerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "CreateServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateServerRequestFilterSensitiveLog,
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
  private serialize(input: CreateServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateServerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateServerCommandOutput> {
    return de_CreateServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
