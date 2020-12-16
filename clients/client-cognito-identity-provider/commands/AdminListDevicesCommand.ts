import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { AdminListDevicesRequest, AdminListDevicesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AdminListDevicesCommand,
  serializeAws_json1_1AdminListDevicesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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

export type AdminListDevicesCommandInput = AdminListDevicesRequest;
export type AdminListDevicesCommandOutput = AdminListDevicesResponse & __MetadataBearer;

/**
 * <p>Lists devices, as an administrator.</p>
 *         <p>Calling this action requires developer credentials.</p>
 */
export class AdminListDevicesCommand extends $Command<
  AdminListDevicesCommandInput,
  AdminListDevicesCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminListDevicesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AdminListDevicesCommandInput, AdminListDevicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminListDevicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminListDevicesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdminListDevicesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminListDevicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminListDevicesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminListDevicesCommandOutput> {
    return deserializeAws_json1_1AdminListDevicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
