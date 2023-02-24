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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  UpdateBucketBundleRequest,
  UpdateBucketBundleRequestFilterSensitiveLog,
  UpdateBucketBundleResult,
  UpdateBucketBundleResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1UpdateBucketBundleCommand,
  serializeAws_json1_1UpdateBucketBundleCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateBucketBundleCommandInput extends UpdateBucketBundleRequest {}
export interface UpdateBucketBundleCommandOutput extends UpdateBucketBundleResult, __MetadataBearer {}

/**
 * <p>Updates the bundle, or storage plan, of an existing Amazon Lightsail bucket.</p>
 *          <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a
 *       bucket. You can update a bucket's bundle only one time within a monthly Amazon Web Services
 *       billing cycle. To determine if you can update a bucket's bundle, use the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_GetBuckets.html">GetBuckets</a> action. The
 *         <code>ableToUpdateBundle</code> parameter in the response will indicate whether you can
 *       currently update a bucket's bundle.</p>
 *          <p>Update a bucket's bundle if it's consistently going over its storage space or data
 *       transfer quota, or if a bucket's usage is consistently in the lower range of its storage space
 *       or data transfer quota. Due to the unpredictable usage fluctuations that a bucket might
 *       experience, we strongly recommend that you update a bucket's bundle only as a long-term
 *       strategy, instead of as a short-term, monthly cost-cutting measure. Choose a bucket bundle
 *       that will provide the bucket with ample storage space and data transfer for a long time to
 *       come.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, UpdateBucketBundleCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, UpdateBucketBundleCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new UpdateBucketBundleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBucketBundleCommandInput} for command's `input` shape.
 * @see {@link UpdateBucketBundleCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class UpdateBucketBundleCommand extends $Command<
  UpdateBucketBundleCommandInput,
  UpdateBucketBundleCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: UpdateBucketBundleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBucketBundleCommandInput, UpdateBucketBundleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateBucketBundleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "UpdateBucketBundleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBucketBundleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateBucketBundleResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateBucketBundleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateBucketBundleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBucketBundleCommandOutput> {
    return deserializeAws_json1_1UpdateBucketBundleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
