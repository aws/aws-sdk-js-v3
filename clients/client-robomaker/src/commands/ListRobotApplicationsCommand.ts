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

import { ListRobotApplicationsRequest, ListRobotApplicationsResponse } from "../models/models_0";
import { de_ListRobotApplicationsCommand, se_ListRobotApplicationsCommand } from "../protocols/Aws_restJson1";
import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRobotApplicationsCommand}.
 */
export interface ListRobotApplicationsCommandInput extends ListRobotApplicationsRequest {}
/**
 * @public
 *
 * The output of {@link ListRobotApplicationsCommand}.
 */
export interface ListRobotApplicationsCommandOutput extends ListRobotApplicationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of robot application. You can optionally provide filters to retrieve
 *          specific robot applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, ListRobotApplicationsCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, ListRobotApplicationsCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const input = { // ListRobotApplicationsRequest
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
 * const command = new ListRobotApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRobotApplicationsResponse
 * //   robotApplicationSummaries: [ // RobotApplicationSummaries
 * //     { // RobotApplicationSummary
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //       robotSoftwareSuite: { // RobotSoftwareSuite
 * //         name: "ROS" || "ROS2" || "General",
 * //         version: "Kinetic" || "Melodic" || "Dashing" || "Foxy",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRobotApplicationsCommandInput - {@link ListRobotApplicationsCommandInput}
 * @returns {@link ListRobotApplicationsCommandOutput}
 * @see {@link ListRobotApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListRobotApplicationsCommandOutput} for command's `response` shape.
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
export class ListRobotApplicationsCommand extends $Command<
  ListRobotApplicationsCommandInput,
  ListRobotApplicationsCommandOutput,
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
  constructor(readonly input: ListRobotApplicationsCommandInput) {
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
  ): Handler<ListRobotApplicationsCommandInput, ListRobotApplicationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRobotApplicationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "ListRobotApplicationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "robomaker",
        operation: "ListRobotApplications",
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
  private serialize(input: ListRobotApplicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRobotApplicationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRobotApplicationsCommandOutput> {
    return de_ListRobotApplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
