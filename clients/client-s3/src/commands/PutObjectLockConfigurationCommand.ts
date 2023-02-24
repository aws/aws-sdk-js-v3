// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getFlexibleChecksumsPlugin } from "@aws-sdk/middleware-flexible-checksums";
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
  PutObjectLockConfigurationOutput,
  PutObjectLockConfigurationOutputFilterSensitiveLog,
  PutObjectLockConfigurationRequest,
  PutObjectLockConfigurationRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restXmlPutObjectLockConfigurationCommand,
  serializeAws_restXmlPutObjectLockConfigurationCommand,
} from "../protocols/Aws_restXml";
import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";

export interface PutObjectLockConfigurationCommandInput extends PutObjectLockConfigurationRequest {}
export interface PutObjectLockConfigurationCommandOutput extends PutObjectLockConfigurationOutput, __MetadataBearer {}

/**
 * <p>Places an Object Lock configuration on the specified bucket. The rule specified in the
 *          Object Lock configuration will be applied by default to every new object placed in the
 *          specified bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Locking Objects</a>.
 *       </p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>The <code>DefaultRetention</code> settings require both a mode and a
 *                period.</p>
 *                </li>
 *                <li>
 *                   <p>The <code>DefaultRetention</code> period can be either <code>Days</code>
 *                or <code>Years</code> but you must select one. You cannot specify <code>Days</code>
 *                and <code>Years</code> at the same time.</p>
 *                </li>
 *                <li>
 *                   <p>You can only enable Object Lock for new buckets. If you want to turn on
 *                Object Lock for an existing bucket, contact Amazon Web Services Support.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutObjectLockConfigurationCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutObjectLockConfigurationCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutObjectLockConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutObjectLockConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutObjectLockConfigurationCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for S3Client's `config` shape.
 *
 */
export class PutObjectLockConfigurationCommand extends $Command<
  PutObjectLockConfigurationCommandInput,
  PutObjectLockConfigurationCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      Bucket: { type: "contextParams", name: "Bucket" },
      ForcePathStyle: { type: "clientContextParams", name: "forcePathStyle" },
      UseArnRegion: { type: "clientContextParams", name: "useArnRegion" },
      DisableMultiRegionAccessPoints: { type: "clientContextParams", name: "disableMultiregionAccessPoints" },
      Accelerate: { type: "clientContextParams", name: "useAccelerateEndpoint" },
      UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: PutObjectLockConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutObjectLockConfigurationCommandInput, PutObjectLockConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutObjectLockConfigurationCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(
      getFlexibleChecksumsPlugin(configuration, {
        input: this.input,
        requestAlgorithmMember: "ChecksumAlgorithm",
        requestChecksumRequired: true,
      })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "PutObjectLockConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutObjectLockConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutObjectLockConfigurationOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutObjectLockConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlPutObjectLockConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutObjectLockConfigurationCommandOutput> {
    return deserializeAws_restXmlPutObjectLockConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
