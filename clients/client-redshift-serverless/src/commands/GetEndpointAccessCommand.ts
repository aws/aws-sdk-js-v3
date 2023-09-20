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

import { GetEndpointAccessRequest, GetEndpointAccessResponse } from "../models/models_0";
import { de_GetEndpointAccessCommand, se_GetEndpointAccessCommand } from "../protocols/Aws_json1_1";
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
 * The input for {@link GetEndpointAccessCommand}.
 */
export interface GetEndpointAccessCommandInput extends GetEndpointAccessRequest {}
/**
 * @public
 *
 * The output of {@link GetEndpointAccessCommand}.
 */
export interface GetEndpointAccessCommandOutput extends GetEndpointAccessResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information, such as the name, about a VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, GetEndpointAccessCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, GetEndpointAccessCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // GetEndpointAccessRequest
 *   endpointName: "STRING_VALUE", // required
 * };
 * const command = new GetEndpointAccessCommand(input);
 * const response = await client.send(command);
 * // { // GetEndpointAccessResponse
 * //   endpoint: { // EndpointAccess
 * //     endpointName: "STRING_VALUE",
 * //     endpointStatus: "STRING_VALUE",
 * //     workgroupName: "STRING_VALUE",
 * //     endpointCreateTime: new Date("TIMESTAMP"),
 * //     port: Number("int"),
 * //     address: "STRING_VALUE",
 * //     subnetIds: [ // SubnetIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     vpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //       { // VpcSecurityGroupMembership
 * //         vpcSecurityGroupId: "STRING_VALUE",
 * //         status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     vpcEndpoint: { // VpcEndpoint
 * //       vpcEndpointId: "STRING_VALUE",
 * //       vpcId: "STRING_VALUE",
 * //       networkInterfaces: [ // NetworkInterfaceList
 * //         { // NetworkInterface
 * //           networkInterfaceId: "STRING_VALUE",
 * //           subnetId: "STRING_VALUE",
 * //           privateIpAddress: "STRING_VALUE",
 * //           availabilityZone: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     endpointArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEndpointAccessCommandInput - {@link GetEndpointAccessCommandInput}
 * @returns {@link GetEndpointAccessCommandOutput}
 * @see {@link GetEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link GetEndpointAccessCommandOutput} for command's `response` shape.
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
export class GetEndpointAccessCommand extends $Command<
  GetEndpointAccessCommandInput,
  GetEndpointAccessCommandOutput,
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
  constructor(readonly input: GetEndpointAccessCommandInput) {
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
  ): Handler<GetEndpointAccessCommandInput, GetEndpointAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEndpointAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "GetEndpointAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServerless",
        operation: "GetEndpointAccess",
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
  private serialize(input: GetEndpointAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEndpointAccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEndpointAccessCommandOutput> {
    return de_GetEndpointAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
