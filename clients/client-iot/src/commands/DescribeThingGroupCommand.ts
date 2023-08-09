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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeThingGroupRequest, DescribeThingGroupResponse } from "../models/models_1";
import { de_DescribeThingGroupCommand, se_DescribeThingGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeThingGroupCommand}.
 */
export interface DescribeThingGroupCommandInput extends DescribeThingGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeThingGroupCommand}.
 */
export interface DescribeThingGroupCommandOutput extends DescribeThingGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describe a thing group.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingGroup</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeThingGroupRequest
 *   thingGroupName: "STRING_VALUE", // required
 * };
 * const command = new DescribeThingGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeThingGroupResponse
 * //   thingGroupName: "STRING_VALUE",
 * //   thingGroupId: "STRING_VALUE",
 * //   thingGroupArn: "STRING_VALUE",
 * //   version: Number("long"),
 * //   thingGroupProperties: { // ThingGroupProperties
 * //     thingGroupDescription: "STRING_VALUE",
 * //     attributePayload: { // AttributePayload
 * //       attributes: { // Attributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       merge: true || false,
 * //     },
 * //   },
 * //   thingGroupMetadata: { // ThingGroupMetadata
 * //     parentGroupName: "STRING_VALUE",
 * //     rootToParentThingGroups: [ // ThingGroupNameAndArnList
 * //       { // GroupNameAndArn
 * //         groupName: "STRING_VALUE",
 * //         groupArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     creationDate: new Date("TIMESTAMP"),
 * //   },
 * //   indexName: "STRING_VALUE",
 * //   queryString: "STRING_VALUE",
 * //   queryVersion: "STRING_VALUE",
 * //   status: "ACTIVE" || "BUILDING" || "REBUILDING",
 * // };
 *
 * ```
 *
 * @param DescribeThingGroupCommandInput - {@link DescribeThingGroupCommandInput}
 * @returns {@link DescribeThingGroupCommandOutput}
 * @see {@link DescribeThingGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class DescribeThingGroupCommand extends $Command<
  DescribeThingGroupCommandInput,
  DescribeThingGroupCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: DescribeThingGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeThingGroupCommandInput, DescribeThingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeThingGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeThingGroupCommand";
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
  private serialize(input: DescribeThingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeThingGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeThingGroupCommandOutput> {
    return de_DescribeThingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
