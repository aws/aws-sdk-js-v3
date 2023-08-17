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
import { BatchGetGraphMemberDatasourcesRequest, BatchGetGraphMemberDatasourcesResponse } from "../models/models_0";
import {
  de_BatchGetGraphMemberDatasourcesCommand,
  se_BatchGetGraphMemberDatasourcesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetGraphMemberDatasourcesCommand}.
 */
export interface BatchGetGraphMemberDatasourcesCommandInput extends BatchGetGraphMemberDatasourcesRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetGraphMemberDatasourcesCommand}.
 */
export interface BatchGetGraphMemberDatasourcesCommandOutput
  extends BatchGetGraphMemberDatasourcesResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets data source package information for the behavior graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, BatchGetGraphMemberDatasourcesCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, BatchGetGraphMemberDatasourcesCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const input = { // BatchGetGraphMemberDatasourcesRequest
 *   GraphArn: "STRING_VALUE", // required
 *   AccountIds: [ // AccountIdExtendedList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetGraphMemberDatasourcesCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetGraphMemberDatasourcesResponse
 * //   MemberDatasources: [ // MembershipDatasourcesList
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
 * //   UnprocessedAccounts: [ // UnprocessedAccountList
 * //     { // UnprocessedAccount
 * //       AccountId: "STRING_VALUE",
 * //       Reason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetGraphMemberDatasourcesCommandInput - {@link BatchGetGraphMemberDatasourcesCommandInput}
 * @returns {@link BatchGetGraphMemberDatasourcesCommandOutput}
 * @see {@link BatchGetGraphMemberDatasourcesCommandInput} for command's `input` shape.
 * @see {@link BatchGetGraphMemberDatasourcesCommandOutput} for command's `response` shape.
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
export class BatchGetGraphMemberDatasourcesCommand extends $Command<
  BatchGetGraphMemberDatasourcesCommandInput,
  BatchGetGraphMemberDatasourcesCommandOutput,
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
  constructor(readonly input: BatchGetGraphMemberDatasourcesCommandInput) {
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
  ): Handler<BatchGetGraphMemberDatasourcesCommandInput, BatchGetGraphMemberDatasourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetGraphMemberDatasourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DetectiveClient";
    const commandName = "BatchGetGraphMemberDatasourcesCommand";
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
  private serialize(
    input: BatchGetGraphMemberDatasourcesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchGetGraphMemberDatasourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetGraphMemberDatasourcesCommandOutput> {
    return de_BatchGetGraphMemberDatasourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
