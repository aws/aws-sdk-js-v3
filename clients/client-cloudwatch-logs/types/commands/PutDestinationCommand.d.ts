import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { PutDestinationRequest, PutDestinationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutDestinationCommandInput = PutDestinationRequest;
export declare type PutDestinationCommandOutput = PutDestinationResponse & __MetadataBearer;
export declare class PutDestinationCommand extends $Command<PutDestinationCommandInput, PutDestinationCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: PutDestinationCommandInput;
    constructor(input: PutDestinationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutDestinationCommandInput, PutDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
