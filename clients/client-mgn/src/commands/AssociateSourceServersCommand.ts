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

import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { AssociateSourceServersRequest, AssociateSourceServersResponse } from "../models/models_0";
import { de_AssociateSourceServersCommand, se_AssociateSourceServersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateSourceServersCommand}.
 */
export interface AssociateSourceServersCommandInput extends AssociateSourceServersRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSourceServersCommand}.
 */
export interface AssociateSourceServersCommandOutput extends AssociateSourceServersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Associate source servers to application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, AssociateSourceServersCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, AssociateSourceServersCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // AssociateSourceServersRequest
 *   applicationID: "STRING_VALUE", // required
 *   sourceServerIDs: [ // AssociateSourceServersRequestSourceServerIDs // required
 *     "STRING_VALUE",
 *   ],
 *   accountID: "STRING_VALUE",
 * };
 * const command = new AssociateSourceServersCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateSourceServersCommandInput - {@link AssociateSourceServersCommandInput}
 * @returns {@link AssociateSourceServersCommandOutput}
 * @see {@link AssociateSourceServersCommandInput} for command's `input` shape.
 * @see {@link AssociateSourceServersCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 */
export class AssociateSourceServersCommand extends $Command<
  AssociateSourceServersCommandInput,
  AssociateSourceServersCommandOutput,
  MgnClientResolvedConfig
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
  constructor(readonly input: AssociateSourceServersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MgnClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateSourceServersCommandInput, AssociateSourceServersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateSourceServersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MgnClient";
    const commandName = "AssociateSourceServersCommand";
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
  private serialize(input: AssociateSourceServersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateSourceServersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateSourceServersCommandOutput> {
    return de_AssociateSourceServersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
