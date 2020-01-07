import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DetachInstancesAnswer, DetachInstancesQuery } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetachInstancesCommandInput = DetachInstancesQuery;
export declare type DetachInstancesCommandOutput = DetachInstancesAnswer & __MetadataBearer;
export declare class DetachInstancesCommand extends $Command<DetachInstancesCommandInput, DetachInstancesCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DetachInstancesCommandInput;
    constructor(input: DetachInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachInstancesCommandInput, DetachInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
