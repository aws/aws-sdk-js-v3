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

import { ModifyDBSubnetGroupMessage, ModifyDBSubnetGroupResult } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_ModifyDBSubnetGroupCommand, se_ModifyDBSubnetGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBSubnetGroupCommand}.
 */
export interface ModifyDBSubnetGroupCommandInput extends ModifyDBSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBSubnetGroupCommand}.
 */
export interface ModifyDBSubnetGroupCommandOutput extends ModifyDBSubnetGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies an existing DB subnet group. DB subnet groups must contain at least one subnet in
 *       at least two AZs in the Amazon Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ModifyDBSubnetGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ModifyDBSubnetGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // ModifyDBSubnetGroupMessage
 *   DBSubnetGroupName: "STRING_VALUE", // required
 *   DBSubnetGroupDescription: "STRING_VALUE",
 *   SubnetIds: [ // SubnetIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyDBSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDBSubnetGroupResult
 * //   DBSubnetGroup: { // DBSubnetGroup
 * //     DBSubnetGroupName: "STRING_VALUE",
 * //     DBSubnetGroupDescription: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     SubnetGroupStatus: "STRING_VALUE",
 * //     Subnets: [ // SubnetList
 * //       { // Subnet
 * //         SubnetIdentifier: "STRING_VALUE",
 * //         SubnetAvailabilityZone: { // AvailabilityZone
 * //           Name: "STRING_VALUE",
 * //         },
 * //         SubnetStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DBSubnetGroupArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyDBSubnetGroupCommandInput - {@link ModifyDBSubnetGroupCommandInput}
 * @returns {@link ModifyDBSubnetGroupCommandOutput}
 * @see {@link ModifyDBSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *  <p>Subnets in the DB subnet group should cover at least two Availability
 *       Zones unless there is only one Availability Zone.</p>
 *
 * @throws {@link DBSubnetGroupNotFoundFault} (client fault)
 *  <p>
 *             <i>DBSubnetGroupName</i> does not refer to an
 *       existing DB subnet group.</p>
 *
 * @throws {@link DBSubnetQuotaExceededFault} (client fault)
 *  <p>Request would result in user exceeding the allowed number of subnets in a DB subnet groups.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is invalid, or multiple subnets were requested that are
 *       not all in a common VPC.</p>
 *
 * @throws {@link SubnetAlreadyInUse} (client fault)
 *  <p>The DB subnet is already in use in the Availability Zone.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 */
export class ModifyDBSubnetGroupCommand extends $Command<
  ModifyDBSubnetGroupCommandInput,
  ModifyDBSubnetGroupCommandOutput,
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
  constructor(readonly input: ModifyDBSubnetGroupCommandInput) {
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
  ): Handler<ModifyDBSubnetGroupCommandInput, ModifyDBSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBSubnetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "ModifyDBSubnetGroupCommand";
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
  private serialize(input: ModifyDBSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyDBSubnetGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBSubnetGroupCommandOutput> {
    return de_ModifyDBSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
