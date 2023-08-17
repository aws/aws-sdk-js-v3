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
  DescribeLocationFsxOpenZfsRequest,
  DescribeLocationFsxOpenZfsResponse,
  DescribeLocationFsxOpenZfsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeLocationFsxOpenZfsCommand, se_DescribeLocationFsxOpenZfsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocationFsxOpenZfsCommand}.
 */
export interface DescribeLocationFsxOpenZfsCommandInput extends DescribeLocationFsxOpenZfsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocationFsxOpenZfsCommand}.
 */
export interface DescribeLocationFsxOpenZfsCommandOutput extends DescribeLocationFsxOpenZfsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides details about how an DataSync location for an Amazon FSx for OpenZFS file system is configured.</p>
 *          <note>
 *             <p>Response elements related to <code>SMB</code> aren't supported with the
 *           <code>DescribeLocationFsxOpenZfs</code> operation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationFsxOpenZfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationFsxOpenZfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // DescribeLocationFsxOpenZfsRequest
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeLocationFsxOpenZfsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocationFsxOpenZfsResponse
 * //   LocationArn: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   SecurityGroupArns: [ // Ec2SecurityGroupArnList
 * //     "STRING_VALUE",
 * //   ],
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
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeLocationFsxOpenZfsCommandInput - {@link DescribeLocationFsxOpenZfsCommandInput}
 * @returns {@link DescribeLocationFsxOpenZfsCommandOutput}
 * @see {@link DescribeLocationFsxOpenZfsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationFsxOpenZfsCommandOutput} for command's `response` shape.
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
export class DescribeLocationFsxOpenZfsCommand extends $Command<
  DescribeLocationFsxOpenZfsCommandInput,
  DescribeLocationFsxOpenZfsCommandOutput,
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
  constructor(readonly input: DescribeLocationFsxOpenZfsCommandInput) {
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
  ): Handler<DescribeLocationFsxOpenZfsCommandInput, DescribeLocationFsxOpenZfsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLocationFsxOpenZfsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DescribeLocationFsxOpenZfsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeLocationFsxOpenZfsResponseFilterSensitiveLog,
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
  private serialize(input: DescribeLocationFsxOpenZfsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLocationFsxOpenZfsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLocationFsxOpenZfsCommandOutput> {
    return de_DescribeLocationFsxOpenZfsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
