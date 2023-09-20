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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { DescribeUserHierarchyGroupRequest, DescribeUserHierarchyGroupResponse } from "../models/models_0";
import { de_DescribeUserHierarchyGroupCommand, se_DescribeUserHierarchyGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeUserHierarchyGroupCommand}.
 */
export interface DescribeUserHierarchyGroupCommandInput extends DescribeUserHierarchyGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUserHierarchyGroupCommand}.
 */
export interface DescribeUserHierarchyGroupCommandOutput extends DescribeUserHierarchyGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified hierarchy group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeUserHierarchyGroupCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeUserHierarchyGroupCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // DescribeUserHierarchyGroupRequest
 *   HierarchyGroupId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeUserHierarchyGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUserHierarchyGroupResponse
 * //   HierarchyGroup: { // HierarchyGroup
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     LevelId: "STRING_VALUE",
 * //     HierarchyPath: { // HierarchyPath
 * //       LevelOne: { // HierarchyGroupSummary
 * //         Id: "STRING_VALUE",
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //       },
 * //       LevelTwo: {
 * //         Id: "STRING_VALUE",
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //       },
 * //       LevelThree: {
 * //         Id: "STRING_VALUE",
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //       },
 * //       LevelFour: {
 * //         Id: "STRING_VALUE",
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //       },
 * //       LevelFive: {
 * //         Id: "STRING_VALUE",
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //       },
 * //     },
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeUserHierarchyGroupCommandInput - {@link DescribeUserHierarchyGroupCommandInput}
 * @returns {@link DescribeUserHierarchyGroupCommandOutput}
 * @see {@link DescribeUserHierarchyGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeUserHierarchyGroupCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class DescribeUserHierarchyGroupCommand extends $Command<
  DescribeUserHierarchyGroupCommandInput,
  DescribeUserHierarchyGroupCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: DescribeUserHierarchyGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeUserHierarchyGroupCommandInput, DescribeUserHierarchyGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeUserHierarchyGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "DescribeUserHierarchyGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonConnectService",
        operation: "DescribeUserHierarchyGroup",
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
  private serialize(input: DescribeUserHierarchyGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeUserHierarchyGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeUserHierarchyGroupCommandOutput> {
    return de_DescribeUserHierarchyGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
