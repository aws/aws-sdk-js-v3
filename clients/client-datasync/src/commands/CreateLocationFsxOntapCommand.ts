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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import {
  CreateLocationFsxOntapRequest,
  CreateLocationFsxOntapRequestFilterSensitiveLog,
  CreateLocationFsxOntapResponse,
} from "../models/models_0";
import { de_CreateLocationFsxOntapCommand, se_CreateLocationFsxOntapCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLocationFsxOntapCommand}.
 */
export interface CreateLocationFsxOntapCommandInput extends CreateLocationFsxOntapRequest {}
/**
 * @public
 *
 * The output of {@link CreateLocationFsxOntapCommand}.
 */
export interface CreateLocationFsxOntapCommandOutput extends CreateLocationFsxOntapResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an endpoint for an Amazon FSx for NetApp ONTAP file system that DataSync can access for a transfer. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/create-ontap-location.html">Creating a location for FSx for ONTAP</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationFsxOntapCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationFsxOntapCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // CreateLocationFsxOntapRequest
 *   Protocol: { // FsxProtocol
 *     NFS: { // FsxProtocolNfs
 *       MountOptions: { // NfsMountOptions
 *         Version: "AUTOMATIC" || "NFS3" || "NFS4_0" || "NFS4_1",
 *       },
 *     },
 *     SMB: { // FsxProtocolSmb
 *       Domain: "STRING_VALUE",
 *       MountOptions: { // SmbMountOptions
 *         Version: "AUTOMATIC" || "SMB2" || "SMB3" || "SMB1" || "SMB2_0",
 *       },
 *       Password: "STRING_VALUE", // required
 *       User: "STRING_VALUE", // required
 *     },
 *   },
 *   SecurityGroupArns: [ // Ec2SecurityGroupArnList // required
 *     "STRING_VALUE",
 *   ],
 *   StorageVirtualMachineArn: "STRING_VALUE", // required
 *   Subdirectory: "STRING_VALUE",
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateLocationFsxOntapCommand(input);
 * const response = await client.send(command);
 * // { // CreateLocationFsxOntapResponse
 * //   LocationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLocationFsxOntapCommandInput - {@link CreateLocationFsxOntapCommandInput}
 * @returns {@link CreateLocationFsxOntapCommandOutput}
 * @see {@link CreateLocationFsxOntapCommandInput} for command's `input` shape.
 * @see {@link CreateLocationFsxOntapCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 */
export class CreateLocationFsxOntapCommand extends $Command<
  CreateLocationFsxOntapCommandInput,
  CreateLocationFsxOntapCommandOutput,
  DataSyncClientResolvedConfig
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
  constructor(readonly input: CreateLocationFsxOntapCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLocationFsxOntapCommandInput, CreateLocationFsxOntapCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLocationFsxOntapCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "CreateLocationFsxOntapCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateLocationFsxOntapRequestFilterSensitiveLog,
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
  private serialize(input: CreateLocationFsxOntapCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLocationFsxOntapCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLocationFsxOntapCommandOutput> {
    return de_CreateLocationFsxOntapCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
