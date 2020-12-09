import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribePatchGroupStateRequest } from "../models/models_0";
import { DescribePatchGroupStateResult } from "../models/models_1";
import {
  deserializeAws_json1_1DescribePatchGroupStateCommand,
  serializeAws_json1_1DescribePatchGroupStateCommand,
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

export type DescribePatchGroupStateCommandInput = DescribePatchGroupStateRequest;
export type DescribePatchGroupStateCommandOutput = DescribePatchGroupStateResult & __MetadataBearer;

/**
 * <p>Returns high-level aggregated patch compliance state for a patch group.</p>
 */
export class DescribePatchGroupStateCommand extends $Command<
  DescribePatchGroupStateCommandInput,
  DescribePatchGroupStateCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribePatchGroupStateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribePatchGroupStateCommandInput, DescribePatchGroupStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribePatchGroupStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePatchGroupStateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribePatchGroupStateResult.filterSensitiveLog,
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

  private serialize(input: DescribePatchGroupStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePatchGroupStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePatchGroupStateCommandOutput> {
    return deserializeAws_json1_1DescribePatchGroupStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
