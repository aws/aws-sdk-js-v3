// smithy-typescript generated code
import { getApplyMd5BodyChecksumPlugin } from "@aws-sdk/middleware-apply-body-checksum";
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
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

import {
  ListMultiRegionAccessPointsRequest,
  ListMultiRegionAccessPointsRequestFilterSensitiveLog,
  ListMultiRegionAccessPointsResult,
  ListMultiRegionAccessPointsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlListMultiRegionAccessPointsCommand,
  serializeAws_restXmlListMultiRegionAccessPointsCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

export interface ListMultiRegionAccessPointsCommandInput extends ListMultiRegionAccessPointsRequest {}
export interface ListMultiRegionAccessPointsCommandOutput extends ListMultiRegionAccessPointsResult, __MetadataBearer {}

/**
 * <p>Returns a list of the Multi-Region Access Points currently associated with the specified Amazon Web Services account.
 *          Each call can return up to 100 Multi-Region Access Points, the maximum number of Multi-Region Access Points that can be
 *          associated with a single account.</p>
 *          <p>This action will always be routed to the US West (Oregon) Region. For more information
 *          about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing
 *             Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following actions are related to <code>ListMultiRegionAccessPoint</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateMultiRegionAccessPoint.html">CreateMultiRegionAccessPoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteMultiRegionAccessPoint.html">DeleteMultiRegionAccessPoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DescribeMultiRegionAccessPointOperation.html">DescribeMultiRegionAccessPointOperation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPoint.html">GetMultiRegionAccessPoint</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, ListMultiRegionAccessPointsCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, ListMultiRegionAccessPointsCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new ListMultiRegionAccessPointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMultiRegionAccessPointsCommandInput} for command's `input` shape.
 * @see {@link ListMultiRegionAccessPointsCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 */
export class ListMultiRegionAccessPointsCommand extends $Command<
  ListMultiRegionAccessPointsCommandInput,
  ListMultiRegionAccessPointsCommandOutput,
  S3ControlClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      RequiresAccountId: { type: "staticContextParams", value: true },
      AccountId: { type: "contextParams", name: "AccountId" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: ListMultiRegionAccessPointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMultiRegionAccessPointsCommandInput, ListMultiRegionAccessPointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMultiRegionAccessPointsCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "ListMultiRegionAccessPointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMultiRegionAccessPointsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListMultiRegionAccessPointsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMultiRegionAccessPointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListMultiRegionAccessPointsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListMultiRegionAccessPointsCommandOutput> {
    return deserializeAws_restXmlListMultiRegionAccessPointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
