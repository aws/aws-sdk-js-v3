import { AutoScalingPlansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingPlansClient";
import { UpdateScalingPlanRequest, UpdateScalingPlanResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateScalingPlanCommandInput = UpdateScalingPlanRequest;
export declare type UpdateScalingPlanCommandOutput = UpdateScalingPlanResponse & __MetadataBearer;
export declare class UpdateScalingPlanCommand extends $Command<UpdateScalingPlanCommandInput, UpdateScalingPlanCommandOutput, AutoScalingPlansClientResolvedConfig> {
    readonly input: UpdateScalingPlanCommandInput;
    constructor(input: UpdateScalingPlanCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingPlansClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateScalingPlanCommandInput, UpdateScalingPlanCommandOutput>;
    private serialize;
    private deserialize;
}
