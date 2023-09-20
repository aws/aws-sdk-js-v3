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

import { ClusterDbRevisionsMessage, DescribeClusterDbRevisionsMessage } from "../models/models_0";
import { de_DescribeClusterDbRevisionsCommand, se_DescribeClusterDbRevisionsCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterDbRevisionsCommand}.
 */
export interface DescribeClusterDbRevisionsCommandInput extends DescribeClusterDbRevisionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeClusterDbRevisionsCommand}.
 */
export interface DescribeClusterDbRevisionsCommandOutput extends ClusterDbRevisionsMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns an array of <code>ClusterDbRevision</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterDbRevisionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterDbRevisionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeClusterDbRevisionsMessage
 *   ClusterIdentifier: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeClusterDbRevisionsCommand(input);
 * const response = await client.send(command);
 * // { // ClusterDbRevisionsMessage
 * //   Marker: "STRING_VALUE",
 * //   ClusterDbRevisions: [ // ClusterDbRevisionsList
 * //     { // ClusterDbRevision
 * //       ClusterIdentifier: "STRING_VALUE",
 * //       CurrentDatabaseRevision: "STRING_VALUE",
 * //       DatabaseRevisionReleaseDate: new Date("TIMESTAMP"),
 * //       RevisionTargets: [ // RevisionTargetsList
 * //         { // RevisionTarget
 * //           DatabaseRevision: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           DatabaseRevisionReleaseDate: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeClusterDbRevisionsCommandInput - {@link DescribeClusterDbRevisionsCommandInput}
 * @returns {@link DescribeClusterDbRevisionsCommandOutput}
 * @see {@link DescribeClusterDbRevisionsCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterDbRevisionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DescribeClusterDbRevisionsCommand extends $Command<
  DescribeClusterDbRevisionsCommandInput,
  DescribeClusterDbRevisionsCommandOutput,
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
  constructor(readonly input: DescribeClusterDbRevisionsCommandInput) {
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
  ): Handler<DescribeClusterDbRevisionsCommandInput, DescribeClusterDbRevisionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClusterDbRevisionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeClusterDbRevisionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "DescribeClusterDbRevisions",
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
  private serialize(input: DescribeClusterDbRevisionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeClusterDbRevisionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClusterDbRevisionsCommandOutput> {
    return de_DescribeClusterDbRevisionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
