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

import { UpdateWorkteamRequest, UpdateWorkteamResponse } from "../models/models_4";
import { de_UpdateWorkteamCommand, se_UpdateWorkteamCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkteamCommand}.
 */
export interface UpdateWorkteamCommandInput extends UpdateWorkteamRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkteamCommand}.
 */
export interface UpdateWorkteamCommandOutput extends UpdateWorkteamResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing work team with new member definitions or description.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateWorkteamCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateWorkteamCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateWorkteamRequest
 *   WorkteamName: "STRING_VALUE", // required
 *   MemberDefinitions: [ // MemberDefinitions
 *     { // MemberDefinition
 *       CognitoMemberDefinition: { // CognitoMemberDefinition
 *         UserPool: "STRING_VALUE", // required
 *         UserGroup: "STRING_VALUE", // required
 *         ClientId: "STRING_VALUE", // required
 *       },
 *       OidcMemberDefinition: { // OidcMemberDefinition
 *         Groups: [ // Groups // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 *   Description: "STRING_VALUE",
 *   NotificationConfiguration: { // NotificationConfiguration
 *     NotificationTopicArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateWorkteamCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkteamResponse
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
 * @param UpdateWorkteamCommandInput - {@link UpdateWorkteamCommandInput}
 * @returns {@link UpdateWorkteamCommandOutput}
 * @see {@link UpdateWorkteamCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkteamCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class UpdateWorkteamCommand extends $Command<
  UpdateWorkteamCommandInput,
  UpdateWorkteamCommandOutput,
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
  constructor(readonly input: UpdateWorkteamCommandInput) {
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
  ): Handler<UpdateWorkteamCommandInput, UpdateWorkteamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateWorkteamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateWorkteamCommand";
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
  private serialize(input: UpdateWorkteamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateWorkteamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWorkteamCommandOutput> {
    return de_UpdateWorkteamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
