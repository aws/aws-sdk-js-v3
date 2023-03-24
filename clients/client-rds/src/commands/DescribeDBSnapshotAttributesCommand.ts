// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DescribeDBSnapshotAttributesMessage, DescribeDBSnapshotAttributesResult } from "../models/models_1";
import {
  deserializeAws_queryDescribeDBSnapshotAttributesCommand,
  serializeAws_queryDescribeDBSnapshotAttributesCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

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
 * const input = {
 *   DBSnapshotIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DescribeDBSnapshotAttributesCommand(input);
 * const response = await client.send(command);
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
 *
 * @example To list DB snapshot attributes
 * ```javascript
 * // This example lists attributes for the specified DB snapshot.
 * const input = {
 *   "DBSnapshotIdentifier": "mydbsnapshot"
 * };
 * const command = new DescribeDBSnapshotAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBSnapshotAttributesResult": {}
 * }
 * *\/
 * // example id: describe-db-snapshot-attributes-1d4fb750-34f6-4e43-8b3d-b2751d796a95
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
    return serializeAws_queryDescribeDBSnapshotAttributesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBSnapshotAttributesCommandOutput> {
    return deserializeAws_queryDescribeDBSnapshotAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
