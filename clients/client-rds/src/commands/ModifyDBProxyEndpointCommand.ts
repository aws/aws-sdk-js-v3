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

import { ModifyDBProxyEndpointRequest, ModifyDBProxyEndpointResponse } from "../models/models_1";
import { de_ModifyDBProxyEndpointCommand, se_ModifyDBProxyEndpointCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBProxyEndpointCommand}.
 */
export interface ModifyDBProxyEndpointCommandInput extends ModifyDBProxyEndpointRequest {}
/**
 * @public
 *
 * The output of {@link ModifyDBProxyEndpointCommand}.
 */
export interface ModifyDBProxyEndpointCommandOutput extends ModifyDBProxyEndpointResponse, __MetadataBearer {}

/**
 * @public
 * <p>Changes the settings for an existing DB proxy endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBProxyEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBProxyEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyDBProxyEndpointRequest
 *   DBProxyEndpointName: "STRING_VALUE", // required
 *   NewDBProxyEndpointName: "STRING_VALUE",
 *   VpcSecurityGroupIds: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyDBProxyEndpointCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDBProxyEndpointResponse
 * //   DBProxyEndpoint: { // DBProxyEndpoint
 * //     DBProxyEndpointName: "STRING_VALUE",
 * //     DBProxyEndpointArn: "STRING_VALUE",
 * //     DBProxyName: "STRING_VALUE",
 * //     Status: "available" || "modifying" || "incompatible-network" || "insufficient-resource-limits" || "creating" || "deleting",
 * //     VpcId: "STRING_VALUE",
 * //     VpcSecurityGroupIds: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     VpcSubnetIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     Endpoint: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //     TargetRole: "READ_WRITE" || "READ_ONLY",
 * //     IsDefault: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyDBProxyEndpointCommandInput - {@link ModifyDBProxyEndpointCommandInput}
 * @returns {@link ModifyDBProxyEndpointCommandOutput}
 * @see {@link ModifyDBProxyEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyDBProxyEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBProxyEndpointAlreadyExistsFault} (client fault)
 *  <p>The specified DB proxy endpoint name must be unique for all DB proxy endpoints owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBProxyEndpointNotFoundFault} (client fault)
 *  <p>The DB proxy endpoint doesn't exist.</p>
 *
 * @throws {@link InvalidDBProxyEndpointStateFault} (client fault)
 *  <p>You can't perform this operation while the DB proxy endpoint is in a particular state.</p>
 *
 * @throws {@link InvalidDBProxyStateFault} (client fault)
 *  <p>The requested operation can't be performed while the proxy is in this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 */
export class ModifyDBProxyEndpointCommand extends $Command<
  ModifyDBProxyEndpointCommandInput,
  ModifyDBProxyEndpointCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: ModifyDBProxyEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBProxyEndpointCommandInput, ModifyDBProxyEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBProxyEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBProxyEndpointCommand";
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
  private serialize(input: ModifyDBProxyEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyDBProxyEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyDBProxyEndpointCommandOutput> {
    return de_ModifyDBProxyEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
