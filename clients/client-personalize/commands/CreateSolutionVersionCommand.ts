import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateSolutionVersionRequest, CreateSolutionVersionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateSolutionVersionCommand,
  serializeAws_json1_1CreateSolutionVersionCommand,
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

export type CreateSolutionVersionCommandInput = CreateSolutionVersionRequest;
export type CreateSolutionVersionCommandOutput = CreateSolutionVersionResponse & __MetadataBearer;

/**
 * <p>Trains or retrains an active solution. A solution is created using the <a>CreateSolution</a> operation and must be in the ACTIVE state before calling
 *         <code>CreateSolutionVersion</code>. A new version of the solution is created every time you
 *       call this operation.</p>
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A solution version can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the version, call <a>DescribeSolutionVersion</a>. Wait
 *       until the status shows as ACTIVE before calling <code>CreateCampaign</code>.</p>
 *          <p>If the status shows as CREATE FAILED, the response includes a <code>failureReason</code>
 *       key, which describes why the job failed.</p>
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListSolutionVersions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeSolutionVersion</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListSolutions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateSolution</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeSolution</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteSolution</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class CreateSolutionVersionCommand extends $Command<
  CreateSolutionVersionCommandInput,
  CreateSolutionVersionCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSolutionVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSolutionVersionCommandInput, CreateSolutionVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "CreateSolutionVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSolutionVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSolutionVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSolutionVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateSolutionVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSolutionVersionCommandOutput> {
    return deserializeAws_json1_1CreateSolutionVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
