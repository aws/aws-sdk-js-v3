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
  GetMultiRegionAccessPointRoutesRequest,
  GetMultiRegionAccessPointRoutesRequestFilterSensitiveLog,
  GetMultiRegionAccessPointRoutesResult,
  GetMultiRegionAccessPointRoutesResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlGetMultiRegionAccessPointRoutesCommand,
  serializeAws_restXmlGetMultiRegionAccessPointRoutesCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

export interface GetMultiRegionAccessPointRoutesCommandInput extends GetMultiRegionAccessPointRoutesRequest {}
export interface GetMultiRegionAccessPointRoutesCommandOutput
  extends GetMultiRegionAccessPointRoutesResult,
    __MetadataBearer {}

/**
 * <p>Returns the routing configuration for a Multi-Region Access Point, indicating which Regions are active or
 *          passive.</p>
 *          <p>To obtain routing control changes and failover requests, use the Amazon S3 failover control
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
 * import { S3ControlClient, GetMultiRegionAccessPointRoutesCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetMultiRegionAccessPointRoutesCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new GetMultiRegionAccessPointRoutesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMultiRegionAccessPointRoutesCommandInput} for command's `input` shape.
 * @see {@link GetMultiRegionAccessPointRoutesCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 */
export class GetMultiRegionAccessPointRoutesCommand extends $Command<
  GetMultiRegionAccessPointRoutesCommandInput,
  GetMultiRegionAccessPointRoutesCommandOutput,
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

  constructor(readonly input: GetMultiRegionAccessPointRoutesCommandInput) {
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
  ): Handler<GetMultiRegionAccessPointRoutesCommandInput, GetMultiRegionAccessPointRoutesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMultiRegionAccessPointRoutesCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getProcessArnablesPlugin(configuration));
    this.middlewareStack.use(getApplyMd5BodyChecksumPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3ControlClient";
    const commandName = "GetMultiRegionAccessPointRoutesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMultiRegionAccessPointRoutesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetMultiRegionAccessPointRoutesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetMultiRegionAccessPointRoutesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlGetMultiRegionAccessPointRoutesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMultiRegionAccessPointRoutesCommandOutput> {
    return deserializeAws_restXmlGetMultiRegionAccessPointRoutesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
