import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { ActivityType, TerminateInstanceInAutoScalingGroupType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TerminateInstanceInAutoScalingGroupCommandInput = TerminateInstanceInAutoScalingGroupType;
export declare type TerminateInstanceInAutoScalingGroupCommandOutput = ActivityType & __MetadataBearer;
export declare class TerminateInstanceInAutoScalingGroupCommand extends $Command<TerminateInstanceInAutoScalingGroupCommandInput, TerminateInstanceInAutoScalingGroupCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: TerminateInstanceInAutoScalingGroupCommandInput;
    constructor(input: TerminateInstanceInAutoScalingGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TerminateInstanceInAutoScalingGroupCommandInput, TerminateInstanceInAutoScalingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
