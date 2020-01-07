import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { ScalingProcessQuery } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResumeProcessesCommandInput = ScalingProcessQuery;
export declare type ResumeProcessesCommandOutput = __MetadataBearer;
export declare class ResumeProcessesCommand extends $Command<ResumeProcessesCommandInput, ResumeProcessesCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: ResumeProcessesCommandInput;
    constructor(input: ResumeProcessesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResumeProcessesCommandInput, ResumeProcessesCommandOutput>;
    private serialize;
    private deserialize;
}
