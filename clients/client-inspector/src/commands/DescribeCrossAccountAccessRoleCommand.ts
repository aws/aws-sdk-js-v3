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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeCrossAccountAccessRoleResponse } from "../models/models_0";
import {
  de_DescribeCrossAccountAccessRoleCommand,
  se_DescribeCrossAccountAccessRoleCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeCrossAccountAccessRoleCommand}.
 */
export interface DescribeCrossAccountAccessRoleCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeCrossAccountAccessRoleCommand}.
 */
export interface DescribeCrossAccountAccessRoleCommandOutput
  extends DescribeCrossAccountAccessRoleResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the IAM role that enables Amazon Inspector to access your AWS
 *          account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeCrossAccountAccessRoleCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeCrossAccountAccessRoleCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = {};
 * const command = new DescribeCrossAccountAccessRoleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCrossAccountAccessRoleResponse
 * //   roleArn: "STRING_VALUE", // required
 * //   valid: true || false, // required
 * //   registeredAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeCrossAccountAccessRoleCommandInput - {@link DescribeCrossAccountAccessRoleCommandInput}
 * @returns {@link DescribeCrossAccountAccessRoleCommandOutput}
 * @see {@link DescribeCrossAccountAccessRoleCommandInput} for command's `input` shape.
 * @see {@link DescribeCrossAccountAccessRoleCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @example Describte cross account access role
 * ```javascript
 * // Describes the IAM role that enables Amazon Inspector to access your AWS account.
 * const input = undefined;
 * const command = new DescribeCrossAccountAccessRoleCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "registeredAt": "1458069182.826",
 *   "roleArn": "arn:aws:iam::123456789012:role/inspector",
 *   "valid": true
 * }
 * *\/
 * // example id: describte-cross-account-access-role-1481064682267
 * ```
 *
 */
export class DescribeCrossAccountAccessRoleCommand extends $Command<
  DescribeCrossAccountAccessRoleCommandInput,
  DescribeCrossAccountAccessRoleCommandOutput,
  InspectorClientResolvedConfig
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
  constructor(readonly input: DescribeCrossAccountAccessRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeCrossAccountAccessRoleCommandInput, DescribeCrossAccountAccessRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCrossAccountAccessRoleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "DescribeCrossAccountAccessRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "InspectorService",
        operation: "DescribeCrossAccountAccessRole",
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
  private serialize(
    input: DescribeCrossAccountAccessRoleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeCrossAccountAccessRoleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCrossAccountAccessRoleCommandOutput> {
    return de_DescribeCrossAccountAccessRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
