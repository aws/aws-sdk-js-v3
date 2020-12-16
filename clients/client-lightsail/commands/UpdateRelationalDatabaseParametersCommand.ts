import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  UpdateRelationalDatabaseParametersRequest,
  UpdateRelationalDatabaseParametersResult,
} from "../models/models_1";
import {
  deserializeAws_json1_1UpdateRelationalDatabaseParametersCommand,
  serializeAws_json1_1UpdateRelationalDatabaseParametersCommand,
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

export type UpdateRelationalDatabaseParametersCommandInput = UpdateRelationalDatabaseParametersRequest;
export type UpdateRelationalDatabaseParametersCommandOutput = UpdateRelationalDatabaseParametersResult &
  __MetadataBearer;

/**
 * <p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p>
 *          <p>Parameter updates don't cause outages; therefore, their application is not subject to the
 *       preferred maintenance window. However, there are two ways in which parameter updates are
 *       applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a
 *         <code>dynamic</code> apply type are applied immediately. Parameters marked with a
 *         <code>pending-reboot</code> apply type are applied only after the database is rebooted using
 *       the <code>reboot relational database</code> operation.</p>
 *          <p>The <code>update relational database parameters</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by relationalDatabaseName. For
 *       more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class UpdateRelationalDatabaseParametersCommand extends $Command<
  UpdateRelationalDatabaseParametersCommandInput,
  UpdateRelationalDatabaseParametersCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRelationalDatabaseParametersCommandInput) {
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
  ): Handler<UpdateRelationalDatabaseParametersCommandInput, UpdateRelationalDatabaseParametersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "UpdateRelationalDatabaseParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRelationalDatabaseParametersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRelationalDatabaseParametersResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateRelationalDatabaseParametersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateRelationalDatabaseParametersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRelationalDatabaseParametersCommandOutput> {
    return deserializeAws_json1_1UpdateRelationalDatabaseParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
