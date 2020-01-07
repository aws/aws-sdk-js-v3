import { AutoScalingPlansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingPlansClient";
import { DeleteScalingPlanRequest, DeleteScalingPlanResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteScalingPlanCommandInput = DeleteScalingPlanRequest;
export declare type DeleteScalingPlanCommandOutput = DeleteScalingPlanResponse & __MetadataBearer;
export declare class DeleteScalingPlanCommand extends $Command<DeleteScalingPlanCommandInput, DeleteScalingPlanCommandOutput, AutoScalingPlansClientResolvedConfig> {
    readonly input: DeleteScalingPlanCommandInput;
    constructor(input: DeleteScalingPlanCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingPlansClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteScalingPlanCommandInput, DeleteScalingPlanCommandOutput>;
    private serialize;
    private deserialize;
}
