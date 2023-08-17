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

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DeleteFargateProfileRequest, DeleteFargateProfileResponse } from "../models/models_0";
import { de_DeleteFargateProfileCommand, se_DeleteFargateProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteFargateProfileCommand}.
 */
export interface DeleteFargateProfileCommandInput extends DeleteFargateProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFargateProfileCommand}.
 */
export interface DeleteFargateProfileCommandOutput extends DeleteFargateProfileResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes an Fargate profile.</p>
 *          <p>When you delete a Fargate profile, any pods running on Fargate that were created with the profile are deleted. If those pods match
 *             another Fargate profile, then they are scheduled on Fargate with that profile. If they no longer match any Fargate profiles, then
 *             they are not scheduled on Fargate and they may remain in a pending
 *             state.</p>
 *          <p>Only one Fargate profile in a cluster can be in the
 *                 <code>DELETING</code> status at a time. You must wait for a Fargate
 *             profile to finish deleting before you can delete any other profiles in that
 *             cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DeleteFargateProfileCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DeleteFargateProfileCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // DeleteFargateProfileRequest
 *   clusterName: "STRING_VALUE", // required
 *   fargateProfileName: "STRING_VALUE", // required
 * };
 * const command = new DeleteFargateProfileCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFargateProfileResponse
 * //   fargateProfile: { // FargateProfile
 * //     fargateProfileName: "STRING_VALUE",
 * //     fargateProfileArn: "STRING_VALUE",
 * //     clusterName: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     podExecutionRoleArn: "STRING_VALUE",
 * //     subnets: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     selectors: [ // FargateProfileSelectors
 * //       { // FargateProfileSelector
 * //         namespace: "STRING_VALUE",
 * //         labels: { // FargateProfileLabel
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     status: "CREATING" || "ACTIVE" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteFargateProfileCommandInput - {@link DeleteFargateProfileCommandInput}
 * @returns {@link DeleteFargateProfileCommandOutput}
 * @see {@link DeleteFargateProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteFargateProfileCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of a user that doesn't have permissions to use the action
 *             or resource or specifying an identifier that is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <a>ListClusters</a>. You can view your available managed node groups with
 *                 <a>ListNodegroups</a>. Amazon EKS clusters and node groups are
 *             Region-specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 */
export class DeleteFargateProfileCommand extends $Command<
  DeleteFargateProfileCommandInput,
  DeleteFargateProfileCommandOutput,
  EKSClientResolvedConfig
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
  constructor(readonly input: DeleteFargateProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFargateProfileCommandInput, DeleteFargateProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteFargateProfileCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DeleteFargateProfileCommand";
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
  private serialize(input: DeleteFargateProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteFargateProfileCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFargateProfileCommandOutput> {
    return de_DeleteFargateProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
