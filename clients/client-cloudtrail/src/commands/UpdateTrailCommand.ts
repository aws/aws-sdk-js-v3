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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import {
  UpdateTrailRequest,
  UpdateTrailRequestFilterSensitiveLog,
  UpdateTrailResponse,
  UpdateTrailResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateTrailCommand,
  serializeAws_json1_1UpdateTrailCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateTrailCommandInput extends UpdateTrailRequest {}
export interface UpdateTrailCommandOutput extends UpdateTrailResponse, __MetadataBearer {}

/**
 * <p>Updates trail settings that control what events you are logging, and how to handle log files. Changes to a trail do not require
 *          stopping the CloudTrail service. Use this action to designate an existing bucket for log
 *          delivery. If the existing bucket has previously been a target for CloudTrail log files,
 *          an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the
 *          region in which the trail was created; otherwise, an
 *             <code>InvalidHomeRegionException</code> is thrown.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, UpdateTrailCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, UpdateTrailCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new UpdateTrailCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTrailCommandInput} for command's `input` shape.
 * @see {@link UpdateTrailCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 */
export class UpdateTrailCommand extends $Command<
  UpdateTrailCommandInput,
  UpdateTrailCommandOutput,
  CloudTrailClientResolvedConfig
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

  constructor(readonly input: UpdateTrailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTrailCommandInput, UpdateTrailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateTrailCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "UpdateTrailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTrailRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateTrailResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTrailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateTrailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTrailCommandOutput> {
    return deserializeAws_json1_1UpdateTrailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
