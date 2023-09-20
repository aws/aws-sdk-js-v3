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

import { DescribeSMBFileSharesInput, DescribeSMBFileSharesOutput } from "../models/models_0";
import { de_DescribeSMBFileSharesCommand, se_DescribeSMBFileSharesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSMBFileSharesCommand}.
 */
export interface DescribeSMBFileSharesCommandInput extends DescribeSMBFileSharesInput {}
/**
 * @public
 *
 * The output of {@link DescribeSMBFileSharesCommand}.
 */
export interface DescribeSMBFileSharesCommandOutput extends DescribeSMBFileSharesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets a description for one or more Server Message Block (SMB) file shares from a S3 File
 *          Gateway. This operation is only supported for S3 File Gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeSMBFileSharesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeSMBFileSharesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeSMBFileSharesInput
 *   FileShareARNList: [ // FileShareARNList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeSMBFileSharesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSMBFileSharesOutput
 * //   SMBFileShareInfoList: [ // SMBFileShareInfoList
 * //     { // SMBFileShareInfo
 * //       FileShareARN: "STRING_VALUE",
 * //       FileShareId: "STRING_VALUE",
 * //       FileShareStatus: "STRING_VALUE",
 * //       GatewayARN: "STRING_VALUE",
 * //       KMSEncrypted: true || false,
 * //       KMSKey: "STRING_VALUE",
 * //       Path: "STRING_VALUE",
 * //       Role: "STRING_VALUE",
 * //       LocationARN: "STRING_VALUE",
 * //       DefaultStorageClass: "STRING_VALUE",
 * //       ObjectACL: "private" || "public-read" || "public-read-write" || "authenticated-read" || "bucket-owner-read" || "bucket-owner-full-control" || "aws-exec-read",
 * //       ReadOnly: true || false,
 * //       GuessMIMETypeEnabled: true || false,
 * //       RequesterPays: true || false,
 * //       SMBACLEnabled: true || false,
 * //       AccessBasedEnumeration: true || false,
 * //       AdminUserList: [ // UserList
 * //         "STRING_VALUE",
 * //       ],
 * //       ValidUserList: [
 * //         "STRING_VALUE",
 * //       ],
 * //       InvalidUserList: [
 * //         "STRING_VALUE",
 * //       ],
 * //       AuditDestinationARN: "STRING_VALUE",
 * //       Authentication: "STRING_VALUE",
 * //       CaseSensitivity: "ClientSpecified" || "CaseSensitive",
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       FileShareName: "STRING_VALUE",
 * //       CacheAttributes: { // CacheAttributes
 * //         CacheStaleTimeoutInSeconds: Number("int"),
 * //       },
 * //       NotificationPolicy: "STRING_VALUE",
 * //       VPCEndpointDNSName: "STRING_VALUE",
 * //       BucketRegion: "STRING_VALUE",
 * //       OplocksEnabled: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSMBFileSharesCommandInput - {@link DescribeSMBFileSharesCommandInput}
 * @returns {@link DescribeSMBFileSharesCommandOutput}
 * @see {@link DescribeSMBFileSharesCommandInput} for command's `input` shape.
 * @see {@link DescribeSMBFileSharesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 */
export class DescribeSMBFileSharesCommand extends $Command<
  DescribeSMBFileSharesCommandInput,
  DescribeSMBFileSharesCommandOutput,
  StorageGatewayClientResolvedConfig
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
  constructor(readonly input: DescribeSMBFileSharesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSMBFileSharesCommandInput, DescribeSMBFileSharesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSMBFileSharesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeSMBFileSharesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "DescribeSMBFileShares",
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
  private serialize(input: DescribeSMBFileSharesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSMBFileSharesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSMBFileSharesCommandOutput> {
    return de_DescribeSMBFileSharesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
