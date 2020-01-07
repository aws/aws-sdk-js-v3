import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { LookupEventsRequest, LookupEventsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type LookupEventsCommandInput = LookupEventsRequest;
export declare type LookupEventsCommandOutput = LookupEventsResponse & __MetadataBearer;
export declare class LookupEventsCommand extends $Command<LookupEventsCommandInput, LookupEventsCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: LookupEventsCommandInput;
    constructor(input: LookupEventsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<LookupEventsCommandInput, LookupEventsCommandOutput>;
    private serialize;
    private deserialize;
}
