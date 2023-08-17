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

import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListDataflowEndpointGroupsRequest, ListDataflowEndpointGroupsResponse } from "../models/models_0";
import { de_ListDataflowEndpointGroupsCommand, se_ListDataflowEndpointGroupsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDataflowEndpointGroupsCommand}.
 */
export interface ListDataflowEndpointGroupsCommandInput extends ListDataflowEndpointGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataflowEndpointGroupsCommand}.
 */
export interface ListDataflowEndpointGroupsCommandOutput extends ListDataflowEndpointGroupsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of <code>DataflowEndpoint</code> groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListDataflowEndpointGroupsCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListDataflowEndpointGroupsCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const input = { // ListDataflowEndpointGroupsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDataflowEndpointGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataflowEndpointGroupsResponse
 * //   nextToken: "STRING_VALUE",
 * //   dataflowEndpointGroupList: [ // DataflowEndpointGroupList
 * //     { // DataflowEndpointListItem
 * //       dataflowEndpointGroupId: "STRING_VALUE",
 * //       dataflowEndpointGroupArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDataflowEndpointGroupsCommandInput - {@link ListDataflowEndpointGroupsCommandInput}
 * @returns {@link ListDataflowEndpointGroupsCommandOutput}
 * @see {@link ListDataflowEndpointGroupsCommandInput} for command's `input` shape.
 * @see {@link ListDataflowEndpointGroupsCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Dependency encountered an error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link GroundStationServiceException}
 * <p>Base exception class for all service exceptions from GroundStation service.</p>
 *
 */
export class ListDataflowEndpointGroupsCommand extends $Command<
  ListDataflowEndpointGroupsCommandInput,
  ListDataflowEndpointGroupsCommandOutput,
  GroundStationClientResolvedConfig
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
  constructor(readonly input: ListDataflowEndpointGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GroundStationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDataflowEndpointGroupsCommandInput, ListDataflowEndpointGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDataflowEndpointGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GroundStationClient";
    const commandName = "ListDataflowEndpointGroupsCommand";
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
  private serialize(input: ListDataflowEndpointGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDataflowEndpointGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDataflowEndpointGroupsCommandOutput> {
    return de_ListDataflowEndpointGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
