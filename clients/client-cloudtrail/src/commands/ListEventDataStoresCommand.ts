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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { ListEventDataStoresRequest, ListEventDataStoresResponse } from "../models/models_0";
import { de_ListEventDataStoresCommand, se_ListEventDataStoresCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEventDataStoresCommand}.
 */
export interface ListEventDataStoresCommandInput extends ListEventDataStoresRequest {}
/**
 * @public
 *
 * The output of {@link ListEventDataStoresCommand}.
 */
export interface ListEventDataStoresCommandOutput extends ListEventDataStoresResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about all event data stores in the account, in the current
 *          Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, ListEventDataStoresCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, ListEventDataStoresCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const input = { // ListEventDataStoresRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEventDataStoresCommand(input);
 * const response = await client.send(command);
 * // { // ListEventDataStoresResponse
 * //   EventDataStores: [ // EventDataStores
 * //     { // EventDataStore
 * //       EventDataStoreArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       TerminationProtectionEnabled: true || false,
 * //       Status: "CREATED" || "ENABLED" || "PENDING_DELETION" || "STARTING_INGESTION" || "STOPPING_INGESTION" || "STOPPED_INGESTION",
 * //       AdvancedEventSelectors: [ // AdvancedEventSelectors
 * //         { // AdvancedEventSelector
 * //           Name: "STRING_VALUE",
 * //           FieldSelectors: [ // AdvancedFieldSelectors // required
 * //             { // AdvancedFieldSelector
 * //               Field: "STRING_VALUE", // required
 * //               Equals: [ // Operator
 * //                 "STRING_VALUE",
 * //               ],
 * //               StartsWith: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               EndsWith: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               NotEquals: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               NotStartsWith: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               NotEndsWith: "<Operator>",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       MultiRegionEnabled: true || false,
 * //       OrganizationEnabled: true || false,
 * //       RetentionPeriod: Number("int"),
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEventDataStoresCommandInput - {@link ListEventDataStoresCommandInput}
 * @returns {@link ListEventDataStoresCommandOutput}
 * @see {@link ListEventDataStoresCommandInput} for command's `input` shape.
 * @see {@link ListEventDataStoresCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link InvalidMaxResultsException} (client fault)
 *  <p>This exception is thrown if the limit specified is not valid.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>A token that is not valid, or a token that was previously used in a request with
 *          different parameters. This exception is thrown if the token is not valid.</p>
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *  <p> This exception is thrown when the management account does not have a service-linked
 *          role. </p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 */
export class ListEventDataStoresCommand extends $Command<
  ListEventDataStoresCommandInput,
  ListEventDataStoresCommandOutput,
  CloudTrailClientResolvedConfig
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
  constructor(readonly input: ListEventDataStoresCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEventDataStoresCommandInput, ListEventDataStoresCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEventDataStoresCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "ListEventDataStoresCommand";
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
  private serialize(input: ListEventDataStoresCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEventDataStoresCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEventDataStoresCommandOutput> {
    return de_ListEventDataStoresCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
