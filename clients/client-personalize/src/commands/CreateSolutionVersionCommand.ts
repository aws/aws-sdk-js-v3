// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateSolutionVersionRequest,
  CreateSolutionVersionRequestFilterSensitiveLog,
  CreateSolutionVersionResponse,
  CreateSolutionVersionResponseFilterSensitiveLog,
} from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import {
  deserializeAws_json1_1CreateSolutionVersionCommand,
  serializeAws_json1_1CreateSolutionVersionCommand,
} from "../protocols/Aws_json1_1";

export interface CreateSolutionVersionCommandInput extends CreateSolutionVersionRequest {}
export interface CreateSolutionVersionCommandOutput extends CreateSolutionVersionResponse, __MetadataBearer {}

/**
 * <p>Trains or retrains an active solution in a Custom dataset group. A solution is created using the <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>
 *       operation and must be in the ACTIVE state before calling
 *         <code>CreateSolutionVersion</code>. A new version of the solution is created every time you
 *       call this operation.</p>
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A solution version can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING</p>
 *             </li>
 *             <li>
 *                <p>CREATE IN_PROGRESS</p>
 *             </li>
 *             <li>
 *                <p>ACTIVE</p>
 *             </li>
 *             <li>
 *                <p>CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>CREATE STOPPING</p>
 *             </li>
 *             <li>
 *                <p>CREATE STOPPED</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the version, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a>. Wait
 *       until the status shows as ACTIVE before calling <code>CreateCampaign</code>.</p>
 *          <p>If the status shows as CREATE FAILED, the response includes a <code>failureReason</code>
 *       key, which describes why the job failed.</p>
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutionVersions.html">ListSolutionVersions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolutionVersion.html">DescribeSolutionVersion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListSolutions.html">ListSolutions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSolution.html">DescribeSolution</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSolution.html">DeleteSolution</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateSolutionVersionCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateSolutionVersionCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateSolutionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSolutionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateSolutionVersionCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 */
export class CreateSolutionVersionCommand extends $Command<
  CreateSolutionVersionCommandInput,
  CreateSolutionVersionCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSolutionVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "CreateSolutionVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSolutionVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSolutionVersionResponseFilterSensitiveLog,
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
