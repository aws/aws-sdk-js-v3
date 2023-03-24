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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateLocationHdfsRequest, CreateLocationHdfsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateLocationHdfsCommand,
  serializeAws_json1_1CreateLocationHdfsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateLocationHdfsCommand}.
 */
export interface CreateLocationHdfsCommandInput extends CreateLocationHdfsRequest {}
/**
 * @public
 *
 * The output of {@link CreateLocationHdfsCommand}.
 */
export interface CreateLocationHdfsCommandOutput extends CreateLocationHdfsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an endpoint for a Hadoop Distributed File System (HDFS). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, CreateLocationHdfsCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, CreateLocationHdfsCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = {
 *   Subdirectory: "STRING_VALUE",
 *   NameNodes: [ // required
 *     {
 *       Hostname: "STRING_VALUE", // required
 *       Port: Number("int"), // required
 *     },
 *   ],
 *   BlockSize: Number("int"),
 *   ReplicationFactor: Number("int"),
 *   KmsKeyProviderUri: "STRING_VALUE",
 *   QopConfiguration: {
 *     RpcProtection: "DISABLED" || "AUTHENTICATION" || "INTEGRITY" || "PRIVACY",
 *     DataTransferProtection: "DISABLED" || "AUTHENTICATION" || "INTEGRITY" || "PRIVACY",
 *   },
 *   AuthenticationType: "SIMPLE" || "KERBEROS", // required
 *   SimpleUser: "STRING_VALUE",
 *   KerberosPrincipal: "STRING_VALUE",
 *   KerberosKeytab: "BLOB_VALUE",
 *   KerberosKrb5Conf: "BLOB_VALUE",
 *   AgentArns: [ // required
 *     "STRING_VALUE",
 *   ],
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateLocationHdfsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateLocationHdfsCommandInput - {@link CreateLocationHdfsCommandInput}
 * @returns {@link CreateLocationHdfsCommandOutput}
 * @see {@link CreateLocationHdfsCommandInput} for command's `input` shape.
 * @see {@link CreateLocationHdfsCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 *
 */
export class CreateLocationHdfsCommand extends $Command<
  CreateLocationHdfsCommandInput,
  CreateLocationHdfsCommandOutput,
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
  constructor(readonly input: CreateLocationHdfsCommandInput) {
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
  ): Handler<CreateLocationHdfsCommandInput, CreateLocationHdfsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLocationHdfsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "CreateLocationHdfsCommand";
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
  private serialize(input: CreateLocationHdfsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateLocationHdfsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLocationHdfsCommandOutput> {
    return deserializeAws_json1_1CreateLocationHdfsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
