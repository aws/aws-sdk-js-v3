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

import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeHealthServiceStatusForOrganizationResponse } from "../models/models_0";
import {
  de_DescribeHealthServiceStatusForOrganizationCommand,
  se_DescribeHealthServiceStatusForOrganizationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeHealthServiceStatusForOrganizationCommand}.
 */
export interface DescribeHealthServiceStatusForOrganizationCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeHealthServiceStatusForOrganizationCommand}.
 */
export interface DescribeHealthServiceStatusForOrganizationCommandOutput
  extends DescribeHealthServiceStatusForOrganizationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>This operation provides status information on enabling or disabling Health to work
 *          with your organization. To call this operation, you must use the organization's
 *          management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeHealthServiceStatusForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeHealthServiceStatusForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const input = {};
 * const command = new DescribeHealthServiceStatusForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHealthServiceStatusForOrganizationResponse
 * //   healthServiceAccessStatusForOrganization: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeHealthServiceStatusForOrganizationCommandInput - {@link DescribeHealthServiceStatusForOrganizationCommandInput}
 * @returns {@link DescribeHealthServiceStatusForOrganizationCommandOutput}
 * @see {@link DescribeHealthServiceStatusForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeHealthServiceStatusForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 */
export class DescribeHealthServiceStatusForOrganizationCommand extends $Command<
  DescribeHealthServiceStatusForOrganizationCommandInput,
  DescribeHealthServiceStatusForOrganizationCommandOutput,
  HealthClientResolvedConfig
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
  constructor(readonly input: DescribeHealthServiceStatusForOrganizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: HealthClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeHealthServiceStatusForOrganizationCommandInput,
    DescribeHealthServiceStatusForOrganizationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeHealthServiceStatusForOrganizationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeHealthServiceStatusForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHealth_20160804",
        operation: "DescribeHealthServiceStatusForOrganization",
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
    input: DescribeHealthServiceStatusForOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeHealthServiceStatusForOrganizationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeHealthServiceStatusForOrganizationCommandOutput> {
    return de_DescribeHealthServiceStatusForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
