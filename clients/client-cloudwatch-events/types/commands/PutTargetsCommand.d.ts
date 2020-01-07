import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { PutTargetsRequest, PutTargetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutTargetsCommandInput = PutTargetsRequest;
export declare type PutTargetsCommandOutput = PutTargetsResponse & __MetadataBearer;
export declare class PutTargetsCommand extends $Command<PutTargetsCommandInput, PutTargetsCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: PutTargetsCommandInput;
    constructor(input: PutTargetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutTargetsCommandInput, PutTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
