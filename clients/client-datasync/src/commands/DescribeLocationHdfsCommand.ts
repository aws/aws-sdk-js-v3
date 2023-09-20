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
import { DescribeLocationHdfsRequest, DescribeLocationHdfsResponse } from "../models/models_0";
import { de_DescribeLocationHdfsCommand, se_DescribeLocationHdfsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLocationHdfsCommand}.
 */
export interface DescribeLocationHdfsCommandInput extends DescribeLocationHdfsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLocationHdfsCommand}.
 */
export interface DescribeLocationHdfsCommandOutput extends DescribeLocationHdfsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns metadata, such as the authentication information about the Hadoop Distributed File
 *       System (HDFS) location. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeLocationHdfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeLocationHdfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // DescribeLocationHdfsRequest
 *   LocationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeLocationHdfsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLocationHdfsResponse
 * //   LocationArn: "STRING_VALUE",
 * //   LocationUri: "STRING_VALUE",
 * //   NameNodes: [ // HdfsNameNodeList
 * //     { // HdfsNameNode
 * //       Hostname: "STRING_VALUE", // required
 * //       Port: Number("int"), // required
 * //     },
 * //   ],
 * //   BlockSize: Number("int"),
 * //   ReplicationFactor: Number("int"),
 * //   KmsKeyProviderUri: "STRING_VALUE",
 * //   QopConfiguration: { // QopConfiguration
 * //     RpcProtection: "DISABLED" || "AUTHENTICATION" || "INTEGRITY" || "PRIVACY",
 * //     DataTransferProtection: "DISABLED" || "AUTHENTICATION" || "INTEGRITY" || "PRIVACY",
 * //   },
 * //   AuthenticationType: "SIMPLE" || "KERBEROS",
 * //   SimpleUser: "STRING_VALUE",
 * //   KerberosPrincipal: "STRING_VALUE",
 * //   AgentArns: [ // AgentArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeLocationHdfsCommandInput - {@link DescribeLocationHdfsCommandInput}
 * @returns {@link DescribeLocationHdfsCommandOutput}
 * @see {@link DescribeLocationHdfsCommandInput} for command's `input` shape.
 * @see {@link DescribeLocationHdfsCommandOutput} for command's `response` shape.
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
export class DescribeLocationHdfsCommand extends $Command<
  DescribeLocationHdfsCommandInput,
  DescribeLocationHdfsCommandOutput,
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
  constructor(readonly input: DescribeLocationHdfsCommandInput) {
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
  ): Handler<DescribeLocationHdfsCommandInput, DescribeLocationHdfsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLocationHdfsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DescribeLocationHdfsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FmrsService",
        operation: "DescribeLocationHdfs",
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
  private serialize(input: DescribeLocationHdfsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLocationHdfsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLocationHdfsCommandOutput> {
    return de_DescribeLocationHdfsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
