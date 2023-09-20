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
import {
  DescribeEntityAggregatesForOrganizationRequest,
  DescribeEntityAggregatesForOrganizationResponse,
} from "../models/models_0";
import {
  de_DescribeEntityAggregatesForOrganizationCommand,
  se_DescribeEntityAggregatesForOrganizationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEntityAggregatesForOrganizationCommand}.
 */
export interface DescribeEntityAggregatesForOrganizationCommandInput
  extends DescribeEntityAggregatesForOrganizationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEntityAggregatesForOrganizationCommand}.
 */
export interface DescribeEntityAggregatesForOrganizationCommandOutput
  extends DescribeEntityAggregatesForOrganizationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of entity aggregates for your Organizations that are affected by each of the specified events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEntityAggregatesForOrganizationCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEntityAggregatesForOrganizationCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * const client = new HealthClient(config);
 * const input = { // DescribeEntityAggregatesForOrganizationRequest
 *   eventArns: [ // OrganizationEventArnsList // required
 *     "STRING_VALUE",
 *   ],
 *   awsAccountIds: [ // OrganizationAccountIdsList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeEntityAggregatesForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEntityAggregatesForOrganizationResponse
 * //   organizationEntityAggregates: [ // OrganizationEntityAggregatesList
 * //     { // OrganizationEntityAggregate
 * //       eventArn: "STRING_VALUE",
 * //       count: Number("int"),
 * //       statuses: { // entityStatuses
 * //         "<keys>": Number("int"),
 * //       },
 * //       accounts: [ // AccountEntityAggregatesList
 * //         { // AccountEntityAggregate
 * //           accountId: "STRING_VALUE",
 * //           count: Number("int"),
 * //           statuses: {
 * //             "<keys>": Number("int"),
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEntityAggregatesForOrganizationCommandInput - {@link DescribeEntityAggregatesForOrganizationCommandInput}
 * @returns {@link DescribeEntityAggregatesForOrganizationCommandOutput}
 * @see {@link DescribeEntityAggregatesForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DescribeEntityAggregatesForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 */
export class DescribeEntityAggregatesForOrganizationCommand extends $Command<
  DescribeEntityAggregatesForOrganizationCommandInput,
  DescribeEntityAggregatesForOrganizationCommandOutput,
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
  constructor(readonly input: DescribeEntityAggregatesForOrganizationCommandInput) {
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
    DescribeEntityAggregatesForOrganizationCommandInput,
    DescribeEntityAggregatesForOrganizationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeEntityAggregatesForOrganizationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "HealthClient";
    const commandName = "DescribeEntityAggregatesForOrganizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHealth_20160804",
        operation: "DescribeEntityAggregatesForOrganization",
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
    input: DescribeEntityAggregatesForOrganizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeEntityAggregatesForOrganizationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEntityAggregatesForOrganizationCommandOutput> {
    return de_DescribeEntityAggregatesForOrganizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
