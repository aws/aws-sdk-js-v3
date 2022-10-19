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
  UpdateEventDataStoreRequest,
  UpdateEventDataStoreRequestFilterSensitiveLog,
  UpdateEventDataStoreResponse,
  UpdateEventDataStoreResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateEventDataStoreCommand,
  serializeAws_json1_1UpdateEventDataStoreCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateEventDataStoreCommandInput extends UpdateEventDataStoreRequest {}
export interface UpdateEventDataStoreCommandOutput extends UpdateEventDataStoreResponse, __MetadataBearer {}

/**
 * <p>Updates an event data store. The required <code>EventDataStore</code> value is an ARN or the ID portion of the ARN.
 *          Other parameters are optional, but at least one optional parameter must be specified, or CloudTrail throws an error.
 *          <code>RetentionPeriod</code> is in days, and valid values are integers between 90 and 2557.
 *          By default, <code>TerminationProtection</code> is enabled. <code>AdvancedEventSelectors</code> includes or excludes management
 *          and data events in your event data store; for more information about <code>AdvancedEventSelectors</code>, see
 *          <a>PutEventSelectorsRequest$AdvancedEventSelectors</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, UpdateEventDataStoreCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, UpdateEventDataStoreCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new UpdateEventDataStoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateEventDataStoreCommandInput} for command's `input` shape.
 * @see {@link UpdateEventDataStoreCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 */
export class UpdateEventDataStoreCommand extends $Command<
  UpdateEventDataStoreCommandInput,
  UpdateEventDataStoreCommandOutput,
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

  constructor(readonly input: UpdateEventDataStoreCommandInput) {
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
  ): Handler<UpdateEventDataStoreCommandInput, UpdateEventDataStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateEventDataStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "UpdateEventDataStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEventDataStoreRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateEventDataStoreResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateEventDataStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateEventDataStoreCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEventDataStoreCommandOutput> {
    return deserializeAws_json1_1UpdateEventDataStoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
