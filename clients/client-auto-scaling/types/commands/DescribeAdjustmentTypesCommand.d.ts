import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeAdjustmentTypesAnswer } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAdjustmentTypesCommandInput = {};
export declare type DescribeAdjustmentTypesCommandOutput = DescribeAdjustmentTypesAnswer & __MetadataBearer;
export declare class DescribeAdjustmentTypesCommand extends $Command<DescribeAdjustmentTypesCommandInput, DescribeAdjustmentTypesCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DescribeAdjustmentTypesCommandInput;
    constructor(input: DescribeAdjustmentTypesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAdjustmentTypesCommandInput, DescribeAdjustmentTypesCommandOutput>;
    private serialize;
    private deserialize;
}
