import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeScalingPoliciesInput, DescribeScalingPoliciesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeScalingPoliciesCommandInput = DescribeScalingPoliciesInput;
export declare type DescribeScalingPoliciesCommandOutput = DescribeScalingPoliciesOutput & __MetadataBearer;
export declare class DescribeScalingPoliciesCommand extends $Command<DescribeScalingPoliciesCommandInput, DescribeScalingPoliciesCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeScalingPoliciesCommandInput;
    constructor(input: DescribeScalingPoliciesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScalingPoliciesCommandInput, DescribeScalingPoliciesCommandOutput>;
    private serialize;
    private deserialize;
}
