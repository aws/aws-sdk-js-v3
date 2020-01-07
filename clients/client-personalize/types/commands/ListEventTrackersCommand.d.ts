import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { ListEventTrackersRequest, ListEventTrackersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListEventTrackersCommandInput = ListEventTrackersRequest;
export declare type ListEventTrackersCommandOutput = ListEventTrackersResponse & __MetadataBearer;
export declare class ListEventTrackersCommand extends $Command<ListEventTrackersCommandInput, ListEventTrackersCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: ListEventTrackersCommandInput;
    constructor(input: ListEventTrackersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEventTrackersCommandInput, ListEventTrackersCommandOutput>;
    private serialize;
    private deserialize;
}
