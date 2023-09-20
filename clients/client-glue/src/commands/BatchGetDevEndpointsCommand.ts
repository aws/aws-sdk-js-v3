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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetDevEndpointsRequest, BatchGetDevEndpointsResponse } from "../models/models_0";
import { de_BatchGetDevEndpointsCommand, se_BatchGetDevEndpointsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetDevEndpointsCommand}.
 */
export interface BatchGetDevEndpointsCommandInput extends BatchGetDevEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetDevEndpointsCommand}.
 */
export interface BatchGetDevEndpointsCommandOutput extends BatchGetDevEndpointsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of resource metadata for a given list of development endpoint names. After
 *       calling the <code>ListDevEndpoints</code> operation, you can call this operation to access the
 *       data to which you have been granted permissions. This operation supports all IAM permissions,
 *       including permission conditions that uses tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetDevEndpointsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetDevEndpointsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // BatchGetDevEndpointsRequest
 *   DevEndpointNames: [ // DevEndpointNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetDevEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetDevEndpointsResponse
 * //   DevEndpoints: [ // DevEndpointList
 * //     { // DevEndpoint
 * //       EndpointName: "STRING_VALUE",
 * //       RoleArn: "STRING_VALUE",
 * //       SecurityGroupIds: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       SubnetId: "STRING_VALUE",
 * //       YarnEndpointAddress: "STRING_VALUE",
 * //       PrivateAddress: "STRING_VALUE",
 * //       ZeppelinRemoteSparkInterpreterPort: Number("int"),
 * //       PublicAddress: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 * //       GlueVersion: "STRING_VALUE",
 * //       NumberOfWorkers: Number("int"),
 * //       NumberOfNodes: Number("int"),
 * //       AvailabilityZone: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       ExtraPythonLibsS3Path: "STRING_VALUE",
 * //       ExtraJarsS3Path: "STRING_VALUE",
 * //       FailureReason: "STRING_VALUE",
 * //       LastUpdateStatus: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       LastModifiedTimestamp: new Date("TIMESTAMP"),
 * //       PublicKey: "STRING_VALUE",
 * //       PublicKeys: [ // PublicKeysList
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityConfiguration: "STRING_VALUE",
 * //       Arguments: { // MapValue
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   DevEndpointsNotFound: [ // DevEndpointNames
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetDevEndpointsCommandInput - {@link BatchGetDevEndpointsCommandInput}
 * @returns {@link BatchGetDevEndpointsCommandOutput}
 * @see {@link BatchGetDevEndpointsCommandInput} for command's `input` shape.
 * @see {@link BatchGetDevEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class BatchGetDevEndpointsCommand extends $Command<
  BatchGetDevEndpointsCommandInput,
  BatchGetDevEndpointsCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: BatchGetDevEndpointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetDevEndpointsCommandInput, BatchGetDevEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetDevEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "BatchGetDevEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "BatchGetDevEndpoints",
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
  private serialize(input: BatchGetDevEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetDevEndpointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetDevEndpointsCommandOutput> {
    return de_BatchGetDevEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
