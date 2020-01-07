import { ApplicationAutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationAutoScalingClient";
import { DescribeScalingActivitiesRequest, DescribeScalingActivitiesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeScalingActivitiesCommandInput = DescribeScalingActivitiesRequest;
export declare type DescribeScalingActivitiesCommandOutput = DescribeScalingActivitiesResponse & __MetadataBearer;
export declare class DescribeScalingActivitiesCommand extends $Command<DescribeScalingActivitiesCommandInput, DescribeScalingActivitiesCommandOutput, ApplicationAutoScalingClientResolvedConfig> {
    readonly input: DescribeScalingActivitiesCommandInput;
    constructor(input: DescribeScalingActivitiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationAutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScalingActivitiesCommandInput, DescribeScalingActivitiesCommandOutput>;
    private serialize;
    private deserialize;
}
