import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { GetQualificationScoreRequest, GetQualificationScoreResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetQualificationScoreCommand,
  serializeAws_json1_1GetQualificationScoreCommand,
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

export type GetQualificationScoreCommandInput = GetQualificationScoreRequest;
export type GetQualificationScoreCommandOutput = GetQualificationScoreResponse & __MetadataBearer;

/**
 * <p>
 *             The
 *             <code>GetQualificationScore</code>
 *             operation returns the value of a Worker's Qualification for a given
 *             Qualification type.
 *         </p>
 *         <p>
 *             To get a Worker's Qualification, you must know the Worker's ID. The
 *             Worker's ID is included in the assignment data returned by the
 *             <code>ListAssignmentsForHIT</code>
 *             operation.
 *         </p>
 *         <p>Only the owner of a Qualification type can query the value of
 *             a Worker's Qualification of that type.</p>
 */
export class GetQualificationScoreCommand extends $Command<
  GetQualificationScoreCommandInput,
  GetQualificationScoreCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetQualificationScoreCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetQualificationScoreCommandInput, GetQualificationScoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "GetQualificationScoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetQualificationScoreRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetQualificationScoreResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetQualificationScoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetQualificationScoreCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetQualificationScoreCommandOutput> {
    return deserializeAws_json1_1GetQualificationScoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
