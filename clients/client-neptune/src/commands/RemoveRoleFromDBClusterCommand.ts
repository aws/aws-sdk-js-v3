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

import { RemoveRoleFromDBClusterMessage } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_RemoveRoleFromDBClusterCommand, se_RemoveRoleFromDBClusterCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RemoveRoleFromDBClusterCommand}.
 */
export interface RemoveRoleFromDBClusterCommandInput extends RemoveRoleFromDBClusterMessage {}
/**
 * @public
 *
 * The output of {@link RemoveRoleFromDBClusterCommand}.
 */
export interface RemoveRoleFromDBClusterCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Disassociates an Identity and Access Management (IAM) role from a DB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, RemoveRoleFromDBClusterCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, RemoveRoleFromDBClusterCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // RemoveRoleFromDBClusterMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   FeatureName: "STRING_VALUE",
 * };
 * const command = new RemoveRoleFromDBClusterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveRoleFromDBClusterCommandInput - {@link RemoveRoleFromDBClusterCommandInput}
 * @returns {@link RemoveRoleFromDBClusterCommandOutput}
 * @see {@link RemoveRoleFromDBClusterCommandInput} for command's `input` shape.
 * @see {@link RemoveRoleFromDBClusterCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
 *
 * @throws {@link DBClusterRoleNotFoundFault} (client fault)
 *  <p>The specified IAM role Amazon Resource Name (ARN) is not associated with the specified DB cluster.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The DB cluster is not in a valid state.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 */
export class RemoveRoleFromDBClusterCommand extends $Command<
  RemoveRoleFromDBClusterCommandInput,
  RemoveRoleFromDBClusterCommandOutput,
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
  constructor(readonly input: RemoveRoleFromDBClusterCommandInput) {
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
  ): Handler<RemoveRoleFromDBClusterCommandInput, RemoveRoleFromDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveRoleFromDBClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "RemoveRoleFromDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "RemoveRoleFromDBCluster",
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
  private serialize(input: RemoveRoleFromDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RemoveRoleFromDBClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveRoleFromDBClusterCommandOutput> {
    return de_RemoveRoleFromDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
