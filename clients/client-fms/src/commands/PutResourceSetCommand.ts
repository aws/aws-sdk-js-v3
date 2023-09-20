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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { PutResourceSetRequest, PutResourceSetResponse } from "../models/models_0";
import { de_PutResourceSetCommand, se_PutResourceSetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutResourceSetCommand}.
 */
export interface PutResourceSetCommandInput extends PutResourceSetRequest {}
/**
 * @public
 *
 * The output of {@link PutResourceSetCommand}.
 */
export interface PutResourceSetCommandOutput extends PutResourceSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates the resource set.</p>
 *          <p>An Firewall Manager resource set defines the resources to import into an Firewall Manager policy from another Amazon Web Services service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, PutResourceSetCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, PutResourceSetCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const input = { // PutResourceSetRequest
 *   ResourceSet: { // ResourceSet
 *     Id: "STRING_VALUE",
 *     Name: "STRING_VALUE", // required
 *     Description: "STRING_VALUE",
 *     UpdateToken: "STRING_VALUE",
 *     ResourceTypeList: [ // ResourceTypeList // required
 *       "STRING_VALUE",
 *     ],
 *     LastUpdateTime: new Date("TIMESTAMP"),
 *     ResourceSetStatus: "ACTIVE" || "OUT_OF_ADMIN_SCOPE",
 *   },
 *   TagList: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutResourceSetCommand(input);
 * const response = await client.send(command);
 * // { // PutResourceSetResponse
 * //   ResourceSet: { // ResourceSet
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     UpdateToken: "STRING_VALUE",
 * //     ResourceTypeList: [ // ResourceTypeList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     LastUpdateTime: new Date("TIMESTAMP"),
 * //     ResourceSetStatus: "ACTIVE" || "OUT_OF_ADMIN_SCOPE",
 * //   },
 * //   ResourceSetArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PutResourceSetCommandInput - {@link PutResourceSetCommandInput}
 * @returns {@link PutResourceSetCommandOutput}
 * @see {@link PutResourceSetCommandInput} for command's `input` shape.
 * @see {@link PutResourceSetCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (client fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry
 *       your request.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The parameters of the request were invalid.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because there was nothing to do or the operation wasn't possible. For example, you might have
 *         submitted an <code>AssociateAdminAccount</code> request for an account ID that
 *             was already set as the Firewall Manager administrator. Or you might have tried to access a Region
 *   that's disabled by default, and that you need to enable for the Firewall Manager
 *   administrator account and for Organizations before you can access it.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation exceeds a resource limit, for example, the maximum number of
 *         <code>policy</code> objects that you can create for an Amazon Web Services account. For more information,
 *       see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html">Firewall
 *         Manager Limits</a> in the <i>WAF Developer Guide</i>.</p>
 *
 * @throws {@link FMSServiceException}
 * <p>Base exception class for all service exceptions from FMS service.</p>
 *
 */
export class PutResourceSetCommand extends $Command<
  PutResourceSetCommandInput,
  PutResourceSetCommandOutput,
  FMSClientResolvedConfig
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
  constructor(readonly input: PutResourceSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutResourceSetCommandInput, PutResourceSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutResourceSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "PutResourceSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSFMS_20180101",
        operation: "PutResourceSet",
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
  private serialize(input: PutResourceSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutResourceSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutResourceSetCommandOutput> {
    return de_PutResourceSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
