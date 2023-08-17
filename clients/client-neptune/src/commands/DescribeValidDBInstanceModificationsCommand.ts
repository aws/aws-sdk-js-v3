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
} from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  de_DescribeValidDBInstanceModificationsCommand,
  se_DescribeValidDBInstanceModificationsCommand,
} from "../protocols/Aws_query";

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
 * <p>You can call <a>DescribeValidDBInstanceModifications</a>
 *       to learn what modifications you can make to your DB instance. You can use this
 *       information when you call <a>ModifyDBInstance</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeValidDBInstanceModificationsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeValidDBInstanceModificationsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
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
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The specified DB instance is not in the <i>available</i> state.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 */
export class DescribeValidDBInstanceModificationsCommand extends $Command<
  DescribeValidDBInstanceModificationsCommandInput,
  DescribeValidDBInstanceModificationsCommandOutput,
  NeptuneClientResolvedConfig
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
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeValidDBInstanceModificationsCommandInput, DescribeValidDBInstanceModificationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeValidDBInstanceModificationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
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
