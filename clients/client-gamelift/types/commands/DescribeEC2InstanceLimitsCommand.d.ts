import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeEC2InstanceLimitsInput, DescribeEC2InstanceLimitsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEC2InstanceLimitsCommandInput = DescribeEC2InstanceLimitsInput;
export declare type DescribeEC2InstanceLimitsCommandOutput = DescribeEC2InstanceLimitsOutput & __MetadataBearer;
export declare class DescribeEC2InstanceLimitsCommand extends $Command<DescribeEC2InstanceLimitsCommandInput, DescribeEC2InstanceLimitsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeEC2InstanceLimitsCommandInput;
    constructor(input: DescribeEC2InstanceLimitsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEC2InstanceLimitsCommandInput, DescribeEC2InstanceLimitsCommandOutput>;
    private serialize;
    private deserialize;
}
