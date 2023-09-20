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

import { ModifyClusterSubnetGroupMessage, ModifyClusterSubnetGroupResult } from "../models/models_1";
import { de_ModifyClusterSubnetGroupCommand, se_ModifyClusterSubnetGroupCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyClusterSubnetGroupCommand}.
 */
export interface ModifyClusterSubnetGroupCommandInput extends ModifyClusterSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyClusterSubnetGroupCommand}.
 */
export interface ModifyClusterSubnetGroupCommandOutput extends ModifyClusterSubnetGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Modifies a cluster subnet group to include the specified list of VPC subnets. The
 *             operation replaces the existing list of subnets with the new list of subnets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterSubnetGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterSubnetGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // ModifyClusterSubnetGroupMessage
 *   ClusterSubnetGroupName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   SubnetIds: [ // SubnetIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyClusterSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // ModifyClusterSubnetGroupResult
 * //   ClusterSubnetGroup: { // ClusterSubnetGroup
 * //     ClusterSubnetGroupName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     SubnetGroupStatus: "STRING_VALUE",
 * //     Subnets: [ // SubnetList
 * //       { // Subnet
 * //         SubnetIdentifier: "STRING_VALUE",
 * //         SubnetAvailabilityZone: { // AvailabilityZone
 * //           Name: "STRING_VALUE",
 * //           SupportedPlatforms: [ // SupportedPlatformsList
 * //             { // SupportedPlatform
 * //               Name: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         SubnetStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyClusterSubnetGroupCommandInput - {@link ModifyClusterSubnetGroupCommandInput}
 * @returns {@link ModifyClusterSubnetGroupCommandOutput}
 * @see {@link ModifyClusterSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterSubnetGroupNotFoundFault} (client fault)
 *  <p>The cluster subnet group name does not refer to an existing cluster subnet
 *             group.</p>
 *
 * @throws {@link ClusterSubnetQuotaExceededFault} (client fault)
 *  <p>The request would result in user exceeding the allowed number of subnets in a
 *             cluster subnet groups.
 * For information about increasing your quota, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/amazon-redshift-limits.html">Limits in Amazon Redshift</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.
 * </p>
 *
 * @throws {@link DependentServiceRequestThrottlingFault} (client fault)
 *  <p>The request cannot be completed because a dependent service is throttling requests
 *             made by Amazon Redshift on your behalf. Wait and retry the request.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is not valid, or not all of the subnets are in the same
 *             VPC.</p>
 *
 * @throws {@link SubnetAlreadyInUse} (client fault)
 *  <p>A specified subnet is already in use by another cluster.</p>
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *  <p>Your account is not authorized to perform the requested operation.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class ModifyClusterSubnetGroupCommand extends $Command<
  ModifyClusterSubnetGroupCommandInput,
  ModifyClusterSubnetGroupCommandOutput,
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
  constructor(readonly input: ModifyClusterSubnetGroupCommandInput) {
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
  ): Handler<ModifyClusterSubnetGroupCommandInput, ModifyClusterSubnetGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyClusterSubnetGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifyClusterSubnetGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "ModifyClusterSubnetGroup",
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
  private serialize(input: ModifyClusterSubnetGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyClusterSubnetGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyClusterSubnetGroupCommandOutput> {
    return de_ModifyClusterSubnetGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
