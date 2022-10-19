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
  RestoreEventDataStoreRequest,
  RestoreEventDataStoreRequestFilterSensitiveLog,
  RestoreEventDataStoreResponse,
  RestoreEventDataStoreResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RestoreEventDataStoreCommand,
  serializeAws_json1_1RestoreEventDataStoreCommand,
} from "../protocols/Aws_json1_1";

export interface RestoreEventDataStoreCommandInput extends RestoreEventDataStoreRequest {}
export interface RestoreEventDataStoreCommandOutput extends RestoreEventDataStoreResponse, __MetadataBearer {}

/**
 * <p>Restores a deleted event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN.
 *          You can only restore a deleted event data store within the seven-day wait period after deletion. Restoring an event data store
 *          can take several minutes, depending on the size of the event data store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, RestoreEventDataStoreCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, RestoreEventDataStoreCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const command = new RestoreEventDataStoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreEventDataStoreCommandInput} for command's `input` shape.
 * @see {@link RestoreEventDataStoreCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 */
export class RestoreEventDataStoreCommand extends $Command<
  RestoreEventDataStoreCommandInput,
  RestoreEventDataStoreCommandOutput,
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

  constructor(readonly input: RestoreEventDataStoreCommandInput) {
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
  ): Handler<RestoreEventDataStoreCommandInput, RestoreEventDataStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreEventDataStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "RestoreEventDataStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreEventDataStoreRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RestoreEventDataStoreResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreEventDataStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RestoreEventDataStoreCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreEventDataStoreCommandOutput> {
    return deserializeAws_json1_1RestoreEventDataStoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
