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

import { ListWorkforcesRequest, ListWorkforcesResponse } from "../models/models_3";
import { de_ListWorkforcesCommand, se_ListWorkforcesCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListWorkforcesCommand}.
 */
export interface ListWorkforcesCommandInput extends ListWorkforcesRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkforcesCommand}.
 */
export interface ListWorkforcesCommandOutput extends ListWorkforcesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Use this operation to list all private and vendor workforces in an Amazon Web Services Region. Note that you can only
 *            have one private workforce per Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListWorkforcesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListWorkforcesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListWorkforcesRequest
 *   SortBy: "Name" || "CreateDate",
 *   SortOrder: "Ascending" || "Descending",
 *   NameContains: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListWorkforcesCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkforcesResponse
 * //   Workforces: [ // Workforces // required
 * //     { // Workforce
 * //       WorkforceName: "STRING_VALUE", // required
 * //       WorkforceArn: "STRING_VALUE", // required
 * //       LastUpdatedDate: new Date("TIMESTAMP"),
 * //       SourceIpConfig: { // SourceIpConfig
 * //         Cidrs: [ // Cidrs // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       SubDomain: "STRING_VALUE",
 * //       CognitoConfig: { // CognitoConfig
 * //         UserPool: "STRING_VALUE", // required
 * //         ClientId: "STRING_VALUE", // required
 * //       },
 * //       OidcConfig: { // OidcConfigForResponse
 * //         ClientId: "STRING_VALUE",
 * //         Issuer: "STRING_VALUE",
 * //         AuthorizationEndpoint: "STRING_VALUE",
 * //         TokenEndpoint: "STRING_VALUE",
 * //         UserInfoEndpoint: "STRING_VALUE",
 * //         LogoutEndpoint: "STRING_VALUE",
 * //         JwksUri: "STRING_VALUE",
 * //       },
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       WorkforceVpcConfig: { // WorkforceVpcConfigResponse
 * //         VpcId: "STRING_VALUE", // required
 * //         SecurityGroupIds: [ // WorkforceSecurityGroupIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Subnets: [ // WorkforceSubnets // required
 * //           "STRING_VALUE",
 * //         ],
 * //         VpcEndpointId: "STRING_VALUE",
 * //       },
 * //       Status: "Initializing" || "Updating" || "Deleting" || "Failed" || "Active",
 * //       FailureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkforcesCommandInput - {@link ListWorkforcesCommandInput}
 * @returns {@link ListWorkforcesCommandOutput}
 * @see {@link ListWorkforcesCommandInput} for command's `input` shape.
 * @see {@link ListWorkforcesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListWorkforcesCommand extends $Command<
  ListWorkforcesCommandInput,
  ListWorkforcesCommandOutput,
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
  constructor(readonly input: ListWorkforcesCommandInput) {
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
  ): Handler<ListWorkforcesCommandInput, ListWorkforcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListWorkforcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListWorkforcesCommand";
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
  private serialize(input: ListWorkforcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListWorkforcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWorkforcesCommandOutput> {
    return de_ListWorkforcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
