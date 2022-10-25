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

import { CognitoSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoSyncClient";
import {
  UpdateRecordsRequest,
  UpdateRecordsRequestFilterSensitiveLog,
  UpdateRecordsResponse,
  UpdateRecordsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateRecordsCommand,
  serializeAws_restJson1UpdateRecordsCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateRecordsCommandInput extends UpdateRecordsRequest {}
export interface UpdateRecordsCommandOutput extends UpdateRecordsResponse, __MetadataBearer {}

/**
 * <p>Posts updates to records and adds and deletes records for a dataset and user.</p>
 *       <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p><p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p>
 *       <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoSyncClient, UpdateRecordsCommand } from "@aws-sdk/client-cognito-sync"; // ES Modules import
 * // const { CognitoSyncClient, UpdateRecordsCommand } = require("@aws-sdk/client-cognito-sync"); // CommonJS import
 * const client = new CognitoSyncClient(config);
 * const command = new UpdateRecordsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRecordsCommandInput} for command's `input` shape.
 * @see {@link UpdateRecordsCommandOutput} for command's `response` shape.
 * @see {@link CognitoSyncClientResolvedConfig | config} for CognitoSyncClient's `config` shape.
 *
 */
export class UpdateRecordsCommand extends $Command<
  UpdateRecordsCommandInput,
  UpdateRecordsCommandOutput,
  CognitoSyncClientResolvedConfig
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

  constructor(readonly input: UpdateRecordsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRecordsCommandInput, UpdateRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateRecordsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoSyncClient";
    const commandName = "UpdateRecordsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRecordsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateRecordsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRecordsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRecordsCommandOutput> {
    return deserializeAws_restJson1UpdateRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
