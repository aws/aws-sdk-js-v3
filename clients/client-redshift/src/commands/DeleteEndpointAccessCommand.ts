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

import { DeleteEndpointAccessMessage, EndpointAccess } from "../models/models_0";
import { de_DeleteEndpointAccessCommand, se_DeleteEndpointAccessCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteEndpointAccessCommand}.
 */
export interface DeleteEndpointAccessCommandInput extends DeleteEndpointAccessMessage {}
/**
 * @public
 *
 * The output of {@link DeleteEndpointAccessCommand}.
 */
export interface DeleteEndpointAccessCommandOutput extends EndpointAccess, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a Redshift-managed VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DeleteEndpointAccessMessage
 *   EndpointName: "STRING_VALUE", // required
 * };
 * const command = new DeleteEndpointAccessCommand(input);
 * const response = await client.send(command);
 * // { // EndpointAccess
 * //   ClusterIdentifier: "STRING_VALUE",
 * //   ResourceOwner: "STRING_VALUE",
 * //   SubnetGroupName: "STRING_VALUE",
 * //   EndpointStatus: "STRING_VALUE",
 * //   EndpointName: "STRING_VALUE",
 * //   EndpointCreateTime: new Date("TIMESTAMP"),
 * //   Port: Number("int"),
 * //   Address: "STRING_VALUE",
 * //   VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //     { // VpcSecurityGroupMembership
 * //       VpcSecurityGroupId: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //     },
 * //   ],
 * //   VpcEndpoint: { // VpcEndpoint
 * //     VpcEndpointId: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     NetworkInterfaces: [ // NetworkInterfaceList
 * //       { // NetworkInterface
 * //         NetworkInterfaceId: "STRING_VALUE",
 * //         SubnetId: "STRING_VALUE",
 * //         PrivateIpAddress: "STRING_VALUE",
 * //         AvailabilityZone: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteEndpointAccessCommandInput - {@link DeleteEndpointAccessCommandInput}
 * @returns {@link DeleteEndpointAccessCommandOutput}
 * @see {@link DeleteEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link DeleteEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link EndpointNotFoundFault} (client fault)
 *  <p>The endpoint name doesn't refer to an existing endpoint.</p>
 *
 * @throws {@link InvalidClusterSecurityGroupStateFault} (client fault)
 *  <p>The state of the cluster security group is not <code>available</code>. </p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link InvalidEndpointStateFault} (client fault)
 *  <p>The status of the endpoint is not valid.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DeleteEndpointAccessCommand extends $Command<
  DeleteEndpointAccessCommandInput,
  DeleteEndpointAccessCommandOutput,
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
  constructor(readonly input: DeleteEndpointAccessCommandInput) {
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
  ): Handler<DeleteEndpointAccessCommandInput, DeleteEndpointAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteEndpointAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DeleteEndpointAccessCommand";
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
  private serialize(input: DeleteEndpointAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteEndpointAccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEndpointAccessCommandOutput> {
    return de_DeleteEndpointAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
