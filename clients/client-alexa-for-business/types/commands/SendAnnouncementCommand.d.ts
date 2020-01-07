import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { SendAnnouncementRequest, SendAnnouncementResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendAnnouncementCommandInput = SendAnnouncementRequest;
export declare type SendAnnouncementCommandOutput = SendAnnouncementResponse & __MetadataBearer;
export declare class SendAnnouncementCommand extends $Command<SendAnnouncementCommandInput, SendAnnouncementCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: SendAnnouncementCommandInput;
    constructor(input: SendAnnouncementCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendAnnouncementCommandInput, SendAnnouncementCommandOutput>;
    private serialize;
    private deserialize;
}
