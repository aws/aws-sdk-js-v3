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
} from "@smithy/types";

import { GetResourcesSummaryInput, GetResourcesSummaryOutput } from "../models/models_0";
import { de_GetResourcesSummaryCommand, se_GetResourcesSummaryCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetResourcesSummaryCommand}.
 */
export interface GetResourcesSummaryCommandInput extends GetResourcesSummaryInput {}
/**
 * @public
 *
 * The output of {@link GetResourcesSummaryCommand}.
 */
export interface GetResourcesSummaryCommandOutput extends GetResourcesSummaryOutput, __MetadataBearer {}

/**
 * @public
 * <p>Get counts of Proton resources.</p>
 *          <p>For infrastructure-provisioning resources (environments, services, service instances, pipelines), the action returns staleness counts. A
 *    resource is stale when it's behind the recommended version of the Proton template that it uses and it needs an update to become current.</p>
 *          <p>The action returns staleness counts (counts of resources that are up-to-date, behind a template major version, or behind a template minor
 *    version), the total number of resources, and the number of resources that are in a failed state, grouped by resource type. Components,
 *    environments, and service templates return less information - see the <code>components</code>, <code>environments</code>, and
 *     <code>serviceTemplates</code> field descriptions.</p>
 *          <p>For context, the action also returns the total number of each type of Proton template in the Amazon Web Services account.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/monitoring-dashboard.html">Proton dashboard</a> in the
 *     <i>Proton User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetResourcesSummaryCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetResourcesSummaryCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = {};
 * const command = new GetResourcesSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetResourcesSummaryOutput
 * //   counts: { // CountsSummary
 * //     components: { // ResourceCountsSummary
 * //       total: Number("int"), // required
 * //       failed: Number("int"),
 * //       upToDate: Number("int"),
 * //       behindMajor: Number("int"),
 * //       behindMinor: Number("int"),
 * //     },
 * //     environments: {
 * //       total: Number("int"), // required
 * //       failed: Number("int"),
 * //       upToDate: Number("int"),
 * //       behindMajor: Number("int"),
 * //       behindMinor: Number("int"),
 * //     },
 * //     environmentTemplates: {
 * //       total: Number("int"), // required
 * //       failed: Number("int"),
 * //       upToDate: Number("int"),
 * //       behindMajor: Number("int"),
 * //       behindMinor: Number("int"),
 * //     },
 * //     serviceInstances: {
 * //       total: Number("int"), // required
 * //       failed: Number("int"),
 * //       upToDate: Number("int"),
 * //       behindMajor: Number("int"),
 * //       behindMinor: Number("int"),
 * //     },
 * //     services: {
 * //       total: Number("int"), // required
 * //       failed: Number("int"),
 * //       upToDate: Number("int"),
 * //       behindMajor: Number("int"),
 * //       behindMinor: Number("int"),
 * //     },
 * //     serviceTemplates: "<ResourceCountsSummary>",
 * //     pipelines: "<ResourceCountsSummary>",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetResourcesSummaryCommandInput - {@link GetResourcesSummaryCommandInput}
 * @returns {@link GetResourcesSummaryCommandOutput}
 * @see {@link GetResourcesSummaryCommandInput} for command's `input` shape.
 * @see {@link GetResourcesSummaryCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: GetResourcesSummaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetResourcesSummaryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetResourcesSummaryCommandOutput> {
    return de_GetResourcesSummaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
