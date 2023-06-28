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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DescribeStudioInput, DescribeStudioOutput } from "../models/models_0";
import { de_DescribeStudioCommand, se_DescribeStudioCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStudioCommand}.
 */
export interface DescribeStudioCommandInput extends DescribeStudioInput {}
/**
 * @public
 *
 * The output of {@link DescribeStudioCommand}.
 */
export interface DescribeStudioCommandOutput extends DescribeStudioOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns details for the specified Amazon EMR Studio including ID, Name, VPC,
 *          Studio access URL, and so on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribeStudioCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribeStudioCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // DescribeStudioInput
 *   StudioId: "STRING_VALUE", // required
 * };
 * const command = new DescribeStudioCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStudioOutput
 * //   Studio: { // Studio
 * //     StudioId: "STRING_VALUE",
 * //     StudioArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     AuthMode: "SSO" || "IAM",
 * //     VpcId: "STRING_VALUE",
 * //     SubnetIds: [ // SubnetIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     ServiceRole: "STRING_VALUE",
 * //     UserRole: "STRING_VALUE",
 * //     WorkspaceSecurityGroupId: "STRING_VALUE",
 * //     EngineSecurityGroupId: "STRING_VALUE",
 * //     Url: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     DefaultS3Location: "STRING_VALUE",
 * //     IdpAuthUrl: "STRING_VALUE",
 * //     IdpRelayStateParameterName: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStudioCommandInput - {@link DescribeStudioCommandInput}
 * @returns {@link DescribeStudioCommandOutput}
 * @see {@link DescribeStudioCommandInput} for command's `input` shape.
 * @see {@link DescribeStudioCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class DescribeStudioCommand extends $Command<
  DescribeStudioCommandInput,
  DescribeStudioCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: DescribeStudioCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeStudioCommandInput, DescribeStudioCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStudioCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "DescribeStudioCommand";
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
  private serialize(input: DescribeStudioCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStudioCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStudioCommandOutput> {
    return de_DescribeStudioCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
