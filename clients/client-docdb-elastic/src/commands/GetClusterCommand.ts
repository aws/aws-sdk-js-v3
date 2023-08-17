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

import { DocDBElasticClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBElasticClient";
import { GetClusterInput, GetClusterOutput } from "../models/models_0";
import { de_GetClusterCommand, se_GetClusterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetClusterCommand}.
 */
export interface GetClusterCommandInput extends GetClusterInput {}
/**
 * @public
 *
 * The output of {@link GetClusterCommand}.
 */
export interface GetClusterCommandOutput extends GetClusterOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a specific Elastic DocumentDB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, GetClusterCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, GetClusterCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
 * const client = new DocDBElasticClient(config);
 * const input = { // GetClusterInput
 *   clusterArn: "STRING_VALUE", // required
 * };
 * const command = new GetClusterCommand(input);
 * const response = await client.send(command);
 * // { // GetClusterOutput
 * //   cluster: { // Cluster
 * //     clusterName: "STRING_VALUE", // required
 * //     clusterArn: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     clusterEndpoint: "STRING_VALUE", // required
 * //     createTime: "STRING_VALUE", // required
 * //     adminUserName: "STRING_VALUE", // required
 * //     authType: "STRING_VALUE", // required
 * //     shardCapacity: Number("int"), // required
 * //     shardCount: Number("int"), // required
 * //     vpcSecurityGroupIds: [ // StringList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     subnetIds: [ // required
 * //       "STRING_VALUE",
 * //     ],
 * //     preferredMaintenanceWindow: "STRING_VALUE", // required
 * //     kmsKeyId: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetClusterCommandInput - {@link GetClusterCommandInput}
 * @returns {@link GetClusterCommandOutput}
 * @see {@link GetClusterCommandInput} for command's `input` shape.
 * @see {@link GetClusterCommandOutput} for command's `response` shape.
 * @see {@link DocDBElasticClientResolvedConfig | config} for DocDBElasticClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception that occurs when there are not sufficient permissions to perform an action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be located.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>ThrottlingException will be thrown when request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A structure defining a validation exception.</p>
 *
 * @throws {@link DocDBElasticServiceException}
 * <p>Base exception class for all service exceptions from DocDBElastic service.</p>
 *
 */
export class GetClusterCommand extends $Command<
  GetClusterCommandInput,
  GetClusterCommandOutput,
  DocDBElasticClientResolvedConfig
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
  constructor(readonly input: GetClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBElasticClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetClusterCommandInput, GetClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetClusterCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBElasticClient";
    const commandName = "GetClusterCommand";
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
  private serialize(input: GetClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetClusterCommandOutput> {
    return de_GetClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
