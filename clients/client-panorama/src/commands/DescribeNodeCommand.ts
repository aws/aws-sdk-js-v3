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

import { DescribeNodeRequest, DescribeNodeResponse } from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { de_DescribeNodeCommand, se_DescribeNodeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeNodeCommand}.
 */
export interface DescribeNodeCommandInput extends DescribeNodeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNodeCommand}.
 */
export interface DescribeNodeCommandOutput extends DescribeNodeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, DescribeNodeCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, DescribeNodeCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const input = { // DescribeNodeRequest
 *   NodeId: "STRING_VALUE", // required
 *   OwnerAccount: "STRING_VALUE",
 * };
 * const command = new DescribeNodeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNodeResponse
 * //   NodeId: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
 * //   Category: "STRING_VALUE", // required
 * //   OwnerAccount: "STRING_VALUE", // required
 * //   PackageName: "STRING_VALUE", // required
 * //   PackageId: "STRING_VALUE", // required
 * //   PackageArn: "STRING_VALUE",
 * //   PackageVersion: "STRING_VALUE", // required
 * //   PatchVersion: "STRING_VALUE", // required
 * //   NodeInterface: { // NodeInterface
 * //     Inputs: [ // InputPortList // required
 * //       { // NodeInputPort
 * //         Name: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Type: "STRING_VALUE",
 * //         DefaultValue: "STRING_VALUE",
 * //         MaxConnections: Number("int"),
 * //       },
 * //     ],
 * //     Outputs: [ // OutputPortList // required
 * //       { // NodeOutputPort
 * //         Name: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Type: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   AssetName: "STRING_VALUE",
 * //   Description: "STRING_VALUE", // required
 * //   CreatedTime: new Date("TIMESTAMP"), // required
 * //   LastUpdatedTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeNodeCommandInput - {@link DescribeNodeCommandInput}
 * @returns {@link DescribeNodeCommandOutput}
 * @see {@link DescribeNodeCommandInput} for command's `input` shape.
 * @see {@link DescribeNodeCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 */
export class DescribeNodeCommand extends $Command<
  DescribeNodeCommandInput,
  DescribeNodeCommandOutput,
  PanoramaClientResolvedConfig
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
  constructor(readonly input: DescribeNodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PanoramaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeNodeCommandInput, DescribeNodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeNodeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "DescribeNodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OmniCloudServiceLambda",
        operation: "DescribeNode",
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
  private serialize(input: DescribeNodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeNodeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeNodeCommandOutput> {
    return de_DescribeNodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
