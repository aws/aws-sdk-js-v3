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
  CreateBucketRequest,
  CreateBucketRequestFilterSensitiveLog,
  CreateBucketResult,
  CreateBucketResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateBucketCommand,
  serializeAws_json1_1CreateBucketCommand,
} from "../protocols/Aws_json1_1";

export interface CreateBucketCommandInput extends CreateBucketRequest {}
export interface CreateBucketCommandOutput extends CreateBucketResult, __MetadataBearer {}

/**
 * <p>Creates an Amazon Lightsail bucket.</p>
 *          <p>A bucket is a cloud storage resource available in the Lightsail object storage service.
 *       Use buckets to store objects such as data and its descriptive metadata. For more information
 *       about buckets, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/buckets-in-amazon-lightsail">Buckets in Amazon Lightsail</a> in the <i>Amazon Lightsail Developer
 *         Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateBucketCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateBucketCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateBucketCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBucketCommandInput} for command's `input` shape.
 * @see {@link CreateBucketCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class CreateBucketCommand extends $Command<
  CreateBucketCommandInput,
  CreateBucketCommandOutput,
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

  constructor(readonly input: CreateBucketCommandInput) {
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
  ): Handler<CreateBucketCommandInput, CreateBucketCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateBucketCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateBucketCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBucketRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateBucketResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBucketCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateBucketCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBucketCommandOutput> {
    return deserializeAws_json1_1CreateBucketCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
