import { ApplicationAutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationAutoScalingClient";
import { DeleteScalingPolicyRequest, DeleteScalingPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteScalingPolicyCommandInput = DeleteScalingPolicyRequest;
export declare type DeleteScalingPolicyCommandOutput = DeleteScalingPolicyResponse & __MetadataBearer;
export declare class DeleteScalingPolicyCommand extends $Command<DeleteScalingPolicyCommandInput, DeleteScalingPolicyCommandOutput, ApplicationAutoScalingClientResolvedConfig> {
    readonly input: DeleteScalingPolicyCommandInput;
    constructor(input: DeleteScalingPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationAutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteScalingPolicyCommandInput, DeleteScalingPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
