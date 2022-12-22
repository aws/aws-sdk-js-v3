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
  SubmitMultiRegionAccessPointRoutesRequest,
  SubmitMultiRegionAccessPointRoutesRequestFilterSensitiveLog,
  SubmitMultiRegionAccessPointRoutesResult,
  SubmitMultiRegionAccessPointRoutesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlSubmitMultiRegionAccessPointRoutesCommand,
  serializeAws_restXmlSubmitMultiRegionAccessPointRoutesCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

export interface SubmitMultiRegionAccessPointRoutesCommandInput extends SubmitMultiRegionAccessPointRoutesRequest {}
export interface SubmitMultiRegionAccessPointRoutesCommandOutput
  extends SubmitMultiRegionAccessPointRoutesResult,
    __MetadataBearer {}

/**
 * <p>Submits an updated route configuration for a Multi-Region Access Point. This API operation updates the
 *          routing status for the specified Regions from active to passive, or from passive to active.
 *          A value of <code>0</code> indicates a passive status, which means that traffic won't be
 *          routed to the specified Region. A value of <code>100</code> indicates an active status,
 *          which means that traffic will be routed to the specified Region. At least one Region must be active at all times.</p>
 *          <p>When
 *          the routing configuration is changed, any in-progress operations (uploads, copies, deletes,
 *          and so on) to formerly active Regions will continue to run to their
 *          final completion state (success or failure). The routing configurations of any Regions that
 *          aren’t specified remain unchanged.</p>
 *          <note>
 *             <p>Updated routing configurations might not be immediately applied.
 *             It
 *             can take up to 2 minutes for your changes to take effect.</p>
 *          </note>
 *          <p>To submit routing control changes and failover requests, use the Amazon S3 failover control
 *          infrastructure endpoints in these five Amazon Web Services Regions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>us-east-1</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>us-west-2</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ap-southeast-2</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ap-northeast-1</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>eu-west-1</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Your Amazon S3 bucket does not need to be in these five Regions.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, SubmitMultiRegionAccessPointRoutesCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, SubmitMultiRegionAccessPointRoutesCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new SubmitMultiRegionAccessPointRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubmitMultiRegionAccessPointRoutesCommandInput} for command's `input` shape.
 * @see {@link SubmitMultiRegionAccessPointRoutesCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 */
export class SubmitMultiRegionAccessPointRoutesCommand extends $Command<
  SubmitMultiRegionAccessPointRoutesCommandInput,
  SubmitMultiRegionAccessPointRoutesCommandOutput,
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

  constructor(readonly input: SubmitMultiRegionAccessPointRoutesCommandInput) {
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
  ): Handler<SubmitMultiRegionAccessPointRoutesCommandInput, SubmitMultiRegionAccessPointRoutesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SubmitMultiRegionAccessPointRoutesCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "SubmitMultiRegionAccessPointRoutesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SubmitMultiRegionAccessPointRoutesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SubmitMultiRegionAccessPointRoutesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SubmitMultiRegionAccessPointRoutesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlSubmitMultiRegionAccessPointRoutesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SubmitMultiRegionAccessPointRoutesCommandOutput> {
    return deserializeAws_restXmlSubmitMultiRegionAccessPointRoutesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
