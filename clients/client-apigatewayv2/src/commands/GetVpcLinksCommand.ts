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

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { GetVpcLinksRequest, GetVpcLinksResponse } from "../models/models_0";
import { de_GetVpcLinksCommand, se_GetVpcLinksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetVpcLinksCommand}.
 */
export interface GetVpcLinksCommandInput extends GetVpcLinksRequest {}
/**
 * @public
 *
 * The output of {@link GetVpcLinksCommand}.
 */
export interface GetVpcLinksCommandOutput extends GetVpcLinksResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a collection of VPC links.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, GetVpcLinksCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, GetVpcLinksCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * const client = new ApiGatewayV2Client(config);
 * const input = { // GetVpcLinksRequest
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetVpcLinksCommand(input);
 * const response = await client.send(command);
 * // { // GetVpcLinksResponse
 * //   Items: [ // __listOfVpcLink
 * //     { // VpcLink
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       Name: "STRING_VALUE", // required
 * //       SecurityGroupIds: [ // SecurityGroupIdList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       SubnetIds: [ // SubnetIdList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       VpcLinkId: "STRING_VALUE", // required
 * //       VpcLinkStatus: "PENDING" || "AVAILABLE" || "DELETING" || "FAILED" || "INACTIVE",
 * //       VpcLinkStatusMessage: "STRING_VALUE",
 * //       VpcLinkVersion: "V2",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetVpcLinksCommandInput - {@link GetVpcLinksCommandInput}
 * @returns {@link GetVpcLinksCommandOutput}
 * @see {@link GetVpcLinksCommandInput} for command's `input` shape.
 * @see {@link GetVpcLinksCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>A limit has been exceeded. See the accompanying error message for details.</p>
 *
 * @throws {@link ApiGatewayV2ServiceException}
 * <p>Base exception class for all service exceptions from ApiGatewayV2 service.</p>
 *
 */
export class GetVpcLinksCommand extends $Command<
  GetVpcLinksCommandInput,
  GetVpcLinksCommandOutput,
  ApiGatewayV2ClientResolvedConfig
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
  constructor(readonly input: GetVpcLinksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetVpcLinksCommandInput, GetVpcLinksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetVpcLinksCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayV2Client";
    const commandName = "GetVpcLinksCommand";
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
  private serialize(input: GetVpcLinksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetVpcLinksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetVpcLinksCommandOutput> {
    return de_GetVpcLinksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
