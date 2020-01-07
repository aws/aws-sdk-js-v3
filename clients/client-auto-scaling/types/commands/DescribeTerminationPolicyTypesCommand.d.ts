import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeTerminationPolicyTypesAnswer } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTerminationPolicyTypesCommandInput = {};
export declare type DescribeTerminationPolicyTypesCommandOutput = DescribeTerminationPolicyTypesAnswer & __MetadataBearer;
export declare class DescribeTerminationPolicyTypesCommand extends $Command<DescribeTerminationPolicyTypesCommandInput, DescribeTerminationPolicyTypesCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DescribeTerminationPolicyTypesCommandInput;
    constructor(input: DescribeTerminationPolicyTypesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTerminationPolicyTypesCommandInput, DescribeTerminationPolicyTypesCommandOutput>;
    private serialize;
    private deserialize;
}
