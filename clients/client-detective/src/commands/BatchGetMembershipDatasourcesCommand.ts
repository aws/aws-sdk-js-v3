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

import { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { BatchGetMembershipDatasourcesRequest, BatchGetMembershipDatasourcesResponse } from "../models/models_0";
import {
  de_BatchGetMembershipDatasourcesCommand,
  se_BatchGetMembershipDatasourcesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetMembershipDatasourcesCommand}.
 */
export interface BatchGetMembershipDatasourcesCommandInput extends BatchGetMembershipDatasourcesRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetMembershipDatasourcesCommand}.
 */
export interface BatchGetMembershipDatasourcesCommandOutput
  extends BatchGetMembershipDatasourcesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets information on the data source package history for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, BatchGetMembershipDatasourcesCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, BatchGetMembershipDatasourcesCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const input = { // BatchGetMembershipDatasourcesRequest
 *   GraphArns: [ // GraphArnList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetMembershipDatasourcesCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetMembershipDatasourcesResponse
 * //   MembershipDatasources: [ // MembershipDatasourcesList
 * //     { // MembershipDatasources
 * //       AccountId: "STRING_VALUE",
 * //       GraphArn: "STRING_VALUE",
 * //       DatasourcePackageIngestHistory: { // DatasourcePackageIngestHistory
 * //         "<keys>": { // LastIngestStateChangeDates
 * //           "<keys>": { // TimestampForCollection
 * //             Timestamp: new Date("TIMESTAMP"),
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   UnprocessedGraphs: [ // UnprocessedGraphList
 * //     { // UnprocessedGraph
 * //       GraphArn: "STRING_VALUE",
 * //       Reason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetMembershipDatasourcesCommandInput - {@link BatchGetMembershipDatasourcesCommandInput}
 * @returns {@link BatchGetMembershipDatasourcesCommandOutput}
 * @see {@link BatchGetMembershipDatasourcesCommandInput} for command's `input` shape.
 * @see {@link BatchGetMembershipDatasourcesCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request refers to a nonexistent resource.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 */
export class BatchGetMembershipDatasourcesCommand extends $Command<
  BatchGetMembershipDatasourcesCommandInput,
  BatchGetMembershipDatasourcesCommandOutput,
  DetectiveClientResolvedConfig
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
  constructor(readonly input: BatchGetMembershipDatasourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DetectiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetMembershipDatasourcesCommandInput, BatchGetMembershipDatasourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetMembershipDatasourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "BatchGetMembershipDatasourcesCommand";
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
  private serialize(input: BatchGetMembershipDatasourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetMembershipDatasourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetMembershipDatasourcesCommandOutput> {
    return de_BatchGetMembershipDatasourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
