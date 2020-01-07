import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { SubmitAttachmentStateChangesRequest, SubmitAttachmentStateChangesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SubmitAttachmentStateChangesCommandInput = SubmitAttachmentStateChangesRequest;
export declare type SubmitAttachmentStateChangesCommandOutput = SubmitAttachmentStateChangesResponse & __MetadataBearer;
export declare class SubmitAttachmentStateChangesCommand extends $Command<SubmitAttachmentStateChangesCommandInput, SubmitAttachmentStateChangesCommandOutput, ECSClientResolvedConfig> {
    readonly input: SubmitAttachmentStateChangesCommandInput;
    constructor(input: SubmitAttachmentStateChangesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SubmitAttachmentStateChangesCommandInput, SubmitAttachmentStateChangesCommandOutput>;
    private serialize;
    private deserialize;
}
