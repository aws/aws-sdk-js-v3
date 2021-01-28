import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { GetSnowballUsageRequest, GetSnowballUsageResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetSnowballUsageCommand,
  serializeAws_json1_1GetSnowballUsageCommand,
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

export type GetSnowballUsageCommandInput = GetSnowballUsageRequest;
export type GetSnowballUsageCommandOutput = GetSnowballUsageResult & __MetadataBearer;

/**
 * <p>Returns information about the Snow Family service limit for your account, and also the
 *       number of Snow devices your account has in use.</p>
 *
 *          <p>The default service limit for the number of Snow devices that you can have at one time is
 *       1. If you want to increase your service limit, contact AWS Support.</p>
 */
export class GetSnowballUsageCommand extends $Command<
  GetSnowballUsageCommandInput,
  GetSnowballUsageCommandOutput,
  SnowballClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSnowballUsageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSnowballUsageCommandInput, GetSnowballUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "GetSnowballUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSnowballUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSnowballUsageResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSnowballUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSnowballUsageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSnowballUsageCommandOutput> {
    return deserializeAws_json1_1GetSnowballUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
