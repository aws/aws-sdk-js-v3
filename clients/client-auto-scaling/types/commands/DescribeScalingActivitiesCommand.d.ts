import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { ActivitiesType, DescribeScalingActivitiesType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeScalingActivitiesCommandInput = DescribeScalingActivitiesType;
export declare type DescribeScalingActivitiesCommandOutput = ActivitiesType & __MetadataBearer;
export declare class DescribeScalingActivitiesCommand extends $Command<DescribeScalingActivitiesCommandInput, DescribeScalingActivitiesCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DescribeScalingActivitiesCommandInput;
    constructor(input: DescribeScalingActivitiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScalingActivitiesCommandInput, DescribeScalingActivitiesCommandOutput>;
    private serialize;
    private deserialize;
}
