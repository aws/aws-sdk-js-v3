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

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import {
  CreateStorageVirtualMachineRequest,
  CreateStorageVirtualMachineRequestFilterSensitiveLog,
  CreateStorageVirtualMachineResponse,
} from "../models/models_0";
import { de_CreateStorageVirtualMachineCommand, se_CreateStorageVirtualMachineCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateStorageVirtualMachineCommand}.
 */
export interface CreateStorageVirtualMachineCommandInput extends CreateStorageVirtualMachineRequest {}
/**
 * @public
 *
 * The output of {@link CreateStorageVirtualMachineCommand}.
 */
export interface CreateStorageVirtualMachineCommandOutput
  extends CreateStorageVirtualMachineResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a storage virtual machine (SVM) for an Amazon FSx for ONTAP file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateStorageVirtualMachineCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateStorageVirtualMachineCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const input = { // CreateStorageVirtualMachineRequest
 *   ActiveDirectoryConfiguration: { // CreateSvmActiveDirectoryConfiguration
 *     NetBiosName: "STRING_VALUE", // required
 *     SelfManagedActiveDirectoryConfiguration: { // SelfManagedActiveDirectoryConfiguration
 *       DomainName: "STRING_VALUE", // required
 *       OrganizationalUnitDistinguishedName: "STRING_VALUE",
 *       FileSystemAdministratorsGroup: "STRING_VALUE",
 *       UserName: "STRING_VALUE", // required
 *       Password: "STRING_VALUE", // required
 *       DnsIps: [ // DnsIps // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 *   FileSystemId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   SvmAdminPassword: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   RootVolumeSecurityStyle: "UNIX" || "NTFS" || "MIXED",
 * };
 * const command = new CreateStorageVirtualMachineCommand(input);
 * const response = await client.send(command);
 * // { // CreateStorageVirtualMachineResponse
 * //   StorageVirtualMachine: { // StorageVirtualMachine
 * //     ActiveDirectoryConfiguration: { // SvmActiveDirectoryConfiguration
 * //       NetBiosName: "STRING_VALUE",
 * //       SelfManagedActiveDirectoryConfiguration: { // SelfManagedActiveDirectoryAttributes
 * //         DomainName: "STRING_VALUE",
 * //         OrganizationalUnitDistinguishedName: "STRING_VALUE",
 * //         FileSystemAdministratorsGroup: "STRING_VALUE",
 * //         UserName: "STRING_VALUE",
 * //         DnsIps: [ // DnsIps
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Endpoints: { // SvmEndpoints
 * //       Iscsi: { // SvmEndpoint
 * //         DNSName: "STRING_VALUE",
 * //         IpAddresses: [ // OntapEndpointIpAddresses
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Management: {
 * //         DNSName: "STRING_VALUE",
 * //         IpAddresses: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Nfs: {
 * //         DNSName: "STRING_VALUE",
 * //         IpAddresses: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Smb: {
 * //         DNSName: "STRING_VALUE",
 * //         IpAddresses: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     FileSystemId: "STRING_VALUE",
 * //     Lifecycle: "CREATED" || "CREATING" || "DELETING" || "FAILED" || "MISCONFIGURED" || "PENDING",
 * //     Name: "STRING_VALUE",
 * //     ResourceARN: "STRING_VALUE",
 * //     StorageVirtualMachineId: "STRING_VALUE",
 * //     Subtype: "DEFAULT" || "DP_DESTINATION" || "SYNC_DESTINATION" || "SYNC_SOURCE",
 * //     UUID: "STRING_VALUE",
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     LifecycleTransitionReason: { // LifecycleTransitionReason
 * //       Message: "STRING_VALUE",
 * //     },
 * //     RootVolumeSecurityStyle: "UNIX" || "NTFS" || "MIXED",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateStorageVirtualMachineCommandInput - {@link CreateStorageVirtualMachineCommandInput}
 * @returns {@link CreateStorageVirtualMachineCommandOutput}
 * @see {@link CreateStorageVirtualMachineCommandInput} for command's `input` shape.
 * @see {@link CreateStorageVirtualMachineCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link ActiveDirectoryError} (client fault)
 *  <p>An Active Directory error.</p>
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>The requested operation is not supported for this resource or API.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 */
export class CreateStorageVirtualMachineCommand extends $Command<
  CreateStorageVirtualMachineCommandInput,
  CreateStorageVirtualMachineCommandOutput,
  FSxClientResolvedConfig
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
  constructor(readonly input: CreateStorageVirtualMachineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateStorageVirtualMachineCommandInput, CreateStorageVirtualMachineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateStorageVirtualMachineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CreateStorageVirtualMachineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStorageVirtualMachineRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSSimbaAPIService_v20180301",
        operation: "CreateStorageVirtualMachine",
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
  private serialize(input: CreateStorageVirtualMachineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateStorageVirtualMachineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateStorageVirtualMachineCommandOutput> {
    return de_CreateStorageVirtualMachineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
