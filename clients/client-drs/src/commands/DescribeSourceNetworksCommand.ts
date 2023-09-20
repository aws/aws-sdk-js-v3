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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import {
  DescribeSourceNetworksRequest,
  DescribeSourceNetworksResponse,
  DescribeSourceNetworksResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeSourceNetworksCommand, se_DescribeSourceNetworksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSourceNetworksCommand}.
 */
export interface DescribeSourceNetworksCommandInput extends DescribeSourceNetworksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSourceNetworksCommand}.
 */
export interface DescribeSourceNetworksCommandOutput extends DescribeSourceNetworksResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all Source Networks or multiple Source Networks filtered by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DescribeSourceNetworksCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DescribeSourceNetworksCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // DescribeSourceNetworksRequest
 *   filters: { // DescribeSourceNetworksRequestFilters
 *     sourceNetworkIDs: [ // DescribeSourceNetworksRequestFiltersIDs
 *       "STRING_VALUE",
 *     ],
 *     originAccountID: "STRING_VALUE",
 *     originRegion: "STRING_VALUE",
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeSourceNetworksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSourceNetworksResponse
 * //   items: [ // SourceNetworksList
 * //     { // SourceNetwork
 * //       sourceNetworkID: "STRING_VALUE",
 * //       sourceVpcID: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       replicationStatus: "STRING_VALUE",
 * //       replicationStatusDetails: "STRING_VALUE",
 * //       cfnStackName: "STRING_VALUE",
 * //       sourceRegion: "STRING_VALUE",
 * //       sourceAccountID: "STRING_VALUE",
 * //       lastRecovery: { // RecoveryLifeCycle
 * //         apiCallDateTime: new Date("TIMESTAMP"),
 * //         jobID: "STRING_VALUE",
 * //         lastRecoveryResult: "STRING_VALUE",
 * //       },
 * //       launchedVpcID: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSourceNetworksCommandInput - {@link DescribeSourceNetworksCommandInput}
 * @returns {@link DescribeSourceNetworksCommandOutput}
 * @see {@link DescribeSourceNetworksCommandInput} for command's `input` shape.
 * @see {@link DescribeSourceNetworksCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 */
export class DescribeSourceNetworksCommand extends $Command<
  DescribeSourceNetworksCommandInput,
  DescribeSourceNetworksCommandOutput,
  DrsClientResolvedConfig
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
  constructor(readonly input: DescribeSourceNetworksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSourceNetworksCommandInput, DescribeSourceNetworksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSourceNetworksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "DescribeSourceNetworksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeSourceNetworksResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticDisasterRecoveryService",
        operation: "DescribeSourceNetworks",
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
  private serialize(input: DescribeSourceNetworksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSourceNetworksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSourceNetworksCommandOutput> {
    return de_DescribeSourceNetworksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
