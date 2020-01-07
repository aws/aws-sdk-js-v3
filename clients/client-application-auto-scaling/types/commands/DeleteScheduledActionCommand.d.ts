import { ApplicationAutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationAutoScalingClient";
import { DeleteScheduledActionRequest, DeleteScheduledActionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteScheduledActionCommandInput = DeleteScheduledActionRequest;
export declare type DeleteScheduledActionCommandOutput = DeleteScheduledActionResponse & __MetadataBearer;
export declare class DeleteScheduledActionCommand extends $Command<DeleteScheduledActionCommandInput, DeleteScheduledActionCommandOutput, ApplicationAutoScalingClientResolvedConfig> {
    readonly input: DeleteScheduledActionCommandInput;
    constructor(input: DeleteScheduledActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationAutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteScheduledActionCommandInput, DeleteScheduledActionCommandOutput>;
    private serialize;
    private deserialize;
}
