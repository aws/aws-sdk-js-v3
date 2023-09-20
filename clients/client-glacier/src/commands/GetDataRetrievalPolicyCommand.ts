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

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { GetDataRetrievalPolicyInput, GetDataRetrievalPolicyOutput } from "../models/models_0";
import { de_GetDataRetrievalPolicyCommand, se_GetDataRetrievalPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDataRetrievalPolicyCommand}.
 */
export interface GetDataRetrievalPolicyCommandInput extends GetDataRetrievalPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetDataRetrievalPolicyCommand}.
 */
export interface GetDataRetrievalPolicyCommandOutput extends GetDataRetrievalPolicyOutput, __MetadataBearer {}

/**
 * @public
 * <p>This operation returns the current data retrieval policy for the account and region
 *          specified in the GET request. For more information about data retrieval policies, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/data-retrieval-policy.html">Amazon Glacier Data Retrieval Policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, GetDataRetrievalPolicyCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, GetDataRetrievalPolicyCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // GetDataRetrievalPolicyInput
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new GetDataRetrievalPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetDataRetrievalPolicyOutput
 * //   Policy: { // DataRetrievalPolicy
 * //     Rules: [ // DataRetrievalRulesList
 * //       { // DataRetrievalRule
 * //         Strategy: "STRING_VALUE",
 * //         BytesPerHour: Number("long"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataRetrievalPolicyCommandInput - {@link GetDataRetrievalPolicyCommandInput}
 * @returns {@link GetDataRetrievalPolicyCommandOutput}
 * @see {@link GetDataRetrievalPolicyCommandInput} for command's `input` shape.
 * @see {@link GetDataRetrievalPolicyCommandOutput} for command's `response` shape.
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
 * @example To get the current data retrieval policy for an account
 * ```javascript
 * // The example returns the current data retrieval policy for the account.
 * const input = {
 *   "accountId": "-"
 * };
 * const command = new GetDataRetrievalPolicyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Policy": {
 *     "Rules": [
 *       {
 *         "BytesPerHour": 10737418240,
 *         "Strategy": "BytesPerHour"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: to-get-the-current-data-retrieval-policy-for-the-account-1481851580439
 * ```
 *
 */
export class GetDataRetrievalPolicyCommand extends $Command<
  GetDataRetrievalPolicyCommandInput,
  GetDataRetrievalPolicyCommandOutput,
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
  constructor(readonly input: GetDataRetrievalPolicyCommandInput) {
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
  ): Handler<GetDataRetrievalPolicyCommandInput, GetDataRetrievalPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDataRetrievalPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "GetDataRetrievalPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Glacier",
        operation: "GetDataRetrievalPolicy",
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
  private serialize(input: GetDataRetrievalPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDataRetrievalPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDataRetrievalPolicyCommandOutput> {
    return de_GetDataRetrievalPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
