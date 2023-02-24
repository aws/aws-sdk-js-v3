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

import {
  DisassociateDRTLogBucketRequest,
  DisassociateDRTLogBucketRequestFilterSensitiveLog,
  DisassociateDRTLogBucketResponse,
  DisassociateDRTLogBucketResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateDRTLogBucketCommand,
  serializeAws_json1_1DisassociateDRTLogBucketCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

export interface DisassociateDRTLogBucketCommandInput extends DisassociateDRTLogBucketRequest {}
export interface DisassociateDRTLogBucketCommandOutput extends DisassociateDRTLogBucketResponse, __MetadataBearer {}

/**
 * <p>Removes the Shield Response Team's (SRT) access to the specified Amazon S3 bucket containing the logs that you shared previously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DisassociateDRTLogBucketCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DisassociateDRTLogBucketCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const command = new DisassociateDRTLogBucketCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateDRTLogBucketCommandInput} for command's `input` shape.
 * @see {@link DisassociateDRTLogBucketCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 */
export class DisassociateDRTLogBucketCommand extends $Command<
  DisassociateDRTLogBucketCommandInput,
  DisassociateDRTLogBucketCommandOutput,
  ShieldClientResolvedConfig
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

  constructor(readonly input: DisassociateDRTLogBucketCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisassociateDRTLogBucketCommandInput, DisassociateDRTLogBucketCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateDRTLogBucketCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ShieldClient";
    const commandName = "DisassociateDRTLogBucketCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateDRTLogBucketRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateDRTLogBucketResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateDRTLogBucketCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateDRTLogBucketCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateDRTLogBucketCommandOutput> {
    return deserializeAws_json1_1DisassociateDRTLogBucketCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
