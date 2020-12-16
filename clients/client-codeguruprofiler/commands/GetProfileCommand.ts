import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { GetProfileRequest, GetProfileResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetProfileCommand,
  serializeAws_restJson1GetProfileCommand,
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

export type GetProfileCommandInput = GetProfileRequest;
export type GetProfileCommandOutput = GetProfileResponse & __MetadataBearer;

/**
 * <p>Gets the aggregated profile of a profiling group for the specified time range.
 *         If the requested time range does not align with the available aggregated profiles, it is expanded to
 *         attain alignment. If aggregated profiles are available only for part of the period requested, the
 *         profile is returned from the earliest available to the latest within the requested time range.
 *       </p>
 *          <p>For example, if the requested time range is from 00:00 to 00:20 and the available profiles are
 *         from 00:15 to 00:25, the returned profile will be from 00:15 to 00:20.
 *       </p>
 *          <p>You must specify exactly two of the following parameters:
 *         <code>startTime</code>, <code>period</code>, and <code>endTime</code>.
 *       </p>
 */
export class GetProfileCommand extends $Command<
  GetProfileCommandInput,
  GetProfileCommandOutput,
  CodeGuruProfilerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetProfileCommandInput, GetProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "GetProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetProfileCommandOutput> {
    return deserializeAws_restJson1GetProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
