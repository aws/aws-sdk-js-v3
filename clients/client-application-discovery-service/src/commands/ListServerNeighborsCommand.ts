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

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { ListServerNeighborsRequest, ListServerNeighborsResponse } from "../models/models_0";
import { de_ListServerNeighborsCommand, se_ListServerNeighborsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListServerNeighborsCommand}.
 */
export interface ListServerNeighborsCommandInput extends ListServerNeighborsRequest {}
/**
 * @public
 *
 * The output of {@link ListServerNeighborsCommand}.
 */
export interface ListServerNeighborsCommandOutput extends ListServerNeighborsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of servers that are one network hop away from a specified
 *       server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, ListServerNeighborsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, ListServerNeighborsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // ListServerNeighborsRequest
 *   configurationId: "STRING_VALUE", // required
 *   portInformationNeeded: true || false,
 *   neighborConfigurationIds: [ // ConfigurationIdList
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListServerNeighborsCommand(input);
 * const response = await client.send(command);
 * // { // ListServerNeighborsResponse
 * //   neighbors: [ // NeighborDetailsList // required
 * //     { // NeighborConnectionDetail
 * //       sourceServerId: "STRING_VALUE", // required
 * //       destinationServerId: "STRING_VALUE", // required
 * //       destinationPort: Number("int"),
 * //       transportProtocol: "STRING_VALUE",
 * //       connectionsCount: Number("long"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   knownDependencyCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param ListServerNeighborsCommandInput - {@link ListServerNeighborsCommandInput}
 * @returns {@link ListServerNeighborsCommandOutput}
 * @see {@link ListServerNeighborsCommandInput} for command's `input` shape.
 * @see {@link ListServerNeighborsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The user does not have permission to perform the action. Check the IAM
 *       policy associated with this user.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home Region is not set. Set the home Region to continue.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 */
export class ListServerNeighborsCommand extends $Command<
  ListServerNeighborsCommandInput,
  ListServerNeighborsCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
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
  constructor(readonly input: ListServerNeighborsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListServerNeighborsCommandInput, ListServerNeighborsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListServerNeighborsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "ListServerNeighborsCommand";
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
  private serialize(input: ListServerNeighborsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListServerNeighborsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListServerNeighborsCommandOutput> {
    return de_ListServerNeighborsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
