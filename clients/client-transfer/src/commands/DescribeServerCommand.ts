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

import { DescribeServerRequest, DescribeServerResponse } from "../models/models_0";
import { de_DescribeServerCommand, se_DescribeServerCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeServerCommand}.
 */
export interface DescribeServerCommandInput extends DescribeServerRequest {}
/**
 * @public
 *
 * The output of {@link DescribeServerCommand}.
 */
export interface DescribeServerCommandOutput extends DescribeServerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a file transfer protocol-enabled server that you specify by passing the
 *         <code>ServerId</code> parameter.</p>
 *          <p>The response contains a description of a server's properties. When you set
 *         <code>EndpointType</code> to VPC, the response will contain the
 *       <code>EndpointDetails</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeServerCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeServerCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // DescribeServerRequest
 *   ServerId: "STRING_VALUE", // required
 * };
 * const command = new DescribeServerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeServerResponse
 * //   Server: { // DescribedServer
 * //     Arn: "STRING_VALUE", // required
 * //     Certificate: "STRING_VALUE",
 * //     ProtocolDetails: { // ProtocolDetails
 * //       PassiveIp: "STRING_VALUE",
 * //       TlsSessionResumptionMode: "DISABLED" || "ENABLED" || "ENFORCED",
 * //       SetStatOption: "DEFAULT" || "ENABLE_NO_OP",
 * //       As2Transports: [ // As2Transports
 * //         "HTTP",
 * //       ],
 * //     },
 * //     Domain: "S3" || "EFS",
 * //     EndpointDetails: { // EndpointDetails
 * //       AddressAllocationIds: [ // AddressAllocationIds
 * //         "STRING_VALUE",
 * //       ],
 * //       SubnetIds: [ // SubnetIds
 * //         "STRING_VALUE",
 * //       ],
 * //       VpcEndpointId: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       SecurityGroupIds: [ // SecurityGroupIds
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     EndpointType: "PUBLIC" || "VPC" || "VPC_ENDPOINT",
 * //     HostKeyFingerprint: "STRING_VALUE",
 * //     IdentityProviderDetails: { // IdentityProviderDetails
 * //       Url: "STRING_VALUE",
 * //       InvocationRole: "STRING_VALUE",
 * //       DirectoryId: "STRING_VALUE",
 * //       Function: "STRING_VALUE",
 * //       SftpAuthenticationMethods: "PASSWORD" || "PUBLIC_KEY" || "PUBLIC_KEY_OR_PASSWORD" || "PUBLIC_KEY_AND_PASSWORD",
 * //     },
 * //     IdentityProviderType: "SERVICE_MANAGED" || "API_GATEWAY" || "AWS_DIRECTORY_SERVICE" || "AWS_LAMBDA",
 * //     LoggingRole: "STRING_VALUE",
 * //     PostAuthenticationLoginBanner: "STRING_VALUE",
 * //     PreAuthenticationLoginBanner: "STRING_VALUE",
 * //     Protocols: [ // Protocols
 * //       "SFTP" || "FTP" || "FTPS" || "AS2",
 * //     ],
 * //     SecurityPolicyName: "STRING_VALUE",
 * //     ServerId: "STRING_VALUE",
 * //     State: "OFFLINE" || "ONLINE" || "STARTING" || "STOPPING" || "START_FAILED" || "STOP_FAILED",
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     UserCount: Number("int"),
 * //     WorkflowDetails: { // WorkflowDetails
 * //       OnUpload: [ // OnUploadWorkflowDetails
 * //         { // WorkflowDetail
 * //           WorkflowId: "STRING_VALUE", // required
 * //           ExecutionRole: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       OnPartialUpload: [ // OnPartialUploadWorkflowDetails
 * //         {
 * //           WorkflowId: "STRING_VALUE", // required
 * //           ExecutionRole: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     StructuredLogDestinations: [ // StructuredLogDestinations
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeServerCommandInput - {@link DescribeServerCommandInput}
 * @returns {@link DescribeServerCommandOutput}
 * @see {@link DescribeServerCommandInput} for command's `input` shape.
 * @see {@link DescribeServerCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 */
export class DescribeServerCommand extends $Command<
  DescribeServerCommandInput,
  DescribeServerCommandOutput,
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
  constructor(readonly input: DescribeServerCommandInput) {
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
  ): Handler<DescribeServerCommandInput, DescribeServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeServerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "DescribeServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TransferService",
        operation: "DescribeServer",
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
  private serialize(input: DescribeServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeServerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeServerCommandOutput> {
    return de_DescribeServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
