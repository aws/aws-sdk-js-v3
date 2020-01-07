import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { UpdateAutoScalingGroupType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateAutoScalingGroupCommandInput = UpdateAutoScalingGroupType;
export declare type UpdateAutoScalingGroupCommandOutput = __MetadataBearer;
export declare class UpdateAutoScalingGroupCommand extends $Command<UpdateAutoScalingGroupCommandInput, UpdateAutoScalingGroupCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: UpdateAutoScalingGroupCommandInput;
    constructor(input: UpdateAutoScalingGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAutoScalingGroupCommandInput, UpdateAutoScalingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
