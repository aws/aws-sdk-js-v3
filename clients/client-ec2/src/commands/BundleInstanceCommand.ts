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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  BundleInstanceRequest,
  BundleInstanceRequestFilterSensitiveLog,
  BundleInstanceResult,
  BundleInstanceResultFilterSensitiveLog,
} from "../models/models_0";
import { de_BundleInstanceCommand, se_BundleInstanceCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BundleInstanceCommand}.
 */
export interface BundleInstanceCommandInput extends BundleInstanceRequest {}
/**
 * @public
 *
 * The output of {@link BundleInstanceCommand}.
 */
export interface BundleInstanceCommandOutput extends BundleInstanceResult, __MetadataBearer {}

/**
 * @public
 * <p>Bundles an Amazon instance store-backed Windows instance.</p>
 *          <p>During bundling, only the root device volume (C:\) is bundled. Data on other instance store volumes is not preserved.</p>
 *          <note>
 *             <p>This action is not applicable for Linux/Unix instances or Windows instances that are backed by Amazon EBS.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, BundleInstanceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, BundleInstanceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // BundleInstanceRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Storage: { // Storage
 *     S3: { // S3Storage
 *       AWSAccessKeyId: "STRING_VALUE",
 *       Bucket: "STRING_VALUE",
 *       Prefix: "STRING_VALUE",
 *       UploadPolicy: "BLOB_VALUE",
 *       UploadPolicySignature: "STRING_VALUE",
 *     },
 *   },
 *   DryRun: true || false,
 * };
 * const command = new BundleInstanceCommand(input);
 * const response = await client.send(command);
 * // { // BundleInstanceResult
 * //   BundleTask: { // BundleTask
 * //     BundleId: "STRING_VALUE",
 * //     BundleTaskError: { // BundleTaskError
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     InstanceId: "STRING_VALUE",
 * //     Progress: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     State: "pending" || "waiting-for-shutdown" || "bundling" || "storing" || "cancelling" || "complete" || "failed",
 * //     Storage: { // Storage
 * //       S3: { // S3Storage
 * //         AWSAccessKeyId: "STRING_VALUE",
 * //         Bucket: "STRING_VALUE",
 * //         Prefix: "STRING_VALUE",
 * //         UploadPolicy: "BLOB_VALUE",
 * //         UploadPolicySignature: "STRING_VALUE",
 * //       },
 * //     },
 * //     UpdateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param BundleInstanceCommandInput - {@link BundleInstanceCommandInput}
 * @returns {@link BundleInstanceCommandOutput}
 * @see {@link BundleInstanceCommandInput} for command's `input` shape.
 * @see {@link BundleInstanceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class BundleInstanceCommand extends $Command<
  BundleInstanceCommandInput,
  BundleInstanceCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: BundleInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BundleInstanceCommandInput, BundleInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BundleInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "BundleInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BundleInstanceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BundleInstanceResultFilterSensitiveLog,
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
  private serialize(input: BundleInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BundleInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BundleInstanceCommandOutput> {
    return de_BundleInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
