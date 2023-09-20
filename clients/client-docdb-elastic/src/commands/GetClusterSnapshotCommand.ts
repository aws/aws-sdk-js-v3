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

import { DocDBElasticClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBElasticClient";
import { GetClusterSnapshotInput, GetClusterSnapshotOutput } from "../models/models_0";
import { de_GetClusterSnapshotCommand, se_GetClusterSnapshotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetClusterSnapshotCommand}.
 */
export interface GetClusterSnapshotCommandInput extends GetClusterSnapshotInput {}
/**
 * @public
 *
 * The output of {@link GetClusterSnapshotCommand}.
 */
export interface GetClusterSnapshotCommandOutput extends GetClusterSnapshotOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a specific Elastic DocumentDB snapshot</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, GetClusterSnapshotCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, GetClusterSnapshotCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
 * const client = new DocDBElasticClient(config);
 * const input = { // GetClusterSnapshotInput
 *   snapshotArn: "STRING_VALUE", // required
 * };
 * const command = new GetClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // GetClusterSnapshotOutput
 * //   snapshot: { // ClusterSnapshot
 * //     subnetIds: [ // StringList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     snapshotName: "STRING_VALUE", // required
 * //     snapshotArn: "STRING_VALUE", // required
 * //     snapshotCreationTime: "STRING_VALUE", // required
 * //     clusterArn: "STRING_VALUE", // required
 * //     clusterCreationTime: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     vpcSecurityGroupIds: [ // required
 * //       "STRING_VALUE",
 * //     ],
 * //     adminUserName: "STRING_VALUE", // required
 * //     kmsKeyId: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetClusterSnapshotCommandInput - {@link GetClusterSnapshotCommandInput}
 * @returns {@link GetClusterSnapshotCommandOutput}
 * @see {@link GetClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link GetClusterSnapshotCommandOutput} for command's `response` shape.
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
export class GetClusterSnapshotCommand extends $Command<
  GetClusterSnapshotCommandInput,
  GetClusterSnapshotCommandOutput,
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
  constructor(readonly input: GetClusterSnapshotCommandInput) {
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
  ): Handler<GetClusterSnapshotCommandInput, GetClusterSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetClusterSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBElasticClient";
    const commandName = "GetClusterSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeraDbLionfishServiceLambda",
        operation: "GetClusterSnapshot",
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
  private serialize(input: GetClusterSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetClusterSnapshotCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetClusterSnapshotCommandOutput> {
    return de_GetClusterSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
