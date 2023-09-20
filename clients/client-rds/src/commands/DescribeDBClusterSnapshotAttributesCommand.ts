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

import {
  DescribeDBClusterSnapshotAttributesMessage,
  DescribeDBClusterSnapshotAttributesResult,
} from "../models/models_0";
import {
  de_DescribeDBClusterSnapshotAttributesCommand,
  se_DescribeDBClusterSnapshotAttributesCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBClusterSnapshotAttributesCommand}.
 */
export interface DescribeDBClusterSnapshotAttributesCommandInput extends DescribeDBClusterSnapshotAttributesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBClusterSnapshotAttributesCommand}.
 */
export interface DescribeDBClusterSnapshotAttributesCommandOutput
  extends DescribeDBClusterSnapshotAttributesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster snapshot.</p>
 *          <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBClusterSnapshotAttributes</code>
 *             returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are
 *             authorized to copy or restore the manual DB cluster snapshot. If <code>all</code> is included in the list of
 *             values for the <code>restore</code> attribute, then the manual DB cluster snapshot is public and
 *             can be copied or restored by all Amazon Web Services accounts.</p>
 *          <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB cluster snapshot, or to make the
 *             manual DB cluster snapshot public or private, use the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBClusterSnapshotAttributesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBClusterSnapshotAttributesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeDBClusterSnapshotAttributesMessage
 *   DBClusterSnapshotIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DescribeDBClusterSnapshotAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDBClusterSnapshotAttributesResult
 * //   DBClusterSnapshotAttributesResult: { // DBClusterSnapshotAttributesResult
 * //     DBClusterSnapshotIdentifier: "STRING_VALUE",
 * //     DBClusterSnapshotAttributes: [ // DBClusterSnapshotAttributeList
 * //       { // DBClusterSnapshotAttribute
 * //         AttributeName: "STRING_VALUE",
 * //         AttributeValues: [ // AttributeValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDBClusterSnapshotAttributesCommandInput - {@link DescribeDBClusterSnapshotAttributesCommandInput}
 * @returns {@link DescribeDBClusterSnapshotAttributesCommandOutput}
 * @see {@link DescribeDBClusterSnapshotAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterSnapshotAttributesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe the attribute names and values for a DB cluster snapshot
 * ```javascript
 * // The following example retrieves details of the attribute names and values for the specified DB cluster snapshot.
 * const input = {
 *   "DBClusterSnapshotIdentifier": "myclustersnapshot"
 * };
 * const command = new DescribeDBClusterSnapshotAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBClusterSnapshotAttributesResult": {
 *     "DBClusterSnapshotAttributes": [
 *       {
 *         "AttributeName": "restore",
 *         "AttributeValues": [
 *           "123456789012"
 *         ]
 *       }
 *     ],
 *     "DBClusterSnapshotIdentifier": "myclustersnapshot"
 *   }
 * }
 * *\/
 * // example id: to-describe-the-attribute-names-and-values-for-a-db-cluster-snapshot-1680216238905
 * ```
 *
 */
export class DescribeDBClusterSnapshotAttributesCommand extends $Command<
  DescribeDBClusterSnapshotAttributesCommandInput,
  DescribeDBClusterSnapshotAttributesCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: DescribeDBClusterSnapshotAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBClusterSnapshotAttributesCommandInput, DescribeDBClusterSnapshotAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBClusterSnapshotAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBClusterSnapshotAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DescribeDBClusterSnapshotAttributes",
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
  private serialize(
    input: DescribeDBClusterSnapshotAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeDBClusterSnapshotAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBClusterSnapshotAttributesCommandOutput> {
    return de_DescribeDBClusterSnapshotAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
