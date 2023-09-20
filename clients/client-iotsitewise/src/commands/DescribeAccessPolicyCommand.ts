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

import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DescribeAccessPolicyRequest, DescribeAccessPolicyResponse } from "../models/models_0";
import { de_DescribeAccessPolicyCommand, se_DescribeAccessPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccessPolicyCommand}.
 */
export interface DescribeAccessPolicyCommandInput extends DescribeAccessPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccessPolicyCommand}.
 */
export interface DescribeAccessPolicyCommandOutput extends DescribeAccessPolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or
 *       project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeAccessPolicyCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeAccessPolicyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeAccessPolicyRequest
 *   accessPolicyId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAccessPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccessPolicyResponse
 * //   accessPolicyId: "STRING_VALUE", // required
 * //   accessPolicyArn: "STRING_VALUE", // required
 * //   accessPolicyIdentity: { // Identity
 * //     user: { // UserIdentity
 * //       id: "STRING_VALUE", // required
 * //     },
 * //     group: { // GroupIdentity
 * //       id: "STRING_VALUE", // required
 * //     },
 * //     iamUser: { // IAMUserIdentity
 * //       arn: "STRING_VALUE", // required
 * //     },
 * //     iamRole: { // IAMRoleIdentity
 * //       arn: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   accessPolicyResource: { // Resource
 * //     portal: { // PortalResource
 * //       id: "STRING_VALUE", // required
 * //     },
 * //     project: { // ProjectResource
 * //       id: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   accessPolicyPermission: "ADMINISTRATOR" || "VIEWER", // required
 * //   accessPolicyCreationDate: new Date("TIMESTAMP"), // required
 * //   accessPolicyLastUpdateDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeAccessPolicyCommandInput - {@link DescribeAccessPolicyCommandInput}
 * @returns {@link DescribeAccessPolicyCommandOutput}
 * @see {@link DescribeAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>IoT SiteWise can't process your request right now. Try again later.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 *
 * @throws {@link IoTSiteWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTSiteWise service.</p>
 *
 */
export class DescribeAccessPolicyCommand extends $Command<
  DescribeAccessPolicyCommandInput,
  DescribeAccessPolicyCommandOutput,
  IoTSiteWiseClientResolvedConfig
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
  constructor(readonly input: DescribeAccessPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAccessPolicyCommandInput, DescribeAccessPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAccessPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "DescribeAccessPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIoTSiteWise",
        operation: "DescribeAccessPolicy",
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
  private serialize(input: DescribeAccessPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAccessPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAccessPolicyCommandOutput> {
    return de_DescribeAccessPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
