import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GetReplicationRunsRequest, GetReplicationRunsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetReplicationRunsCommandInput = GetReplicationRunsRequest;
export declare type GetReplicationRunsCommandOutput = GetReplicationRunsResponse & __MetadataBearer;
export declare class GetReplicationRunsCommand extends $Command<GetReplicationRunsCommandInput, GetReplicationRunsCommandOutput, SMSClientResolvedConfig> {
    readonly input: GetReplicationRunsCommandInput;
    constructor(input: GetReplicationRunsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetReplicationRunsCommandInput, GetReplicationRunsCommandOutput>;
    private serialize;
    private deserialize;
}
