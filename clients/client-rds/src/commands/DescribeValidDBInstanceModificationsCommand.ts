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

import {
  DescribeValidDBInstanceModificationsMessage,
  DescribeValidDBInstanceModificationsResult,
} from "../models/models_1";
import {
  de_DescribeValidDBInstanceModificationsCommand,
  se_DescribeValidDBInstanceModificationsCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeValidDBInstanceModificationsCommand}.
 */
export interface DescribeValidDBInstanceModificationsCommandInput extends DescribeValidDBInstanceModificationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeValidDBInstanceModificationsCommand}.
 */
export interface DescribeValidDBInstanceModificationsCommandOutput
  extends DescribeValidDBInstanceModificationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>You can call <code>DescribeValidDBInstanceModifications</code> to learn what modifications you can make to
 *             your DB instance. You can use this information when you call <code>ModifyDBInstance</code>.</p>
 *          <p>This command doesn't apply to RDS Custom.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeValidDBInstanceModificationsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeValidDBInstanceModificationsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeValidDBInstanceModificationsMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DescribeValidDBInstanceModificationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeValidDBInstanceModificationsResult
 * //   ValidDBInstanceModificationsMessage: { // ValidDBInstanceModificationsMessage
 * //     Storage: [ // ValidStorageOptionsList
 * //       { // ValidStorageOptions
 * //         StorageType: "STRING_VALUE",
 * //         StorageSize: [ // RangeList
 * //           { // Range
 * //             From: Number("int"),
 * //             To: Number("int"),
 * //             Step: Number("int"),
 * //           },
 * //         ],
 * //         ProvisionedIops: [
 * //           {
 * //             From: Number("int"),
 * //             To: Number("int"),
 * //             Step: Number("int"),
 * //           },
 * //         ],
 * //         IopsToStorageRatio: [ // DoubleRangeList
 * //           { // DoubleRange
 * //             From: Number("double"),
 * //             To: Number("double"),
 * //           },
 * //         ],
 * //         SupportsStorageAutoscaling: true || false,
 * //         ProvisionedStorageThroughput: [
 * //           {
 * //             From: Number("int"),
 * //             To: Number("int"),
 * //             Step: Number("int"),
 * //           },
 * //         ],
 * //         StorageThroughputToIopsRatio: [
 * //           {
 * //             From: Number("double"),
 * //             To: Number("double"),
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     ValidProcessorFeatures: [ // AvailableProcessorFeatureList
 * //       { // AvailableProcessorFeature
 * //         Name: "STRING_VALUE",
 * //         DefaultValue: "STRING_VALUE",
 * //         AllowedValues: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeValidDBInstanceModificationsCommandInput - {@link DescribeValidDBInstanceModificationsCommandInput}
 * @returns {@link DescribeValidDBInstanceModificationsCommandOutput}
 * @see {@link DescribeValidDBInstanceModificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeValidDBInstanceModificationsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe valid modifications for a DB instance
 * ```javascript
 * // The following example retrieves details about the valid modifications for the specified DB instance.
 * const input = {
 *   "DBInstanceIdentifier": "database-test1"
 * };
 * const command = new DescribeValidDBInstanceModificationsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ValidDBInstanceModificationsMessage": {
 *     "Storage": [
 *       {
 *         "StorageSize": [
 *           {
 *             "From": 20,
 *             "Step": 1,
 *             "To": 20
 *           },
 *           {
 *             "From": 22,
 *             "Step": 1,
 *             "To": 6144
 *           }
 *         ],
 *         "StorageType": "gp2"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: to-describe-valid-modifications-for-a-db-instance-1680284230997
 * ```
 *
 */
export class DescribeValidDBInstanceModificationsCommand extends $Command<
  DescribeValidDBInstanceModificationsCommandInput,
  DescribeValidDBInstanceModificationsCommandOutput,
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
  constructor(readonly input: DescribeValidDBInstanceModificationsCommandInput) {
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
  ): Handler<DescribeValidDBInstanceModificationsCommandInput, DescribeValidDBInstanceModificationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeValidDBInstanceModificationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeValidDBInstanceModificationsCommand";
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
    input: DescribeValidDBInstanceModificationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeValidDBInstanceModificationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeValidDBInstanceModificationsCommandOutput> {
    return de_DescribeValidDBInstanceModificationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
