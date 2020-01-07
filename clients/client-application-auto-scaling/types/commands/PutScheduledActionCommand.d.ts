import { ApplicationAutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationAutoScalingClient";
import { PutScheduledActionRequest, PutScheduledActionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutScheduledActionCommandInput = PutScheduledActionRequest;
export declare type PutScheduledActionCommandOutput = PutScheduledActionResponse & __MetadataBearer;
export declare class PutScheduledActionCommand extends $Command<PutScheduledActionCommandInput, PutScheduledActionCommandOutput, ApplicationAutoScalingClientResolvedConfig> {
    readonly input: PutScheduledActionCommandInput;
    constructor(input: PutScheduledActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationAutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutScheduledActionCommandInput, PutScheduledActionCommandOutput>;
    private serialize;
    private deserialize;
}
