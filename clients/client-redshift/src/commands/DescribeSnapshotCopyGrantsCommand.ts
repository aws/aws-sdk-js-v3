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

import { DescribeSnapshotCopyGrantsMessage, SnapshotCopyGrantMessage } from "../models/models_1";
import { de_DescribeSnapshotCopyGrantsCommand, se_DescribeSnapshotCopyGrantsCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSnapshotCopyGrantsCommand}.
 */
export interface DescribeSnapshotCopyGrantsCommandInput extends DescribeSnapshotCopyGrantsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotCopyGrantsCommand}.
 */
export interface DescribeSnapshotCopyGrantsCommandOutput extends SnapshotCopyGrantMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of snapshot copy grants owned by the Amazon Web Services account in the destination
 *             region.</p>
 *          <p>
 * For more information about managing snapshot copy grants, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeSnapshotCopyGrantsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeSnapshotCopyGrantsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeSnapshotCopyGrantsMessage
 *   SnapshotCopyGrantName: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   TagKeys: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 *   TagValues: [ // TagValueList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeSnapshotCopyGrantsCommand(input);
 * const response = await client.send(command);
 * // { // SnapshotCopyGrantMessage
 * //   Marker: "STRING_VALUE",
 * //   SnapshotCopyGrants: [ // SnapshotCopyGrantList
 * //     { // SnapshotCopyGrant
 * //       SnapshotCopyGrantName: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSnapshotCopyGrantsCommandInput - {@link DescribeSnapshotCopyGrantsCommandInput}
 * @returns {@link DescribeSnapshotCopyGrantsCommandOutput}
 * @see {@link DescribeSnapshotCopyGrantsCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotCopyGrantsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link SnapshotCopyGrantNotFoundFault} (client fault)
 *  <p>The specified snapshot copy grant can't be found. Make sure that the name is typed
 *             correctly and that the grant exists in the destination region.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DescribeSnapshotCopyGrantsCommand extends $Command<
  DescribeSnapshotCopyGrantsCommandInput,
  DescribeSnapshotCopyGrantsCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: DescribeSnapshotCopyGrantsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSnapshotCopyGrantsCommandInput, DescribeSnapshotCopyGrantsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSnapshotCopyGrantsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeSnapshotCopyGrantsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "DescribeSnapshotCopyGrants",
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
  private serialize(input: DescribeSnapshotCopyGrantsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSnapshotCopyGrantsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSnapshotCopyGrantsCommandOutput> {
    return de_DescribeSnapshotCopyGrantsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
