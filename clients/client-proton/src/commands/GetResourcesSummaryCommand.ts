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
  GetResourcesSummaryInput,
  GetResourcesSummaryInputFilterSensitiveLog,
  GetResourcesSummaryOutput,
  GetResourcesSummaryOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetResourcesSummaryCommand,
  serializeAws_json1_0GetResourcesSummaryCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

export interface GetResourcesSummaryCommandInput extends GetResourcesSummaryInput {}
export interface GetResourcesSummaryCommandOutput extends GetResourcesSummaryOutput, __MetadataBearer {}

/**
 * <p>Get counts of Proton resources.</p>
 *          <p>For infrastructure-provisioning resources (environments, services, service instances, pipelines), the action
 *    returns staleness counts. A resource is stale when it's behind the recommended version of the Proton template that it
 *    uses and it needs an update to become current.</p>
 *          <p>The action returns staleness counts (counts of resources that are up-to-date, behind a template major version,
 *    or behind a template minor version), the total number of resources, and the number of resources that are in a failed
 *    state, grouped by resource type. Components, environments, and service templates are exceptions—see the
 *     <code>components</code>, <code>environments</code>, and <code>serviceTemplates</code> field descriptions.</p>
 *          <p>For context, the action also returns the total number of each type of Proton template in the Amazon Web Services account.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/monitoring-dashboard.html">Proton dashboard</a> in the <i>Proton User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetResourcesSummaryCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetResourcesSummaryCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new GetResourcesSummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetResourcesSummaryCommandInput} for command's `input` shape.
 * @see {@link GetResourcesSummaryCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 */
export class GetResourcesSummaryCommand extends $Command<
  GetResourcesSummaryCommandInput,
  GetResourcesSummaryCommandOutput,
  ProtonClientResolvedConfig
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

  constructor(readonly input: GetResourcesSummaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetResourcesSummaryCommandInput, GetResourcesSummaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetResourcesSummaryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "GetResourcesSummaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetResourcesSummaryInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetResourcesSummaryOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetResourcesSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0GetResourcesSummaryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourcesSummaryCommandOutput> {
    return deserializeAws_json1_0GetResourcesSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
