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

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import {
  DescribeFileSystemsRequest,
  DescribeFileSystemsRequestFilterSensitiveLog,
  DescribeFileSystemsResponse,
  DescribeFileSystemsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeFileSystemsCommand,
  serializeAws_json1_1DescribeFileSystemsCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DescribeFileSystemsCommand}.
 */
export interface DescribeFileSystemsCommandInput extends DescribeFileSystemsRequest {}
/**
 * The output of {@link DescribeFileSystemsCommand}.
 */
export interface DescribeFileSystemsCommandOutput extends DescribeFileSystemsResponse, __MetadataBearer {}

/**
 * <p>Returns the description of specific Amazon FSx file systems, if a
 *                 <code>FileSystemIds</code> value is provided for that file system. Otherwise, it
 *             returns descriptions of all file systems owned by your Amazon Web Services account in the
 *                 Amazon Web Services Region of the endpoint that you're calling.</p>
 *          <p>When retrieving all file system descriptions, you can optionally specify the
 *                 <code>MaxResults</code> parameter to limit the number of descriptions in a response.
 *             If more file system descriptions remain, Amazon FSx returns a
 *                 <code>NextToken</code> value in the response. In this case, send a later request
 *             with the <code>NextToken</code> request parameter set to the value of
 *                 <code>NextToken</code> from the last response.</p>
 *          <p>This operation is used in an iterative process to retrieve a list of your file system
 *             descriptions. <code>DescribeFileSystems</code> is called first without a
 *                 <code>NextToken</code>value. Then the operation continues to be called with the
 *                 <code>NextToken</code> parameter set to the value of the last <code>NextToken</code>
 *             value until a response has no <code>NextToken</code>.</p>
 *          <p>When using this operation, keep the following in mind:</p>
 *          <ul>
 *             <li>
 *                <p>The implementation might return fewer than <code>MaxResults</code> file
 *                     system descriptions while still including a <code>NextToken</code>
 *                     value.</p>
 *             </li>
 *             <li>
 *                <p>The order of file systems returned in the response of one
 *                         <code>DescribeFileSystems</code> call and the order of file systems returned
 *                     across the responses of a multicall iteration is unspecified.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DescribeFileSystemsCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DescribeFileSystemsCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DescribeFileSystemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFileSystemsCommandInput} for command's `input` shape.
 * @see {@link DescribeFileSystemsCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @example To describe an Amazon FSx file system
 * ```javascript
 * // This operation describes all of the Amazon FSx file systems in an account.
 * const input = {};
 * const command = new DescribeFileSystemsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "FileSystems": [
 *     {
 *       "CreationTime": "1481841524.0",
 *       "DNSName": "fs-0498eed5fe91001ec.fsx.com",
 *       "FileSystemId": "fs-0498eed5fe91001ec",
 *       "KmsKeyId": "arn:aws:kms:us-east-1:012345678912:key/0ff3ea8d-130e-4133-877f-93908b6fdbd6",
 *       "Lifecycle": "AVAILABLE",
 *       "NetworkInterfaceIds": [
 *         "eni-abcd1234"
 *       ],
 *       "OwnerId": "012345678912",
 *       "ResourceARN": "arn:aws:fsx:us-east-1:012345678912:file-system/fs-0498eed5fe91001ec",
 *       "StorageCapacity": 300,
 *       "SubnetIds": [
 *         "subnet-1234abcd"
 *       ],
 *       "Tags": [
 *         {
 *           "Key": "Name",
 *           "Value": "MyFileSystem"
 *         }
 *       ],
 *       "VpcId": "vpc-ab1234cd",
 *       "WindowsConfiguration": {
 *         "ActiveDirectoryId": "d-1234abcd12",
 *         "AutomaticBackupRetentionDays": 30,
 *         "DailyAutomaticBackupStartTime": "05:00",
 *         "ThroughputCapacity": 8,
 *         "WeeklyMaintenanceStartTime": "1:05:00"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-a-file-systems-1481848448460
 * ```
 *
 */
export class DescribeFileSystemsCommand extends $Command<
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
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

  constructor(readonly input: DescribeFileSystemsCommandInput) {
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
  ): Handler<DescribeFileSystemsCommandInput, DescribeFileSystemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFileSystemsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DescribeFileSystemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFileSystemsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeFileSystemsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFileSystemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeFileSystemsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFileSystemsCommandOutput> {
    return deserializeAws_json1_1DescribeFileSystemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
