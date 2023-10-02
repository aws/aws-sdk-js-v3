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

import { UpdateServerRequest, UpdateServerRequestFilterSensitiveLog, UpdateServerResponse } from "../models/models_0";
import { de_UpdateServerCommand, se_UpdateServerCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateServerCommand}.
 */
export interface UpdateServerCommandInput extends UpdateServerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateServerCommand}.
 */
export interface UpdateServerCommandOutput extends UpdateServerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the file transfer protocol-enabled server's properties after that server has
 *       been created.</p>
 *          <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you
 *       updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, UpdateServerCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, UpdateServerCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // UpdateServerRequest
 *   Certificate: "STRING_VALUE",
 *   ProtocolDetails: { // ProtocolDetails
 *     PassiveIp: "STRING_VALUE",
 *     TlsSessionResumptionMode: "DISABLED" || "ENABLED" || "ENFORCED",
 *     SetStatOption: "DEFAULT" || "ENABLE_NO_OP",
 *     As2Transports: [ // As2Transports
 *       "HTTP",
 *     ],
 *   },
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
 *   LoggingRole: "STRING_VALUE",
 *   PostAuthenticationLoginBanner: "STRING_VALUE",
 *   PreAuthenticationLoginBanner: "STRING_VALUE",
 *   Protocols: [ // Protocols
 *     "SFTP" || "FTP" || "FTPS" || "AS2",
 *   ],
 *   SecurityPolicyName: "STRING_VALUE",
 *   ServerId: "STRING_VALUE", // required
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
 * const command = new UpdateServerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServerResponse
 * //   ServerId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateServerCommandInput - {@link UpdateServerCommandInput}
 * @returns {@link UpdateServerCommandOutput}
 * @see {@link UpdateServerCommandInput} for command's `input` shape.
 * @see {@link UpdateServerCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when the <code>UpdateServer</code> is called for a file transfer
 *       protocol-enabled server that has VPC as the endpoint type and the server's
 *         <code>VpcEndpointID</code> is not in the available state.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The requested resource does not exist, or exists in a region other than the one specified for the command.</p>
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
export class UpdateServerCommand extends $Command<
  UpdateServerCommandInput,
  UpdateServerCommandOutput,
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
  constructor(readonly input: UpdateServerCommandInput) {
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
  ): Handler<UpdateServerCommandInput, UpdateServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateServerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "UpdateServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TransferService",
        operation: "UpdateServer",
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
  private serialize(input: UpdateServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateServerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateServerCommandOutput> {
    return de_UpdateServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
