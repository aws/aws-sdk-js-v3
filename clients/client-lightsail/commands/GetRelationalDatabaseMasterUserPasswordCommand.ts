import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  GetRelationalDatabaseMasterUserPasswordRequest,
  GetRelationalDatabaseMasterUserPasswordResult,
} from "../models/models_1";
import {
  deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand,
  serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetRelationalDatabaseMasterUserPasswordCommandInput = GetRelationalDatabaseMasterUserPasswordRequest;
export type GetRelationalDatabaseMasterUserPasswordCommandOutput = GetRelationalDatabaseMasterUserPasswordResult &
  __MetadataBearer;

/**
 * <p>Returns the current, previous, or pending versions of the master user password for a
 *       Lightsail database.</p>
 *          <p>The <code>GetRelationalDatabaseMasterUserPassword</code> operation supports tag-based
 *       access control via resource tags applied to the resource identified by
 *       relationalDatabaseName.</p>
 */
export class GetRelationalDatabaseMasterUserPasswordCommand extends $Command<
  GetRelationalDatabaseMasterUserPasswordCommandInput,
  GetRelationalDatabaseMasterUserPasswordCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRelationalDatabaseMasterUserPasswordCommandInput) {
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
  ): Handler<
    GetRelationalDatabaseMasterUserPasswordCommandInput,
    GetRelationalDatabaseMasterUserPasswordCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetRelationalDatabaseMasterUserPasswordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRelationalDatabaseMasterUserPasswordRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRelationalDatabaseMasterUserPasswordResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetRelationalDatabaseMasterUserPasswordCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRelationalDatabaseMasterUserPasswordCommandOutput> {
    return deserializeAws_json1_1GetRelationalDatabaseMasterUserPasswordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
