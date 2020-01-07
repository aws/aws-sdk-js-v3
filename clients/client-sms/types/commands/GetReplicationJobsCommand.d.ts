import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GetReplicationJobsRequest, GetReplicationJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetReplicationJobsCommandInput = GetReplicationJobsRequest;
export declare type GetReplicationJobsCommandOutput = GetReplicationJobsResponse & __MetadataBearer;
export declare class GetReplicationJobsCommand extends $Command<GetReplicationJobsCommandInput, GetReplicationJobsCommandOutput, SMSClientResolvedConfig> {
    readonly input: GetReplicationJobsCommandInput;
    constructor(input: GetReplicationJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetReplicationJobsCommandInput, GetReplicationJobsCommandOutput>;
    private serialize;
    private deserialize;
}
