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

import { ListEndpointAccessRequest, ListEndpointAccessResponse } from "../models/models_0";
import { de_ListEndpointAccessCommand, se_ListEndpointAccessCommand } from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEndpointAccessCommand}.
 */
export interface ListEndpointAccessCommandInput extends ListEndpointAccessRequest {}
/**
 * @public
 *
 * The output of {@link ListEndpointAccessCommand}.
 */
export interface ListEndpointAccessCommandOutput extends ListEndpointAccessResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns an array of <code>EndpointAccess</code> objects and relevant information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListEndpointAccessCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListEndpointAccessCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // ListEndpointAccessRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   workgroupName: "STRING_VALUE",
 *   vpcId: "STRING_VALUE",
 * };
 * const command = new ListEndpointAccessCommand(input);
 * const response = await client.send(command);
 * // { // ListEndpointAccessResponse
 * //   nextToken: "STRING_VALUE",
 * //   endpoints: [ // EndpointAccessList // required
 * //     { // EndpointAccess
 * //       endpointName: "STRING_VALUE",
 * //       endpointStatus: "STRING_VALUE",
 * //       workgroupName: "STRING_VALUE",
 * //       endpointCreateTime: new Date("TIMESTAMP"),
 * //       port: Number("int"),
 * //       address: "STRING_VALUE",
 * //       subnetIds: [ // SubnetIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       vpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //         { // VpcSecurityGroupMembership
 * //           vpcSecurityGroupId: "STRING_VALUE",
 * //           status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       vpcEndpoint: { // VpcEndpoint
 * //         vpcEndpointId: "STRING_VALUE",
 * //         vpcId: "STRING_VALUE",
 * //         networkInterfaces: [ // NetworkInterfaceList
 * //           { // NetworkInterface
 * //             networkInterfaceId: "STRING_VALUE",
 * //             subnetId: "STRING_VALUE",
 * //             privateIpAddress: "STRING_VALUE",
 * //             availabilityZone: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       endpointArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEndpointAccessCommandInput - {@link ListEndpointAccessCommandInput}
 * @returns {@link ListEndpointAccessCommandOutput}
 * @see {@link ListEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link ListEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 */
export class ListEndpointAccessCommand extends $Command<
  ListEndpointAccessCommandInput,
  ListEndpointAccessCommandOutput,
  RedshiftServerlessClientResolvedConfig
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
  constructor(readonly input: ListEndpointAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEndpointAccessCommandInput, ListEndpointAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEndpointAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "ListEndpointAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServerless",
        operation: "ListEndpointAccess",
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
  private serialize(input: ListEndpointAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEndpointAccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEndpointAccessCommandOutput> {
    return de_ListEndpointAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
