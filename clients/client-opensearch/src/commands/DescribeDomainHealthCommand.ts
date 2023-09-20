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

import { DescribeDomainHealthRequest, DescribeDomainHealthResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_DescribeDomainHealthCommand, se_DescribeDomainHealthCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDomainHealthCommand}.
 */
export interface DescribeDomainHealthCommandInput extends DescribeDomainHealthRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDomainHealthCommand}.
 */
export interface DescribeDomainHealthCommandOutput extends DescribeDomainHealthResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about domain and node health, the standby Availability Zone, number of nodes per Availability Zone, and shard count per node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DescribeDomainHealthCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DescribeDomainHealthCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // DescribeDomainHealthRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DescribeDomainHealthCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDomainHealthResponse
 * //   DomainState: "Active" || "Processing" || "NotAvailable",
 * //   AvailabilityZoneCount: "STRING_VALUE",
 * //   ActiveAvailabilityZoneCount: "STRING_VALUE",
 * //   StandByAvailabilityZoneCount: "STRING_VALUE",
 * //   DataNodeCount: "STRING_VALUE",
 * //   DedicatedMaster: true || false,
 * //   MasterEligibleNodeCount: "STRING_VALUE",
 * //   WarmNodeCount: "STRING_VALUE",
 * //   MasterNode: "Available" || "UnAvailable",
 * //   ClusterHealth: "Red" || "Yellow" || "Green" || "NotAvailable",
 * //   TotalShards: "STRING_VALUE",
 * //   TotalUnAssignedShards: "STRING_VALUE",
 * //   EnvironmentInformation: [ // EnvironmentInfoList
 * //     { // EnvironmentInfo
 * //       AvailabilityZoneInformation: [ // AvailabilityZoneInfoList
 * //         { // AvailabilityZoneInfo
 * //           AvailabilityZoneName: "STRING_VALUE",
 * //           ZoneStatus: "Active" || "StandBy" || "NotAvailable",
 * //           ConfiguredDataNodeCount: "STRING_VALUE",
 * //           AvailableDataNodeCount: "STRING_VALUE",
 * //           TotalShards: "STRING_VALUE",
 * //           TotalUnAssignedShards: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDomainHealthCommandInput - {@link DescribeDomainHealthCommandInput}
 * @returns {@link DescribeDomainHealthCommandOutput}
 * @see {@link DescribeDomainHealthCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainHealthCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 */
export class DescribeDomainHealthCommand extends $Command<
  DescribeDomainHealthCommandInput,
  DescribeDomainHealthCommandOutput,
  OpenSearchClientResolvedConfig
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
  constructor(readonly input: DescribeDomainHealthCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDomainHealthCommandInput, DescribeDomainHealthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDomainHealthCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "DescribeDomainHealthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonOpenSearchService",
        operation: "DescribeDomainHealth",
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
  private serialize(input: DescribeDomainHealthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDomainHealthCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDomainHealthCommandOutput> {
    return de_DescribeDomainHealthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
