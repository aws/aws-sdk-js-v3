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

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DescribeSessionsRequest, DescribeSessionsResult } from "../models/models_0";
import { de_DescribeSessionsCommand, se_DescribeSessionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSessionsCommand}.
 */
export interface DescribeSessionsCommandInput extends DescribeSessionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSessionsCommand}.
 */
export interface DescribeSessionsCommandOutput extends DescribeSessionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet,
 *             only streaming sessions for that user are described. If an authentication type is not provided,
 *             the default is to authenticate users using a streaming URL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeSessionsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeSessionsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const input = { // DescribeSessionsRequest
 *   StackName: "STRING_VALUE", // required
 *   FleetName: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 *   AuthenticationType: "API" || "SAML" || "USERPOOL" || "AWS_AD",
 * };
 * const command = new DescribeSessionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSessionsResult
 * //   Sessions: [ // SessionList
 * //     { // Session
 * //       Id: "STRING_VALUE", // required
 * //       UserId: "STRING_VALUE", // required
 * //       StackName: "STRING_VALUE", // required
 * //       FleetName: "STRING_VALUE", // required
 * //       State: "ACTIVE" || "PENDING" || "EXPIRED", // required
 * //       ConnectionState: "CONNECTED" || "NOT_CONNECTED",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       MaxExpirationTime: new Date("TIMESTAMP"),
 * //       AuthenticationType: "API" || "SAML" || "USERPOOL" || "AWS_AD",
 * //       NetworkAccessConfiguration: { // NetworkAccessConfiguration
 * //         EniPrivateIpAddress: "STRING_VALUE",
 * //         EniId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSessionsCommandInput - {@link DescribeSessionsCommandInput}
 * @returns {@link DescribeSessionsCommandOutput}
 * @see {@link DescribeSessionsCommandInput} for command's `input` shape.
 * @see {@link DescribeSessionsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 */
export class DescribeSessionsCommand extends $Command<
  DescribeSessionsCommandInput,
  DescribeSessionsCommandOutput,
  AppStreamClientResolvedConfig
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
  constructor(readonly input: DescribeSessionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSessionsCommandInput, DescribeSessionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSessionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "DescribeSessionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "PhotonAdminProxyService",
        operation: "DescribeSessions",
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
  private serialize(input: DescribeSessionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSessionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSessionsCommandOutput> {
    return de_DescribeSessionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
