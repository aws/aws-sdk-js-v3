import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { RevokePermissionsRequest, RevokePermissionsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1RevokePermissionsCommand,
  serializeAws_json1_1RevokePermissionsCommand,
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

export type RevokePermissionsCommandInput = RevokePermissionsRequest;
export type RevokePermissionsCommandOutput = RevokePermissionsResponse & __MetadataBearer;

/**
 * <p>Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p>
 */
export class RevokePermissionsCommand extends $Command<
  RevokePermissionsCommandInput,
  RevokePermissionsCommandOutput,
  LakeFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokePermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RevokePermissionsCommandInput, RevokePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "RevokePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokePermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RevokePermissionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RevokePermissionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokePermissionsCommandOutput> {
    return deserializeAws_json1_1RevokePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
