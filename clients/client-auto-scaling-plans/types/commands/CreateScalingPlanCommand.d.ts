import { AutoScalingPlansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingPlansClient";
import { CreateScalingPlanRequest, CreateScalingPlanResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateScalingPlanCommandInput = CreateScalingPlanRequest;
export declare type CreateScalingPlanCommandOutput = CreateScalingPlanResponse & __MetadataBearer;
export declare class CreateScalingPlanCommand extends $Command<CreateScalingPlanCommandInput, CreateScalingPlanCommandOutput, AutoScalingPlansClientResolvedConfig> {
    readonly input: CreateScalingPlanCommandInput;
    constructor(input: CreateScalingPlanCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingPlansClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateScalingPlanCommandInput, CreateScalingPlanCommandOutput>;
    private serialize;
    private deserialize;
}
