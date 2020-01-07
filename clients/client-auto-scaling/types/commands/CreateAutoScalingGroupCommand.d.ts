import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { CreateAutoScalingGroupType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAutoScalingGroupCommandInput = CreateAutoScalingGroupType;
export declare type CreateAutoScalingGroupCommandOutput = __MetadataBearer;
export declare class CreateAutoScalingGroupCommand extends $Command<CreateAutoScalingGroupCommandInput, CreateAutoScalingGroupCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: CreateAutoScalingGroupCommandInput;
    constructor(input: CreateAutoScalingGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAutoScalingGroupCommandInput, CreateAutoScalingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
