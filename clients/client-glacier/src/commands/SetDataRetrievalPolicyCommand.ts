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

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { SetDataRetrievalPolicyInput } from "../models/models_0";
import { de_SetDataRetrievalPolicyCommand, se_SetDataRetrievalPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetDataRetrievalPolicyCommand}.
 */
export interface SetDataRetrievalPolicyCommandInput extends SetDataRetrievalPolicyInput {}
/**
 * @public
 *
 * The output of {@link SetDataRetrievalPolicyCommand}.
 */
export interface SetDataRetrievalPolicyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>This operation sets and then enacts a data retrieval policy in the region specified
 *          in the PUT request. You can set one policy per region for an AWS account. The policy is
 *          enacted within a few minutes of a successful PUT operation.</p>
 *          <p>The set policy operation does not affect retrieval jobs that were in progress before
 *          the policy was enacted. For more information about data retrieval policies, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon
 *             Glacier Data Retrieval Policies</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, SetDataRetrievalPolicyCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, SetDataRetrievalPolicyCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // SetDataRetrievalPolicyInput
 *   accountId: "STRING_VALUE", // required
 *   Policy: { // DataRetrievalPolicy
 *     Rules: [ // DataRetrievalRulesList
 *       { // DataRetrievalRule
 *         Strategy: "STRING_VALUE",
 *         BytesPerHour: Number("long"),
 *       },
 *     ],
 *   },
 * };
 * const command = new SetDataRetrievalPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetDataRetrievalPolicyCommandInput - {@link SetDataRetrievalPolicyCommandInput}
 * @returns {@link SetDataRetrievalPolicyCommandOutput}
 * @see {@link SetDataRetrievalPolicyCommandInput} for command's `input` shape.
 * @see {@link SetDataRetrievalPolicyCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returned if the service cannot complete the request.</p>
 *
 * @throws {@link GlacierServiceException}
 * <p>Base exception class for all service exceptions from Glacier service.</p>
 *
 * @example To set and then enact a data retrieval policy
 * ```javascript
 * // The example sets and then enacts a data retrieval policy.
 * const input = {
 *   "Policy": {
 *     "Rules": [
 *       {
 *         "BytesPerHour": 10737418240,
 *         "Strategy": "BytesPerHour"
 *       }
 *     ]
 *   },
 *   "accountId": "-"
 * };
 * const command = new SetDataRetrievalPolicyCommand(input);
 * await client.send(command);
 * // example id: to-set-and-then-enact-a-data-retrieval-policy--1481928352408
 * ```
 *
 */
export class SetDataRetrievalPolicyCommand extends $Command<
  SetDataRetrievalPolicyCommandInput,
  SetDataRetrievalPolicyCommandOutput,
  GlacierClientResolvedConfig
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
  constructor(readonly input: SetDataRetrievalPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetDataRetrievalPolicyCommandInput, SetDataRetrievalPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetDataRetrievalPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "SetDataRetrievalPolicyCommand";
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
  private serialize(input: SetDataRetrievalPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetDataRetrievalPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetDataRetrievalPolicyCommandOutput> {
    return de_SetDataRetrievalPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
