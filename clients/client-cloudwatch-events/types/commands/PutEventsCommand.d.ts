import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { PutEventsRequest, PutEventsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutEventsCommandInput = PutEventsRequest;
export declare type PutEventsCommandOutput = PutEventsResponse & __MetadataBearer;
export declare class PutEventsCommand extends $Command<PutEventsCommandInput, PutEventsCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: PutEventsCommandInput;
    constructor(input: PutEventsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutEventsCommandInput, PutEventsCommandOutput>;
    private serialize;
    private deserialize;
}
