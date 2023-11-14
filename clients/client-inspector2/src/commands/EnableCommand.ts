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

import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { EnableRequest, EnableResponse } from "../models/models_0";
import { de_EnableCommand, se_EnableCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EnableCommand}.
 */
export interface EnableCommandInput extends EnableRequest {}
/**
 * @public
 *
 * The output of {@link EnableCommand}.
 */
export interface EnableCommandOutput extends EnableResponse, __MetadataBearer {}

/**
 * @public
 * <p>Enables Amazon Inspector scans for one or more Amazon Web Services accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, EnableCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, EnableCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // EnableRequest
 *   accountIds: [ // AccountIdSet
 *     "STRING_VALUE",
 *   ],
 *   resourceTypes: [ // EnableResourceTypeList // required
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new EnableCommand(input);
 * const response = await client.send(command);
 * // { // EnableResponse
 * //   accounts: [ // AccountList // required
 * //     { // Account
 * //       accountId: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       resourceStatus: { // ResourceStatus
 * //         ec2: "STRING_VALUE", // required
 * //         ecr: "STRING_VALUE", // required
 * //         lambda: "STRING_VALUE",
 * //         lambdaCode: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   failedAccounts: [ // FailedAccountList
 * //     { // FailedAccount
 * //       accountId: "STRING_VALUE", // required
 * //       status: "STRING_VALUE",
 * //       resourceStatus: {
 * //         ec2: "STRING_VALUE", // required
 * //         ecr: "STRING_VALUE", // required
 * //         lambda: "STRING_VALUE",
 * //         lambdaCode: "STRING_VALUE",
 * //       },
 * //       errorCode: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param EnableCommandInput - {@link EnableCommandInput}
 * @returns {@link EnableCommandOutput}
 * @see {@link EnableCommandInput} for command's `input` shape.
 * @see {@link EnableCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 */
export class EnableCommand extends $Command<EnableCommandInput, EnableCommandOutput, Inspector2ClientResolvedConfig> {
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
  constructor(readonly input: EnableCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Inspector2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableCommandInput, EnableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, EnableCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "EnableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Inspector2",
        operation: "Enable",
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
  private serialize(input: EnableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EnableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableCommandOutput> {
    return de_EnableCommand(output, context);
  }
}
