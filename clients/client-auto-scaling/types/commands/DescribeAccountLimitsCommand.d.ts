import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeAccountLimitsAnswer } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAccountLimitsCommandInput = {};
export declare type DescribeAccountLimitsCommandOutput = DescribeAccountLimitsAnswer & __MetadataBearer;
export declare class DescribeAccountLimitsCommand extends $Command<DescribeAccountLimitsCommandInput, DescribeAccountLimitsCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DescribeAccountLimitsCommandInput;
    constructor(input: DescribeAccountLimitsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAccountLimitsCommandInput, DescribeAccountLimitsCommandOutput>;
    private serialize;
    private deserialize;
}
