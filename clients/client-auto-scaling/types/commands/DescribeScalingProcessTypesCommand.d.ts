import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { ProcessesType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeScalingProcessTypesCommandInput = {};
export declare type DescribeScalingProcessTypesCommandOutput = ProcessesType & __MetadataBearer;
export declare class DescribeScalingProcessTypesCommand extends $Command<DescribeScalingProcessTypesCommandInput, DescribeScalingProcessTypesCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DescribeScalingProcessTypesCommandInput;
    constructor(input: DescribeScalingProcessTypesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScalingProcessTypesCommandInput, DescribeScalingProcessTypesCommandOutput>;
    private serialize;
    private deserialize;
}
