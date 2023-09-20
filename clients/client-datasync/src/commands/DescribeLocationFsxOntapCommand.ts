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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import {
  DescribeLocationFsxOntapRequest,
  DescribeLocationFsxOntapResponse,
  DescribeLocationFsxOntapResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeLocationFsxOntapCommand, se_DescribeLocationFsxOntapCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocationFsxOntapCommand}.
 */
export interface DescribeLocationFsxOntapCommandInput extends DescribeLocationFsxOntapRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocationFsxOntapCommand}.
 */
export interface DescribeLocationFsxOntapCommandOutput extends DescribeLocationFsxOntapResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides details about how an DataSync location for an Amazon FSx for NetApp ONTAP file system is configured.</p>
 *          <note>
 *             <p>If your location uses SMB, the <code>DescribeLocationFsxOntap</code> operation doesn't
 *         actually return a <code>Password</code>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationFsxOntapCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationFsxOntapCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // DescribeLocationFsxOntapRequest
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeLocationFsxOntapCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocationFsxOntapResponse
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LocationArn: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   Protocol: { // FsxProtocol
 * //     NFS: { // FsxProtocolNfs
 * //       MountOptions: { // NfsMountOptions
 * //         Version: "AUTOMATIC" || "NFS3" || "NFS4_0" || "NFS4_1",
 * //       },
 * //     },
 * //     SMB: { // FsxProtocolSmb
 * //       Domain: "STRING_VALUE",
 * //       MountOptions: { // SmbMountOptions
 * //         Version: "AUTOMATIC" || "SMB2" || "SMB3" || "SMB1" || "SMB2_0",
 * //       },
 * //       Password: "STRING_VALUE", // required
 * //       User: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   SecurityGroupArns: [ // Ec2SecurityGroupArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   StorageVirtualMachineArn: "STRING_VALUE",
 * //   FsxFilesystemArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLocationFsxOntapCommandInput - {@link DescribeLocationFsxOntapCommandInput}
 * @returns {@link DescribeLocationFsxOntapCommandOutput}
 * @see {@link DescribeLocationFsxOntapCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationFsxOntapCommandOutput} for command's `response` shape.
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
export class DescribeLocationFsxOntapCommand extends $Command<
  DescribeLocationFsxOntapCommandInput,
  DescribeLocationFsxOntapCommandOutput,
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
  constructor(readonly input: DescribeLocationFsxOntapCommandInput) {
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
  ): Handler<DescribeLocationFsxOntapCommandInput, DescribeLocationFsxOntapCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLocationFsxOntapCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DescribeLocationFsxOntapCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeLocationFsxOntapResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "FmrsService",
        operation: "DescribeLocationFsxOntap",
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
  private serialize(input: DescribeLocationFsxOntapCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLocationFsxOntapCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLocationFsxOntapCommandOutput> {
    return de_DescribeLocationFsxOntapCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
