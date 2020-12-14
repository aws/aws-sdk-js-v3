import { DLMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DLMClient";
import { GetLifecyclePoliciesRequest, GetLifecyclePoliciesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetLifecyclePoliciesCommand,
  serializeAws_restJson1GetLifecyclePoliciesCommand,
} from "../protocols/Aws_restJson1";
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

export type GetLifecyclePoliciesCommandInput = GetLifecyclePoliciesRequest;
export type GetLifecyclePoliciesCommandOutput = GetLifecyclePoliciesResponse & __MetadataBearer;

/**
 * <p>Gets summary information about all or the specified data lifecycle policies.</p> <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
 */
export class GetLifecyclePoliciesCommand extends $Command<
  GetLifecyclePoliciesCommandInput,
  GetLifecyclePoliciesCommandOutput,
  DLMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLifecyclePoliciesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DLMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetLifecyclePoliciesCommandInput, GetLifecyclePoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DLMClient";
    const commandName = "GetLifecyclePoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLifecyclePoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetLifecyclePoliciesResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLifecyclePoliciesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetLifecyclePoliciesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLifecyclePoliciesCommandOutput> {
    return deserializeAws_restJson1GetLifecyclePoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
