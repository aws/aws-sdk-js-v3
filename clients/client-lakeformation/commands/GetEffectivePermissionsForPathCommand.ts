import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { GetEffectivePermissionsForPathRequest, GetEffectivePermissionsForPathResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetEffectivePermissionsForPathCommand,
  serializeAws_json1_1GetEffectivePermissionsForPathCommand,
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

export type GetEffectivePermissionsForPathCommandInput = GetEffectivePermissionsForPathRequest;
export type GetEffectivePermissionsForPathCommandOutput = GetEffectivePermissionsForPathResponse & __MetadataBearer;

/**
 * <p>Returns the Lake Formation permissions for a specified table or database resource located
 *       at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.</p>
 */
export class GetEffectivePermissionsForPathCommand extends $Command<
  GetEffectivePermissionsForPathCommandInput,
  GetEffectivePermissionsForPathCommandOutput,
  LakeFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEffectivePermissionsForPathCommandInput) {
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
  ): Handler<GetEffectivePermissionsForPathCommandInput, GetEffectivePermissionsForPathCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "GetEffectivePermissionsForPathCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEffectivePermissionsForPathRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetEffectivePermissionsForPathResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetEffectivePermissionsForPathCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetEffectivePermissionsForPathCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEffectivePermissionsForPathCommandOutput> {
    return deserializeAws_json1_1GetEffectivePermissionsForPathCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
