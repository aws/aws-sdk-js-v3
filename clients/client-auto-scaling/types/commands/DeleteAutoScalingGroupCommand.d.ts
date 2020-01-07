import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DeleteAutoScalingGroupType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAutoScalingGroupCommandInput = DeleteAutoScalingGroupType;
export declare type DeleteAutoScalingGroupCommandOutput = __MetadataBearer;
export declare class DeleteAutoScalingGroupCommand extends $Command<DeleteAutoScalingGroupCommandInput, DeleteAutoScalingGroupCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DeleteAutoScalingGroupCommandInput;
    constructor(input: DeleteAutoScalingGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAutoScalingGroupCommandInput, DeleteAutoScalingGroupCommandOutput>;
    private serialize;
    private deserialize;
}
