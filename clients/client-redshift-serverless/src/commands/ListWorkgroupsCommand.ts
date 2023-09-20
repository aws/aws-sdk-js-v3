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

import { ListWorkgroupsRequest, ListWorkgroupsResponse } from "../models/models_0";
import { de_ListWorkgroupsCommand, se_ListWorkgroupsCommand } from "../protocols/Aws_json1_1";
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
 * The input for {@link ListWorkgroupsCommand}.
 */
export interface ListWorkgroupsCommandInput extends ListWorkgroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkgroupsCommand}.
 */
export interface ListWorkgroupsCommandOutput extends ListWorkgroupsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a list of specified workgroups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListWorkgroupsCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListWorkgroupsCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // ListWorkgroupsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListWorkgroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkgroupsResponse
 * //   nextToken: "STRING_VALUE",
 * //   workgroups: [ // WorkgroupList // required
 * //     { // Workgroup
 * //       workgroupId: "STRING_VALUE",
 * //       workgroupArn: "STRING_VALUE",
 * //       workgroupName: "STRING_VALUE",
 * //       namespaceName: "STRING_VALUE",
 * //       baseCapacity: Number("int"),
 * //       enhancedVpcRouting: true || false,
 * //       configParameters: [ // ConfigParameterList
 * //         { // ConfigParameter
 * //           parameterKey: "STRING_VALUE",
 * //           parameterValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //       securityGroupIds: [ // SecurityGroupIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       subnetIds: [ // SubnetIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "STRING_VALUE",
 * //       endpoint: { // Endpoint
 * //         address: "STRING_VALUE",
 * //         port: Number("int"),
 * //         vpcEndpoints: [ // VpcEndpointList
 * //           { // VpcEndpoint
 * //             vpcEndpointId: "STRING_VALUE",
 * //             vpcId: "STRING_VALUE",
 * //             networkInterfaces: [ // NetworkInterfaceList
 * //               { // NetworkInterface
 * //                 networkInterfaceId: "STRING_VALUE",
 * //                 subnetId: "STRING_VALUE",
 * //                 privateIpAddress: "STRING_VALUE",
 * //                 availabilityZone: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       publiclyAccessible: true || false,
 * //       creationDate: new Date("TIMESTAMP"),
 * //       port: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWorkgroupsCommandInput - {@link ListWorkgroupsCommandInput}
 * @returns {@link ListWorkgroupsCommandOutput}
 * @see {@link ListWorkgroupsCommandInput} for command's `input` shape.
 * @see {@link ListWorkgroupsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 */
export class ListWorkgroupsCommand extends $Command<
  ListWorkgroupsCommandInput,
  ListWorkgroupsCommandOutput,
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
  constructor(readonly input: ListWorkgroupsCommandInput) {
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
  ): Handler<ListWorkgroupsCommandInput, ListWorkgroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListWorkgroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "ListWorkgroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServerless",
        operation: "ListWorkgroups",
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
  private serialize(input: ListWorkgroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListWorkgroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWorkgroupsCommandOutput> {
    return de_ListWorkgroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
