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
  GetMultiRegionAccessPointPolicyStatusRequest,
  GetMultiRegionAccessPointPolicyStatusRequestFilterSensitiveLog,
  GetMultiRegionAccessPointPolicyStatusResult,
  GetMultiRegionAccessPointPolicyStatusResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlGetMultiRegionAccessPointPolicyStatusCommand,
  serializeAws_restXmlGetMultiRegionAccessPointPolicyStatusCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

export interface GetMultiRegionAccessPointPolicyStatusCommandInput
  extends GetMultiRegionAccessPointPolicyStatusRequest {}
export interface GetMultiRegionAccessPointPolicyStatusCommandOutput
  extends GetMultiRegionAccessPointPolicyStatusResult,
    __MetadataBearer {}

/**
 * <p>Indicates whether the specified Multi-Region Access Point has an access control policy that allows public
 *          access.</p>
 *          <p>This action will always be routed to the US West (Oregon) Region. For more information
 *          about the restrictions around managing Multi-Region Access Points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ManagingMultiRegionAccessPoints.html">Managing
 *             Multi-Region Access Points</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following actions are related to
 *          <code>GetMultiRegionAccessPointPolicyStatus</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetMultiRegionAccessPointPolicy.html">GetMultiRegionAccessPointPolicy</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutMultiRegionAccessPointPolicy.html">PutMultiRegionAccessPointPolicy</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetMultiRegionAccessPointPolicyStatusCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetMultiRegionAccessPointPolicyStatusCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new GetMultiRegionAccessPointPolicyStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMultiRegionAccessPointPolicyStatusCommandInput} for command's `input` shape.
 * @see {@link GetMultiRegionAccessPointPolicyStatusCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 */
export class GetMultiRegionAccessPointPolicyStatusCommand extends $Command<
  GetMultiRegionAccessPointPolicyStatusCommandInput,
  GetMultiRegionAccessPointPolicyStatusCommandOutput,
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

  constructor(readonly input: GetMultiRegionAccessPointPolicyStatusCommandInput) {
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
  ): Handler<GetMultiRegionAccessPointPolicyStatusCommandInput, GetMultiRegionAccessPointPolicyStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMultiRegionAccessPointPolicyStatusCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetMultiRegionAccessPointPolicyStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMultiRegionAccessPointPolicyStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetMultiRegionAccessPointPolicyStatusResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetMultiRegionAccessPointPolicyStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlGetMultiRegionAccessPointPolicyStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMultiRegionAccessPointPolicyStatusCommandOutput> {
    return deserializeAws_restXmlGetMultiRegionAccessPointPolicyStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
