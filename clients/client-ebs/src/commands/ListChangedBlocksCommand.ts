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

import { EBSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EBSClient";
import {
  ListChangedBlocksRequest,
  ListChangedBlocksResponse,
  ListChangedBlocksResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListChangedBlocksCommand, se_ListChangedBlocksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListChangedBlocksCommand}.
 */
export interface ListChangedBlocksCommandInput extends ListChangedBlocksRequest {}
/**
 * @public
 *
 * The output of {@link ListChangedBlocksCommand}.
 */
export interface ListChangedBlocksCommandOutput extends ListChangedBlocksResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about the blocks that are different between two
 *             Amazon Elastic Block Store snapshots of the same volume/snapshot lineage.</p>
 *          <note>
 *             <p>You should always retry requests that receive server (<code>5xx</code>)
 *     error responses, and <code>ThrottlingException</code> and <code>RequestThrottledException</code>
 *     client error responses. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a> in the
 *         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EBSClient, ListChangedBlocksCommand } from "@aws-sdk/client-ebs"; // ES Modules import
 * // const { EBSClient, ListChangedBlocksCommand } = require("@aws-sdk/client-ebs"); // CommonJS import
 * const client = new EBSClient(config);
 * const input = { // ListChangedBlocksRequest
 *   FirstSnapshotId: "STRING_VALUE",
 *   SecondSnapshotId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   StartingBlockIndex: Number("int"),
 * };
 * const command = new ListChangedBlocksCommand(input);
 * const response = await client.send(command);
 * // { // ListChangedBlocksResponse
 * //   ChangedBlocks: [ // ChangedBlocks
 * //     { // ChangedBlock
 * //       BlockIndex: Number("int"),
 * //       FirstBlockToken: "STRING_VALUE",
 * //       SecondBlockToken: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ExpiryTime: new Date("TIMESTAMP"),
 * //   VolumeSize: Number("long"),
 * //   BlockSize: Number("int"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChangedBlocksCommandInput - {@link ListChangedBlocksCommandInput}
 * @returns {@link ListChangedBlocksCommandOutput}
 * @see {@link ListChangedBlocksCommandInput} for command's `input` shape.
 * @see {@link ListChangedBlocksCommandOutput} for command's `response` shape.
 * @see {@link EBSClientResolvedConfig | config} for EBSClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a>.</p>
 *
 * @throws {@link RequestThrottledException} (client fault)
 *  <p>The number of API requests has exceeded the maximum allowed API request
 *             throttling limit for the snapshot. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Your current service quotas do not allow you to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints of the EBS direct APIs.</p>
 *
 * @throws {@link EBSServiceException}
 * <p>Base exception class for all service exceptions from EBS service.</p>
 *
 */
export class ListChangedBlocksCommand extends $Command<
  ListChangedBlocksCommandInput,
  ListChangedBlocksCommandOutput,
  EBSClientResolvedConfig
> {
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
  constructor(readonly input: ListChangedBlocksCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EBSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListChangedBlocksCommandInput, ListChangedBlocksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListChangedBlocksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EBSClient";
    const commandName = "ListChangedBlocksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListChangedBlocksResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "Ebs",
        operation: "ListChangedBlocks",
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
  private serialize(input: ListChangedBlocksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListChangedBlocksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListChangedBlocksCommandOutput> {
    return de_ListChangedBlocksCommand(output, context);
  }
}
