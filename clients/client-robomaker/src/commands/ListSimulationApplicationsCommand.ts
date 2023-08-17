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

import { ListSimulationApplicationsRequest, ListSimulationApplicationsResponse } from "../models/models_0";
import { de_ListSimulationApplicationsCommand, se_ListSimulationApplicationsCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSimulationApplicationsCommand}.
 */
export interface ListSimulationApplicationsCommandInput extends ListSimulationApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSimulationApplicationsCommand}.
 */
export interface ListSimulationApplicationsCommandOutput extends ListSimulationApplicationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of simulation applications. You can optionally provide filters to
 *          retrieve specific simulation applications. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListSimulationApplicationsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListSimulationApplicationsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // ListSimulationApplicationsRequest
 *   versionQualifier: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // Filters
 *     { // Filter
 *       name: "STRING_VALUE",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListSimulationApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSimulationApplicationsResponse
 * //   simulationApplicationSummaries: [ // SimulationApplicationSummaries
 * //     { // SimulationApplicationSummary
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       robotSoftwareSuite: { // RobotSoftwareSuite
 * //         name: "STRING_VALUE",
 * //         version: "STRING_VALUE",
 * //       },
 * //       simulationSoftwareSuite: { // SimulationSoftwareSuite
 * //         name: "STRING_VALUE",
 * //         version: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSimulationApplicationsCommandInput - {@link ListSimulationApplicationsCommandInput}
 * @returns {@link ListSimulationApplicationsCommandOutput}
 * @see {@link ListSimulationApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListSimulationApplicationsCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for RoboMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter specified in a request is not valid, is unsupported, or cannot be used. The
 *          returned message provides an explanation of the error value.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RoboMakerServiceException}
 * <p>Base exception class for all service exceptions from RoboMaker service.</p>
 *
 */
export class ListSimulationApplicationsCommand extends $Command<
  ListSimulationApplicationsCommandInput,
  ListSimulationApplicationsCommandOutput,
  RoboMakerClientResolvedConfig
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
  constructor(readonly input: ListSimulationApplicationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSimulationApplicationsCommandInput, ListSimulationApplicationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSimulationApplicationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "ListSimulationApplicationsCommand";
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
  private serialize(input: ListSimulationApplicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSimulationApplicationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSimulationApplicationsCommandOutput> {
    return de_ListSimulationApplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
