// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { LaunchWizardClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LaunchWizardClient";
import { ListDeploymentEventsInput, ListDeploymentEventsOutput } from "../models/models_0";
import { de_ListDeploymentEventsCommand, se_ListDeploymentEventsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDeploymentEventsCommand}.
 */
export interface ListDeploymentEventsCommandInput extends ListDeploymentEventsInput {}
/**
 * @public
 *
 * The output of {@link ListDeploymentEventsCommand}.
 */
export interface ListDeploymentEventsCommandOutput extends ListDeploymentEventsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the events of a deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LaunchWizardClient, ListDeploymentEventsCommand } from "@aws-sdk/client-launch-wizard"; // ES Modules import
 * // const { LaunchWizardClient, ListDeploymentEventsCommand } = require("@aws-sdk/client-launch-wizard"); // CommonJS import
 * const client = new LaunchWizardClient(config);
 * const input = { // ListDeploymentEventsInput
 *   deploymentId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDeploymentEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeploymentEventsOutput
 * //   deploymentEvents: [ // DeploymentEventDataSummaryList
 * //     { // DeploymentEventDataSummary
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       status: "CANCELED" || "CANCELING" || "COMPLETED" || "CREATED" || "FAILED" || "IN_PROGRESS" || "PENDING" || "TIMED_OUT",
 * //       statusReason: "STRING_VALUE",
 * //       timestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeploymentEventsCommandInput - {@link ListDeploymentEventsCommandInput}
 * @returns {@link ListDeploymentEventsCommandOutput}
 * @see {@link ListDeploymentEventsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentEventsCommandOutput} for command's `response` shape.
 * @see {@link LaunchWizardClientResolvedConfig | config} for LaunchWizardClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Retry your request, but if the problem persists, contact
 *          us with details by posting a question on <a href="https://repost.aws/">re:Post</a>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified workload or deployment resource can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link LaunchWizardServiceException}
 * <p>Base exception class for all service exceptions from LaunchWizard service.</p>
 *
 */
export class ListDeploymentEventsCommand extends $Command<
  ListDeploymentEventsCommandInput,
  ListDeploymentEventsCommandOutput,
  LaunchWizardClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: ListDeploymentEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LaunchWizardClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDeploymentEventsCommandInput, ListDeploymentEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDeploymentEventsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LaunchWizardClient";
    const commandName = "ListDeploymentEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LaunchWizard",
        operation: "ListDeploymentEvents",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListDeploymentEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDeploymentEventsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDeploymentEventsCommandOutput> {
    return de_ListDeploymentEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
