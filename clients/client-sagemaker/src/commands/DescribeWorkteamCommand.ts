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

import { DescribeWorkteamRequest, DescribeWorkteamResponse } from "../models/models_2";
import { de_DescribeWorkteamCommand, se_DescribeWorkteamCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkteamCommand}.
 */
export interface DescribeWorkteamCommandInput extends DescribeWorkteamRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkteamCommand}.
 */
export interface DescribeWorkteamCommandOutput extends DescribeWorkteamResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a specific work team. You can see information such as the
 *             create date, the last updated date, membership information, and the work team's Amazon
 *             Resource Name (ARN).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeWorkteamCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeWorkteamCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeWorkteamRequest
 *   WorkteamName: "STRING_VALUE", // required
 * };
 * const command = new DescribeWorkteamCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkteamResponse
 * //   Workteam: { // Workteam
 * //     WorkteamName: "STRING_VALUE", // required
 * //     MemberDefinitions: [ // MemberDefinitions // required
 * //       { // MemberDefinition
 * //         CognitoMemberDefinition: { // CognitoMemberDefinition
 * //           UserPool: "STRING_VALUE", // required
 * //           UserGroup: "STRING_VALUE", // required
 * //           ClientId: "STRING_VALUE", // required
 * //         },
 * //         OidcMemberDefinition: { // OidcMemberDefinition
 * //           Groups: [ // Groups // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     WorkteamArn: "STRING_VALUE", // required
 * //     WorkforceArn: "STRING_VALUE",
 * //     ProductListingIds: [ // ProductListings
 * //       "STRING_VALUE",
 * //     ],
 * //     Description: "STRING_VALUE", // required
 * //     SubDomain: "STRING_VALUE",
 * //     CreateDate: new Date("TIMESTAMP"),
 * //     LastUpdatedDate: new Date("TIMESTAMP"),
 * //     NotificationConfiguration: { // NotificationConfiguration
 * //       NotificationTopicArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeWorkteamCommandInput - {@link DescribeWorkteamCommandInput}
 * @returns {@link DescribeWorkteamCommandOutput}
 * @see {@link DescribeWorkteamCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkteamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeWorkteamCommand extends $Command<
  DescribeWorkteamCommandInput,
  DescribeWorkteamCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: DescribeWorkteamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeWorkteamCommandInput, DescribeWorkteamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeWorkteamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeWorkteamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeWorkteam",
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
  private serialize(input: DescribeWorkteamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeWorkteamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeWorkteamCommandOutput> {
    return de_DescribeWorkteamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
