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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetConnectionsRequest, GetConnectionsResponse } from "../models/models_1";
import { de_GetConnectionsCommand, se_GetConnectionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConnectionsCommand}.
 */
export interface GetConnectionsCommandInput extends GetConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectionsCommand}.
 */
export interface GetConnectionsCommandOutput extends GetConnectionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list of connection definitions from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetConnectionsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetConnectionsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetConnectionsRequest
 *   CatalogId: "STRING_VALUE",
 *   Filter: { // GetConnectionsFilter
 *     MatchCriteria: [ // MatchCriteria
 *       "STRING_VALUE",
 *     ],
 *     ConnectionType: "JDBC" || "SFTP" || "MONGODB" || "KAFKA" || "NETWORK" || "MARKETPLACE" || "CUSTOM",
 *   },
 *   HidePassword: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectionsResponse
 * //   ConnectionList: [ // ConnectionList
 * //     { // Connection
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ConnectionType: "JDBC" || "SFTP" || "MONGODB" || "KAFKA" || "NETWORK" || "MARKETPLACE" || "CUSTOM",
 * //       MatchCriteria: [ // MatchCriteria
 * //         "STRING_VALUE",
 * //       ],
 * //       ConnectionProperties: { // ConnectionProperties
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       PhysicalConnectionRequirements: { // PhysicalConnectionRequirements
 * //         SubnetId: "STRING_VALUE",
 * //         SecurityGroupIdList: [ // SecurityGroupIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         AvailabilityZone: "STRING_VALUE",
 * //       },
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       LastUpdatedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConnectionsCommandInput - {@link GetConnectionsCommandInput}
 * @returns {@link GetConnectionsCommandOutput}
 * @see {@link GetConnectionsCommandInput} for command's `input` shape.
 * @see {@link GetConnectionsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetConnectionsCommand extends $Command<
  GetConnectionsCommandInput,
  GetConnectionsCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: GetConnectionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConnectionsCommandInput, GetConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConnectionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetConnections",
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
  private serialize(input: GetConnectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetConnectionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConnectionsCommandOutput> {
    return de_GetConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
