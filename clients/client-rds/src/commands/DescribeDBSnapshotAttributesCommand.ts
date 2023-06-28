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

import { DescribeDBSnapshotAttributesMessage, DescribeDBSnapshotAttributesResult } from "../models/models_1";
import { de_DescribeDBSnapshotAttributesCommand, se_DescribeDBSnapshotAttributesCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBSnapshotAttributesCommand}.
 */
export interface DescribeDBSnapshotAttributesCommandInput extends DescribeDBSnapshotAttributesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBSnapshotAttributesCommand}.
 */
export interface DescribeDBSnapshotAttributesCommandOutput
  extends DescribeDBSnapshotAttributesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p>
 *          <p>When sharing snapshots with other Amazon Web Services accounts, <code>DescribeDBSnapshotAttributes</code>
 *       returns the <code>restore</code> attribute and a list of IDs for the Amazon Web Services accounts that are
 *       authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of
 *       values for the <code>restore</code> attribute, then the manual DB snapshot is public and
 *       can be copied or restored by all Amazon Web Services accounts.</p>
 *          <p>To add or remove access for an Amazon Web Services account to copy or restore a manual DB snapshot, or to make the
 *       manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBSnapshotAttributesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBSnapshotAttributesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeDBSnapshotAttributesMessage
 *   DBSnapshotIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DescribeDBSnapshotAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDBSnapshotAttributesResult
 * //   DBSnapshotAttributesResult: { // DBSnapshotAttributesResult
 * //     DBSnapshotIdentifier: "STRING_VALUE",
 * //     DBSnapshotAttributes: [ // DBSnapshotAttributeList
 * //       { // DBSnapshotAttribute
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
 * @param DescribeDBSnapshotAttributesCommandInput - {@link DescribeDBSnapshotAttributesCommandInput}
 * @returns {@link DescribeDBSnapshotAttributesCommandOutput}
 * @see {@link DescribeDBSnapshotAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBSnapshotAttributesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe the attribute names and values for a DB snapshot
 * ```javascript
 * // The following example describes the attribute names and values for a DB snapshot.
 * const input = {
 *   "DBSnapshotIdentifier": "mydbsnapshot"
 * };
 * const command = new DescribeDBSnapshotAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBSnapshotAttributesResult": {
 *     "DBSnapshotAttributes": [
 *       {
 *         "AttributeName": "restore",
 *         "AttributeValues": [
 *           "123456789012",
 *           "210987654321"
 *         ]
 *       }
 *     ],
 *     "DBSnapshotIdentifier": "mydbsnapshot"
 *   }
 * }
 * *\/
 * // example id: to-describe-the-attribute-names-and-values-for-a-db-snapshot-1680280194370
 * ```
 *
 */
export class DescribeDBSnapshotAttributesCommand extends $Command<
  DescribeDBSnapshotAttributesCommandInput,
  DescribeDBSnapshotAttributesCommandOutput,
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
  constructor(readonly input: DescribeDBSnapshotAttributesCommandInput) {
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
  ): Handler<DescribeDBSnapshotAttributesCommandInput, DescribeDBSnapshotAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBSnapshotAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBSnapshotAttributesCommand";
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
  private serialize(input: DescribeDBSnapshotAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDBSnapshotAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBSnapshotAttributesCommandOutput> {
    return de_DescribeDBSnapshotAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
